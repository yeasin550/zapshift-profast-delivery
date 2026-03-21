

import { useForm } from "react-hook-form";

const ForgotPassword = () => {

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
        <h2 className="text-3xl font-bold text-gray-800">Forgot Password</h2>
        <p className="text-gray-500 mt-2 mb-6 text-sm">
          Enter your email address and we’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* Email */}
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

        

          {/* Login Button */}
          <button
            type="submit"
            className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-sm hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>



        {/* Register Link */}
        {/* <p className="text-center text-sm text-gray-500 mt-3">
          Remember your password?
          <a href="login" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
