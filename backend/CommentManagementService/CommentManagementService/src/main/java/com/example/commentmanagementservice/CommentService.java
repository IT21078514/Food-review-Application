package com.example.commentmanagementservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class CommentService {
	@Autowired
	public CommentRepository commentRepository;
	
	public Comment addComment(Comment comment) {
		return commentRepository.save(comment);
		
	}
	
	public Comment updateComment(Long id, Comment comment) {
		return commentRepository.save(comment);
		
	}
	
	public Comment getCommentById(Long id) {
		return commentRepository.findById(id).orElse(null);
	}
	
	public void deleteComment(Long id) {
		commentRepository.deleteById(id);
	}
	
	public List<Comment> getcommentsForPost(Long postId) {
	    return commentRepository.findAllByPostId(postId);
	}
}
