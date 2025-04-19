import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Blog } from "../pages/Blog";
import { Agents } from "../pages/Agents";
import { Test } from "../pages/Test";
import { Explore } from "../pages/Explore";

export const AppRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>

  );
};