package br.edu.unichristus.service.BookService;

import br.edu.unichristus.api.googleBooks.AccessInfo;
import br.edu.unichristus.api.googleBooks.GoogleResponse;
import br.edu.unichristus.api.googleBooks.VolumeInfo;
import br.edu.unichristus.domain.dto.book.BookLowDTO;
import br.edu.unichristus.exception.CommonsException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookApiService {
    // pega a variavel endpoint.books que salvei no application.properties, que é o endpoint da API do Google
    @Value("${endpoint.books}")
    private String endpoint;
    // pega a minha chave da API que salvei também no properties
    @Value("${api.key}")
    private String apiKey;

    RestTemplate restTemplate = new RestTemplate(); // cria instancia de RestTemplate (classe do spring q faz chamadas à API externa, tipo o axios do React)

    //ENDPOINTS DA API DO GOOGLE
    public List<BookLowDTO> findAllApi() { // pega a variavel endpoint.books que salvei no application.properties, que é o endpoint da API do Google
        String url = endpoint + "-harry" + "&key=" + apiKey; // armazena em url o endpoint completo pra fazer a requisição à API
        GoogleResponse response = restTemplate.getForObject(url, GoogleResponse.class);// faz uma requisição do tipo GET pra "url", esperando receber um dado do tipo GoogleResponse

        return mapResponseToDTO(response);
    }

    public List<BookLowDTO> findByTitle(String title) {
        String url = endpoint + title + "&key=" + apiKey;
        GoogleResponse response = restTemplate.getForObject(url, GoogleResponse.class);

        if (response.getItems() == null) { // tratamento pra quando não achar resposta pro titulo
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbytitle.apiresponse.null",
                    "Nenhum livro encontrado para o título informado.");
        }

        return mapResponseToDTO(response);
    }

    public List<BookLowDTO> findByAuthor(String author) {
        String url = endpoint + "inauthor:" + author + "&key=" + apiKey;
        GoogleResponse response = restTemplate.getForObject(url, GoogleResponse.class);

        if (response.getItems() == null) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbyauthor.apiresponse.null",
                    "Nenhum livro encontrado para o autor informado.");
        }

        return mapResponseToDTO(response);
    }

    public List<BookLowDTO> findBySubject(String subject) {
        String url = endpoint + "subject:" + subject + "&key=" + apiKey;
        GoogleResponse response = restTemplate.getForObject(url, GoogleResponse.class);

        if (response.getItems() == null) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbysubject.apiresponse.null",
                    "Nenhum livro encontrado para o assunto informado.");
        }

        return mapResponseToDTO(response);
    }

    public List<BookLowDTO> search(String title, String author, String subject) {
        StringBuilder query = new StringBuilder();

        if (title != null && !title.isBlank()) {
            query.append("intitle:").append(title).append("+");
        }
        if (author != null && !author.isBlank()) {
            query.append("inauthor:").append(author).append("+");
        }
        if (subject != null && !subject.isBlank()) {
            query.append("subject:").append(subject);
        }

        if (query.length() == 0) {
            query.append("book");
        }

        String url = endpoint + query + "&key=" + apiKey;
        GoogleResponse response = restTemplate.getForObject(url, GoogleResponse.class);

        if (response == null || response.getItems() == null) {
            throw new CommonsException(HttpStatus.NOT_FOUND,
                    "unichristus.book.findbysubject.apiresponse.null",
                    "Nenhum livro encontrado na API do Google");
        }

        return mapResponseToDTO(response);
    }

    private List<BookLowDTO> mapResponseToDTO(GoogleResponse response) {
        return response.getItems().stream().map(items -> {
            VolumeInfo volumeInfo = items.getVolumeInfo();
            AccessInfo accessInfo = items.getAccessInfo();

            String linkPdf = null;

            if (accessInfo != null && accessInfo.getPdf() != null && accessInfo.getPdf().isAvailable()) {
                linkPdf = accessInfo.getPdf().getAcsTokenLink();
            }

            String coverUrl = null;
            if (volumeInfo.getImageLinks() != null) {
                coverUrl = volumeInfo.getImageLinks().getThumbnail();
                if (coverUrl == null) {
                    coverUrl = volumeInfo.getImageLinks().getSmallThumbnail();
                }
            }

            return new BookLowDTO(
                    volumeInfo.getTitle(),
                    volumeInfo.getAuthors(),
                    volumeInfo.getPublishedDate(),
                    volumeInfo.getDescription(),
                    volumeInfo.getCategories(),
                    linkPdf,
                    volumeInfo.getAverageRating(),
                    volumeInfo.getRatingsCount(),
                    coverUrl
            );
        }).collect(Collectors.toList());
    }
}
