import React from "react";
import Home from "../home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Batchs from "./courses/Batchs";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Course"
            element={authUser ? <Batchs /> : <Navigate to="/Signup" />}
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};
export default App;
