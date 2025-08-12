import React from "react";
import { useParams } from "react-router-dom";
import transaction from "../../../components/for-dashboard/transaction";
import { useNavigate } from "react-router-dom";
import { getStatusClass } from "./customers";
import { customerDetails } from "../../../components/for-customers/customers-array";

function CustomerTransactionDetail() {
  let navigate = useNavigate();
  const { id } = useParams();

  // //navigate to selectedUser
  //   const { uniqueID } = useParams();

  let selectedTransaction = transaction.find((cust) => {
    return cust.id === id;
  });

  let selectedUser = customerDetails.find((cust) => {
    return cust.id === selectedTransaction.customerId;
  });

  function handleGoBack() {
    navigate(-1);
  }

  function goToUser() {
    navigate(`/customers/${selectedUser.id}`);
  }

  return (
    <div className="w-[100%] px-5 flex-1 overflow-y-scroll hide-scrollbar">
      <div className="relative flex justify-between gap-2 mt-6 items-center">
        {/* first side */}
        <div className="flex items-center gap-3">
          <div
            className=" w-[35px] h-[35px] bg-white p-2 rounded-md cursor-pointer"
            onClick={handleGoBack}
          >
            <img src="../../src/assets/arrow-left-button.png" alt="" />
          </div>

          <div className="flex flex-col">
            <p className="text-xl font-medium">{selectedTransaction.id}</p>

            <div className="flex gap-2">
              <p className={"text-xs text-[#666666]"}>
                {selectedTransaction.date}
              </p>
              <p className={"text-xs text-[#666666]"}>
                {selectedTransaction.time}
              </p>
            </div>
          </div>
          <p
            className={`text-sm font-medium ${getStatusClass(
              selectedTransaction.status
            )}`}
          >
            {selectedTransaction.status}
          </p>
        </div>
        {/* hamburger show more */}
        <div className=" cursor-pointer flex justify-center items-center bg-white p-2 rounded-lg">
          <img src="../../src/assets/more-horiz.png" alt="show-more" />
        </div>
      </div>

      {/* Details */}
      <div className="bg-white mt-5 p-4 rounded-lg">
        <h3 className="font-bold">Details</h3>

        {/* customer personal details */}
        <div className="flex  justify-between">
          {/* 1 */}
          <div className="flex-1">
            <p className="mt-4 text-sm text-[#666666]">
              Customer
              <span
                className="block mt-1 text-[#0D0D0D] underline cursor-pointer"
                onClick={() => goToUser()}
              >
                {selectedTransaction.name}
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Amount
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedTransaction.amount}
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Type
              <span className="block mt-1 text-[#0D0D0D]">Deposit</span>
            </p>
          </div>
          {/* 2 */}
          <div className="flex-1">
            <p className="mt-4 text-sm text-[#666666]">
              Transaction ID
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedTransaction.id}
              </span>
              <img
                className="cursor-pointer"
                src="../src/assets/copy.png"
                alt=""
              />
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Fee
              <span className="block mt-1 text-[#0D0D0D]">₦50.00</span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Category
              <span className="block mt-1 text-[#0D0D0D]">Capital</span>
            </p>
          </div>
        </div>
      </div>

      {/* Balances */}
      <div className="bg-white mt-5 p-4 rounded-lg">
        <h3 className="font-bold">Balances</h3>
        <div className="flex">
          <p className="flex-1 mt-4 text-sm text-[#666666]">
            Previous Available
            <span className="block mt-1 text-[#0D0D0D]">₦9,590.54</span>
          </p>

          <p className="flex-1 mt-4 text-sm text-[#666666]">
            Transaction Amount
            <span className="block mt-1 text-[#0D0D0D]">+₦50,000.00</span>
          </p>
        </div>

        <p className="mt-4 text-sm text-[#666666]">
          New Available
          <span className="block mt-1 text-[#0D0D0D]">₦59,590.54</span>
        </p>

        <div className="flex">
          <p className="flex-1 mt-4 text-sm text-[#666666]">
            Pending
            <span className="block mt-1 text-[#666666]">₦5,040.98</span>
          </p>
          <p className="flex-1 mt-4 text-sm text-[#666666]">
            New Pending
            <span className="block mt-1 text-[#0D0D0D]">₦5,040.98</span>
          </p>
        </div>
      </div>

      {/* notes */}
      <div className="bg-white mt-5 p-4 rounded-lg">
        <h3 className="font-bold">Notes</h3>

        <div className="flex">
          <p className="flex-1 mt-4 text-sm text-[#666666]">
            No notes available yet.
          </p>

          <div className="flex-1">
            <label htmlFor="comment" className="block mb-2">
              Leave a comment
            </label>
            <textarea
              name="comment"
              defaultValue=""
              placeholder="Leave a comment..."
              className="border border-gray-300 h-[10rem] w-[30rem]"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTransactionDetail;
