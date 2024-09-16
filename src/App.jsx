import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import RegistrationPage from "./Component/RegistrationPage";
import Dashboard from "./Component/Dashboard";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
