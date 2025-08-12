import { React, useState } from "react";
import { getStatusClass } from "@/pages/customers/customers";

const performedBy = ["User", "Admin"];
const status = ["Completed", "Flagged", "Blocked"];

const audit1 = [
  {
    time: "12:32 PM",
    performedBy: "User",
    action: "Sent money",
    device: "iPhone 12 Mini",
    ip: "137.323.34.311",
    status: "Completed",
    location: "Lagos, Nigeria",
  },

  {
    time: "10:52 AM",
    performedBy: "User",
    action: "Updated profile",
    device: "iPhone 12 Mini",
    ip: "137.323.34.311",
    status: "Completed",
    location: "Lagos, Nigeria",
  },
  {
    time: "10:40 AM",
    performedBy: "User",
    action: "Signed in",
    device: "iPhone 12 Mini",
    ip: "137.323.34.311",
    status: "Completed",
    location: "Lagos, Nigeria",
  },
];

const audit2 = [
  {
    time: "12:32 PM",
    performedBy: "Theophilus Makun...",
    action: "Updated profile",
    device: "Web Chrome 2.32",
    ip: "192.38.955.01",
    status: "Completed",
    location: "Lagos, Nigeria",
  },
  {
    time: "12:32 PM",
    performedBy: "User",
    action: "Signed in",
    device: "iPhone 12 Mini",
    ip: "137.323.34.311",
    status: "Completed",
    location: "Lagos, Nigeria",
  },
];

const audit3 = {
  time: "12:32 PM",
  performedBy: "User",
  action: "Signed in",
  device: "iPhone 12 Mini",
  ip: "137.323.34.311",
  status: "Completed",
  location: "Lagos, Nigeria",
};

function CustomerAuditLog() {
  // for side-panel
  const [selectedItem, setSelectedItem] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  // blacklist form
  const [openForm, setOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);

  const [selectedTime, setSelectedTime] = useState(performedBy[0]);

  const [showSelected, setShowSelected] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [showSelectedStatus, setShowSelectedStatus] = useState(false);

  // for side panel
  function forSidePanel(item) {
    setSelectedItem(item);
    setPanelOpen(true);
  }

  // closes side panel
  function closeForm() {
    setIsOpen(false);
    setPanelOpen(false);
    setOpenForm(false);
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // for blacklist
  function handleBlackList() {
    setOpenForm(true);
  }

  function handleClickStatus() {
    setIsOpenStatus(!isOpenStatus);
  }

  function handleSelected(t) {
    setSelectedTime(t);
    setShowSelected(true);
  }

  function handleSelectedStatus(t) {
    setSelectedStatus(t);
    setShowSelectedStatus(true);
  }

  function handleClear() {
    setSelectedTime("");
  }
  return (
    <div className="mt-6">
      <div className="flex gap-3">
        <label className="flex items-center bg-white p-2 w-[21rem] rounded-lg">
          <img
            src="../../src/assets/leadingIcon.png"
            alt="search"
            className=""
          />
          <input
            type="search"
            className="bg-transparent w-[100%] border-none outline-none pl-[4px]"
            placeholder="Search customers, assets, transactions..."
          />
        </label>

        {/* performed by options */}
        <div
          className="relative bg-white p-2 text-xs rounded-lg cursor-pointer flex items-center gap-2"
          onClick={handleClick}
        >
          <p>Performed By</p>
          <img
            src=".././src/assets/plus-rec.png"
            className="w-[15px] h-[15px]"
            alt="add"
          />
          {showSelected && (
            <div className=" flex items-center gap-2 ">
              <span className="text-[#F2F2F2]">|</span>
              <span className="bg-[#F2F2F2] p-1 rounded-4xl">
                {selectedTime}
              </span>
            </div>
          )}

          {isOpen && (
            <div className="absolute w-[10rem] top-[45px]  bg-white p-2 text-sm">
              {performedBy.map((t, index) => (
                <li
                  className="list-none p-1"
                  key={index}
                  onClick={() => handleSelected(t)}
                >
                  {t}
                </li>
              ))}
              <hr className="my-1" />
              <p className="text-center p-1" onClick={handleClear}>
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* status options */}
        <div
          className="relative bg-white p-2 text-xs rounded-lg cursor-pointer flex items-center gap-2"
          onClick={handleClickStatus}
        >
          <p>Status</p>
          <img
            src=".././src/assets/plus-rec.png"
            className="w-[15px] h-[15px]"
            alt="add"
          />
          {showSelectedStatus && (
            <div className=" flex items-center gap-2 ">
              <span className="text-[#F2F2F2]">|</span>
              <span className="bg-[#F2F2F2] p-1 rounded-4xl">
                {selectedStatus}
              </span>
            </div>
          )}

          {isOpenStatus && (
            <div className="absolute w-[10rem] top-[45px] left-[10px]  bg-white p-2 text-sm">
              {status.map((t, index) => (
                <li
                  className="list-none p-1"
                  key={index}
                  onClick={() => handleSelectedStatus(t)}
                >
                  {t}
                </li>
              ))}
              <hr className="my-1" />
              <p className="text-center p-1" onClick={handleClear}>
                Clear Filter
              </p>
            </div>
          )}
        </div>
      </div>

      <table className="min-w-full bg-white mt-7 text-sm rounded-lg overflow-hidden">
        <thead className=" text-left text-gray-700">
          <tr>
            <th className="px-3 py-3 text-sm font-medium w-[10%]">Time</th>
            <th className=" py-3 text-sm font-medium w-[20%]">Performed By</th>
            <th className="py-3 text-sm font-medium w-[20%]">Action</th>
            <th className="py-3 text-sm font-medium w-[20%]">Device</th>
            <th className=" py-3 text-sm font-medium w-[15%]">IP</th>
            <th className="  py-3 text-sm font-medium w-[15%]">Location</th>
            <th className="pr-3  py-3 text-sm font-medium w-[5%]">Status</th>
          </tr>
        </thead>
      </table>

      <p className="my-4 font-bold text-md">Today, Apr 10</p>
      <table className="min-w-full bg-white mt- text-sm rounded-lg overflow-hidden  cursor-pointer">
        <tbody>
          {audit1.map((t, index) => (
            <tr key={index} onClick={() => forSidePanel(t)}>
              <td className="px-3 py-3 text-sm font-medium w-[10%]">
                {t.time}
              </td>
              <td className=" py-3 text-sm font-medium w-[20%]">
                {t.performedBy}
              </td>
              <td className="py-3 text-sm font-medium w-[20%]">{t.action}</td>
              <td className=" py-3 text-sm font-medium w-[20%] text-left">
                {t.device}
              </td>

              <td className="  py-3 text-sm font-medium w-[15%]">{t.ip}</td>
              <td className="  py-3 text-sm font-medium w-[15%]">
                {t.location}
              </td>

              <td className={` pr-3 py-3 text-xs font-medium w-[5%]`}>
                <span className={`p-1 rounded-lg ${getStatusClass(t.status)}`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="my-4 font-bold text-md">Yesterday, Apr 9</p>
      <table className="min-w-full bg-white mt- text-sm rounded-lg overflow-hidden  cursor-pointer">
        <tbody>
          {audit2.map((t, index) => (
            <tr key={index}>
              <td className="px-3 py-3 text-sm font-medium w-[10%]">
                {t.time}
              </td>
              <td className=" py-3 text-sm font-medium w-[20%]">
                {t.performedBy}
              </td>
              <td className="py-3 text-sm font-medium w-[20%]">{t.action}</td>
              <td className=" py-3 text-sm font-medium w-[20%] text-left">
                {t.device}
              </td>

              <td className="  py-3 text-sm font-medium w-[15%]">{t.ip}</td>
              <td className="  py-3 text-sm font-medium w-[15%]">
                {t.location}
              </td>

              <td className={` pr-3 py-3 text-xs font-medium w-[5%]`}>
                <span className={`p-1 rounded-lg ${getStatusClass(t.status)}`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="my-4 font-bold text-md">Apr 2, 2025</p>
      <table className="min-w-full bg-white mt- text-sm rounded-lg overflow-hidden  cursor-pointer">
        <tbody>
          <tr key={1}>
            <td className="px-3 py-3 text-sm font-medium w-[10%]">
              {audit3.time}
            </td>
            <td className=" py-3 text-sm font-medium w-[20%]">
              {audit3.performedBy}
            </td>
            <td className="py-3 text-sm font-medium w-[20%]">
              {audit3.action}
            </td>
            <td className=" py-3 text-sm font-medium w-[20%] text-left">
              {audit3.device}
            </td>

            <td className="  py-3 text-sm font-medium w-[15%]">{audit3.ip}</td>
            <td className="  py-3 text-sm font-medium w-[15%]">
              {audit3.location}
            </td>

            <td className={` pr-3 py-3 text-xs font-medium w-[5%]`}>
              <span
                className={`p-1 rounded-lg ${getStatusClass(audit3.status)}`}
              >
                {audit3.status}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      {/* side panel */}
      {panelOpen && (
        <div
          className="bg-black/40 backdrop-blur fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <div
            className="w-[25rem] py-6 px-4 bg-white fixed top-[0] right-[0] h-[100vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Log Details</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666] font-medium">
                Action
                <span className="block mt-1 text-[#0D0D0D]">
                  {selectedItem.action}
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Status
                <span
                  className={`block w-[6rem] px-3 py-1 text-sm rounded-full ${getStatusClass(
                    selectedItem.status
                  )}`}
                >
                  {selectedItem.status}
                </span>
              </p>
            </div>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Performed by
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  {selectedItem.performedBy}
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Location
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  {selectedItem.location}
                </span>
              </p>
            </div>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Date
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  Apr 10 2025 12:32PM
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                IPAddress
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  {selectedItem.ip}
                </span>
              </p>
            </div>

            <hr className="my-6 border border-gray-200" />

            <h2 className="mt-5 font-medium text-sm">Device Information</h2>

            <div className="flex">
              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Device
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  {selectedItem.device}
                </span>
              </p>

              <p className="flex-1 mt-4 text-sm text-[#666666]">
                Operation System
                <span className="block mt-1 text-[#0D0D0D] font-medium">
                  iOs 18.3
                </span>
              </p>
            </div>

            <p className="mt-4 text-sm text-[#666666]">
              Device Finegrprint ID
              <span className="block flex mt-1 text-[#0D0D0D] text-sm font-medium">
                IPH-9C3B8D5F-7A12-4D6E-92E1-F45A3D7B8
                <img
                  className="cursor-pointer ml-2"
                  src="../src/assets/copy.png"
                  alt=""
                />
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Device Time Zone
              <span className="block mt-1 text-[#0D0D0D] font-medium">
                Eastern Standard Time (EST)
              </span>
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              App Name and Version
              <span className="block mt-1 text-[#0D0D0D] font-medium">
                Lighthouse 3.124
              </span>
            </p>

            <hr className="my-6 border border-gray-200" />
            <button
              className="w-[100%] my-2 py-3 bg-[#E94A3F] border-none rounded-md cursor-pointer text-white"
              onClick={handleBlackList}
            >
              Blacklist Device
            </button>
          </div>
        </div>
      )}

      {/* blacklist form */}
      {openForm && (
        <div
          className="fixed inset-0 flex justify-center items-center z-[20]"
          onClick={closeForm}
        >
          <form
            action=""
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[25rem] p-4"
          >
            <h2 className="flex justify-between items-center mb-6">
              <span className="font-medium">Blacklist user device</span>
              <img
                src="../src/assets/close-icon.png"
                alt="close"
                className="cursor-pointer"
                onClick={closeForm}
              />
            </h2>

            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Duration (Days)
            </label>
            <input
              type="text"
              className="w-[100%] p-3 rounded-md border border-gray-300 mb-3 mt-2"
              placeholder="Enter number of days.."
            />

            <label htmlFor="" className="mb-3">
              <input type="checkbox" name="" id="" className="accent-black mr-2"/>
              Blacklist permanently
            </label>

            <label htmlFor="" className="block text-sm my-2 text-[#666666]">
              Reason
            </label>
            <textarea
              name="comment"
              defaultValue=""
              placeholder="Leave a comment..."
              className="border border-gray-300 h-[10rem] w-[100%]"
            ></textarea>

            <hr className="my-6 border border-gray-200" />

            <div
              className="flex justify-between gap-2 mt-3"
              onClick={closeForm}
            >
              <button className="flex-1 py-2 bg-[#F2F2F2] border-none rounded-md cursor-pointer">
                Cancel
              </button>
              <button className="flex-1 py-2 text-white bg-[#E94A3F] border-none rounded-md cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CustomerAuditLog;
