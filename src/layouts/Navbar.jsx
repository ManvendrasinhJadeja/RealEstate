import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/Home/H01.svg";
import { PrimaryBlackBtn } from "../components/PrimaryBlackBtn";

export const Navbar = () => {
  return (
    <nav className="w-full h-[88px] flex justify-between items-center text-[#0C0407]  px-[5vw] lg:px-[5vw] xl:px-[10vw]">
      <div className="w-auto h-full flex justify-center items-center">
        <img src={Icon} alt="" />
      </div>
      <div className="navCenter hidden lg:flex justify-center items-center gap-14">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/test">Test</Link>
        <button>Cart</button>
      </div>
      <div className="h-full hidden lg:flex justify-center items-center">
        <PrimaryBlackBtn text="Explore all" />
      </div>
      <div className="navFarRight flex lg:hidden gap-[20px]">
        <button>Cart</button>
        <PrimaryBlackBtn text={<i class="ri-menu-line Inter900"></i>} />
      </div>
    </nav>
  );
};
