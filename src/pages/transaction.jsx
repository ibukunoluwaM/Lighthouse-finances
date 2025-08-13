import React from "react";
import transaction from "../../components/for-dashboard/transaction";
import { getStatusClass } from "./customers/customers";
import CustomerTime from "../../components/for-customers/customers-time";
import CustomerType from "../../components/for-customers/customers-type";
import CustomerCategory from "../../components/for-customers/cusomers-category";
import CustomerStatus from "../../components/for-customers/customers-status";
import { useNavigate, useParams } from "react-router-dom";

export function shortenDescription(description, x) {
  if (description.length <= x) {
    return description;
  } else {
    return `${description.slice(0, x)}...`;
  }
}

function Transaction() {
  let navigate = useNavigate();

  function showUserDetails(id) {
    navigate(`/customers/${id}`);
  }

  function showTransactionDetails(id) {
    navigate(`/customers/transactions/${id}`);
  }

  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar">
      <h2 className="text-2xl my-6 font-bold">Transactions</h2>

      <div className="flex gap-2">
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg border border-gray-400 ">
          <img
            src="/assets/leadingIcon.png"
            alt="search"
            className=""
          />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search customers, assets, transactions..."
          />
        </label>
        <CustomerTime />
        <CustomerType />
        <CustomerCategory />
        <CustomerStatus />
      </div>
      <table className="min-w-[95%] bg-white rounded-lg text-sm my-6 overflow-hidden">
        <thead className=" text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium">Transaction ID</th>
            <th className=" py-3 text-sm font-medium">Name</th>
            <th className="py-3 text-sm font-medium">Description</th>
            <th className=" py-3 text-sm text-center font-medium">Amount</th>
            <th className=" py-3 text-sm text-center font-medium">Date</th>

            <th className=" py-3 text-sm font-medium text-center">Status</th>
          </tr>
        </thead>
        {transaction.map((t, index) => (
          <tbody key={index} className="text-gray-600 cursor-pointer">
            <tr className="border-t border-t-gray-300">
              <td
                className="text-[#0D0D0D] font-medium px-3 py-4"
                onClick={() => {
                  showTransactionDetails(t.id);
                }}
              >
                {t.id}
              </td>
              <td
                className="text-[#0D0D0D] underline font-medium py-4"
                onClick={() => {
                  showUserDetails(1);
                }}
              >
                {t.name}
              </td>
              <td
                className=" py-4"
                onClick={() => {
                  showTransactionDetails(t.id);
                }}
              >
                {shortenDescription(t.description, 10)}
              </td>

              <td
                className="text-[#0D0D0D] text-center font-medium py-4"
                onClick={() => {
                  showTransactionDetails(t.id);
                }}
              >
                {t.amount}
              </td>
              <td
                className=" text-center py-4"
                onClick={() => {
                  showTransactionDetails(t.id);
                }}
              >
                {t.date}
              </td>
              <td className="text-center py-4">
                <span
                  onClick={() => {
                    showTransactionDetails(t.id);
                  }}
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
        <p className="text-sm text-[#666666] ">Showing 10 of 5,392 </p>
        <div className="flex gap-2 items-center">
          <p>Page 1 of 54</p>
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="/assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="/assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
