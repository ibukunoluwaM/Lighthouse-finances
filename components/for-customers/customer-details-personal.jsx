import { React, useState } from "react";

function CustomerDetailPersonal({ selectedCustomer }) {
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
        <h3 className="font-bold">Personal Information</h3>
        <span className="flex gap-2 cursor-pointer" onClick={openModalForm}>
          <p className="text-sm text-[#630219] items-center">Edit</p>
          <img
            src="/assets/edit-3.png"
            className="w-[20px] h-[20px]"
            alt="edit"
          />
        </span>
      </div>
      {/* customer personal details */}
      <div className="flex w-[60%] justify-between">
        {/* 1 */}
        <div>
          <p className="mt-4 text-sm text-[#666666]">
            First Name
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.firstName}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Gender
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.gender}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Nationality
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.nationality}
            </span>
          </p>
        </div>
        {/* 2 */}
        <div>
          <p className="mt-4 text-sm text-[#666666]">
            Last Name
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.lastName}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            Date of Birth
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.dob}
            </span>
          </p>

          <p className="mt-4 text-sm text-[#666666]">
            PEP
            <span className="block mt-1 text-[#0D0D0D]">
              {selectedCustomer.pep}
            </span>
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="bg-[rgba(243,244,246,0.5)] fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >

          <form action="" className="bg-white p-4 w-[25rem] rounded-lg"  onClick={(e)=> e.stopPropagation()}>
                      <h2 className="flex justify-between items-center mb-6">
            <span className="font-medium">Edit Personal Details</span>
            <img src="/assets/close-icon.png" alt="close" className="cursor-pointer" onClick={closeForm} />
          </h2>
            <label htmlFor="" className="block text-sm my-2">First Name</label>
            <input type="text" defaultValue={selectedCustomer.firstName} className="w-[100%] p-3 rounded-md border border-gray-300"/>
             <label htmlFor="" className="block text-sm my-2">Last Name</label>
            <input type="text" defaultValue={selectedCustomer.lastName} className="w-[100%] p-3 rounded-md border border-gray-300"/>
             <label htmlFor="" className="block text-sm my-2">Gender</label>
            <input type="text" defaultValue={selectedCustomer.gender} className="w-[100%] p-3 rounded-md border border-gray-300"/>
             <label htmlFor="" className="block text-sm my-2">Date of Birth</label>
            <input type="date" defaultValue={new Date("Apr 5, 1994").toISOString().split("T")[0]} className="w-[100%] p-3 rounded-md border border-gray-300"/>
             <label htmlFor="" className="block text-sm my-2">Nationality</label>
            <input type="text" defaultValue={selectedCustomer.nationality} className="w-[100%] p-3 rounded-md border border-gray-300"/>
            <hr className="my-6 border border-gray-200" />

            <div className="flex justify-between gap-2 " onClick={closeForm}>
                <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">Cancel</button>
                <button className="flex-1 py-2 text-white bg-[#630219] border-none rounded-md cursor-pointer">Save</button>

            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CustomerDetailPersonal;
