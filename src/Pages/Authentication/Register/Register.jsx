
import {  useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [show, setShow] = useState(false);
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useAuth();
  
  const onSubmit = (data) => {
    console.log("Form Data:", data);


    console.log(data.email, data.password)
    createUser(data.email, data.password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className=" px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
        <p className="text-gray-500 mt-2 mb-6 text-sm">
          Please Register with Profast
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* Name */}
          <div>
            <p>Name</p>
            <input
              type="name"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <p>Password</p>
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            {/* Eye Icon */}
            <span
              onClick={() => setShow(!show)}
              className="mt-2 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
               {show ? "👁️" : "🙈"}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="">
            <a href="forgot-password" className="text-sm text-indigo-600 underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-sm hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="grow h-px bg-gray-700"></div>
          <span className="px-3 text-sm text-gray-700">OR</span>
          <div className="grow h-px bg-gray-700"></div>
        </div>

        {/* Google Login */}
        {/* <button className="w-full border py-2 rounded-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Register with Google
        </button> */}
        <SocialLogin/>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-3">
          Already have any account?{" "}
          <a href="login" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
