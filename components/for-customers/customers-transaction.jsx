import React from "react";
import transaction from "../for-dashboard/transaction";
import { getStatusClass } from "@/pages/customers/customers";
import { useNavigate } from "react-router-dom";

function CustomerTransaction() {
  let navigate = useNavigate();


  function showTransactionDetails(id) {
    navigate(`/customers/transactions/${id}`);
  }
  return (
    <>
      <table className="min-w-full bg-white rounded-lg text-sm my-6 overflow-hidden">
        <thead className=" text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium">Transaction ID</th>
            <th className=" py-3 text-sm font-medium">Description</th>
            <th className="py-3 text-sm font-medium">Amount</th>
            <th className=" py-3 text-sm text-center font-medium">Date</th>
            <th className=" py-3 text-sm font-medium text-center">Status</th>
          </tr>
        </thead>
        {transaction.map((t, index) => (
          <tbody key={index} className="text-gray-600 cursor-pointer">
            <tr
              className="border-t border-t-gray-300"
              onClick={() => {
                showTransactionDetails(t.id);
              }}
            >
              <td className="px-3 py-4">{t.id}</td>
              <td className=" py-4">{t.description}</td>
              <td className=" py-4">₦{t.amount}</td>
              <td className=" text-center py-4">{t.date}</td>
              <td className="text-center py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="m-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 10 of 10 </p>
        <div className="flex gap-2 items-center">
          <p>Page 1 of 1</p>
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="../src/assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="../src/assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerTransaction;
