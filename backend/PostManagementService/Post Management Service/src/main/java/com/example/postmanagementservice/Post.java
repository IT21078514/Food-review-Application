package com.example.postmanagementservice;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private String location;

    private String imagePath;

    private String hashtags;

    private int rating;

    @Column(name = "user_id")
    private Long userId;

    public Post() {
    }

    public Post(String description, String location, String imagePath, String hashtags, int rating, Long userId) {
        this.description = description;
        this.location = location;
        this.imagePath = imagePath;
        this.hashtags = hashtags;
        this.rating = rating;
        this.userId = userId;
    }

    // getters
    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getHashtags() {
        return hashtags;
    }

    public int getRating() {
        return rating;
    }

    public Long getUserId() {
        return userId;
    }

    // setters
    public void setDescription(String description) {
        this.description = description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public void setHashtags(String hashtags) {
        this.hashtags = hashtags;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
