import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
      const [search, setSearch] = useState("");
  const { user } = useAuth();

  // 🔥 Fetch payment data
  const {
    data: payments = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);

  // 🔄 Loading
  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading Payment History...</p>
      </div>
    );
  }

  // ❌ Error
  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-red-500">Failed to load data</p>
      </div>
    );
  }

  // 💰 Total calculation


  // 🔍 Filter payments
  const filteredPayments = payments.filter((p) =>
    p.transactionId.toLowerCase().includes(search.toLowerCase())
  );

  // 💰 Total
  const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
   <div className="p-6 space-y-6">

      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold">💳 Payment History</h2>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by Transaction ID..."
          className="input input-bordered w-full md:w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📊 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-gray-500">Total Payments</h4>
          <p className="text-2xl font-bold">{payments.length}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-gray-500">Total Paid</h4>
          <p className="text-2xl font-bold text-green-600">
            ${totalPaid}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-gray-500">Status</h4>
          <p className="text-2xl font-bold text-green-500">All Paid</p>
        </div>
      </div>

      {/* 📊 Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>#</th>
              <th>Parcel</th>
              <th>Amount</th>
              <th>Transaction</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

         <tbody>
  {filteredPayments.map((payment, index) => (
    <tr key={payment._id} className="border-b">
      <td className="py-2 px-3">{index + 1}</td>

      <td className="py-2 px-3 text-sm">
        {payment.parcelId}
      </td>

      <td className="py-2 px-3 font-medium">
        ${payment.amount}
      </td>

      <td className="py-2 px-3 text-sm">
        {payment.transactionId}
      </td>

      <td className="py-2 px-3">
        <span
          className={`px-2 py-1 rounded text-white text-xs ${
            payment.status === "paid"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {payment.status}
        </span>
      </td>

      <td className="py-2 px-3 text-sm">
        {new Date(payment.date).toLocaleDateString()}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>

      {/* 🚫 Empty */}
      {filteredPayments.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No payment found 🔍
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
