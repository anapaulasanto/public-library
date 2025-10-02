ALTER TABLE tb_user DROP COLUMN login;
ALTER TABLE tb_user ADD CONSTRAINT uk_user_email UNIQUE (email);