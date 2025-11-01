import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
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
      <div className="flex w-[75vw] rounded-2xl bg-gray-700 h-[70vh] pb-3 overflow-hidden p-1">
        <div className="w-1/2 h-full flex justify-center items-center m-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFDS0PSvWiFRkHYOcDAkqTbPw19SSu3Kt8A&s"
            alt="Not found"
            className="h-full w-auto object-cover rounded-2xl "
          />
        </div>

        <div className="w-1/2 m-1 flex flex-col overflow-y-auto ">
          <div className="ml-7 mt-13">
            <h1 className="text-white text-2xl font-bold">Login</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pb-8 ">
            <div className="ml-7 mt-6 flex flex-col">
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

            <div className="ml-7 mt-2">
              <button
                type="submit"
                className="w-[31.1vw] cursor-pointer hover:scale-103 bg-purple-600 mr-1 p-3 text-white rounded border-black"
              >
                Login
              </button>
            </div>

            <div className="ml-7">
              <p className="text-white mt-6">
                Register an account?{" "}
                <button className="hover:scale-105 cursor-pointer">
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
