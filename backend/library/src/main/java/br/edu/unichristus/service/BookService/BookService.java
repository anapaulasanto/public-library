package br.edu.unichristus.service.BookService;

import br.edu.unichristus.domain.dto.book.BookDTO;
import br.edu.unichristus.domain.model.Book;
import br.edu.unichristus.exception.CommonsException;
import br.edu.unichristus.repository.BookRepository;
import br.edu.unichristus.repository.CategoryRepository;
import br.edu.unichristus.utils.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;
    @Autowired
    private CategoryRepository categoryRepository;

    public BookDTO save(BookDTO bookDTO) {
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

        var bookEntity = MapperUtil.parseObject(bookDTO, Book.class);

        // salvando categoria na entidade livro
        var category = categoryRepository.findById(bookDTO.getCategoryId())
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                        "unichristus.category.notfound",
                        "Categoria não encontrada!"));

        bookEntity.setCategory(category);

        var savedBook = repository.save(bookEntity);
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

        existingBook.setTitle(bookDTO.getTitle());
        existingBook.setAuthor(bookDTO.getAuthor());
        existingBook.setYear(bookDTO.getYear());
        existingBook.setIsbn(bookDTO.getIsbn());
        existingBook.setDescription(bookDTO.getDescription());
        existingBook.setPalavrasChaves(bookDTO.getPalavrasChaves());
        existingBook.setCapa(bookDTO.getCapa());


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

    public BookDTO updateCover(Long id, String coverUrl) {
        var existingBook = repository.findById(id)
                .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                        "unichristus.book.cover.notfound",
                        "Livro para atualização de capa não encontrado."));

        existingBook.setCapa(coverUrl);

        var updatedBook = repository.save(existingBook);
        BookDTO dto = MapperUtil.parseObject(updatedBook, BookDTO.class);
        if (updatedBook.getCategory() != null) {
            dto.setCategoryId(updatedBook.getCategory().getId());
        }
        return dto;
    }


    public List<BookDTO> findAll() {
        var listBooks = repository.findAll();
        return listBooks.stream().map(book -> {
            BookDTO dto = MapperUtil.parseObject(book, BookDTO.class);
            if (book.getCategory() != null) {
                dto.setCategoryId(book.getCategory().getId());
            }
            return dto;
        }).collect(Collectors.toList());
    }


    public BookDTO findById(Long id) {
        var book = repository.findById(id)
         .orElseThrow(() -> new CommonsException(HttpStatus.NOT_FOUND,
                "unichristus.book.findbyid.notfound",
                "Livro não encontrado!"));


        BookDTO dto = MapperUtil.parseObject(book, BookDTO.class);

        if (book.getCategory() != null) {
            dto.setCategoryId(book.getCategory().getId());
        }

        return dto;
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
    public List<BookDTO> findBooksByCategoryName(String categoryName) {
        List<Book> books = repository.findByCategory_CategoryName(categoryName);

        if (books.isEmpty()) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbooksbycategoryname.notfound",
                    "Categoria de livros não encontrada!");
        }
        return MapperUtil.parseListObjects(books, BookDTO.class);
    }
}
