package br.edu.unichristus.service;

import br.edu.unichristus.domain.model.User;
import br.edu.unichristus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Carrega o usuário pelo username (chave usada no login).
     * Retorna um org.springframework.security.core.userdetails.User
     * com username, password e lista vazia de authorities (ROLEs).
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + username));

        // Se você não tiver roles/authorities agora, isso já funciona.
        // Se tiver roles, veja nota abaixo para adaptar.
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                new ArrayList<>() // authorities - ajustar se necessário
        );
    }
}
