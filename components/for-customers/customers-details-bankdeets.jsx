import {React, useState} from 'react';
import { getStatusClass } from '@/pages/customers/customers';

function CustomerDetailBankDeets({selectedCustomer}) {
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
                <h3 className="font-bold">Bank Details</h3>
                <span className="flex gap-2 cursor-pointer" onClick={openModalForm}>
                  <p className="text-sm text-[#0F8ECD] items-center">Edit</p>
                  <img
                    src="/assets/edit-3.png"
                    className="w-[20px] h-[20px]"
                    alt="edit"
                  />
                </span>
              </div>
              {/* customer bank details */}
              <div className="flex w-[60%] justify-between">
                {/* 1 */}
                <div>
                  <p className="mt-4 text-sm text-[#666666]">
                    BVN
                    <span className="block mt-1 text-[#0D0D0D]">
                      {selectedCustomer.bvn}
                    </span>
                  </p>
    
                  <p className="mt-4 text-sm text-[#666666]">
                    Bank Name
                    <span className="block mt-1 text-[#0D0D0D]">
                      {selectedCustomer.bank}
                    </span>
                  </p>
    
                  <p className="mt-4 text-sm text-[#666666]">
                    Credit Score
                    <span className="block mt-1 text-[#0D0D0D]">
                      {selectedCustomer.creditScore}
                    </span>
                  </p>
                </div>
                {/* 2 */}
                <div>
                  <p className="mt-4 text-sm text-[#666666]">
                    Account Number
                    <span className="block flex gap-2 mt-1 text-[#0D0D0D]">
                      {selectedCustomer.accNo}{" "}
                      <img
                        className="cursor-pointer"
                        src="/assets/copy.png"
                        alt=""
                      />
                    </span>
                  </p>
    
                  <p className="mt-4 text-sm text-[#666666]">
                    Account Name
                    <span className="block mt-1 text-[#0D0D0D]">
                      {`${selectedCustomer.firstName} ${selectedCustomer.lastName}`.toUpperCase()}
                    </span>
                  </p>
    
                  <p className="mt-4 text-sm text-[#666666]">
                    Credit Rating
                    <span
                      className={`block mt-1  w-[30px] text-sm rounded-lg text-center ${getStatusClass(
                        selectedCustomer.creditRating
                      )}`}
                    >
                      {selectedCustomer.creditRating}
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
              BVN
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.bvn}
              className="w-[100%] p-3 rounded-md border border-gray-200"
              disabled
            />
            <label htmlFor="" className="block text-sm my-2">
              Account Number
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.accNo}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Bank
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.bank}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
                       <label htmlFor="" className="text-[#666666] block text-sm my-2">
              Account Name
            </label>
            <input
              type="text"
              defaultValue={`${selectedCustomer.firstName} ${selectedCustomer.lastName}`.toUpperCase()}
              className="w-[100%] p-3 rounded-md border border-gray-200"
              disabled
            />

            <hr className="my-6 border border-gray-200" />

            <div className="flex justify-between gap-2 " onClick={closeForm}>
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
            </div>
  )
}

export default CustomerDetailBankDeets