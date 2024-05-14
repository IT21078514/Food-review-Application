package com.example.commentmanagementservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CommentController {
	@Autowired
	private CommentService commentService;
	

	@RequestMapping(method = RequestMethod.POST, value="/comments")
	public Comment addComment(@RequestBody Comment comment)
	{
		return commentService.addComment(comment);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/comments/{id}")
	public Comment updateComment(@PathVariable Long id, @RequestBody Comment comment)
	{
		Comment existingComment = commentService.getCommentById(id);
		if(existingComment == null) {
			System.out.println("No Comment");;
		}
		existingComment.setPostId(comment.getPostId());
		existingComment.setUserId(comment.getUserId());
		existingComment.setComment(comment.getComment());
		existingComment.setDateTime(comment.getDateTime());
		return commentService.updateComment(id, existingComment);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/comments/{id}")
	public void deleteComment(@PathVariable Long id)
	{
		commentService.deleteComment(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/comments/{postId}")
	public List<Comment> getCommentsByPostId(@PathVariable Long postId) {
	    List<Comment> comments = commentService.getcommentsForPost(postId);
	    if (comments == null) {
	        return null;
	    }
	    return comments;
	}

}
