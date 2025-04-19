import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/Home/H01.svg";
import { PrimaryBlackBtn } from "../components/PrimaryBlackBtn";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent";

export const Navbar = () => {
  const MenuNavDrop = useRef(null);
  const [NavMenu, setNavMenu] = useState(false);
  function HandleMenuIcon() {
    setNavMenu(!NavMenu);

  }
  return (
    <>
      <nav className="w-full  h-[88px] flex justify-between items-center text-[#0C0407]  px-[5vw] lg:px-[5vw] xl:px-[16vw]">
        <div className="w-auto h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
        <div className="navCenter hidden lg:flex justify-center items-center gap-14">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/blog">Blog</Link>
          {/* <Link to="/test">Test</Link> */}
          <button>Cart</button>
        </div>
        <div className="h-full hidden lg:flex justify-center items-center">
          <a href="/explore">
          <PrimaryBlackBtn text="Explore all" />
          </a>
        </div>
        <div className="navFarRight flex lg:hidden gap-[20px]">
          <button>Cart</button>
          <button onClick={HandleMenuIcon}>
            <PrimaryBlackBtn text={<i class="ri-menu-line Inter900"></i>} />
          </button>
        </div>
      </nav>

      {NavMenu && (
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div
            className="w-full h-[300px]  border-t-2  flex flex-col justify-between py-2 px-5  items-start text-[20px] font-light"
            ref={MenuNavDrop}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/test">Test</Link>

            <PrimaryBlackBtn text="Explore all" />

            <button className="text-[16px]">Cart</button>
          </div>
        </AnimatedContent>
      )}
    </>
  );
};
