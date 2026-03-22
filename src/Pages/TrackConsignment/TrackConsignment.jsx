
import { useState } from "react";
import { useForm } from "react-hook-form";

// Mock data simulating an API response for a tracking code
const MOCK_DATA = {
  "01JWJVEXWZ9823Q7H5H55YV7": {
    product: {
      date: "May 31, 2025 03:41 pm",
      id: "148976175",
      invoice: "24227",
      trackingCode: "01JWJVEXWZ9823Q7H5H55YV7",
      name: "Zahid Hossain",
      address: "Madrasha Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD",
      phone: "01780448866",
      approved: "N/A",
      weight: "KG",
      cod: "৳ 0",
      status: "Pending",
    },
    updates: [
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
      { date: "Jun 02, 2025", time: "12:21 am", message: "Assigned to rider." },
    ],
  },
};

const STATUS_COLORS = {
  Pending: "text-yellow-500",
  Delivered: "text-green-600",
  Cancelled: "text-red-500",
  Processing: "text-blue-500",
};

function InfoRow({ label, value }) {
  return (
    <p className="text-sm text-gray-700">
      <span className="font-semibold">{label} : </span>
      <span className="font-normal">{value}</span>
    </p>
  );
}

function CheckIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function TrackConsignment() {
  const [result, setResult] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [notFound, setNotFound] = useState(false);
  const [searched, setSearched] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSearch = ({ trackingCode }) => {
    const code = trackingCode.trim();
    setSearched(true);
    if (MOCK_DATA[code]) {
      setResult(MOCK_DATA[code]);
      setNotFound(false);
    } else {
      // Show demo data for any input (for demo purposes)
      const demoKey = Object.keys(MOCK_DATA)[0];
      setResult({ ...MOCK_DATA[demoKey], product: { ...MOCK_DATA[demoKey].product, trackingCode: code || MOCK_DATA[demoKey].product.trackingCode } });
      setNotFound(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="w-full max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Track Your Consignment</h1>
        <p className="text-sm text-gray-500 mb-8">Now you can easily track your consignment</p>

        {/* Search Bar */}
        <div className="flex items-center gap-0 mb-10 max-w-md border rounded-full">
          <div className="flex items-center flex-1 border bg-white rounded-l-full px-4 py-2.5 shadow-sm">
            <svg className="w-4 h-4 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              {...register("trackingCode")}
              type="text"
              placeholder="Search tracking code here"
              className="flex-1 text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
          <button
            onClick={handleSubmit(onSearch)}
            className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-r-full transition-colors"
          >
            Search
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Product Details Card */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Product details</h2>

              <div className="flex flex-col gap-1.5 mb-4">
                <p className="text-sm text-gray-500">{result.product.date}</p>
                <InfoRow label="Id" value={result.product.id} />
                <InfoRow label="Invoice" value={result.product.invoice} />
                <InfoRow label="Tracking Code" value={result.product.trackingCode} />
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-col gap-1.5 mb-4">
                <InfoRow label="Name" value={result.product.name} />
                <InfoRow label="Address" value={result.product.address} />
                <InfoRow label="Phone Number" value={result.product.phone} />
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-col gap-1.5">
                <InfoRow label="Approved" value={result.product.approved} />
                <InfoRow label="Weight" value={result.product.weight} />
                <InfoRow label="COD" value={result.product.cod} />
                <p className={`text-sm font-semibold mt-1 ${STATUS_COLORS[result.product.status] || "text-gray-600"}`}>
                  {result.product.status}
                </p>
              </div>
            </div>

            {/* Tracking Updates Card */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Tracking Updates</h2>

              <div className="flex flex-col gap-5">
                {result.updates.map((update, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-xs text-gray-500 w-24 shrink-0 leading-relaxed">
                      <p>{update.date}</p>
                      <p>{update.time}</p>
                    </div>
                    <CheckIcon />
                    <p className="text-sm text-gray-700">{update.message}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Empty state before search */}
        {!searched && (
          <div className="text-center py-16 text-gray-400 text-sm">
            Enter a tracking code above and press <span className="font-semibold text-green-500">Search</span> to see results.
          </div>
        )}

      </div>
    </div>
  );
}