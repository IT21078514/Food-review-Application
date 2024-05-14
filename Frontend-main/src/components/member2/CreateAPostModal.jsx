import React, { useState, useRef } from "react";
import { CreatePost } from "./PostAPI";

const CreateAPostModal = () => {
  const descriptionRef = useRef();
  const hastagRef = useRef();
  const locationRef = useRef();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [hashtag, setHashTag] = useState("");
  const [location, setLocation] = useState("");
  const [alertDes, setAlertDes] = useState("");
  const [alert, setAlert] = useState(false);

  const cleanFieldValues = () => {
    setImages([]);
    setDescription("");
    setHashTag("");
    setLocation("");
    descriptionRef.current.value = "";
    locationRef.current.value = "";
    hastagRef.current.value = "";
  };

  const onClickPostCreate = async () => {
    document.querySelector("#create-post-modal").checked = false;
    // call post create
    let data = {
      description: description,
      location: location,
      imagePath: "/images/new_post.jpg",
      hashtags: hashtag,
      rating: 0,
      userId: 1,
    };
    await CreatePost(data);
    cleanFieldValues();
  };

  const onClickPostCancel = () => {
    document.querySelector("#create-post-modal").checked = false;
    cleanFieldValues();
  };

  const handleUpload = (event) => {
    const newImages = [...images];
    if (event.target.files.length > 4) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      return;
    }
    for (let i = 0; i < event.target.files.length; i++) {
      newImages.push(event.target.files[i]);
    }
    setImages(newImages);
  };

  return (
    <>
      <input type="checkbox" id="create-post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create A New Post!</h3>
          <div className="flex flex-col mt-4">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Enter Description"
              ref={descriptionRef}
              value={description}
              onChange={() => {
                setDescription(descriptionRef.current.value);
              }}
            ></textarea>
            <input
              ref={hastagRef}
              type="text"
              placeholder="Enter Hashtags"
              className="input input-bordered w-full max-w-xs mt-2"
              onChange={() => {
                setHashTag(hastagRef.current.value);
              }}
            />
            <input
              ref={locationRef}
              type="text"
              placeholder="Enter Location"
              className="input input-bordered w-full max-w-xs mt-2"
              onChange={() => {
                setLocation(locationRef.current.value);
              }}
            />
            <div className="form-control w-full max-w-xs my-2">
              <label className="label">
                <span className="label-text">Pick Image or Images</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                multiple
                accept="image/*"
                onChange={handleUpload}
              />
            </div>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(image)} alt={`${index}`} />
                </div>
              ))}
            </div>
            {alert ? (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Cannot Select More than 4 Images</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="modal-action">
            <label className="btn" onClick={onClickPostCancel}>
              Cancel
            </label>
            <label className="btn btn-success" onClick={onClickPostCreate}>
              Create Post
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAPostModal;
