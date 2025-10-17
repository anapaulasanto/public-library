package br.edu.unichristus.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // todas as rotas do backend
                        .allowedOrigins("http://localhost:5173") // origem do React (frontend local)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // métodos liberados
                        .allowCredentials(true); // permite cookies e tokens JWT
            }
        };
    }
}
