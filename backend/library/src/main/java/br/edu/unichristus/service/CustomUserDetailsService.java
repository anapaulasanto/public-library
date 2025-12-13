package br.edu.unichristus.service;

import br.edu.unichristus.domain.model.User;
import br.edu.unichristus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.authority.SimpleGrantedAuthority; // Não é mais necessário aqui
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ==================== LOGIN ====================
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // 1. Busca o *seu* objeto User (que agora implementa UserDetails)
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + email));
        return user;

    }

    // ==================== REGISTER ====================
    public User save(User user) {

        // 1️⃣ valida email
        if (user.getEmail() == null || user.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email é obrigatório");
        }

        // 2️⃣ verifica se já existe
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email já cadastrado");
        }

        // 3️⃣ valida senha
        if (!isValidPassword(user.getPassword())) {
            throw new IllegalArgumentException(
                    "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas e minúsculas."
            );
        }

        // 4️⃣ role padrão
        if (user.getRole() == null || user.getRole().isBlank()) {
            user.setRole("USER");
        }

        // 5️⃣ criptografa senha
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }


    // ==================== MÉTODO ADICIONAL PARA LOGIN ====================
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + email));
    }

    // ==================== VALIDAÇÃO DA SENHA ====================
    private boolean isValidPassword(String password) {
        if (password == null) return false;
        String pattern = "^(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        return password.matches(pattern);
    }
}
