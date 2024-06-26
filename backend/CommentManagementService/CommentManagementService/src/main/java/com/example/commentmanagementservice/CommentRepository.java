package com.example.commentmanagementservice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepository extends JpaRepository<Comment, Long>{
	List<Comment> findAllByPostId(Long postId);

}
