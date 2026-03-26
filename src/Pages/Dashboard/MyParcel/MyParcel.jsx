import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const MyParcel = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myParcel", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  // ✅ Loading State
  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">
        <h1 className="text-xl md:text-7xl font-bold flex items-center">
          L
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="animate-spin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
          </svg>{" "}
          ading . . .
        </h1>
      </div>
    );
  }

  // ✅ Error State
  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load parcels
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Parcel deleted successfully", "success");

            refetch(); // ✅ correct way
          }
        });
      }
    });
  };

  const handlePayment = (id) => {
    // console.log(id);
    navigate(`/dashboard/payment/${id}`);
  };

  
  return (
    <div className="px-6 pb-6">
      <h2 className="text-2xl font-bold mb-6">My Parcels ({parcels.length})</h2>

      {/* Empty State */}
      {parcels.length === 0 && (
        <div className="text-center text-gray-500">No parcels found</div>
      )}

      {/* Parcel Cards */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {parcels.map((parcel) => (
          <div
            key={parcel._id}
            className="relative bg-linear-to-br from-white to-gray-50 border border-gray-400 rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 group"
          >
            {/* ✅ Delete Icon (Hover) */}
            <button
              onClick={() => handleDelete(parcel._id)}
              className="border cursor-pointer absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition duration-300 transform hover:scale-110 bg-red-100 hover:bg-red-500 text-red-600 hover:text-white p-2 rounded-full shadow"
            >
              <MdDelete size={17} />
            </button>

            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {parcel.parcelName}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {parcel.trackingId}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium border ${
                  parcel.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {parcel.status}
              </span>
            </div>

            {/* Divider */}
            <div className="my-4 border-t"></div>

            {/* Route Section */}
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="text-gray-400">From</p>
                <p className="font-semibold text-gray-700">
                  {parcel.senderRegion}
                </p>
              </div>

              <div className="text-gray-300 text-xl">➝</div>

              <div className="text-right">
                <p className="text-gray-400">To</p>
                <p className="font-semibold text-gray-700">
                  {parcel.receiverRegion}
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-xs text-gray-400">Cost</p>
                <p className="text-lg font-bold text-blue-600">
                  ৳ {parcel.cost}
                </p>
              </div>

              <button
                onClick={() => setSelectedParcel(parcel)}
                className="cursor-pointer px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition transform hover:scale-105"
              >
                Details →
              </button>
            </div>

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-linear-to-r from-blue-100/20 to-purple-100/20"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedParcel && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {selectedParcel.parcelName}
                </h2>
                <p className="text-xs text-gray-500">
                  {selectedParcel.trackingId}
                </p>
              </div>

              <button
                onClick={() => setSelectedParcel(null)}
                className="cursor-pointer text-gray-500 hover:text-black text-lg border px-1.5 font-bold border-gray-950  rounded-full"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 text-sm">
              {/* Status + Cost */}
              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    selectedParcel.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {selectedParcel.status}
                </span>

                <p className="font-semibold text-blue-600">
                  ৳ {selectedParcel.cost}
                </p>
              </div>

              {/* From - To */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs">From</p>
                  <p className="font-medium">{selectedParcel.senderAddress}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">To</p>
                  <p className="font-medium">
                    {selectedParcel.receiverAddress}
                  </p>
                </div>
              </div>

              {/* Sender & Receiver */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs">Sender</p>
                  <p>{selectedParcel.senderName}</p>
                  <p className="text-xs text-gray-500">
                    {selectedParcel.senderContact}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Receiver</p>
                  <p>{selectedParcel.receiverName}</p>
                  <p className="text-xs text-gray-500">
                    {selectedParcel.receiverContact}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-400">Type</p>
                  <p className="font-medium">{selectedParcel.parcelType}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-400">Weight</p>
                  <p className="font-medium">{selectedParcel.parcelWeight}kg</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-400">Date</p>
                  <p className="font-medium">
                    {new Date(selectedParcel.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <p className="text-gray-400 text-xs mb-1">Instructions</p>
                <p className="text-gray-700 text-sm">
                  {selectedParcel.pickupInstruction} |{" "}
                  {selectedParcel.deliveryInstruction}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t px-5 py-3 text-right flex justify-end gap-2">
              <button
                onClick={() => handlePayment(selectedParcel._id)}
                className="cursor-pointer px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
              >
                Payment
              </button>
              <button
                onClick={() => setSelectedParcel(null)}
                className="cursor-pointer px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyParcel;
