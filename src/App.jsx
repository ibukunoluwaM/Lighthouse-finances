import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/verification/loginPage";
import Verify from "../components/verification/verify";
import NewPassword from "../components/verification/newPassword";
import PasswordSuccess from "../components/verification/passwordSuccess";
import Otp from "../components/verification/otp";
import LoggedIn from "./pages/loggedIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/verifyemail" element={<Verify />}></Route>
      <Route path="/newpassword" element={<NewPassword />}></Route>
      <Route
        path="/passwordchangesuccess"
        element={<PasswordSuccess />}
      ></Route>
      <Route path="/otpverification" element={<Otp />}></Route>
            <Route path="/*" element={<LoggedIn />}></Route>

    </Routes>
  );
}

export default App;
