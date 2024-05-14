import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Alert from "@mui/material/Alert";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/[A-Z]/, "First letter should be capitalized")
    .required("User Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),

  mobileNum: Yup.number()
    .positive()
    .integer()
    .min(10, "Please enter a valid phone number")
    .required("Phone number is required"),
  encImg: Yup.string().required("Required"),
});

const EditUserProfileModal = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [failAdded, setfailAdded] = useState(false);

  const updateUser = async (values) => {
    console.log("test sheva");
    try {
      const response = await axios.put(
        `http://localhost:9111/users/${window.sessionStorage.getItem("uid")}`,
        {
          username: values.username,
          email: values.email,
          password: window.sessionStorage.getItem("spassword"),
          status: "active",
        }
      );
      setIsAdded(true);
    } catch (error) {
      console.log(error);
      setfailAdded(true);
    }
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-5"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="px-4 pt-6 pb-4 ">
            <h6 className="ml-4 mt-0 mb-1 font-black text-2xl text-center">
              Edit profile Informations
            </h6>
            <hr></hr>

            <Formik
              initialValues={{
                username: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log(values);
                updateUser(values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    handleSubmit();
                    updateUser(values);
                  }}
                >
                  <div className="grid 2 gap-2">
                    <div>
                      <div className=" gap-y-2 mt-0 justify-center ml-2">
                        <div className=" py-2 px-2 grid grid-cols-3 gap-x-2">
                          <div className=" my-1">
                            <label
                              className="block text-sm font-medium leading-149  md:text-lg"
                              htmlFor={"username"}
                            >
                              FullName :
                            </label>
                          </div>
                          <div className=" col-span-2">
                            <input
                              className={`focus:outline-none w-60 h-8 pl-2 border-2 rounded-lg border-lightSilver focus:border-halloweenOrange  ${
                                errors.username && touched.username
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } text-base`}
                              id="username"
                              type="text"
                              placeholder={window.sessionStorage.getItem(
                                "susername"
                              )}
                              onChange={handleChange("username")}
                              value={values.username}
                            />
                            {errors.username && touched.username ? (
                              <div className="text-red-500 text-xs mt-1 md:text-sm">
                                {errors.username}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className=" py-2 px-2 grid grid-cols-3 gap-x-2">
                          <div className=" my-1">
                            <label
                              className="block text-sm font-medium leading-149  md:text-lg"
                              htmlFor={"email"}
                            >
                              Email :
                            </label>
                          </div>
                          <div className=" col-span-2">
                            <input
                              className={`focus:outline-none w-60 h-8 pl-2 border-2 rounded-lg border-lightSilver focus:border-halloweenOrange  ${
                                errors.email && touched.email
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } text-base`}
                              id="email"
                              type="text"
                              placeholder={window.sessionStorage.getItem(
                                "semail"
                              )}
                              onChange={handleChange("email")}
                              value={values.email}
                            />
                            {errors.email && touched.email ? (
                              <div className="text-red-500 text-xs mt-1 md:text-sm">
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-0 mt-6">
                        <button
                          type="submit"
                          className="bg-gamboge hover:bg-halloweenOrange text-md text-white font-bold py-2 px-6 rounded-full"
                          style={{
                            boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                          }}
                        >
                          Update
                        </button>
                      </div>
                      {isAdded && (
                        <Alert severity="success">Successfull Updated</Alert>
                      )}
                      {failAdded && <Alert severity="error">Error</Alert>}
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfileModal;
