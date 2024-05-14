import React from "react";
import { Grid } from "@mui/material";

const UserProfile = () => {
  return (
    <div>
      <Grid item xs={12}>
        <h6 className=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-amber-500 bg-opacity-30">
          <header className="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
            Profile Information
          </header>
        </h6>
      </Grid>

      <div className="grid grid-row-2">
        <div className="rounded-xl my-1 mx-1 px-5 py-5   shadow-md bg-amber-300 bg-opacity-10">
          <h6 className="ml-4 mt-0 mb-2 font-black text-lg">
            Personal Details
          </h6>

          <div className="grid grid-row-2">
            <div className="grid grid-cols-3 ">
              <div className="grid grid-rows-2">
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className="font-black text-blueSapphire text-md">
                    FullName
                  </h6>
                </div>
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-black text-blueSapphire text-md">
                    Email Address
                  </h6>
                </div>
              </div>

              <div className="col-span-2 grid grid-rows-2">
                <div className="rounded-r-xl my-1 mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-medium text-md">
                    {window.sessionStorage.getItem("susername")}
                  </h6>
                </div>
                <div className="rounded-r-xl my-1  mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-medium text-md">
                    {window.sessionStorage.getItem("semail")}
                  </h6>
                </div>
              </div>
            </div>

            <div className="mt-5 flex place-self-end space-x-3">
              <>
                <label
                  className="py-3 px-5 rounded bg-gamboge  hover:bg-halloweenOrange hover:text-white font-semibold "
                  for="my-modal-5"
                >
                  <p>Edit</p>
                </label>
              </>
            </div>
          </div>
        </div>

        <div className="rounded-xl my-1 mx-1 px-5 py-5   shadow-md bg-amber-300 bg-opacity-20">
          <h6 className="ml-4 mt-0 mb-2 font-black text-lg">Reset Password</h6>

          <div className="grid grid-row-2">
            <div className="grid grid-cols-3 ">
              <div className="grid grid-rows-2">
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-6 shadow-md bg-white bg-opacity-20">
                  <h6 className="font-black text-blueSapphire text-md">
                    Old Password
                  </h6>
                </div>
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-6 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-black text-blueSapphire text-md">
                    New Password
                  </h6>
                </div>
              </div>

              <div className="col-span-2 grid grid-rows-2">
                <div className="rounded-r-xl my-1 mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <input
                    className=" mx-0  bg-amber-100 appearance-none border-2 border-amber-500 rounded w-80 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prussianBlue "
                    id="password"
                    type="password"
                    placeholder="Enter Old Password"
                  ></input>
                </div>
                <div className="rounded-r-xl my-1  mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <input
                    className=" mx-0  bg-amber-100 appearance-none border-2 border-amber-500 rounded w-80 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-prussianBlue"
                    id="newpassword"
                    type="password"
                    placeholder="Enter New Password"
                  ></input>
                </div>
              </div>
            </div>

            <div className="mt-5 flex place-self-end space-x-3">
              <>
                <label
                  className="py-3 px-5 rounded bg-gamboge  hover:bg-halloweenOrange hover:text-white font-semibold "
                  for="my-modal-5"
                >
                  <p>Update</p>
                </label>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
