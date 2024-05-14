import React, { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Comment = (props) => {
  const inputCommentRef = useRef();
  const [editComment, setEditComment] = useState(props.commentText);
  const onDeleteHandler = () => {
    props.onDeleteHandler(props.id);
  };

  const isCommentOwner = () => {
    if (props.currentUsername === props.commentOwner) {
      return true;
    } else {
      return false;
    }
  };

  const onEditChange = () => {
    setEditComment(inputCommentRef.current.value);
  };

  const onEditCommentEnter = (e) => {
    if (e.key === "Enter") {
      document.querySelector("#my-modal-3").checked = false;
      props.onEditHandler(props.id, inputCommentRef.current.value);
      inputCommentRef.current.value = "";
    }
  };

  return (
    <div className="ml-5">
      <div className="chat chat-start">
        <div className="chat-header">
          {isCommentOwner() || props.isPostOwner ? (
            <div className="dropdown mr-2">
              <label tabIndex={0}>
                <BsThreeDots />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {isCommentOwner() ? (
                  <li>
                    <label htmlFor="my-modal-3">Edit</label>
                  </li>
                ) : (
                  <></>
                )}
                <li onClick={onDeleteHandler}>
                  <label>Delete</label>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          {props.commentOwner}
        </div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Edit Your Comment</h3>
            <p className="py-4"></p>
            <input
              type="text"
              ref={inputCommentRef}
              value={editComment}
              onChange={onEditChange}
              className="input input-bordered w-full"
              onKeyDown={onEditCommentEnter}
            />
          </div>
        </div>
        <div className="chat-bubble w-72">{props.commentText}</div>
      </div>
    </div>
  );
};

export default Comment;
