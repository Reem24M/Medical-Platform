// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./mainLayout"; // ← غيرنا الاسم
import Home from "../Features/Home/pages/home";
import Login from "../Features/Auth/Pages/Login/login";
import Notfound from "../Features/NotFound/notfound";
import Signup from "../Features/Auth/Pages/Register/register";
import ForgetPassword from "../Features/Auth/Pages/Forgetpassword/forgetpassword";
import PhonePage from "../Features/Auth/Pages/two_factors_auth/phone";
import EmailPage from "../Features/Auth/Pages/two_factors_auth/email";
export default function AppRoutes() {
  return (
  <Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Home />} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route  path="/forgetpassword" element={<ForgetPassword/>} />
    <Route path="/2fa-sms" element={<PhonePage/>}  />
    <Route  path="/2fa-email" element={<EmailPage/>}/>
    <Route  path="*" element={<Notfound/>}/>
  </Route>
</Routes>

  );
}
