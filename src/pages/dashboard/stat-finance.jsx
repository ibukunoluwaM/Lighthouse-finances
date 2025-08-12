import { React } from "react";
import { StatContext } from "./statContext";

const loanDetails = [
  {
    name: "Lighthouse Women Initiative (LWI)",
    subscribers: 321,
    value: "12, 709, 301.55",
  },
  {
    name: "Lighthouse SME Zoom",
    subscribers: 223,
    value: "709, 449.33",
  },
  {
    name: "Lighthouse InitEducation",
    subscribers: 167,
    value: "543,301.55",
  },
  {
    name: "Lighthouse Export Finance (LEF)",
    subscribers: 99,
    value: "212,474.322",
  },
];
export default function StatFinance() {
  return (
    <div className="mt-4 bg-white rounded-lg py-2 px-4">
      <h2 className="flex justify-between items-center my-3">
        <span className="font-bold text-sm">
          Loan Subscribers <img src="/assets/Info-icon.png" alt="" />
        </span>
        <span className="text-[#0F8ECD] text-sm">
          <img src="/assets/file-text.png" alt="" />
        </span>
      </h2>
      <p className="text-2xl font-bold">2,122</p>

      {/* loan tables */}
      <div className="bg-white mt-4 border border-gray-300 rounded-md  py-2 text-sm">
        <table className="min-w-full bg-white  rounded-lg overflow-hidden">
          <thead className=" text-left text-gray-700">
            <tr>
              <th className="px-2  py-3 text-sm font-medium">Product</th>
              <th className="px-2 py-3 text-center text-sm font-medium">
                Subscribers
              </th>
              <th className="px-2 py-3 text-center text-sm font-medium">
                Value
              </th>
            </tr>
          </thead>
          {loanDetails.map((t, index) => (
            <tbody key={index} className="text-gray-600 cursor-pointer">
              <tr className="border-t border-t-gray-300">
                <td className="px-2 py-4">{t.name}</td>
                <td className="px-2  text-center py-4">{t.subscribers}</td>
                <td className="px-2 text-center py-4">₦{t.value}</td>
              </tr>
              {/* Repeat rows here */}
            </tbody>
          ))}
        </table>
      </div>

      <div className="mt-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 4 of 4 </p>
        <div className="">
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
