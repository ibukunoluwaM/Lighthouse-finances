import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  //set form de
  const [form, setForm] = useState({
    email: "adeyemipeters@gmail.com",
    password: "abcdeF$22",
  });

  //toggle visibility
  const [visible, setVisible] = useState(false);

// set error states
  const [errors, setErrors] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isCorrect =
      form.email === "adeyemipeters@gmail.com" && form.password === "abcdeF$22";
    if (isCorrect) {
      setErrors("");
    } else {
      setErrors(
        "The email address or password you entered is incorrect. Please check and try again"
      );
    }
  }

  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0F8ECD] to-[#084767]">
      <span>
        <img src="/src/assets/Logo.png" alt="Logo" className="block mb-12" />
      </span>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg bg-white p-8 mt-4 w-full rounded-lg"
      >
        <h2 className="text-center text-lg mb-4 font-bold font-myFont">
          Admin Login
        </h2>
        <p className="text-center">Enter your details to continue</p>

        <label htmlFor="email" className="block mt-4 mb-2">
          Email Address:{" "}
        </label>
        <input
          name="email"
          value={form.email}
          type="text"
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full pl-4 focus:outline-none mb-2 border rounded-md border-gray-300 py-4"
        />

        <label htmlFor="password" className="block mb-2">
          Password:{" "}
        </label>

        {/* password */}
        {/* <input type="text" placeholder="Enter password" className="input w-[100%]" /> */}
        <div className="flex border border-gray-300 items-center px-2 rounded-md w-[100%]">
          <input
            type={visible ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={form.password}
            required
            placeholder="Password"
            // minlength="8"
            //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            className="w-full pl-2 border-none focus:outline-none py-4"
          />
          <img
            src="./src/assets/trailingIcon.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => setVisible(!visible)}
          />
        </div>
        
        {/* errror message */}
        {errors && (
          <div className="flex bg-[#FFE8E6] border border-[#E94A3F] rounded-md mt-4 border-[2px] p-2">
            <img
              src="./src/assets/cross-circle.png"
              alt=""
              className="w-[20px] h-[20px] inline-block mt-2 mx-2"
            />
            <p className=" mt-2">{errors}</p>
          </div>
        )}

        <button
          type="submit"
          onClick={()=>navigate("/dashboard")}
          className="mt-8 bg-[#0F8ECD] w-[100%] py-[10px] border-none cursor-pointer rounded-md text-white"
        >
          Log in
        </button>

        <Link to="/verifyemail" className="block text-center text-[#0F8ECD] mt-8">
          Forgot password?
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
