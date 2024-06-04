import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Footer from "./components/Footer";
import CredibilitySection from "./components/CredibilitySection/CredibilitySection";
import Course from "./components/Course";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Course"
            element={authUser ? <Course /> : <Navigate to="/ProductCarousel" />}
          />
          <Route
            path="/About"
            element={authUser ? <About/> : <Navigate to="/cc" />}
          />
          <Route
            path="/Contact"
            element={authUser ? <Contact/> : <Navigate to="/Footer" />}
          />
          <Route path='/ProductCarousel' element={<ProductCarousel/>}></Route>
          <Route path='/Footer' element={<Footer/>}></Route>
          <Route path='/cc' element={<CredibilitySection/>}></Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
