import React from "react";
import CustomerTime from "../../components/for-customers/customers-time";
import CustomerType from "../../components/for-customers/customers-type";
import CustomerCategory from "../../components/for-customers/cusomers-category";
import CustomerKYC from "../../components/for-customers/customers-kyc";
import CustomerStatus from "../../components/for-customers/customers-status";
import CustomerLevel from "../../components/for-customers/customers-level";
import { getStatusClass } from "./customers/customers";
import { shortenDescription } from "./transaction";
import { useNavigate,  } from "react-router-dom";

export const loans = [
  {
    id: 1,
    ref: "lon_f5r3i354224",
    name: "Joseph Awolowo",
    type: "Individual",
    category: "Lighthouse Education",
    amount: "₦250,000.00",
    date: "Apr 7, 2025 10:34 AM",
    status: "New",
    purpose: "-",
  },

  {
    id: 2,
    ref: "lon_3r342224kj",
    name: "David Zakariya",
    type: "Corporate",
    category: "Lighthouse Export Finance (LEF)",
    amount: "₦1,250,000.00",
    date: "Apr 21, 2025 1:34 PM",
    status: "Processing",
    purpose: "-",
  },

  {
    id: 3,
    ref: "lon_f53wkek332",
    name: "Elizabeth Ebizi",
    type: "Individual",
    category: "Lighthouse Education",
    amount: "₦500,000.00",
    date: "Apr 9, 2025 9:04 PM",
    status: "On hold",
    purpose: "Further my studies in business administration.",
  },
  {
    id: 4,
    ref: "lon_4kr43fei42",
    name: "Priscilla Olabode",
    type: "Individual",
    category: "Lighthouse SME Zoom",
    amount: "₦25,000.00",
    date: "Apr 15, 2025 1:34 PM",
    status: "Processing",
    purpose: "-",
  },

  {
    id: 5,
    ref: "lon_jkfnei3mw2",
    name: "Peter Ateli",
    type: "Corporate",
    category: "Lighthouse SME Zoom",
    amount: "₦900,500.00",
    date: "Apr 6, 2025 9:10 AM",
    status: "Rejected",
    purpose: "Business purposes.",
  },

  {
    id: 6,
    ref: "lon_dwdr929eww",
    name: "Victoria Nwachukwu",
    type: "Individual",
    category: "Lighthouse Women Initiative (LWI)",
    amount: "₦50,000.00",
    date: "Apr 1, 2025 7:45 AM",
    status: "Active",
    purpose: "Business Expansion - new equipment purchase.",
  },
  {
    id: 7,
    ref: "lon_z0cwfer222",
    name: "Peter Gambo",
    type: "Corporate",
    category: "Lighthouse Export Finance (LEF)",
    amount: "₦2,000,000.00",
    date: "Mar 30, 2025 11:10 AM",
    status: "Awaiting",
    purpose: "Business Expansion - new equipment purchase.",
  },
  {
    id: 8,
    ref: "lon_f03wfei433",
    name: "Lydia Musa",
    type: "Corporate",
    category: "Lighthouse SME Zoom",
    amount: "₦50,000.00",
    date: "Mar 28, 2025 10:34 AM",
    status: "Declined",
  },
  {
    id: 9,
    ref: "lon_3o12krjfjs9",
    name: "Grace Kawu",
    type: "Individual",
    category: "Lighthouse Education",
    amount: "₦85,000.00",
    date: "Mar 21, 2025 1:34 PM",
    status: "Pending",
    purpose: "Business Expansion - new equipment purchase.",
  },
  {
    id: 10,
    ref: "lon_jkfn32ke3o",
    name: "Jasmine Omisore",
    type: "Corporate",
    category: "Lighthouse Women Initiative (LWI)",
    amount: "₦250,000.00",
    date: "Mar 10, 2025 12:32 PM",
    status: "Repaid",
    purpose: "Business Expansion - new equipment purchase.",
  },
];
function Loan() {
  let navigate = useNavigate();

  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Loans</h2>
        <button className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
          <span>Export</span>
          <img src="./src/assets/import.png" alt="import" />
        </button>
      </div>

      <div className="flex gap-4 my-3 ">
        {/* search bar */}
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg border border-gray-300">
          <img src="./src/assets/leadingIcon.png" alt="search" className="" />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search customers, assets, transactions..."
          />
        </label>

        <CustomerType />
        <CustomerCategory />
        <CustomerStatus />
        <CustomerLevel />
      </div>

      <table className="min-w-full bg-white rounded-lg text-sm overflow-hidden p-8">
        <thead className=" px-2 text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium">Reference</th>
            <th className=" py-3 text-sm font-medium">Customer</th>
            <th className="py-3 text-sm font-medium">Type</th>
            <th className=" py-3 text-sm font-medium">Category</th>
            <th className=" py-3 text-sm font-medium">Date</th>
            <th className=" py-3 text-sm font-medium">Status</th>
          </tr>
        </thead>
        {loans.map((t, index) => (
          <tbody key={index} className=" cursor-pointer">
            <tr
              className="border-t border-t-gray-300"
              onClick={t.status==="Declined" ? undefined :() => navigate(`/loans/loanDetail/${t.id}`)}
            >
              <td className="px-4 font-medium text-[#0D0D0D]">{t.ref}</td>
              <td className="py-4 underline font-bold text-black">{t.name}</td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.type
                  )}`}
                >
                  {t.type}
                </span>
              </td>
              <td className=" py-4 text-[#666666]">
                {shortenDescription(t.category, 16)}
              </td>
              <td className=" py-4">{t.date}</td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-[#666666] text-sm rounded-full ${getStatusClass(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
            {/* Repeat rows here */}
          </tbody>
        ))}
      </table>

      <div className="mt-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-[#666666] ">Showing 10 of 124 </p>
        <div className="flex items-center">
          <p className="font-medium mr-4 text-sm">Page 1 of 13</p>
          <button className="bg-white mr-2 border-gray-300  cursor-pointer rounded-md p-3 outline-none">
            <img src="./src/assets/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="bg-white border-gray-300 rounded-md cursor-pointer p-3 outline-none">
            <img src="./src/assets/arrow-right.png" alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loan;
