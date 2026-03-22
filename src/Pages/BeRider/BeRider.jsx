import agent from "../../assets/agent-pending.png";

import { useForm } from "react-hook-form";

const BeRider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="py-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Be a Rider</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      
      {/* Dotted Line */}
      <div className="border-t-2 border-dotted border-gray-700  my-16"></div>
      
      <div className="md:flex items-center gap-5">
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold mb-5">Tell us about yourself</h1>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* input 1 */}
            <div className="flex items-center gap-4">
              {/* name */}

              <div className="w-1/2">
                <p className="font-bold">Your Name</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* age */}

              <div className="w-1/2">
                <p className="font-bold">Your Age</p>
                <input
                  type="number"
                  placeholder="Your Age"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 1, message: "Age must be at least 1" },
                    max: {
                      value: 99,
                      message: "Age must be less than or equal 99",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
              </div>
            </div>

            {/* input 2 */}
            <div className="flex items-center gap-4">
              {/* email */}

              <div className="w-1/2">
                <p className="font-bold">Your Email</p>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* region */}

              <div className="w-1/2">
                <p className="font-bold">Your Region</p>
                <select
                  {...register("region", {
                    required: "Region is required",
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                  defaultValue=""
                >
                  <option value="">Select Your Region</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="khulna">Khulna</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="barishal">Barishal</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>

                {errors.region && (
                  <p className="text-red-500 text-sm">
                    {errors.region.message}
                  </p>
                )}
              </div>
            </div>

            {/* input 3 */}
            <div className="flex items-center gap-4">
              <div className="w-1/2">
                <p className="font-bold">National NID No</p>
                <input
                  type="number"
                  placeholder="NID Number"
                  {...register("nid", {
                    required: "NID is required",
                    minLength: { value: 10, message: "Invalid NID" },
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                />
                {errors.nid && (
                  <p className="text-red-500 text-sm">{errors.nid.message}</p>
                )}
              </div>

              {/* contact */}

              <div className="w-1/2">
                <p className="font-bold">Contact</p>
                <input
                  type="tel"
                  placeholder="Your Contact Number"
                  {...register("contact", {
                    required: "Contact is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers allowed",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-sm"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {/* Wire House */}
            <div>
              <p className="font-bold">Which wire-house you want to work?</p>
              <select
                {...register("house", {
                  required: "Wire House is required",
                })}
                className="w-full px-4 py-2 border rounded-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Wire House
                </option>
                <option value="dhaka-wire">Dhaka Wire House</option>
                <option value="chattogram-wire">Chattogram Wire House</option>
                <option value="sylhet-wire">Sylhet Wire House</option>
                <option value="khulna-wire">Khulna Wire House</option>
              </select>

              {errors.house && (
                <p className="text-red-500 text-sm">{errors.house.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-sm hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-2/5">
          <img src={agent} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeRider;
