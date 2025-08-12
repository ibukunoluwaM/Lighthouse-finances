import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  let navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newVisible, setNewVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMsg(
        "Oops! Please check. Looks like there's a password mismatch."
      );
    } else {
      setErrorMsg("");
      navigate("/passwordchangesuccess")
    }
  }
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0F8ECD] to-[#084767]">
      <span>
        <img src="/assets/Logo.png" alt="Logo" className="block mb-12" />
      </span>

      <form className="max-w-lg bg-white p-8 mt-4 w-full rounded-lg">
        <h2 className="text-center text-lg mb-4 font-bold font-myFont">
          Set new password
        </h2>
        <p className="text-center text-sm">
          This should be a unique combination you can always remember
        </p>

        <label htmlFor="email" className="block mt-8 mb-2">
          New Password
        </label>
        <div className="flex border border-gray-300 items-center px-2 rounded-md w-[100%]">
          <input
            type={newVisible ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full pl-2 border-none focus:outline-none py-4"
          />
          <img
            src="/assets/trailingIcon.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => setNewVisible(!newVisible)}
          />
        </div>
        <p className="text-xs mt-2">
          Password should be at least 8 characters with one number, one
          uppercase letter and one special character.
        </p>

        <label htmlFor="password" className="block mt-6 mb-2">
          Confirm Password:
        </label>

        <div className="flex border border-gray-300 items-center px-2 rounded-md w-[100%]">
          <input
            type={confirmVisible ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-2 border-none focus:outline-none py-4"
          />
          <img
            src="/assets/trailingIcon.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => setConfirmVisible(!confirmVisible)}
          />
        </div>

        {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 bg-[#0F8ECD] w-[100%] py-[10px] border-none cursor-pointer rounded-md text-white"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default NewPassword;
