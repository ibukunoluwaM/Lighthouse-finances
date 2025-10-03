import React from "react";
import { useNavigate } from "react-router-dom";


function PasswordSuccess() {
    let navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#630219] to-[#084767]">
      <span>
        <img src="/assets/Logo.png" alt="Logo" className="block mb-12" />
      </span>

      <form onSubmit={(e)=> e.preventDefault()} className="max-w-lg bg-white p-8 mt-4 w-full rounded-lg text-center">
        <div className="flex justify-center mb-8">
          <img
            src="/assets/Icon.png"
            alt="Successful"
            className=""
          />
        </div>
        <h2 className="text-center text-lg mb-4 font-bold font-myFont">
          Password Changed
        </h2>
        <p className="mt-8">You can now log in with your new password.</p>
              <button
          type="submit"
          onClick={()=>navigate("/")}
          className="mt-8 bg-[#630219] w-[100%] py-[10px] border-none cursor-pointer rounded-md text-white"
        >
            Go to Login</button>
      </form>
    </div>
  );
}

export default PasswordSuccess;
