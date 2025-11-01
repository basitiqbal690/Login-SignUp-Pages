import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

// ✅ Validation Schema
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
});

const Login = () => {
  // ✅ useForm setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("✅ Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-[32vw]">
        <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className={`border p-2 w-full rounded focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 rounded-lg transition-transform transform hover:scale-102"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
