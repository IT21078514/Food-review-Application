import React, { useState } from "react";
import { Grid, Hidden } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Alert from "@mui/material/Alert";

const validationSchema = Yup.object({
  username: Yup.string().trim().uppercase().required("User Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Please enter a valid password (min. 6 chars)")
    .required("Password is required"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  agreement: Yup.bool().oneOf(
    [true],
    "Please accept the agreement before proceeding"
  ),
});

const RegistaionModal = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [failAdded, setfailAdded] = useState(false);

  const addperson = async (values) => {
    try {
      const response = await axios.post("http://localhost:9111/users", {
        username: values.username,
        email: values.email,
        password: values.confirmpassword,
        status: "active",
      });
      console.log(response);
      setIsAdded(true);
    } catch (error) {
      console.log(error);
      setfailAdded(true);
    }
  };
  return (
    <>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-4"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">User Registration</h3>
          <p class="py-4">
            <div>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      password: "",
                      confirmpassword: "",
                      agreement: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                      console.log(values);
                      addperson(values);
                    }}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();

                          handleSubmit();
                        }}
                      >
                        <div className="m-1 lg:pl-6">
                          <Grid item>
                            <div className="lg:my-10 md:my-9 sm:my-6">
                              <label
                                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                                htmlFor={"username"}
                              >
                                Username
                              </label>
                              <input
                                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                  errors.username && touched.username
                                    ? "border-red-500"
                                    : "border-gray-600"
                                } text-base`}
                                id="username"
                                type="text"
                                placeholder="Enter you username"
                                onChange={handleChange("username")}
                                value={values.username}
                              />
                              {errors.username && touched.username ? (
                                <div className="text-red-500 text-xs mt-1 md:text-sm">
                                  {errors.username}
                                </div>
                              ) : null}
                            </div>
                          </Grid>
                          <Grid item>
                            <div className="lg:my-10 md:my-9 sm:my-6">
                              <label
                                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                                htmlFor={"email"}
                              >
                                Email
                              </label>
                              <input
                                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                  errors.email && touched.email
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
                          </Grid>
                          <Grid item>
                            <div className="lg:my-10 md:my-9 sm:my-6">
                              <label
                                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                                htmlFor={"password"}
                              >
                                Password
                              </label>
                              <input
                                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                  errors.password && touched.password
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
                          </Grid>
                          <Grid item>
                            <div className="lg:my-10 md:my-9 sm:my-6">
                              <label
                                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                                htmlFor={"confirmpassword"}
                              >
                                Confirm Password
                              </label>
                              <input
                                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                  errors.confirmpassword &&
                                  touched.confirmpassword
                                    ? "border-red-500"
                                    : "border-gray-600"
                                } text-base`}
                                id="confirmpassword"
                                type="password"
                                placeholder="Re-enter password"
                                onChange={handleChange("confirmpassword")}
                                value={values.confirmpassword}
                              />
                              {errors.confirmpassword &&
                              touched.confirmpassword ? (
                                <div className="text-red-500 text-xs mt-1 md:text-sm">
                                  {errors.confirmpassword}
                                </div>
                              ) : null}
                            </div>
                          </Grid>

                          <Grid item>
                            <div>
                              <label>
                                <input
                                  className={`focus:outline-none mr-4 border-b focus:border-blue-900 ${
                                    errors.agreement && touched.agreement
                                      ? "border-red-500"
                                      : "border-gray-600"
                                  } text-base`}
                                  id="agreement"
                                  type="checkbox"
                                  onChange={handleChange("agreement")}
                                  value={values.agreement}
                                />
                                Do you agree with our privacy policies
                              </label>
                              {errors.agreement && touched.agreement ? (
                                <div className="text-red-500 text-xs mt-1 md:text-sm">
                                  {errors.agreement}
                                </div>
                              ) : null}
                            </div>
                          </Grid>
                          <Grid item>
                            <div className=" lg:my-10 md:my-9 sm:my-6 text-center ">
                              <button
                                type="submit"
                                className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                                style={{
                                  boxShadow:
                                    "0px 10px 15px rgba(3, 17, 86, 0.25)",
                                }}
                              >
                                SIGN UP
                              </button>
                            </div>
                            {isAdded && (
                              <Alert severity="success">
                                Successfully added
                              </Alert>
                            )}
                            {failAdded && (
                              <Alert severity="error">
                                {values.destination} Error
                              </Alert>
                            )}
                          </Grid>
                        </div>
                      </form>
                    )}
                  </Formik>
                </Grid>
              </Grid>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistaionModal;
