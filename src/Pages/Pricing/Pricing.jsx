import React from "react";
import { useForm } from "react-hook-form";

const Pricing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div className="space-y-3 px-6 mt-12">
        <h1 className="text-4xl font-bold">Pricing Calculator</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center my-12">
        Calculate Your Cost
      </h1>
      <div className="md:flex items-center mt-12 mb-20 px-12">
        <div className="md:w-1/2">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="">
              <p className="font-bold">Percel Type</p>
              <input
                type="percel"
                placeholder="Select Percel Type"
                {...register("percel", { required: "Percel Type is required" })}
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.percel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.percel.message}
                </p>
              )}
            </div>

            <div className="">
              <p className="font-bold">Delivery Destination</p>
              <input
                type="delevery"
                placeholder="Select Deleivery Destination"
                {...register("delevery", {
                  required: "Delivery Destination is required",
                })}
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.delevery && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.delevery.message}
                </p>
              )}
            </div>
            <div className="">
              <p className="font-bold">Weight (KG)</p>
              <input
                type="weight"
                placeholder="Weight"
                {...register("Weight", {
                  required: "Weight is required",
                })}
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>

            {/*  Button */}
            <div className="flex items-center gap-5 font-bold">
              <button
                type="submit"
                className="mt-2 w-1/5 border border-indigo-600 py-2 rounded-sm transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="mt-2 w-4/5 bg-indigo-600 text-white py-2 rounded-sm hover:bg-indigo-700 transition"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 md:text-9xl text-8xl font-bold text-center">50 Tk</div>
      </div>
    </div>
  );
};

export default Pricing;
