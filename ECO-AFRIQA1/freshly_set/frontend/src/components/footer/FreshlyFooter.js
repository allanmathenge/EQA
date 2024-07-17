import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaFacebookF,FaArrowUp, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const FreshlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      // console.log("window scroll to height > 300", isVisible)
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="bg-green-300 text-[10px] md:text-lg text-gray-600 p-4 sm:text-sm mt-[160px]">
      <div className="text-xs md:text-lg flex flex-col justify-center items-start text-gray-600 lg:flex-row border-b border-green-400 pb-8">

        <section className="">
          <h1 className="text-center font-bold pb-2">LOGO</h1>
          <div className="hidden lg:flex">
            <div className="gap-4">

              <p className="">We are revolutionizing urban farming by transforming urban spaces into lush, green sanctuaries, bringing farm-fresh goodness closer to your table. Join us</p>
              <div className="pt-2 flex gap-2">
                <a href="+254 712345678"><FaPhoneAlt /></a>
                <a href= "mailto: info@freshlyfarms.com"><MdEmail /></a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center items-start gap-6 sm:gap-4 md:gap-8 mx-auto">

          <div className="text-nowrap flex flex-col">
            <h4 className="font-bold pb-2 underline">Pages</h4>
            <a href="/">Home</a>
            <a href="tutor">Services</a>
            <a href="students">Resources</a>
            <a href="about">Our History</a>
            <a href="contact">Contact Us</a>
          </div>

          <div className="text-nowrap flex flex-col">
            <h4 className="font-bold pb-2 underline">Explore</h4>
            <a href="blog">Blog</a>
            <a href="faq">FAQs</a>
            <a href="terms">Terms of Service</a>
            <a href="policy">Privacy Policy</a>
          </div>

          <div className="text-nowrap flex flex-col">
            <h4 className="font-bold pb-2 underline">Services</h4>
            <a href="about">Personal Info</a>
            <a href="tutor">Orders</a>
            <a href="students">Adresses</a>
            <a href="parents">Parents</a>
            <a href="contact">New Password</a>
          </div>
        </div>

        <div className="animate-ping fixed bottom-4 right-4 ">
        {isVisible && (
          <button
          onClick={scrollToTop}
          className="bg-green-600 p-2 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition">
          <FaArrowUp />
        </button>
        )}
        </div>

      </div>

        {/* <hr className="w-full h-[2px] bg-green-500" /> */}
        {/* <section className="flex justify-between items-end">

          <p>&copy;{year}-<a href="/">Freshly Farms</a></p>

          <p className="flex text-[12px]">
            <a href="/"><BsTwitterX /></a>
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagramSquare /></a>
          </p>

          <p className="flex gap-1">
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">Surport</a> 
          </p>
        </section>*/}

    </div>
  )
}

export default FreshlyFooter