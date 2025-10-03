import {React, useState} from "react";
import { getStatusClass } from "@/pages/customers/customers";

function CustomerDetailMetaData({selectedCustomer}) {
    const [isOpen, setIsOpen] = useState(false);
  
    function openModalForm() {
      setIsOpen(true);
    }
  
    // allow clicking of backdrop to remove form
    function closeForm() {
      setIsOpen(false);
    }



  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-bold">MetaData</h3>
        <span className="flex gap-2 cursor-pointer" onClick={openModalForm}>
          <p className="text-sm text-[#630219] items-center">Edit</p>
          <img
            src="/assets/edit-3.png"
            className="w-[20px] h-[20px]"
            alt="edit"
          />
        </span>
      </div>
      {/* customer metaData details */}
      <div className="flex w-[70%] justify-between">
        {/* 1 */}
        <div>
          <p className="mt-4 text-sm text-[#666666]">
            ID
            <span className="block flex gap-1 mt-1 text-[#0D0D0D]">
              {selectedCustomer.metaDataID}

              <img
                className="cursor-pointer"
                src="/assets/copy.png"
                alt=""
              />
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Date Created
            <span className="block mt-1 text-[#0D0D0D]">
              Mar 2, 2024 at 12:32 PM
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Date Verified
            <span className="block mt-1 text-[#0D0D0D]">
              Mar 4, 2024 at 1:30 PM
            </span>
          </p>
        </div>
        {/* 2 */}
        <div>
          <p className="mt-4 text-sm text-[#666666]">
            Username
            <span className="block gap-2 mt-1 text-[#0D0D0D]">-</span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Last Login
            <span className="block mt-1 text-[#0D0D0D]">
              Apr 2, 2025 at 9:32 AM
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            KYC
            <span
              className={`block mt-1  w-[70px] text-sm rounded-lg text-center ${getStatusClass(
                selectedCustomer.kyc
              )}`}
            >
              {selectedCustomer.kyc}
            </span>
          </p>
        </div>
      </div>

                          {isOpen && (
        <div
          className="bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <form
            action=""
            className="bg-white p-4 w-[25rem] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Edit Contact Information</span>
              <img
                src="/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>
            <label htmlFor="" className="text-[#666666] block text-sm my-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-[100%] p-3 rounded-md border border-gray-200"
              disabled
            />
            <label htmlFor="" className="block text-sm my-2">
              KYC Status
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.kyc}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <hr className="my-6 border border-gray-200" />

            <div className="flex justify-between gap-2 " onClick={closeForm}>
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#630219] border-none rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CustomerDetailMetaData;
