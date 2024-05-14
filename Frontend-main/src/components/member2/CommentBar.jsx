import React, { useRef } from "react";

const CommentBar = (props) => {
  const inputCommentRef = useRef();
  const onCommentEnter = (e) => {
    if (e.key === "Enter") {
      props.onCommentEnter(inputCommentRef.current.value);
      inputCommentRef.current.value = "";
    }
  };
  return (
    <div className="flex m-2 items-center">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src={props.userImage} alt="user" />
        </div>
      </div>
      <input
        ref={inputCommentRef}
        type="text"
        placeholder="Add a Comment ..."
        className="input w-full max-w-xs ml-2"
        onKeyDown={onCommentEnter}
      />
    </div>
  );
};

export default CommentBar;
