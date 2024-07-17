import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaUser, FaUserCircle, FaUsers } from "react-icons/fa";
import { CiSettings, CiGlobe, CiUser } from "react-icons/ci";

function Nav() {

    const [scrolled, setScrolled ] = useState(false);

    const [activeTab, setActiveTab] = useState("home");

    const [open, setOpen] = useState(false);

    const showStar = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }


    useEffect(function mount() {
       
        window.addEventListener('scroll', showStar);
    
        return function unMount() {
          window.removeEventListener("scroll", showStar);
        };
      });


      useEffect(() => {
        console.log("open", open)
      },[open])
  return (
    <div>
        {/* Large screen navbar */}

        <nav className="navbarBg">
            {/* Logo */}
            <img className={scrolled ? "navbarLogoScroll" : "navbarLogo"} src="/static/media/logo2.png" alt="NavLogo"/>

            {/* Nav Buttons */}

            <div className="navbarBtns">
                <Link onClick={() => setActiveTab("home")} style={{textDecoration:"none"}} to="/" className="navbarBtn">
                    <p className='navbarTxt text-red-400'>Home</p>
                        {/* <div className="h-[10px] w-[109.005px] bg-[#008000] -mt-[25px] cursor-pointer "/> */}
                        <div className="navbarLine"/>

                </Link>

                <Link onClick={() => setActiveTab("about")} style={{textDecoration:"none"}} to="/about-us" className="navbarBtn">
                    <p className='navbarTxt'>About</p>
                    <div className="navbarLine"/>
                </Link>


                <div className="navbarBtn">
                    <p className='navbarTxt'>Blogs</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarBtn ">
                    <p className='navbarTxt'>Signup</p>
                    <div className="navbarLine"/>
                </div>
            </div>
            
        </nav>

        {/* Small screen Navbar */}
{/* 
        <nav className="navbarSmBg">
            <img src="/static/media/logo2.png"/>

            <div className="navbarSmBtns">
                <div className="navbarSmBtn">
                    <p className=''>Home</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarSmBtn">
                    <p style={{marginLeft:"25px"}} className=''>Signup</p>
                    <div className="navbarLine"/>
                </div>

                {
                    !open ? (
                        <IoMdMenu onClick={() => setOpen(true)} style={{marginLeft:"25px"}}  className="menuIcon"/>

                    ):(
                        <IoMdClose className="menuIcon" style={{marginLeft:"25px"}}  onClick={() => setOpen(false)} />

                    )
                }
                
                <div className={open ? " flex justify-center  z-50  h-screen":"hidden"}>
                        <div className="block">
                            <li>Home</li>
                        </div>

                </div>


              
             </div>
        </nav>  */}

        <nav className={open ? "flex justify-center z-[50] lg:hidden bg-[#008000]/[85%]  w-[100%] h-[100%] fixed top-0  ":"bg-white flex justify-between fixed top-0 w-[100%] lg:hidden items-center pl-[18px] z-[60]"}>
            <img className={!open ? "flex h-[77px] w-[80px] object-cover":"hidden"} src="/static/media/logo2.png" alt="navLogo"/>
                        
                        <div className={!open ? "flex space-x-[33px]":"hidden"}>
                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000]">Home</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>

                            <div className="block group">
                                <p className="text-[20px] font-[700] text-[#008000]">Sign Up</p>
                                <div className="h-[5px] w-[70px] bg-[#008000] -mt-[15px] hidden group-hover:flex"/>
                            </div>
                        </div>
                        
            <div className="flex  justify-center">
                {!open &&(
                    <div className="">
                        
                        <IoMdMenu onClick={() => setOpen(true)}  className="text-black h-[37px] w-[44px] my-[42px] mr-[41px] "/>
                        
                    </div>

                )}

            </div>
           

            {open  && (
             
              <div className="block w-[100%] ">
                <div className="flex justify-between items-center  pt-[45px]  px-[31px] ">
                    <img className="h-[77px] w-[80px] bg-white object-cover rounded-[100%]" src="/static/media/logo2.png" alt="navLogo"/>
                    <IoMdClose onClick={() => setOpen(false)} className="text-white h-[77px] w-[80px] cursor-pointer"/>

                </div>
                <div className="flex justify-center">
                    <div className="block space-y-[40px] mt-[50px]">
                        <div className="flex space-x-[22px]  items-center ">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700]">About Us</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <CiGlobe className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700]">Blog</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <FaUsers className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700]">Sign Up</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <FaUser className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700]">Your Profile</p>
                        </div>

                        <div className="flex space-x-[22px]  items-center">
                            <CiSettings className="h-[54px] w-[64px] text-white"/>
                            <p className="text-white text-[30px] font-[700]">Settings</p>
                        </div>
                    </div>
                    
                </div>  
                
                






              </div>
                


            // <div className="flex justify-center mt-[60px] bg-red-400 w-[100%] -ml-[20%]">
            //         <h1>Hello world</h1>
            // </div>
            )}
        </nav>
    </div>
  )
}

export default Nav