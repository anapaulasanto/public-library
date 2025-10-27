package br.edu.unichristus.security.config;

import br.edu.unichristus.security.jwt.JwtRequestFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.http.HttpMethod;

@Configuration
public class SecurityConfig {

    private final JwtRequestFilter jwtRequestFilter;

    public SecurityConfig(@Lazy JwtRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        //Permite todas as requisições OPTIONS (preflight)
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // !! CORREÇÃO AQUI !!
                        // Rotas públicas (registro, login, logout)
                        .requestMatchers("/auth/**").permitAll()

                        // Rotas públicas (frontend)
                        // Assumindo que estas não são rotas de API
                        .requestMatchers("/", "/catalog/books").permitAll()

                        // Protege as rotas de Admin
                        // Se /admin/** for rota de API, mude para /api/v1/admin/**
                        .requestMatchers("/admin/**").hasRole("ADMIN")

                        // Protege as rotas de User
                        // Se /user/** for rota de API, mude para /api/v1/user/**
                        .requestMatchers("/user/**").hasRole("USER")

                        // Rotas de User — usuários e admins
                        .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")

                        // Rotas de Review — apenas usuários
                        .requestMatchers("/api/v1/review/**").hasRole("USER")

                        // Rotas de livros (CRUD) — apenas administradores
                        .requestMatchers("/api/v1/book/**").hasRole("ADMIN")

                        // Rotas de livros da API externa — apenas usuários
                        .requestMatchers("/api/v1/book/external/**").hasRole("USER")

                        // Rotas de Category — apenas administradores
                        .requestMatchers("/api/v1/category/**").hasRole("ADMIN")

                        // Rotas de Rental — qualquer usuário autenticado
                        .requestMatchers("/api/v1/rental/**").authenticated()

                        // Todas as outras rotas exigem autenticação
                        .anyRequest().authenticated()
                )
                // Stateless, sem sessão
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
