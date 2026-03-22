import { useForm } from "react-hook-form";

const AddPercel = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

  const parcelType = watch("parcelType");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl bg-white rounded-2xl shadow border p-8"
      >
        <h1 className="text-4xl font-bold mb-12">Add Parcel</h1>

        <h1 className="text-2xl font-bold mb-6">
          Enter your parcel details
        </h1>

        {/* Parcel Type */}
        <div className="flex gap-6 mb-8">
          {["document", "not-document"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={type}
                {...register("parcelType", { required: true })}
                className="hidden"
              />
              <div
                onClick={() => setValue("parcelType", type)}
                className={`w-5 h-5 rounded-full border-2 ${
                  parcelType === type ? "border-green-500" : "border-gray-300"
                } flex items-center justify-center`}
              >
                {parcelType === type && (
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                )}
              </div>
              <span className="text-sm capitalize">{type}</span>
            </label>
          ))}
        </div>
        {errors.parcelType && (
          <p className="text-red-500 text-sm mb-4">
            Parcel Type is required
          </p>
        )}

        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold mb-1">Parcel Name</p>
            <input
              {...register("parcelName", { required: "Parcel Name is Required" })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Parcel Name"
            />
            {errors.parcelName && (
              <p className="text-red-500 text-sm">
                {errors.parcelName.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold mb-1">Parcel Weight (KG)</p>
            <input
              type="number"
              {...register("parcelWeight", { required: "Parcel Weight is Required" })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Weight"
            />
            {errors.parcelWeight && (
              <p className="text-red-500 text-sm">
                {errors.parcelWeight.message}
              </p>
            )}
          </div>
        </div>

        {/* Sender */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-bold mb-5">Sender Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Sender Name</p>
                  <input
                    {...register("senderName", { required: "Sender Name is Required" })}
                    placeholder="Sender Name"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.senderName && (
                    <p className="text-red-500 text-sm">
                      {errors.senderName.message}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1">Wirehouse</p>
                  <select
                    {...register("senderWirehouse", { required: "Wirehouse is Required" })}
                    className="border px-3 py-2 rounded w-full"
                  >
                    <option value="">Select Wirehouse</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                  </select>
                  {errors.senderWirehouse && (
                    <p className="text-red-500 text-sm">
                      {errors.senderWirehouse.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Address</p>
                  <input
                    {...register("senderAddress", { required: "Sender Address is Required" })}
                    placeholder="Address"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.senderAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.senderAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1">Contact No</p>
                  <input
                    {...register("senderContact", { required: "Contact No is Required" })}
                    placeholder="Phone"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.senderContact && (
                    <p className="text-red-500 text-sm">
                      {errors.senderContact.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-1">Region</p>
                <select
                  {...register("senderRegion", { required: "Region is Required" })}
                  className="border px-3 py-2 rounded w-full"
                >
                  <option value="">Select Region</option>
                  <option>Dhaka Division</option>
                  <option>Chattogram Division</option>
                  <option>Sylhet Division</option>
                </select>
                {errors.senderRegion && (
                  <p className="text-red-500 text-sm">
                    {errors.senderRegion.message}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold mb-1">
                  Pickup Instruction
                </p>
                <textarea
                  {...register("pickupInstruction", {
                    required: "Pickup Instruction is Required",
                  })}
                  placeholder="Pickup Instruction"
                  className="border px-3 py-2 rounded w-full"
                />
                {errors.pickupInstruction && (
                  <p className="text-red-500 text-sm">
                    {errors.pickupInstruction.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="font-bold mb-5">Receiver Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Receiver Name</p>
                  <input
                    {...register("receiverName", { required: "Receiver Name is Required" })}
                    placeholder="Receiver Name"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.receiverName && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverName.message}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1">Wirehouse</p>
                  <select
                    {...register("receiverWirehouse", { required: "Wirehouse is Required" })}
                    className="border px-3 py-2 rounded w-full"
                  >
                    <option value="">Select Wirehouse</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                  </select>
                  {errors.receiverWirehouse && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverWirehouse.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Address</p>
                  <input
                    {...register("receiverAddress", { required: "Receiver Address is Required" })}
                    placeholder="Address"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.receiverAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1">Contact No</p>
                  <input
                    {...register("receiverContact", { required: "Contact No is Required" })}
                    placeholder="Phone"
                    className="border px-3 py-2 rounded w-full"
                  />
                  {errors.receiverContact && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverContact.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-1">Region</p>
                <select
                  {...register("receiverRegion", { required: "Region is Required" })}
                  className="border px-3 py-2 rounded w-full"
                >
                  <option value="">Select Region</option>
                  <option>Dhaka Division</option>
                  <option>Chattogram Division</option>
                  <option>Sylhet Division</option>
                </select>
                {errors.receiverRegion && (
                  <p className="text-red-500 text-sm">
                    {errors.receiverRegion.message}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold mb-1">
                  Delivery Instruction
                </p>
                <textarea
                  {...register("deliveryInstruction", {
                    required: "Delivery Instruction is Required",
                  })}
                  placeholder="Delivery Instruction"
                  className="border px-3 py-2 rounded w-full"
                />
                {errors.deliveryInstruction && (
                  <p className="text-red-500 text-sm">
                    {errors.deliveryInstruction.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <p>* PickUp Time 4pm-7pm Approx.</p>

          <button className="bg-green-500 text-white px-12 py-2 rounded mt-6 cursor-pointer">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPercel;