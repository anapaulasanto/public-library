package br.edu.unichristus.controller.BookController;

import br.edu.unichristus.domain.dto.book.BookDTO;
import br.edu.unichristus.domain.dto.rental.RentalDTO;
import br.edu.unichristus.domain.dto.review.ReviewDTO;
import br.edu.unichristus.service.BookService.BookService;
import br.edu.unichristus.service.FileStorageService;
import br.edu.unichristus.service.RentalService;
import br.edu.unichristus.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/book")
public class BookController {
    @Autowired
    private BookService service;

    @Autowired
    private FileStorageService fileStorageService;

    @Operation(summary = "Cadastra um novo livro | role: [ADMIN]", tags = "Book")
    @PostMapping(consumes = "multipart/form-data")
    public BookDTO save(@RequestPart("book") BookDTO book, @RequestPart("file") MultipartFile file){
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/book/downloadFile/")
                .path(fileName)
                .toUriString();

        book.setCapa(fileDownloadUri);
        return service.save(book);
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = fileStorageService.loadFileAsResource(fileName);

        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            //log.info("Could not determine file type.");
        }

        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
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

    @Operation(summary = "Retorna um livro por ID | role: [ADMIN, USER]", tags = "Book")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Livro encontrado com sucesso"),
            @ApiResponse(responseCode = "404", description = "Livro não encontrado"),
            @ApiResponse(responseCode = "500", description = "Erro interno no servidor")
    })
    @GetMapping("/{id}")
    public BookDTO findById(@PathVariable Long id){
        return service.findById(id);
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

    @Operation(summary = "Retorna a média de avaliação de um livro | role: [ADMIN, USER]", tags = "Book")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Média de avaliação retornada com sucesso"),
            @ApiResponse(responseCode = "404", description = "Livro não encontrado ou sem avaliações"),
            @ApiResponse(responseCode = "500", description = "Erro interno no servidor")
    })
    @GetMapping("/{id}/average-rating")
    public ResponseEntity<Double> getAverageRatingForBook(@PathVariable Long id) {
        Double averageRating = reviewService.getAverageRatingForBook(id);
        return ResponseEntity.ok(averageRating);
    }
}
