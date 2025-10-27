package br.edu.unichristus.controller;

import br.edu.unichristus.security.jwt.JwtUtil;
import br.edu.unichristus.security.model.AuthRequest;
import br.edu.unichristus.security.model.AuthResponse;
import br.edu.unichristus.service.CustomUserDetailsService;
import br.edu.unichristus.domain.model.User;
import jakarta.servlet.http.HttpServletRequest;
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

        // cria cookie com JWT
        Cookie cookie = new Cookie("JWT_TOKEN", jwt);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 1 dia
        response.addCookie(cookie);

        // remover senha da resposta
        savedUser.setPassword(null);

        return ResponseEntity.ok(savedUser);
    }

    // ==================== LOGIN ====================
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> createAuthenticationToken(@RequestBody AuthRequest authRequest,
                                                                  HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Usuário ou senha inválidos", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());

        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        // cria cookie com JWT
        Cookie cookie = new Cookie("JWT_TOKEN", jwt);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 1 dia
        response.addCookie(cookie);

        return ResponseEntity.ok(new AuthResponse(jwt));
    }

    // ====================VERIFICA USUÁRIO A PARTIR DO COOKIE ====================
    @GetMapping("/logged")
    public ResponseEntity<User> getLoggedInUser(HttpServletRequest request) {
        String email = null;
        String jwt = null;

        // Tenta extrair o JWT do cookie
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("JWT_TOKEN")) {
                    jwt = cookie.getValue();
                    break;
                }
            }
        }

        // Se não achou o cookie, não está logado
        if (jwt == null) {
            return ResponseEntity.status(401).build(); // 401 Unauthorized
        }

        try {
            email = jwtUtil.extractUsername(jwt);
        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }

        //Se achou o email, busca o usuário no banco
        if (email != null) {
            User user = (User) this.userDetailsService.loadUserByUsername(email);

            if (jwtUtil.validateToken(jwt, user.getEmail())) {
                user.setPassword(null);
                return ResponseEntity.ok(user);
            }
        }

        return ResponseEntity.status(401).build();
    }

    // ==================== LOGOUT ====================
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("JWT_TOKEN", null);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(0); // expira imediatamente
        response.addCookie(cookie);

        return ResponseEntity.ok("Logout realizado com sucesso. Sessão encerrada.");
    }
}
