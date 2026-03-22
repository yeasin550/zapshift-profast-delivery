import { useNavigate } from "react-router";

const PercelPayment = () => {
  const navigate = useNavigate();

  // 🔥 Static Dummy Data (পরে তুমি change করবে)
  // const trackingId = "TRK-98456321";
  // const cost = 150;

  return (
    <div className="min-h-screen bg-lenear-to-br from-indigo-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            💳 Payment Summary
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Complete your parcel booking
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4 border">

          <div className="flex justify-between">
            <span className="text-gray-500">Tracking ID</span>
            <span className="font-semibold text-green-600">
              TRK-98456321
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Delivery Charge</span>
            <span className="font-semibold">৳ 150</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Service Fee</span>
            <span className="font-semibold">৳ 0</span>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-blue-600">৳ 150</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold mb-3 text-gray-600">
            Select Payment Method
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <button className="border rounded-xl py-3 hover:bg-green-50 transition">
              💵 Cash
            </button>
            <button className="border rounded-xl py-3 hover:bg-blue-50 transition">
              💳 Card
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={() => {
              alert("Payment Successful 🎉");
              navigate("/");
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Pay Now 🚀
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"
          >
            Cancel ❌
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Secure payment powered by your system 🔒
        </p>
      </div>
    </div>
  );
};

export default PercelPayment;