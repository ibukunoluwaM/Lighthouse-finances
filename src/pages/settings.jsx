import React, { useState } from "react";
const navs = ["Personal Info", "Security", "Devices"];
import { useNavigate } from "react-router-dom";
function Settings() {
  let navigate= useNavigate();
  // nav state
  const [nav, setNav] = useState(navs[0]);
  // toggle btn
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }
  return (
    <div className="w-[100%] overflow-y-scroll hide-scrollbar px-6 py-2">
      <h2 className="text-2xl my-6 font-bold">Settings</h2>

      {/* nav */}
      <ul className="my-5 flex gap-4">
        {navs.map((n, index) => (
          <li
            key={index}
            className={`text-md cursor-pointer ${
              nav === n ? "underline decoration-2 underline-offset-5" : ""
            }`}
            onClick={() => setNav(n)}
          >
            {n}
          </li>
        ))}
      </ul>

      {/* personal info */}
      {nav === "Personal Info" && (
        <div className="bg-white p-3 rounded-md w-[40rem]">
          <h3 className="font-medium text-lg">Profile photo</h3>
          <p className="text-[#666666] my-1 text-sm">Max photo size 1 MB</p>

          <div className="flex items-center gap-4 my-3 cursor-pointer">
            <img src="/assets/image.png" alt="" />
            <span className="text-[#630219] bg-[rgba(15,142,205,0.1)] p-1 text-sm rounded-full">
              Upload Photo
            </span>
          </div>

          <hr className="my-4 border border-gray-200" />

          <div className="flex gap-2 text-sm">
            <label htmlFor="" className="flex-1 text-[#666666]">
              First Name
              <input
                type="text"
                defaultValue="Ademola"
                className="p-3 text-black rounded-md block border border-gray-300 w-[100%] mt-2 mb-3"
              />
            </label>

            <label htmlFor="" className="text-[#666666] flex-1">
              Last Name
              <input
                type="text"
                defaultValue="Peters"
                className="p-3 text-black rounded-md block border border-gray-300 w-[100%] mt-2 mb-3"
              />
            </label>
          </div>

          <label disabled htmlFor="" className="text-[#999999] text-sm mt-2">
            Email address
            <input
              type="text"
              name=""
              id=""
              disabled
              defaultValue="ademola@lighthousecapital.ng"
              className="p-3 text-[#999999] rounded-md block border border-gray-300 w-[100%] text-[#666666] mt-2"
            />
          </label>
          <p className="text-[#666666] text-xs  mt-1 mb-3">
            Your last login was February 02, 2024 at 02:41pm
          </p>

          <hr className="my-4 border border-gray-200" />
          <button className="bg-[#630219] text-white border-none p-4 rounded-lg cursor-pointer">
            Update details
          </button>
        </div>
      )}

      {nav === "Security" && (
        <div className="bg-white p-3 rounded-md w-[40rem]">
          <div>
            <h4 className="font-medium text-lg">Security</h4>
            <p className="text-[#666666] text-sm">
              Settings and recommendations to help you keep your account secure
            </p>
          </div>
          <hr className="my-4 border border-gray-200" />
          <div>
            <h4 className="font-medium text-lg">Password</h4>
            <p className="text-[#666666] text-sm">
              You have never changed your password
            </p>
            <button className="bg-[#630219] mt-3 text-white border-none p-3 rounded-lg cursor-pointer">
              Change password
            </button>
          </div>

          <hr className="my-4 border border-gray-200" />
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-lg">Two step authentication</h4>
              <p className="text-[#666666] text-sm">
                Turn on two-step authentication to require email verification
                code for login
              </p>
            </div>
            <div>
              {/* toggle in */}
              <button
                onClick={toggle}
                className={`w-14 h-8 rounded-full border-none flex items-center bg-red p-1 cursor-pointer transform ${
                  isOn ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full ${
                    isOn ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {nav === "Devices" && (
        <div className="bg-white p-3 rounded-md w-[40rem]">
          <div>
            <h4 className="font-medium text-lg mb-1">Devices</h4>
            <p className="text-[#666666] text-sm">
              You're currently logged in to Atlas on these devices. If you don't
              recognize a device, log out to keep your account secure.{" "}
            </p>
          </div>
                    <hr className="my-4 border border-gray-200" />

{/* firefox */}
                    <div className="flex items-center justify-between gap-2">
                      <img src="/assets/laptop.png" alt="" />

                      <div className="flex-1 text-sm">
                        <p className="mb-3 text-[#630219] ">Firefox on windows  <span className="bg-[#F4F3FF] text-[#5925DC] p-2 rounded-full text-xs">This device</span></p>
                        <p className="text-[#666666]">Today at 6:54am</p>
                        <p className="text-[#666666]">Lagos (Lagos), Nigeria</p>
                      </div>

                      <button onClick={()=>navigate("/")} className=" cursor-pointer p-2 border-none rounded-md bg-[#F2F2F2]">Log out</button>
                    </div>
                    <hr className="my-4 border border-gray-200" />

                    {/* chrome */}
                                        <div className=" mt-2 flex items-center justify-between gap-2">
                      <img src="/assets/laptop.png" alt="" />

                      <div className="flex-1 text-sm">
                        <p className="mb-3 text-[#630219] ">Chrome on Mac </p>
                        <p className="text-[#666666]">Apr 6, 2025 9:13 AM</p>
                        <p className="text-[#666666]">Lagos (Lagos), Nigeria</p>
                      </div>

                      <button onClick={()=>navigate("/")} className=" cursor-pointer p-2 border-none rounded-md bg-[#F2F2F2]">Log out</button>
                    </div>
                                        <hr className="my-4 border border-gray-200" />
<button onClick={()=>navigate("/")} className="cursor-pointer text-white bg-[#914c4e] p-3 border-none rounded-md">Log out all devices</button>
        </div>
      )}
    </div>
  );
}

export default Settings;
