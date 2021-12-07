import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import Error404 from "./pages/Error404/Error404";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import SendEmail from "./pages/SendEmail/SendEmail";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send-verify-mail" element={<SendEmail />} />
        <Route path="/email-verify/:token" element={<EmailVerify />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password-verify/:token"
          element={<ChangePassword />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
