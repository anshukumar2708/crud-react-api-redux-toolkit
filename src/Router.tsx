import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import "./App.css";
import Dashboard from "./pages/dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/page-not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/page-not-found" />} />
    </Routes>
  );
}

export default Router;
