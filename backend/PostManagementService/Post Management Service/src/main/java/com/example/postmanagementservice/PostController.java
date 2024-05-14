package com.example.postmanagementservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @PostMapping("/posts")
    public Post createPost(@RequestBody Post post) {
        return postRepository.save(post);
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @PutMapping("/posts/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
        return postRepository.save(post);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
    }
    
    @RequestMapping(method = RequestMethod.GET, value="/{userId}/posts")
	public List<Post> getPostsByUserId(@PathVariable Long userId) {
	    List<Post> posts = postRepository.findAllByUserId(userId);
	    if (posts == null) {
	        return null;
	    }
	    return posts;
	}

}