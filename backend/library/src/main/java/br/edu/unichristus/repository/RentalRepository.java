package br.edu.unichristus.repository;

import br.edu.unichristus.domain.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long> {
    List<Rental> findByUserId(Long userId);
    List<Rental> findByBookId(Long bookId);

    @Query("SELECT r FROM Rental r WHERE r.returnDate < :currentDate AND r.status = 'active'")
    List<Rental> findOverdueRentals(@Param("currentDate") LocalDate currentDate);
}
