import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Otp() {
  let navigate = useNavigate()
  const [otps, setOtps] = useState(["0", "0", "0", "0", "0", "0"]);
  const inputsRef = useRef([]);

  //handle change func
  function handleChange(index, otp, otps) {
    const copy = [...otps];
    copy[index] = otp;
    setOtps(copy);

     if (!/^\d$/.test(otp)) return;

    if (index < otps.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  }

  //handles backspace
  function onDelete(index, e) {
    if(e.key ==="Backspace" && index > 0) {
            inputsRef.current[index - 1].focus();
    }
  }

  //handles form submission
  function handleSubmit() {
    if(!otps.includes("")) {
      navigate("/passwordchangesuccess")
    }
  }


  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#630219] to-[#084767]">
      <span>
        <h2 alt="Logo" className=" text-2xl text-[#ffffff] block mb-12">GrowMonie</h2>
      </span>

      <form onSubmit={(e)=> e.preventDefault()} className="max-w-lg bg-white p-8 mt-4 w-full rounded-lg">
        <h2 className="text-center text-lg mb-4 font-bold font-myFont">
          Enter verification code
        </h2>
        <p className="text-center mb-8">
          Enter the 6-digit code sent to your email
        </p>
        <div className="flex justify-center gap-2">
          {otps.map((otp, index) => (
            <input
              className="py-4 px-4 h-[50px] w-[50px] rounded-[10px] border border-gray"
              type="password"
              key={index}
              maxLength={1}
              value={otp}
              onKeyDown={(e)=>onDelete(index, e)}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(index, e.target.value, otps)}
            />
          ))}
        </div>

        <Link to="" className="block text-center text-[#630219] mt-8">
          Resend code
        </Link>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 bg-[#630219] w-[100%] py-[10px] border-none cursor-pointer rounded-md text-white"
        >
          Reset password
        </button>
      </form>
    </div>
  );
}

export default Otp;
