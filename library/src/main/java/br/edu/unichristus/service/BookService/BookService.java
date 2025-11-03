package br.edu.unichristus.service.BookService;

import br.edu.unichristus.domain.dto.book.BookDTO;
import br.edu.unichristus.domain.model.Book;
import br.edu.unichristus.exception.CommonsException;
import br.edu.unichristus.repository.BookRepository;
import br.edu.unichristus.repository.CategoryRepository;
import br.edu.unichristus.utils.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class BookService {

    @Value("${upload.dir}")
    private String uploadDir;

    @Autowired
    private BookRepository repository;
    @Autowired
    private CategoryRepository categoryRepository;

    public BookDTO save(BookDTO bookDTO, MultipartFile file) {
        if (repository.findByIsbn(bookDTO.getIsbn()).isPresent()) {
            throw new CommonsException(HttpStatus.CONFLICT,
                    "unichristus.book.isbn.conflict",
                    "Livro já existente para o ISBN informado.");
        }

        if (bookDTO.getCategoryId() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.categoryid.save.badrequest",
                    "Categoria do livro é um campo obrigatório!");
        }

        if (bookDTO.getTitle() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.title.save.badrequest",
                    "Título do livro é um campo obrigatório!");
        }

        if (bookDTO.getDescription() == null || bookDTO.getDescription().isBlank()) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.description.save.badrequest",
                    "Descrição do livro é um campo obrigatório!");
        }

        var bookEntity = MapperUtil.parseObject(bookDTO, Book.class);

        var category = categoryRepository.findById(bookDTO.getCategoryId())
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                        "unichristus.category.notfound",
                        "Categoria não encontrada!"));

        bookEntity.setCategory(category);

        if (bookDTO.getPalavrasChaves() != null) {
            bookEntity.setPalavrasChaves(bookDTO.getPalavrasChaves());
        }

        var savedBook = repository.save(bookEntity);

        if (file != null && !file.isEmpty()) {
            try {
                String fileName = savedBook.getId() + "_" + file.getOriginalFilename();
                Path path = Paths.get(uploadDir, fileName);
                Files.createDirectories(path.getParent());
                Files.write(path, file.getBytes());
                savedBook.setCoverUrl(fileName);
                savedBook = repository.save(savedBook);
            } catch (Exception e) {
                throw new CommonsException(HttpStatus.INTERNAL_SERVER_ERROR, "unichristus.book.cover.upload.error", "Erro ao fazer upload da capa do livro.");
            }
        }

        BookDTO dto = MapperUtil.parseObject(savedBook, BookDTO.class);
        dto.setCategoryId(savedBook.getCategory().getId());

        return dto;
    }

    public BookDTO update(Long id, BookDTO bookDTO) {
        var existingBook = repository.findById(id)
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                        "unichristus.book.update.notfound",
                        "Livro para atualização não encontrado."));

        var existingBookWithSameIsbn = repository.findByIsbn(bookDTO.getIsbn());
        if (existingBookWithSameIsbn.isPresent()
                && !existingBookWithSameIsbn.get().getId().equals(id)) {
            throw new CommonsException(HttpStatus.CONFLICT,
                    "unichristus.book.isbn.conflict",
                    "Já existe outro livro com o mesmo ISBN.");
        }

        if (bookDTO.getCategoryId() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.categoryid.badrequest",
                    "Categoria do livro é um campo obrigatório.");
        }

        if (bookDTO.getTitle() == null) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.title.badrequest",
                    "Título do livro é um campo obrigatório.");
        }

        if (bookDTO.getDescription() == null || bookDTO.getDescription().isBlank()) {
            throw new CommonsException(HttpStatus.BAD_REQUEST,
                    "unichristus.book.description.update.badrequest",
                    "Descrição do livro é um campo obrigatório!");
        }

        existingBook.setTitle(bookDTO.getTitle());
        existingBook.setAuthor(bookDTO.getAuthor());
        existingBook.setYear(bookDTO.getYear());
        existingBook.setIsbn(bookDTO.getIsbn());
        existingBook.setDescription(bookDTO.getDescription());

        if (bookDTO.getPalavrasChaves() != null) {
            existingBook.setPalavrasChaves(bookDTO.getPalavrasChaves());
        }

        var category = categoryRepository.findById(bookDTO.getCategoryId())
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                "unichristus.category.notfound",
                "Categoria não encontrada!"));
        existingBook.setCategory(category);

        var updatedBook = repository.save(existingBook);

        BookDTO updatedDTO = MapperUtil.parseObject(updatedBook, BookDTO.class);
        updatedDTO.setCategoryId(updatedBook.getCategory().getId());

        return updatedDTO;
    }


    public List<BookDTO> findAll() {
        var listBooks = repository.findAll();
        return MapperUtil.parseListObjects(listBooks, BookDTO.class);
    }

    public List<BookDTO> search(String title, String author, String palavrasChaves, Long categoryId, String categoryName) {
        var books = repository.search(title, author, palavrasChaves, categoryId, categoryName);
        return MapperUtil.parseListObjects(books, BookDTO.class);
    }


    public Book findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                        "unichristus.book.findbyid.notfound",
                        "Livro não encontrado!"));
    }

    public BookDTO findByIdDTO(Long id) {
        var book = findById(id);
        return MapperUtil.parseObject(book, BookDTO.class);
    }

    public void delete(Long id) {
        var categoryEntity = repository.findById(id);

        if (categoryEntity.isEmpty()) { // trata exceção de não encontrar o id a ser deletado
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.delete.notfound",
                    "Livro não encontrado!");
        }
        repository.deleteById(id);
    }

    //Listar livros de uma mesma categoria
    public List<BookDTO> findBooksByCategoryId(Long categoryId) {
        List<Book> books = repository.findByCategoryId(categoryId);

        if (books.isEmpty()) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbooksbycategoryid.notfound",
                    "Categoria de livros não encontrada!");
        }
        return MapperUtil.parseListObjects(books, BookDTO.class);
    }
}