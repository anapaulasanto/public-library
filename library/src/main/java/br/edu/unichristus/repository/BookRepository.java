package br.edu.unichristus.repository;

import br.edu.unichristus.domain.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByCategoryId(Long categoryId);
    Optional<Book> findByIsbn(String isbn);

    @Query("SELECT b FROM Book b WHERE (:title IS NULL OR b.title LIKE %:title%) AND (:author IS NULL OR b.author LIKE %:author%) AND (:palavrasChaves IS NULL OR b.palavrasChaves LIKE %:palavrasChaves%) AND (:categoryId IS NULL OR b.category.id = :categoryId) AND (:categoryName IS NULL OR b.category.categoryName LIKE %:categoryName%)")
    List<Book> search(@Param("title") String title, @Param("author") String author, @Param("palavrasChaves") String palavrasChaves, @Param("categoryId") Long categoryId, @Param("categoryName") String categoryName);
}
