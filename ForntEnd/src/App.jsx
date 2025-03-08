import React from "react";
import Home from "../home/Home";
import { Route, Routes } from "react-router-dom";
import Batchs from "./courses/Batchs";
import Signup from "./components/Signup";
const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Batchs />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
