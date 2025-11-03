package br.edu.unichristus.controller.BookController;

import br.edu.unichristus.domain.dto.book.BookDTO;
import br.edu.unichristus.domain.dto.rental.RentalDTO;
import br.edu.unichristus.domain.dto.review.ReviewDTO;
import br.edu.unichristus.domain.model.Book;
import br.edu.unichristus.service.BookService.BookService;
import br.edu.unichristus.service.RentalService;
import br.edu.unichristus.service.ReviewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import java.util.List;

@RestController
@RequestMapping("/api/v1/book")
public class BookController {
    @Autowired
    private BookService service;

    @Autowired
    private ObjectMapper objectMapper;

    @Operation(summary = "Cadastra um novo livro | role: [ADMIN]", tags = "Book")
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public BookDTO save(@RequestPart("book") String bookJson, @RequestPart(value = "file", required = false) MultipartFile file) {
        try {
            BookDTO bookDTO = objectMapper.readValue(bookJson, BookDTO.class);
            return service.save(bookDTO, file);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao desserializar o JSON do livro: " + e.getMessage());
        }
    }

    @Operation(summary = "Atualiza um livro existente | role: [ADMIN]", tags = "Book")
    @PutMapping("/{id}")
    public BookDTO update(@PathVariable Long id, @RequestBody BookDTO book){
        return service.update(id, book);
    }

    @Operation(summary = "Retorna todos os livros | role: [ADMIN, USER]", tags = "Book")
    @GetMapping("/all")
    public List<BookDTO> findAll(){
        return service.findAll();
    }

    @Operation(summary = "Busca livros por título, autor e/ou categoria | role: [ADMIN, USER]", tags = "Book")
    @GetMapping("/search")
    public List<BookDTO> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String palavrasChaves,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false, name = "category") String categoryName
    ) {
        return service.search(title, author, palavrasChaves, categoryId, categoryName);
    }


    @Operation(summary = "Retorna um livro por ID | role: [ADMIN, USER]", tags = "Book")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Livro encontrado com sucesso"),
            @ApiResponse(responseCode = "404", description = "Livro não encontrado"),
            @ApiResponse(responseCode = "500", description = "Erro interno no servidor")
    })
    @GetMapping("/{id}")
    public BookDTO findById(@PathVariable Long id){
        return service.findByIdDTO(id);
    }

    @Operation(summary = "Exclui um livro por ID | role: [ADMIN]", tags = "Book")
    @ApiResponses({
            @ApiResponse(responseCode = "204", description = "Livro excluído com sucesso"),
            @ApiResponse(responseCode = "404", description = "Livro não encontrado"),
            @ApiResponse(responseCode = "500", description = "Erro interno no servidor")
    })
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

    @Autowired
    private ReviewService reviewService;

    @Operation(summary = "Retorna avaliações de um livro | role: [ADMIN, USER]", tags = "Book")
    @GetMapping("/{id}/reviews")
    public List<ReviewDTO> getReviewByBook(@PathVariable Long id) {
        return reviewService.findReviewsByBookId(id);
    }

    @Autowired
    private RentalService rentalService;

    @Operation(summary = "Retorna locações de um livro | role: [ADMIN]", tags = "Book")
    @GetMapping("/{id}/rentals")
    public List<RentalDTO> getRentalByBook(@PathVariable Long id) {
        return rentalService.findRentalsByBookId(id);
    }
}
