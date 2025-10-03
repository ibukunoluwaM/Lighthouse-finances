import { React, useState } from "react";

function CustomerDetailContact({ selectedCustomer }) {
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
        <h3 className="font-bold">Contact Information</h3>
        <span className="flex gap-2 cursor-pointer" onClick={openModalForm}>
          <p className="text-sm text-[#630219] items-center">Edit</p>
          <img
            src="/assets/edit-3.png"
            className="w-[20px] h-[20px]"
            alt="edit"
          />
        </span>
      </div>

      {/* customer contact details */}
      <div className="w-[100%] justify-between">
        {/* 1 */}
        <div>
          <div className="flex justify-between">
            <p className="mt-4 text-sm text-[#666666]">
              Phone Number
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCustomer.phone}
              </span>
            </p>
            <p className="mt-4 text-sm text-[#666666]">
              Email
              <span className="block flex gap-2 mt-1 text-[#0D0D0D]">
                {selectedCustomer.email}
                <img
                  className="cursor-pointer"
                  src="/assets/copy.png"
                  alt=""
                />
              </span>
            </p>
          </div>

          <p className="mt-4 text-sm text-[#666666]">
            Address
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.address}
            </span>
          </p>

          <div className="w-[60%] flex justify-between">
            <p className="mt-4 text-sm text-[#666666]">
              State
              <span className="block mt-1 text-[#0D0D0D]">
                {selectedCustomer.state}
              </span>
            </p>
            <p className="mt-4 text-sm text-[#666666]">
              Country
              <span className="block flex gap-2 mt-1 text-[#0D0D0D]">
                {selectedCustomer.country}
              </span>
            </p>
          </div>
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
            <label htmlFor="" className="block text-sm my-2">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.phone}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Email
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.email}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <label htmlFor="" className="block text-sm my-2">
              Address
            </label>
            <input
              type="text"
              defaultValue={selectedCustomer.address}
              className="w-[100%] p-3 rounded-md border border-gray-300"
            />
            <div className="flex gap-2">
              <div className="flex-1">
                <label htmlFor="" className="block text-sm my-2">
                  State
                </label>
                <select className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm" name="state" id="">
                  <option value="Lagos">{selectedCustomer.state}</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="" className="block text-sm my-2">
                  Country
                </label>
                <select className="w-[100%] border border-gray-200 rounded-lg py-3 px-2 text-sm" name="state" id="">
                  <option value="Lagos">{selectedCustomer.country}</option>
                </select>
              </div>
            </div>
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

export default CustomerDetailContact;
