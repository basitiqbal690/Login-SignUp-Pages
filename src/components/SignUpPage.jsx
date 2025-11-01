import React from "react";
// import img3 from "../assets/left-img-signup-3.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must agree to the terms"),
});

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black overflow-hidden">
      <div className="flex w-[75vw] rounded-2xl bg-gray-700 h-[90vh] pb-3 overflow-hidden p-1">
        <div className="w-1/2 h-full flex justify-center items-center m-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFDS0PSvWiFRkHYOcDAkqTbPw19SSu3Kt8A&s"
            alt="Not Found"
            className="h-full w-auto object-cover rounded-2xl "
          />
        </div>

        <div className="w-1/2 m-1 flex flex-col overflow-y-auto ">
          <div className="ml-7 mt-13">
            <h1 className="text-white text-2xl font-bold">Create an account</h1>
            <p className="text-white mt-3">
              Already have an account?{" "}
              <button className="hover:scale-105 cursor-pointer">Log in</button>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pb-8 ">
            <div className="flex ml-7 mt-5">
              <div className="flex flex-col">
                <input
                  {...register("firstName")}
                  className="bg-gray-600 mr-1 p-3 text-white rounded w-[15.75vw] border-black "
                  type="text"
                  placeholder="First Name"
                />
                <div className="h-5">
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <input
                  {...register("lastName")}
                  className="bg-gray-600 p-3 mr-2 rounded text-white w-[15.8]"
                  type="text"
                  placeholder="Last Name"
                />
                <div className="h-5">
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="ml-7 mt-3 flex flex-col">
              <input
                {...register("email")}
                type="email"
                className="bg-gray-600 mr-1 p-3 text-white rounded w-[31.1vw]"
                placeholder="Email"
              />
              <div className="h-5">
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <input
                {...register("password")}
                type="password"
                className="bg-gray-600 mr-1 mt-3 p-3 text-white rounded w-[31.1vw]"
                placeholder="Enter the Password"
              />
              <div className="h-5">
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="ml-7 flex mt-3 items-center">
              <input type="checkbox" {...register("terms")} className="mt-1" />
              <p className="ml-2 text-white">
                I agree to the terms and conditions
              </p>
            </div>
            <div className="h-5">
              {errors.terms && (
                <p className="text-red-400 text-sm ml-10 mt-1">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <div className="ml-7 mt-2">
              <button
                type="submit"
                className="w-[31.1vw] cursor-pointer hover:scale-103 bg-purple-600 mr-1 p-3 text-white rounded border-black"
              >
                Create Account
              </button>
            </div>

            <div className="ml-7 flex mt-4 items-center">
              <hr className="w-32 mr-4 text-white mt-1 ml-4" />
              <p className="text-white"> or register with </p>
              <hr className="w-32 text-white ml-4 mt-1" />
            </div>

            <div className="ml-7 mt-4 border border-white w-[10vw] flex justify-center items-center p-2 hover:scale-103 rounded">
              <FcGoogle className="mt-1 mr-2 text-lg" />
              <button
                type="button"
                className="cursor-pointer text-white rounded"
              >
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
