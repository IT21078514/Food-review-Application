import React, { useState } from "react";
import CommentSection from "./CommentSection";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FcLikePlaceholder, FcLike, FcComments } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import { DeletePost } from "./PostAPI";
import "@splidejs/react-splide/css";

const Post = (props) => {
  const [commentToggle, setCommentToggle] = useState(false);
  const [commentCount, setCommentCount] = useState(
    props.PostObj.comments.length
  );
  const [likeToggle, setLikeToggle] = useState(true);
  const [likeCount, setLikeCount] = useState(props.PostObj.likesCount);

  const onLikeClick = () => {
    setLikeToggle((prevValue) => !prevValue);
    if (likeToggle) {
      setLikeCount((prevValue) => prevValue + 1);
    } else {
      setLikeCount((prevValue) => prevValue - 1);
    }
    // Call Update Like
  };

  const onCommentClick = () => {
    setCommentToggle((prevValue) => !prevValue);
  };

  const updateCommentCount = (value) => {
    setCommentCount(value);
  };

  const onDeletePostClick = async () => {
    document.querySelector("#delete-post-modal").checked = false;
    await DeletePost(props.PostObj.postId);
    // Call delete post
  };

  return (
    <div className="flex flex-col bg-amber-100 w-[500px] rounded-lg select-none">
      <div className="flex m-2 justify-between">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={props.PostObj.postOwnerImageURL} alt="owner" />
            </div>
          </div>
          <div className="ml-2 font-fatKidFont">
            {props.PostObj.postOwnerName}
          </div>
          <button className="ml-5 text-blue-400">Follow</button>
        </div>
        {props.PostObj.isPostOwner ? (
          <label htmlFor="delete-post-modal">
            <AiOutlineDelete size={20} />
          </label>
        ) : (
          <></>
        )}
      </div>
      <input type="checkbox" id="delete-post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Do you want to Delete Post!</h3>
          <div className="modal-action">
            <label htmlFor="delete-post-modal" className="btn">
              Cancel
            </label>
            <label className="btn btn-error" onClick={onDeletePostClick}>
              Delete
            </label>
          </div>
        </div>
      </div>
      <div className="ml-2 text-slate-900 font-contentFont">
        {props.PostObj.location}
      </div>
      <div className="flex ml-2">{props.PostObj.postDescription}</div>
      <div className="ml-2 font-semibold">{props.PostObj.hashTags}</div>
      <div className="flex m-2">
        {props.PostObj.postImages.length === 1 ? (
          <img
            src={props.PostObj.postImages[0]}
            alt="food"
            className="w-fit rounded-lg"
          />
        ) : (
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
            }}
          >
            {props.PostObj.postImages.map((img, index) => {
              return (
                <SplideSlide key={index}>
                  <img src={img} alt="food" className="rounded-lg" />
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </div>
      <div className="flex justify-start ml-2 mb-2 w-28 items-center">
        {likeToggle ? (
          <FcLikePlaceholder size={20} className="mr-1" onClick={onLikeClick} />
        ) : (
          <FcLike size={20} className="mr-1" onClick={onLikeClick} />
        )}
        {likeCount}
        <div className="w-5" />
        <FcComments size={20} className="mr-1" onClick={onCommentClick} />
        {commentCount}
      </div>
      {commentToggle ? (
        <CommentSection
          postId={props.PostObj.postId}
          comments={props.PostObj.comments}
          currentUsername={props.PostObj.currentUsername}
          userImage={props.PostObj.userImage}
          updateCommentCount={updateCommentCount}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
