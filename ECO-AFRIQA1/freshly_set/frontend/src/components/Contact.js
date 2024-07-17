import React from 'react'
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="flex justify-center">
        {/* Left side */}
        <div className="block">
            <div className="flex space-x-[256px] items-center max-w-[50%] ">
                <div className="block space-y-[13.9px] align-middle">
                    <MdEmail className="text-black h-[49px] w-[45px]"/>
                    <p className="text-gray-900 text-[32px] font-[700]">Email</p>
                    <p className="text-[22px] font-[400] text-[#525560]">info.freshlyfarms</p>

                </div>

                <div className="block space-y-[13.9px] align-middle">
                    {/* <MdEmail className="text-black h-[49px] w-[45px]"/> */}
                    {/* <img  className="" src="/static/media/phone_icon.png" alt="PhoneIcon"/> */}
                    <p className="text-gray-900 text-[32px] font-[700]">Phone</p>
                    <p className="text-[22px] font-[400] text-[#525560]">info.freshlyfarms</p>

                </div>

            </div>
        </div>
        

        {/* Right side */}
        <div>

        </div>
    </div>
  )
}

export default Contact