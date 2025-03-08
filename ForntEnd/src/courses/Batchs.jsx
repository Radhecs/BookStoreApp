import React from "react";
import Navbar from "../components/navbar";
import Courses from "../components/Course";
import Footer from "../components/Footer";

function Batchs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Courses />
      </div>
      <Footer />
    </>
  );
}

export default Batchs;
