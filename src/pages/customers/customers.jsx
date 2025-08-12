import React from "react";
import SelectMenu from "../selectMenu";
import { useNavigate } from "react-router-dom";
import CustomerTime from "../../../components/for-customers/customers-time";
import CustomerType from "../../../components/for-customers/customers-type";
import CustomerCategory from "../../../components/for-customers/cusomers-category";
import CustomerKYC from "../../../components/for-customers/customers-kyc";
import CustomerStatus from "../../../components/for-customers/customers-status";
import CustomerLevel from "../../../components/for-customers/customers-level";
import { customerDetails } from "../../../components/for-customers/customers-array";

  // get classes for kyc, type and status
 export function getStatusClass(status) {
    if (status === "Rejected" || status === "Inactive" || status==="Failed") {
      return "bg-[#FEF3F2] text-[#B42318]";
    } else if (status === "Pending" || status==="Processing" || status==="Unlisted" || status==="New") {
      return "bg-[#F2F2F2] text-[#666666]";
    } else if (status === "Verified" || status==="Good" || status==="Completed" || status ==="Published" || status === "Approved" || status ==="Paid") {
      return "bg-[#ECFDF3] text-[#027A48]";
    } else if (status === "CSCS" || status==="Fair" || status==="Corporate") {
      return "bg-[#F4F3FF] text-[#5925DC]";
    } else if (status === "DCS" || status==="Individual") {
      return "bg-[#EFF8FF] text-[#175CD3]";
    } else if (status === "Active" || status==="On hold") {
      return "text-[#0F8ECD] bg-[rgba(15,142,205,0.1)]";
    } else if(status==="Awaiting"|| status==="Pending") {
      return "bg-[#FFFAEB] text-[#B54708]"
    } else if (status==="Repaid") {
      return "text-white bg-black"
    } else if(status==="Declined" || status==="Overdue") {
      return "text-[#C11574] bg-[#FDF2FA]"
    }
  }

function Customers() {

  let navigate = useNavigate();

  //navigate user to customers details
  function navigateToDetails(id) {
    navigate(`/customers/${id}`)
  }
  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      {/* heading part */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl my-6 font-bold">Customers</h2>
        <button className="cursor-pointer bg-[#0F8ECD] border-none outline-none flex p-3 rounded-md text-white items-center gap-2 text-sm tracking-wide">
          <span>Export</span>
          <img src="/assets/import.png" alt="import" />
        </button>
      </div>

      <div className="flex gap-4 my-3 ">
        {/* search bar */}
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg border border-gray-300">
          <img src="/assets/leadingIcon.png" alt="search" className="" />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search customers, assets, transactions..."
          />
        </label>

        <CustomerTime />
        <CustomerType />
        <CustomerCategory />
        <CustomerKYC />
        <CustomerStatus />
        <CustomerLevel />
      </div>

      <table className="min-w-full bg-white rounded-lg text-sm overflow-hidden p-8">
        <thead className=" px-2 text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium">Name</th>
            <th className=" py-3 text-sm font-medium">Email</th>
            <th className="py-3 text-sm font-medium">Phone Number</th>
            <th className=" py-3 text-sm font-medium">KYC</th>
            <th className=" py-3 text-sm font-medium">Type</th>
            <th className=" py-3 text-sm font-medium">Status</th>
          </tr>
        </thead>
        {customerDetails.map((t, index) => (
          <tbody key={index} className="text-gray-600 cursor-pointer">
            <tr className="border-t border-t-gray-300" onClick={()=> navigateToDetails(t.id)}>
              <td className="px-4 font-medium text-[#0D0D0D]">{t.firstName} {t.lastName}</td>
              <td className="py-4">{t.email}</td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.phone
                  )}`}
                >
                  {t.phone}
                </span>
              </td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.kyc
                  )}`}
                >
                  {t.kyc}
                </span>
              </td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
                    t.type
                  )}`}
                >
                  {t.type}
                </span>
              </td>
              <td className=" py-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getStatusClass(
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
        <p className="text-sm text-[#666666] ">Showing 10 of 4,523 </p>
        <div className="flex items-center">
          <p className="font-medium mr-4 text-sm">Page 1 of 46</p>
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
export default Customers;
