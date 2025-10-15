package br.edu.unichristus.controller;

import br.edu.unichristus.security.jwt.JwtUtil;
import br.edu.unichristus.security.model.AuthRequest;
import br.edu.unichristus.security.model.AuthResponse;
import br.edu.unichristus.service.CustomUserDetailsService;
import br.edu.unichristus.domain.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    // ==================== REGISTER ====================
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        // seta datas
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());

        // salva no banco, service já criptografa a senha
        User savedUser = userDetailsService.save(user);

        return ResponseEntity.ok(savedUser);
    }

    // ==================== LOGIN ====================
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> createAuthenticationToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Usuário ou senha inválidos", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthResponse(jwt));
    }
}
