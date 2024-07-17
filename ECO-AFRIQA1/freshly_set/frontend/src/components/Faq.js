import React, { useEffect, useState } from 'react'
import { FaCaretUp } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa6";

function Faq() {

    const [clicked, setClicked] = useState({
        1: true,  // Question 1 is open by default
        2: true, // Question 2 is closed by default
        3:true,
        4:false
      });
    
      const toggleFAQ = (id) => {
        setClicked((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      
    useEffect(() => {
        console.log("clicked", clicked)
    },[clicked])
  return (
    <div className="block lg:flex justify-between lg:pl-[34px] lg:pr-[29px] py-[50px] mt-[200px] lg:mx-[30px] rounded-[23px] border-solid border-[1px] border-gray-400/[0.25] shadow-lg">

        {/* Left side */}
        <div className="hidden lg:flex">
            <img className="lg:h-[989px] lg:w-[473px]" src="/static/media/faq_large.png" alt="faq_large"/>
        </div>


        {/* Right Side */}

        <div className="lg:w-[50%] block ">
            <p className="text-[29px]  lg:text-[45px] text-center lg:text-start font-[700] font-inter  text-[#008000]">Frequently Asked Questions</p>
            <p className="text-black/[0.62] font-[500] text-[22px] text-center lg:text-start font-inter -mt-[40] mx-auto lg:mx-0 w-[311px] lg:w-[483px]">Questions You might ask about our products or services</p>

            {/* Cards */}


            {/* Card */}
        <div className="block space-y-[29px] lg:space-y-[63px]">
            <div className="mx-[29px] lg:mx-0  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter text-[12px] lg:text-[22px] font-[700]">What Is Vertical Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[1] ? "text-black/[0.62]  -mt-[10px] lg:-mt-[16px] flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(1)} 
                        className={`text-black h-[52px] w-[55px] -mt-[40px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[1] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>


        {/* Card */}
        <div className="mx-[29px] lg:mx-0  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter text-[12px] lg:text-[22px] font-[700]">What Is Urban Farming?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[2] ? "text-black/[0.62]  -mt-[10px] lg:-mt-[16px] flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(2)} 
                        className={`text-black h-[52px] w-[55px] -mt-[40px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[2] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>
        {/*  */}



    {/* Card */}
    <div className="mx-[29px] lg:mx-0  rounded-[21px] border-solid border-[1px] border-black/[0.25] pl-[22px] mb-4 shadow-lg">
                <p className="text-black font-inter text-[12px] lg:text-[22px] font-[700]">Do You Work With Limited Spaces?</p>
                <div className="flex justify-between items-center align-top">
                    <p className={clicked[3] ? "text-black/[0.62]  -mt-[10px] lg:-mt-[16px] flex text-[9px] lg:text-[16px]" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
                    </p>
                    <div className="flex justify-end w-[100%]">
                    <FaCaretDown 
                        onClick={() => toggleFAQ(3)} 
                        className={`text-black h-[52px] w-[55px] -mt-[40px] cursor-pointer transition-all duration-300 ease-in-out ${clicked[3] ? "rotate-180" : ""}`}
                    />
                    </div>
                </div>
            </div>
        {/*  */}
        </div>




     

            <div className="flex justify-center mt-[81px]">
                <button className="h-[70px] w-[272px] bg-[#008000] text-white rounded-[15px]">Read More</button>
              </div>


       
        </div>
    </div>
  )
}

export default Faq