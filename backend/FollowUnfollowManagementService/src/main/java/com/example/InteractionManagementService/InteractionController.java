package com.example.InteractionManagementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class InteractionController {


    InteractionService interactionService;



    @PatchMapping("/users/{userId}/follow")
    public ResponseEntity<?> followUser(@PathVariable("userId") String userId, @RequestBody String followerId) {
        try {
            interactionService.followUser(userId, followerId);
            return ResponseEntity.ok("User followed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to follow user");
        }
    }

    @PatchMapping("/users/{userId}/unfollow")
    public ResponseEntity<?> unfollowUser(@PathVariable("userId") String userId, @RequestBody String followerId) {
        try {
            interactionService.unfollowUser(userId, followerId);
            return ResponseEntity.ok("User unfollowed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to unfollow user");
        }
    }

    @PatchMapping("/posts/{postId}/like")
    public ResponseEntity<?> likePost(@PathVariable("postId") String postId) {
        try {
            interactionService.likePost(postId);
            return ResponseEntity.ok("Post liked successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to like post");
        }
    }

    @PatchMapping("/posts/{postId}/dislike")
    public ResponseEntity<?> dislikePost(@PathVariable("postId") String postId) {
        try {
            interactionService.dislikePost(postId);
            return ResponseEntity.ok("Post disliked successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to dislike post");
        }
    }
}