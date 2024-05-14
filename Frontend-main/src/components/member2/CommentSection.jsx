import React, { useState } from "react";
import Comment from "./Comment";
import CommentBar from "./CommentBar";
import { AddComment, DeleteComment, UpdateComment } from "./PostAPI";

const CommentSection = (props) => {
  const [comments, setComments] = useState(props.comments);
  const onDeleteHandler = (commentId) => {
    let arr = [...comments];
    arr.splice(commentId, 1);
    setComments(arr);
    props.updateCommentCount(arr.length);
    DeleteComment(commentId);
    // Call Comment Delete
  };

  const onEditHandler = (commentId, value) => {
    let arr = [...comments];
    arr[commentId].comment = value;
    setComments(arr);
    // UpdateComment(commentId, value)
  };

  const onCommentEnter = (value) => {
    let newComment = { username: props.currentUsername, comment: value };
    let arr = [...comments];
    arr.push(newComment);
    setComments(arr);
    props.updateCommentCount(arr.length);
    let uid = window.sessionStorage.getItem("uid");
    AddComment(props.postId, uid, comments);
    // Call Comment Add
  };

  return (
    <div>
      <div className="flex flex-col overflow-y-auto h-32">
        {comments.map((commentData, index) => {
          return (
            <Comment
              key={index}
              id={index}
              commentOwner={commentData.username}
              commentText={commentData.comment}
              currentUsername={props.currentUsername}
              isPostOwner={true}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
          );
        })}
      </div>
      <CommentBar userImage={props.userImage} onCommentEnter={onCommentEnter} />
    </div>
  );
};

export default CommentSection;
