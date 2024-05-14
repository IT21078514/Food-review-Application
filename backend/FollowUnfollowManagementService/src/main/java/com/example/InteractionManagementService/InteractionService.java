package com.example.InteractionManagementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class InteractionService {

    @Autowired
    RestTemplate restTemplate;

    private String userApiBaseUrl = "http://user-service/api/users/";
    private String postApiBaseUrl = "http://post-service/api/posts/";

    public SecurityProperties.User getFollowers(String userId) {
        String url = userApiBaseUrl + userId;
        ResponseEntity<SecurityProperties.User> response = restTemplate.getForEntity(url, SecurityProperties.User.class);
        return response.getBody();
    }

    public SecurityProperties.User getFollowing(String userId) {
        String url = userApiBaseUrl + userId;
        ResponseEntity<SecurityProperties.User> response = restTemplate.getForEntity(url, SecurityProperties.User.class);
        return response.getBody();
    }

    public void followUser(String userId, String followerId) {
        String url = userApiBaseUrl + userId + "/follow";
        restTemplate.patchForObject(url, followerId, String.class);
    }

    public void unfollowUser(String userId, String followerId) {
        String url = userApiBaseUrl + userId + "/unfollow";
        restTemplate.patchForObject(url, followerId, String.class);
    }

    public void likePost(String postId) {
        String url = postApiBaseUrl + postId + "/like";
        restTemplate.patchForObject(url, null, String.class);
    }

    public void dislikePost(String postId) {
        String url = postApiBaseUrl + postId + "/dislike";
        restTemplate.patchForObject(url, null, String.class);
    }
}