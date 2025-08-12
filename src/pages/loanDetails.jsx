import React, { useState } from "react";
import { loans } from "./loans";
import { useParams, useNavigate } from "react-router-dom";
import LoanRepaid from "../../components/for-loans/loan-repaid";
import { getStatusClass } from "./customers/customers";
const navs = ["Application Details", "KYC Documents", "Credit Check", "Notes"];

function LoanDetails() {
  const [activeNav, setActiveNav] = useState(navs[0]);
  // const [identityCheck, setIdentityCheck] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  let selectedLoan = loans.find((c) => {
    return c.id === Number(id);
  });

  return (
    <div className="w-[100%] mx-2">
      {/* first side */}
      <div className=" flex mt-4 items-center gap-5">
        <div
          className=" w-[35px] h-[35px] bg-white p-2 rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src="..//assets/arrow-left-button.png" alt="" />
        </div>

        <div className="flex flex-col">
          <p className="text-md font-medium">{selectedLoan.ref}</p>

          <p className={"text-xs text-[#666666]"}>{selectedLoan.date}</p>
        </div>
        <p
          className={`text-sm font-medium ${getStatusClass(
            selectedLoan.status
          )}`}
        >
          {selectedLoan.status}
        </p>
      </div>
      {/* navs */}
      <ul className="flex gap-5 text-sm mt-6 cursor-pointer">
        {navs.map((nav, index) => (
          <li
            key={index}
            className={`${activeNav === nav ? "border-b-2" : ""}`}
            onClick={() => setActiveNav(nav)}
          >
            {nav}
          </li>
        ))}
      </ul>

      {activeNav === "Application Details" && (
        <div className="bg-white w-[100%] rounded-md px-4 py-2 mt-4">
          <h2 className="font-bold my-2">Application Details</h2>
          <div className="flex">
            {/* 1 */}

            <div className="flex-1">
              <p className="mt-1 text-sm text-[#666666]">
                Customer
                <span className="block mt-1 underline font-bold text-[#0D0D0D]">
                  {selectedLoan.name}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Account Balance
                <span className="block mt-1 underline font-bold text-[#0D0D0D]">
                  ₦556,738.99
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Loan Amount
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.amount}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Loan Type
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.type}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Period
                <span className="block mt-1 text-[#0D0D0D]">6 months</span>
              </p>
            </div>
            {/* 2 */}
            <div className="flex-1">
              <p className="mt-4 text-sm text-[#666666]">
                Referencee
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.ref}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Account Type
                <span className="block mt-1 text-[#0D0D0D]">CSCS</span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Date
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.date}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Category
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.category}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Loan Purpose
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedLoan.purpose}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {activeNav === "KYC Documents" && (
        <div className="bg-white w-[100%] rounded-md px-4 py-2 mt-4">
          <h2 className="font-bold my-2 flex justify-between">KYC Documents
            <span>Approved</span>
          </h2>
          <div className="flex">
            <h3>Identity Document</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanDetails;
