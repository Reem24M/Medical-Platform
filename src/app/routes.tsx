// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./mainLayout"; // ← غيرنا الاسم
import Home from "../Features/Home/pages/home";
import Login from "../Features/Auth/Pages/Login/login";
import Notfound from "../Features/NotFound/notfound";
import Signup from "../Features/Auth/Pages/Register/register";
import ForgetPassword from "../Features/Auth/Pages/Forgetpassword/forgetpassword";
export default function AppRoutes() {
  return (
  <Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Home />} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route  path="/forgetpassword" element={<ForgetPassword/>} />
    <Route  path="*" element={<Notfound/>}/>
  </Route>
</Routes>

  );
}
