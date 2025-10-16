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

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

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
    public ResponseEntity<User> registerUser(@RequestBody User user, HttpServletResponse response) {
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());

        // salva no banco (senha validada e criptografada no service)
        User savedUser = userDetailsService.save(user);

        // gera token após cadastro
        final String jwt = jwtUtil.generateToken(savedUser.getEmail());

        // cria cookie com JWTd
        Cookie cookie = new Cookie("JWT_TOKEN", jwt);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 1 dia
        response.addCookie(cookie);

        return ResponseEntity.ok(savedUser);
    }

    // ==================== LOGIN ====================
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> createAuthenticationToken(@RequestBody AuthRequest authRequest,
                                                                  HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Usuário ou senha inválidos", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        // cria cookie com JWT
        Cookie cookie = new Cookie("JWT_TOKEN", jwt);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 1 dia
        response.addCookie(cookie);

        return ResponseEntity.ok(new AuthResponse(jwt));
    }

    // ==================== LOGOUT ====================
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        // cria cookie vazio para limpar o existente
        Cookie cookie = new Cookie("JWT_TOKEN", null);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(0); // expira imediatamente
        response.addCookie(cookie);

        return ResponseEntity.ok("Logout realizado com sucesso. Sessão encerrada.");
    }
}
