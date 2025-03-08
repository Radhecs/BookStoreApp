import React from "react";
import Navbar from "../src/components/navbar";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import FreeBook from "../src/components/FreeBook";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home;
