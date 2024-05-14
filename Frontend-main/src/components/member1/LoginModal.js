import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Alert from "@mui/material/Alert";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Please enter a valid password (min. 6 chars)")
    .required("Password is required"),
});

const LoginModal = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [failAdded, setfailAdded] = useState(false);
  //login configurations

  const LogingUser = async (values) => {
    try {
      const response = await axios.post("http://localhost:9111/login", {
        email: values.email,
        password: values.password,
      });

      console.log(response.data.id);
      if (response.status === 200 && response.data.id !== undefined) {
        window.sessionStorage.setItem("uid", response.data.id);
        window.sessionStorage.setItem("susername", response.data.username);
        window.sessionStorage.setItem("semail", response.data.email);
        window.sessionStorage.setItem("spassword", response.data.password);
        window.location = "/userprofile";
        setIsAdded(true);
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      setfailAdded(true);
      window.location = "/";
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">User Login</h3>
          <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log(values);
                LogingUser(values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className="flex flex-col mb-6">
                    <div className="pb-6 md:pr-3 md:mb-0 w-full">
                      <label
                        className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                        htmlFor={"email"}
                      >
                        Email
                      </label>
                      <input
                        className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-600"
                          } text-base`}
                        id="email"
                        type="text"
                        placeholder="John@cargils.com"
                        onChange={handleChange("email")}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 text-xs mt-1 md:text-sm">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="pb-6 md:pr-3 md:mb-0 w-full">
                      <label
                        className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                        htmlFor={"password"}
                      >
                        Password
                      </label>
                      <input
                        className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${errors.password && touched.password
                            ? "border-red-500"
                            : "border-gray-600"
                          } text-base`}
                        id="password"
                        type="password"
                        placeholder="*********"
                        onChange={handleChange("password")}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500 text-xs mt-1 md:text-sm">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-center mb-4 md:mb-6">
                    <button
                      type="submit"
                      className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                      style={{
                        boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                      }}
                    >
                      LOGIN
                    </button>
                    {isAdded && (
                      <Alert severity="success">Successfully loging</Alert>
                    )}
                    {failAdded && <Alert severity="error">Loging Error</Alert>}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
