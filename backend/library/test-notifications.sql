-- Script SQL para testar o sistema de notificações
-- Execute este script para criar aluguéis de teste que vencem em 3 dias

-- 1. Verificar usuários existentes
SELECT id, name, email FROM tb_user;

-- 2. Verificar livros existentes
SELECT id, title FROM tb_book;

-- 3. Criar um aluguel de teste que vence em exatamente 3 dias
-- IMPORTANTE: Ajuste os IDs de user_id e book_id conforme seu banco
INSERT INTO tb_rental (rental_date, return_date, status, notes, user_id, book_id)
VALUES (
    CURRENT_DATE,                           -- Data de hoje
    CURRENT_DATE + INTERVAL '3 days',       -- Vence em 3 dias
    'active',
    'Aluguel de teste para notificação',
    54,                                       -- Ajuste o user_id
    1                                        -- Ajuste o book_id
);

-- 4. Verificar o aluguel criado
SELECT 
    r.id,
    u.name as usuario,
    u.email,
    b.title as livro,
    r.rental_date,
    r.return_date,
    r.status,
    CURRENT_DATE as hoje,
    (r.return_date - CURRENT_DATE) as dias_restantes
FROM tb_rental r
JOIN tb_user u ON r.user_id = u.id
JOIN tb_book b ON r.book_id = b.id
WHERE r.status = 'active'
ORDER BY r.return_date;

-- 5. Verificar aluguéis que receberão notificação (vencem em 3 dias)
SELECT 
    u.email,
    u.name,
    b.title,
    r.return_date,
    (r.return_date - CURRENT_DATE) as dias_restantes
FROM tb_rental r
JOIN tb_user u ON r.user_id = u.id
JOIN tb_book b ON r.book_id = b.id
WHERE r.status = 'active'
  AND r.return_date = CURRENT_DATE + INTERVAL '3 days';

-- 6. Limpar dados de teste (execute após testar)
-- DELETE FROM tb_rental WHERE notes = 'Aluguel de teste para notificação';
