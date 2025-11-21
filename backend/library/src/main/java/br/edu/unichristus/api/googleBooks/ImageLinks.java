package br.edu.unichristus.api.googleBooks;

import jakarta.persistence.Embeddable;

@Embeddable
public class ImageLinks {
    private String thumbnail;
    private String smallThumbnail;

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getSmallThumbnail() {
        return smallThumbnail;
    }

    public void setSmallThumbnail(String smallThumbnail) {
        this.smallThumbnail = smallThumbnail;
    }
}
