import React from "react";
import footer_image from "../assets/Home/H33.png";
import footer_logo from "../assets/Home/H01.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer_container w-[100%] min-h-[80vh] flex flex-col justify-center items-center gap-[50px]  h-auto py-[100px]  bg-black">
        <div className="w-[100%] h-auto sm:w-[100%] sm:h-auto md:h-auto  flex justify-center items-center flex-wrap py-[10px]">
          <div className="w-[100%] h-auto sm:w-[400px] sm:h-auto md:h-auto flex justify-center items-center md:items-start flex-col gap-[10px] py-[10px]">
            <div className="w-full h-auto flex justify-center items-center md:items-start flex-col">
              <div className="w-[100px] h-[33px] text-[16px] rounded-[20px] flex justify-center items-center text-[#e5e4e4] bg-[#241d1f] mb-[10px] border-2 border-solid border-[#3e383b]">
                CONTACT
              </div>
              <div className="text-[30px] sm:text-[40px] text-white font-bold text-center md:text-left">
                Want to contact <br></br> with us?
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-1 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className=" h-[50px] px-1.5 w-[250px] border-none contact_input placeholder:text-[#807c7e]"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  className=" h-[50px] px-1.5 w-[250px] border-none contact_input placeholder:text-[#807c7e]"
                />
              </div>
              <div className=""></div>
            </div>

            <div className="py-[14px] px-[22px] text-center lg:py-[14px] lg:px-[28px] text-[#000000] bg-[#ffffff] rounded-[16px] text-[16px] Inter700 inline-flex justify-center items-center">
              Book a Call
            </div>
          </div>

          <div className="w-[100%] h-auto sm:w-[500px] sm:h-[100%] flex justify-center items-center">
            <img src={footer_image} alt="" className="object-cover" />{" "}
          </div>
        </div>

        <div className="w-[100%] h-auto flex justify-center items-center gap-[100px] flex-wrap py-[30px] px-[5px]">
          <div className="w-[300px] space-y-4 text-white cursor-pointer flex justify-center  items-center sm:items-start flex-col">
            <div className="cursor-pointer">
              <img src={footer_logo} alt="" />
            </div>
            <div className="text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor
              semper felis pulvinar feugiat risus adipiscing dictum.
            </div>
            <div className="min-w-[180px] h-[40px] rounded-[10px] cursor-pointer border-2 border-solid p-6 border-[#453f41] flex justify-center items-center">
              View More Templates
            </div>
          </div>

          <div className="text-white text-[16px] space-y-2 cursor-pointer flex flex-col gap-2">
            <div className="text-white text-[21px] font-bold">Pages</div>
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Services</div>
            <div className="">Contact</div>
            <div className="">Realtor</div>
            <div className="">Privacy Policy</div>
          </div>

          <div className="text-white text-[16px] space-y-2 cursor-pointer flex flex-col gap-2">
            <div className="text-white text-[21px] font-bold">CMS</div>
            <div className="">Properties</div>
            <div className="">Properties Single</div>
            <div className="">Blog</div>
            <div className="">Blog Single</div>
            <div className="">Agents</div>
            <div className="">Agents Single</div>
          </div>

          <div className="text-white text-[16px] space-y-2 cursor-pointer flex flex-col gap-2">
            <div className="text-white text-[21px] font-bold">Utility</div>
            <div className="">Style guide</div>
            <div className="">404 Page</div>
            <div className="">Password protected</div>
            <div className="">Licenses</div>
            <div className="">Changelog</div>
            <div className="">Terms & conditions</div>
          </div>

          <div className="text-white text-[16px] space-y-2 cursor-pointer flex flex-col gap-2">
            <div className="text-white text-[21px] font-bold">Social</div>
            <div className="">Facebook</div>
            <div className="">Instagram</div>
            <div className="">Twitter</div>
            <div className="">Linkedin</div>
            <div className="">YouTube</div>
            <div className="">Threads</div>
          </div>
        </div>

        <div className="w-[100%] h-[40px] my-[10px]  justify-center items-center text-[#979797] border-t-3 border-[#221b1e] text-[18px] py-[30px] cursor-pointer flex flex-col gap-2">
          ©️Realvy. All rights reserved.
        </div>
      </div>
    </>
  );
};
