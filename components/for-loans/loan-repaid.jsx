import React, { useState } from "react";
import { loans } from "@/pages/loans";
import { useParams, useNavigate } from "react-router-dom";
import { getStatusClass } from "@/pages/customers/customers";
let navs = ["Application Details", "KYC Documents", "Credit Check", "Notes"];
let repayment = [
  {
    id: "-",
    amount: "₦11,300.00",
    payment: "-",
    due: "Sep 3, 2025 7:45 AM",
    paid: "-",
    status: "Pending",
  },

  {
    id: "-",
    amount: "₦11,300.00",
    payment: "-",
    due: "Aug 3, 2025 7:45 AM",
    paid: "-",
    status: "Pending",
  },

  {
    id: "-",
    amount: "₦11,300.00",
    payment: "-",
    due: "Jul 3, 2025 7:45 AM",
    paid: "-",
    status: "Overdue",
  },

  {
    id: "rpy_edsd2244t",
    amount: "₦11,300.00",
    payment: "Wallet",
    due: "Jun 3, 2025 7:45 AM",
    paid: "Jun 3, 2025 7:45 AM",
    status: "Paid",
  },

  {
    id: "rpy_2424rese3q",
    amount: "₦11,300.00",
    payment: "Wallet",
    due: "May 3, 2025 7:45 AM",
    paid: "May 3, 2025 7:45 AM",
    status: "Paid",
  },
];
function LoanRepaid() {
  const [activeNav, setActiveNav] = useState(navs[0]);
  const [identityCheck, setIdentityCheck] = useState(false);
  const [reject, setReject] = useState(false);
  const [approve, setApprove] = useState(false);
  const [disburse, setDisburse] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  let selectedLoan = loans.find((c) => {
    return c.id === Number(id);
  });

  selectedLoan.status === "Pending" ||
    (selectedLoan.status === "Awaiting" &&
      (navs = [
        "Application Details",
        "KYC Documents",
        "Credit Check",
        "Approval Details",
        "Notes",
      ]));

  selectedLoan.status === "Active" &&
    (navs = [
      "Application Details",
      "KYC Documents",
      "Credit Check",
      "Approval Details",
      "Repayment Schedule",
      "Notes",
    ]);

  return (
    <div className="w-[100%] px-5  flex-1 overflow-y-scroll hide-scrollbar">
      <div className="flex items-center my-6 gap-3">
        <div
          className=" w-[35px] h-[35px] bg-white p-2 rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src="../../src/assets/arrow-left-button.png" alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-medium">{selectedLoan.ref}</p>

          <div className="flex gap-2">
            <p className={"text-xs text-[#666666]"}>{selectedLoan.date}</p>
          </div>
        </div>
        <p
          className={`text-sm p-1 rounded-full font-medium ${getStatusClass(
            selectedLoan.status
          )}`}
        >
          {selectedLoan.status}
        </p>

        {selectedLoan.status === "On hold" && (
          <div className="ml-auto flex gap-2">
            <button
              className="border-none bg-[#0F8ECD] p-3 text-white rounded-md cursor-pointer"
              onClick={() => setApprove(true)}
            >
              Accept
            </button>
            <button
              className="border-none bg-[#E94A3F] p-3 text-white rounded-md cursor-pointer"
              onClick={() => setReject(true)}
            >
              Reject
            </button>
          </div>
        )}

        {selectedLoan.status === "Awaiting" && (
          <div className="ml-auto flex gap-2">
            <button
              className="border-none bg-[#E94A3F] p-3 text-white rounded-md cursor-pointer"
              onClick={() => setReject(true)}
            >
              Reject
            </button>
          </div>
        )}

        {selectedLoan.status === "Pending" && (
          <div className="ml-auto flex gap-2">
            <button
              className="border-none bg-[#008753] p-3 text-white rounded-md cursor-pointer"
              onClick={() => setDisburse(true)}
            >
              Disburse
            </button>
            <button
              className="border-none bg-[#E94A3F] p-3 text-white rounded-md cursor-pointer"
              onClick={() => setReject(true)}
            >
              Reject
            </button>
          </div>
        )}
      </div>

      {reject && (
        <div
          className=" bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setReject(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[30rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Reject Loan Application</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setReject(false)}
              />
            </h2>

            <p>
              Are you sure you want to reject this loan application?This action
              cannot be undone - customer would have to create a new
              aapplication.
              <label htmlFor="comment" className="block font-medium my-3">
                Reason (Optional)
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
            </p>
            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setReject(false)}
            >
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#E94A3F] border-none rounded-md cursor-pointer">
                Reject Application
              </button>
            </div>
          </form>
        </div>
      )}

      {approve && (
        <div
          className=" bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setApprove(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[30rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Approve Loan Application</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setApprove(false)}
              />
            </h2>

            <p className="my-3">
              Are you sure you want to reject this loan application? Confirm the
              application details below aapplication.
            </p>

            <label htmlFor="" className="mt-3 block text-sm text-[#666666]">
              Amount
            </label>
            <input
              type="text"
              name=""
              id=""
              defaultValue={"₦500,000.00"}
              className="p-3 my-2 w-[100%] border border-gray-600 rounded-sm"
            />

            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label htmlFor="" className="mt-2 block text-sm text-[#666666]">
                  Period
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={"3 months"}
                  className="p-3 my-2 w-[100%] border border-gray-600 rounded-sm"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="" className="mb-2 block text-sm text-[#666666]">
                  Interest %
                </label>
                <p className="flex justify-between border border-gray-600 p-2 rounded-sm mt-1.4">
                  13
                  <span>%</span>
                </p>
              </div>
            </div>

            <label
              htmlFor="comment"
              className="block font-medium my-3  text-sm text-[#666666]"
            >
              Note (Optional)
            </label>

            <textarea
              name="comment"
              id="comment"
              rows="4"
              placeholder="Enter notes"
              className="w-full p-2 border rounded"
            ></textarea>
            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setApprove(false)}
            >
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#0F8ECD] border-none rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {disburse && (
        <div
          className=" bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setDisburse(false)}
        >
          <form
            action=""
            className="bg-white p-4 w-[30rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Disburse Loan</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setDisburse(false)}
              />
            </h2>

            <p>
              Are you sure you want to disburse this loan? Approved amount would
              be disbursed to custoemr's wallet
            </p>

            <label htmlFor="" className="mt-3 block text-sm text-gray-400">
              Amount
            </label>
            <input
              type="text"
              name=""
              id=""
              disabled={true}
              defaultValue={"₦1,500,000.00"}
              className="p-3 my-2 w-[100%] border border-gray-600 rounded-sm"
            />
            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 "
              onClick={() => setApprove(false)}
            >
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#0F8ECD] border-none rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <ul className="cursor-pointer flex gap-5 mt-2 text-sm">
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

      {/* application details */}
      {activeNav === "Application Details" && (
        <div className="p-2  mt-3 bg-white p-3 rounded-md">
          <h2 className="font-bold mb-1">Application Details</h2>

          <div className="flex">
            {/* 1 */}
            <div className="flex-1">
              <p
                className="cursor-pointer mt-4 text-sm text-[#666666]"
                onClick={() => navigate("/customers/1")}
              >
                Customer
                <span className="font-bold underline block mt-1 text-[#0D0D0D]">
                  {selectedLoan.name}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Account Balance
                <span className="font-bold underline block mt-1 text-[#0D0D0D]">
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
                <span
                  className={`w-[15%] text-center block mt-1 text-[#0D0D0D] p-1 rounded-full ${getStatusClass(
                    selectedLoan.status
                  )}`}
                >
                  {selectedLoan.status}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Period
                <span className="font-medium block mt-1 text-[#0D0D0D]">
                  6 months
                </span>
              </p>
            </div>

            {/* 2 */}
            <div className="flex-1">
              <p className="mt-4 text-sm text-[#666666]">
                Reference
                <span className="block flex gap-1 mt-1 text-[#0D0D0D]">
                  {selectedLoan.ref}

                  <img
                    className="cursor-pointer"
                    src="../src/assets/copy.png"
                    alt=""
                  />
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Account Type
                <span className="w-[10%] text-center   block mt-1 bg-[#F4F3FF] text-[#5925DC] p-1 rounded-full">
                  CSCS
                </span>
              </p>
              <p className="mt-4 text-sm text-[#666666]">
                Date
                <span className=" block mt-1 text-[#0D0D0D]">
                  {selectedLoan.date}
                </span>
              </p>
              <p className="mt-4 text-sm text-[#666666]">
                Category
                <span className=" block mt-1 text-[#0D0D0D]">
                  {selectedLoan.category}
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Loan Purpose
                <span className=" block mt-1 text-[#0D0D0D]">
                  {selectedLoan.purpose}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* kyc documents */}
      {activeNav === "KYC Documents" && (
        <div className="p-2  mt-3 bg-white p-3 rounded-md">
          <h2 className="flex justify-between font-bold mb-2">
            Credit Check
            <p className="text-[#027A48] bg-[#ECFDF3] p-1 rounded-full font-light text-xs">
              Approved
            </p>
          </h2>

          <div>
            <h4 className="my-3 font-medium"> Identity Document</h4>

            <div className="flex">
              <p className="flex-1 cursor-pointer  text-sm text-[#666666]">
                ID Number
                <span className="font-bold block mt-1 text-[#0D0D0D]">
                  31324242421
                </span>
              </p>

              <p className="flex-1 cursor-pointe text-sm text-[#666666]">
                Document
                <span
                  className="cursor-pointer underline font-bold underline block mt-1 text-[#0D0D0D] cursor-pointer"
                  onClick={() => setIdentityCheck(true)}
                >
                  VotersCard_AwolowoJ.jpeg
                </span>
              </p>
            </div>
          </div>

          <hr className="w-[100%] my-4 border border-gray-300" />

          <div>
            <h4 className="my-3 font-medium">Proof of Income</h4>

            <div className="flex">
              <p className="flex-1 cursor-pointer  text-sm text-[#666666]">
                ID Number
                <span className="font-bold block mt-1 text-[#0D0D0D]">
                  31324423555
                </span>
              </p>

              <p className="font-medium flex-1 cursor-pointe text-sm text-[#666666]">
                Document
                <span
                  className="cursor-pointer underline font-bold underline block mt-1 text-[#0D0D0D]"
                  onClick={() => setIdentityCheck(true)}
                >
                  PoInvome_AwolowoJ.pdf
                </span>
              </p>
            </div>
          </div>

          <hr className="w-[100%] my-4 border border-gray-300" />

          <div>
            <h4 className="my-3 font-medium">Proof of Address</h4>

            <div className="flex">
              <p className="font-medium flex-1 cursor-pointer  text-sm text-[#666666]">
                ID Number
                <span className="font-bold block mt-1 text-[#0D0D0D]">
                  34409042224
                </span>
              </p>

              <p className="font-medium flex-1 cursor-pointe text-sm text-[#666666]">
                Document
                <span
                  className="cursor-pointer underline font-bold underline block mt-1 text-[#0D0D0D]"
                  onClick={() => setIdentityCheck(true)}
                >
                  Utility-bill.pdf
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {activeNav === "Credit Check" && (
        <div className="p-2  mt-3 bg-white p-3 rounded-md">
          <div className="flex justify-between">
            <h2>Credit Check</h2>

            <p className="text-sm">
              <span className="mr-2 text-[#0F8ECD]">Accept</span>
              <span className="text-[#E94A3F]">Reject</span>
            </p>
          </div>

          <div className="flex">
            <p
              className="flex-1 cursor-pointer mt-4 text-sm text-[#666666]"
              onClick={() => navigate("/customers/1")}
            >
              Credit Score
              <span className="font-medium block mt-1 text-[#0D0D0D]">
                713/850
              </span>
            </p>

            <p
              className="flex-1 cursor-pointer mt-4 text-sm text-[#666666]"
              onClick={() => navigate("/customers/1")}
            >
              Credit Rating
              <span className=" block mt-1 text-[#0D0D0D]">Good</span>
            </p>

            <p
              className="flex-1 cursor-pointer mt-4 text-sm text-[#666666]"
              onClick={() => navigate("/customers/1")}
            >
              Risk
              <span className="block mt-1 text-[#0D0D0D]">Medium</span>
            </p>
          </div>
        </div>
      )}

      {activeNav === "Approval Details" && (
        <div className="p-2  mt-3 bg-white p-3 rounded-md">
          <h2 className="font-bold mb-1">Approval Details</h2>

          <div className="flex">
            {/* 1 */}
            <div className="flex-1">
              <p className="cursor-pointer mt-4 text-sm text-[#666666]">
                Amount
                <span className="font-medium  block mt-1 text-[#0D0D0D]">
                  ₦1,500,000.00
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Installment Amount
                <span className="font-medium block mt-1 text-[#0D0D0D]">
                  ₦150,385.33
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Start Date
                <span className=" font-medium block mt-1 text-[#0D0D0D]">
                  Mar 31, 2025 12:00 PM
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Period
                <span
                  className={` font-medium block mt-1 text-[#0D0D0D] p-1 rounded-full `}
                >
                  12 months
                </span>
              </p>
            </div>

            {/* 2 */}
            <div className="flex-1">
              <p className="mt-4 text-sm text-[#666666]">
                Interest
                <span className=" font-medium block mt-1 text-[#0D0D0D]">
                  20% (₦300,000.00)
                </span>
              </p>

              <p className="mt-4 text-sm text-[#666666]">
                Accepted
                <span className=" font-medium block mt-1  text-[#0D0D0D] p-1 rounded-full">
                  Apr 11, 2025 12:31 PM
                </span>
              </p>
              <p className="mt-4 text-sm text-[#666666]">
                End Date
                <span className=" font-medium block mt-1 text-[#0D0D0D]">
                  Mar 20, 2026 12;00 PM
                </span>
              </p>
              <p className="mt-4 text-sm text-[#666666]">
                Default Payment Method
                <span className=" font-medium block mt-1 text-[#0D0D0D]">
                  Wallet
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {activeNav === "Notes" && (
        <div className="mt-3 bg-white p-3 rounded-md">
          <h2 className="flex justify-between font-bold mb-2">Notes</h2>

          <div className="flex gap-4">
            {/* Left Side */}
            {selectedLoan.status === "Pending" ? (
              <div className="flex-1">
                <h2 className="mt-3 text-[#666666] flex justify-between">
                  Theophilus Makun (Compliance)
                  <span className={`${getStatusClass("Approved")} text-xs p-1`}>
                    Approved
                  </span>
                </h2>

                <p className="bg-gray-300 my-2 p-3 rounded-md w-[100%]">
                  "Congratulations. Your loan has been approved."
                </p>
                <p className="text-sm text-[#666666]">Mar 30, 2025 12:00 PM</p>
              </div>
            ) : (
              <p className="flex-1 text-[#666666]">No notes available yet.</p>
            )}

            {/* Right Side */}
            <div className="flex-1 space-y-3">
              <label htmlFor="comment" className="block font-medium">
                Leave Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>

              <div className="flex">
                <button className="ml-auto px-4 py-2 bg-[#0F8ECD] border-none text-white rounded">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeNav === "Repayment Schedule" && (
        <div className="p-4 min-w-full bg-white rounded-lg text-sm my-6 overflow-hidden">
          <div className="flex justify-between">
            <h3 className="text-sm font-bold">Repayment Schedule</h3>
            <p className="cursor-pointer">
              <span className="mr-2 text-[#0F8ECD]">Add Entry</span>
              <span>Download</span>
            </p>
          </div>
          <table className="w-[100%] bg-white  text-sm my-6 overflow-hidden">
            <thead className=" text-left text-gray-700">
              <tr className="border-t border-t-gray-300 border-l border-l-gray-300  border-r border-r-gray-300 p-2">
                <th className="px-3 py-3 text-sm font-medium">
                  Transaction ID
                </th>
                <th className=" py-3 text-sm font-medium">Amount Due</th>
                <th className="py-3 text-sm font-medium text-center">Payment Method</th>
                <th className=" py-3 text-sm text-center font-medium">
                  Due Date
                </th>
                <th className=" py-3 text-sm font-medium text-center">
                  Paid Date
                </th>
                <th className=" py-3 text-sm font-medium">Amount Due</th>
              </tr>
            </thead>
            {repayment.map((t, index) => (
              <tbody key={index} className="text-gray-600 cursor-pointer">
                <tr className="border-t border-t-gray-300 border-b border-b-gray-300 border-l border-l-gray-300 border-r border-r-gray-300">
                  <td className="px-3 py-4">{t.id}</td>
                  <td className=" py-4">{t.amount}</td>
                  <td className=" py-4">{t.payment}</td>
                  {/* <td className="text-center py-4">
                          <span
                            className={`px-3 py-1 text-sm rounded-full }
                          >
                            {t.status}
                          </span>
                        </td> */}
                  <td className=" text-center py-4">{t.due}</td>
                  <td className=" text-center py-4">{t.paid}</td>
                  <td className={` text-center py-4  rounded-md text-xs`}>
                              <span className={`rounded-md text-xs p-2 ${getStatusClass(
                              t.status
                            )}`}>{t.status}</span></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}

      {/* open images */}
      {identityCheck && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={() => setIdentityCheck(false)}
        >
          <div className="bg-white rounded-md w-[50rem] p-3">
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Add Product</span>
              <img
                src="../../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={() => setIdentityCheck(false)}
              />
            </h2>
            <img src="../../../src/assets/voterscard.png" alt="voter's card" />

            <p className="text-center my-4 font-medium">ID_Omisore.jpeg</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanRepaid;
