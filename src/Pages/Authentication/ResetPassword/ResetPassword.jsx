


import { useState } from "react";
import { useForm } from "react-hook-form";


const ResetPassword = () => {
    
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
        <p className="text-gray-500 mt-2 mb-6 text-sm">
         Reset your password
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                 {/* Password */}
          <div className="relative">
            <p>New Password</p>
            <input
              type={show ? "new_passwrod" : "password"}
              placeholder="New Password"
              {...register("new_password", { required: "New Password is required" })}
              className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
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
         {/* Password */}
          <div className="relative">
            <p>Confirm Password</p>
            <input
              type={show1 ? "confirm_password" : "password"}
              placeholder="Confirm Password"
              {...register("confirm_password", { required: "Confirm Password is required" })}
              className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_password.message}
              </p>
            )}
            {/* Eye Icon */}
            <span
              onClick={() => setShow1(!show1)}
              className="mt-2 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
               {show1 ? "👁️" : "🙈"}
            </span>
          </div>
        

          {/* Login Button */}
          <button
            type="submit"
            className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-sm hover:bg-indigo-700 transition"
          >
            Reset Password
          </button>
        </form>

      </div>
    </div>
  );
};

export default ResetPassword;
