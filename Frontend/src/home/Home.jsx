import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import CredibilitySection from "../components/CredibilitySection/CredibilitySection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductCarousel/>
      <CredibilitySection/>
      <Footer />
    </>
  );
}

export default Home;
