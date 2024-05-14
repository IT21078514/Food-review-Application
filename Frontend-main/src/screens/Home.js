import React, { useState, useEffect } from "react";
import LogingHeader from "../components/member1/LogingHeader";
import Post from "../components/member2/Post";
import { GetPostsByUserId } from "../components/member2/PostAPI";

const PostObj = [
  {
    postId: 1,
    isCommentOwner: true,
    isPostOwner: true,
    postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
    postOwnerName: "John Doe",
    hashTags: "#newpost #springboot #sql",
    location: "New York City",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, quam libero ultricies nunc, nec ultri",
    likesCount: 10,
    postImages: [
      "https://placehold.co/600x400/000000/FFFFFF/png",
      "https://placehold.co/600x400/F08080/33FF39/png",
      "https://placehold.co/600x400/FFBF00/DFFF00/png",
      "https://placehold.co/600x400/6495ED/40E0D0/png",
    ],
    comments: [
      {
        username: "Santhush",
        comment: "This is some awesome thinking!",
      },
      { username: "Samantha", comment: "I like this!", commentId: 1 },
      { username: "Sanduni", comment: "Great work!", commentId: 2 },
      { username: "Rakitha", comment: "Wow! You have improved so much!", commentId: 3 },
      { username: "Bathiya", comment: "I knew you could do it!", commentId: 4 },
    ],
    userImage: "https://randomuser.me/api/portraits/women/75.jpg",
    currentUsername: "Santhush",
  },
  {
    postId: 2,
    isCommentOwner: true,
    isPostOwner: true,
    postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
    postOwnerName: "Jane Doe",
    hashTags: "#newpost #springboot #sql",
    location: "New York City",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, quam libero ultricies nunc, nec ultri",
    likesCount: 10,
    postImages: [
      "https://placehold.co/600x400/000000/FFFFFF/png",
      "https://placehold.co/600x400/F08080/33FF39/png",
      "https://placehold.co/600x400/FFBF00/DFFF00/png",
      "https://placehold.co/600x400/6495ED/40E0D0/png",
    ],
    comments: [
      {
        username: "Santhush",
        comment: "This is some awesome thinking!",
      },
      { username: "Jane Doe", comment: "I like this!", commentId: 1 },
      { username: "Lacey Holt", comment: "Great work!", commentId: 2 },
      { username: "Deacon Warren", comment: "Wow! You have improved so much!", commentId: 3 },
      { username: "Wynne Reynolds", comment: "I knew you could do it!", commentId: 4 },
    ],
    userImage: "https://randomuser.me/api/portraits/women/75.jpg",
    currentUsername: "Wynne Reynolds",
  },
  {
    postId: 3,
    isCommentOwner: true,
    isPostOwner: true,
    postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
    postOwnerName: "John Doe",
    hashTags: "#newpost #springboot #sql",
    location: "New York City",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, quam libero ultricies nunc, nec ultri",
    likesCount: 10,
    postImages: [
      "https://placehold.co/600x400/000000/FFFFFF/png",
      "https://placehold.co/600x400/F08080/33FF39/png",
      "https://placehold.co/600x400/FFBF00/DFFF00/png",
      "https://placehold.co/600x400/6495ED/40E0D0/png",
    ],
    comments: [
      {
        username: "Fuller Warner",
        comment: "This is some awesome thinking!",
      },
      { username: "Kuame Vincent", comment: "I like this!", commentId: 1 },
      { username: "Jakeem Holman", comment: "Great work!", commentId: 2 },
      { username: "Xander Chambers", comment: "Wow! You have improved so much!", commentId: 3 },
      { username: "Candace Gutierrez", comment: "I knew you could do it!", commentId: 4 },
    ],
    userImage: "https://randomuser.me/api/portraits/women/75.jpg",
    currentUsername: "Johnny Sins",
  },
  {
    postId: 4,
    isCommentOwner: true,
    isPostOwner: true,
    postOwnerImageURL: "https://randomuser.me/api/portraits/men/9.jpg",
    postOwnerName: "Logan Riddle",
    hashTags: "#newpost #springboot #sql",
    location: "New York City",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget fermentum aliquam, quam libero ultricies nunc, nec ultri",
    likesCount: 10,
    postImages: [
      "https://placehold.co/600x400/000000/FFFFFF/png",
      "https://placehold.co/600x400/F08080/33FF39/png",
      "https://placehold.co/600x400/FFBF00/DFFF00/png",
      "https://placehold.co/600x400/6495ED/40E0D0/png",
    ],
    comments: [
      {
        username: "September Yates",
        comment: "This is some awesome thinking!",
      },
      { username: "Grace Salas", comment: "I like this!", commentId: 1 },
      { username: "Damian Wolf", comment: "Great work!", commentId: 2 },
      { username: "Rigel Clements", comment: "Wow! You have improved so much!", commentId: 3 },
      { username: "Gloria Boyle", comment: "I knew you could do it!", commentId: 4 },
    ],
    userImage: "https://randomuser.me/api/portraits/women/75.jpg",
    currentUsername: "Lane Merrill",
  },
];

const Home = () => {

  const [postObjArray, setPostObjArray] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await GetPostsByUserId(1);
      setTimeout(() => {
        console.log("🤬 ~ file: Home.js:136 ~ getPosts ~ postsFromServer:", postsFromServer)
        setPostObjArray(postsFromServer);
      }, 1000)
    };
    getPosts();
  }, []);


  return (
    <div>
      <LogingHeader />
      {(postObjArray !== undefined && postObjArray !== null) ? (
        <div className="flex mt-5 items-center place-content-center">
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {postObjArray.map((postObj, index) => {
              return <Post key={index} PostObj={postObj} />;
            })}
          </div>
        </div>
      ) : (<></>)}
    </div>
  );
};

export default Home;
