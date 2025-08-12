import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Verify() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || !email.includes("@")) {
      setErrorMsg("Please add a valid email address");

      return;
    } else {
      setErrorMsg("");

      navigate("/otpverification");
    }
  }


  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0F8ECD] to-[#084767]">
      <span>
        <img src="./src/assets/Logo.png" alt="Logo" className="block mb-12" />
      </span>

      <form className="max-w-lg bg-white p-8 mt-4 w-full rounded-lg">
        <h2 className="text-center text-lg mb-4 font-bold font-myFont">
          Reset your password
        </h2>
        <p className="text-center">Enter your account email address</p>

        <label htmlFor="email" className="block mt-4 mb-2">
          Email Address:
        </label>
        <input
        value={email}
          name="email"
          type="text"
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Enter email address"
          className="w-full pl-4 focus:outline-none mb-2 border rounded-md border-gray-300 py-4"
        />
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 bg-[#0F8ECD] w-[100%] py-[10px] border-none cursor-pointer rounded-md text-white"
        >
          Reset password
        </button>

        <Link to="/" className="block text-center text-[#0F8ECD] mt-8">
          Back to Login
        </Link>
      </form>
    </div>
  );
}

export default Verify;
