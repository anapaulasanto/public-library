package br.edu.unichristus.service;

import br.edu.unichristus.domain.model.User;
import br.edu.unichristus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // ==================== LOGIN ====================
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + username));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                new ArrayList<>()
        );
    }

    // ==================== REGISTER ====================
    public User save(User user) {
        // valida senha antes de salvar
        if (!isValidPassword(user.getPassword())) {
            throw new IllegalArgumentException(
                    "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas e minúsculas."
            );
        }

        // criptografa a senha antes de salvar
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    // ==================== VALIDAÇÃO DA SENHA ====================
    private boolean isValidPassword(String password) {
        if (password == null) return false;
        // Pelo menos 8 caracteres, 1 minúscula e 1 maiúscula
        String pattern = "^(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        return password.matches(pattern);
    }
}
