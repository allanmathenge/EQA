import React from 'react'

function Reviews2() {
  return (
    <div className="flex justify-center relative h-[920px] bg-white/[50%] ">

      {/* Large Screen */}
      <div className="hidden lg:flex absolute h-[200px] w-[300px] bg-[#48E3C7] -top-[150px] left-0  blur-[400px]"/>
    {/* Top Elipse */}
      <div className="hidden lg:flex  absolute top-[260px]   ">
        <img className="" src="/static/media/elipse_reviews.png" alt="Elipse"/>

      </div>

    {/* Bottom elipse */}
      <div className=" hidden lg:flex absolute bottom-[130px] z-[25] ">
        <img className="" src="/static/media/elipse2.png" alt="Elipse"/>

      </div>
        <div className="hidden lg:block ">
            <h4 className ="text-[#008000] text-[45px] text-center font-serif" >Our reviews</h4>
           <h5 className='text-black text-[22px] text-center w-[829px] font-[600] mb-[100px]'>These are some of the reviews we got from our clients’ side on how Freshly Farms helped them grow both economically and knowledgewise in farming</h5>
          
          <div className="flex space-x-[20px] ">
            
              <div className="block space-y-[12px]">
                <img className="h-[400px] w-[200px] object-cover" src="/static/media/image4.jpg" alt="image4" />
                <p className='text-black text-[24px]  font-[700] z-30 absolute'>Charles Kisika</p>
                <p className='text-black text-[16px] font-[400] w-[199px] z-30 absolute bottom-[15px] leading-[20.8px] '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>

              <div className="block space-y-[12px]">
                <img className="h-[400px] w-[200px] object-cover" src="/static/media/image3.jpg" alt="image4" />
                <p className='text-black text-[24px]  font-[700] z-30 absolute'>Brian Ouma</p>
                <p className='text-black text-[16px] font-[400] w-[199px] z-30 absolute bottom-[15px] leading-[20.8px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>

              <div className="block space-y-[12px]">
                <img className="h-[400px] w-[200px] object-cover" src="/static/media/image2.jpg" alt="image4" />
                <p className='text-black text-[24px]  font-[700] z-30 absolute'>Stacey Gathoni</p>
                <p className='text-black text-[16px] font-[400] w-[199px] z-30 absolute bottom-[15px] leading-[20.8px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>

              <div className="block space-y-[12px]">
                <img className="h-[400px] w-[200px] object-cover" src="/static/media/image5.png" alt="image4" />
                <p className='text-black text-[24px]  font-[700] z-30 absolute'>Sheila Mueni</p>
                <p className='text-black text-[16px] font-[40] w-[199px] z-30 absolute bottom-[15px] leading-[20.8px]'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
              </div>


          </div>
          
            <div className='flex justify-center mt-[180px]'> 
                <button className='w-[272px] h-[70px] bg-[#008000] rounded-[15px] mt-[62px] text-white text-[25px] '>Read More</button>
            </div>
          
           {/* <div className="flex justify-center mt-[38px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="145" height="32" viewBox="0 0 145 32" fill="none">
                    <ellipse cx="12.9464" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="68.1849" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="127.738" cy="16" rx="17.2619" ry="16" fill="#008000"/> 
                </svg>
                </div>  */}
          
          
           </div> 

           {/* Mobile  */}
        
            <div className="block lg:hidden  overflow-x-scroll relative ">
              <div className="absolute top-[130px] z-[30] right-[100px] ">
                  <img src="/static/media/elipse1_sm.png" alt="Elipse1_sm"/>
                </div>
              <div className="block mb-[80px]">
                <p className="text-[35px] font-[700] text-[#008000] font-inter text-center">Our Reviews</p>
                  <p className="text-[12px] text-black w-[308px] text-center -mt-[20px]">
                  These are some of the reviews we got from our clients’ side on how Freshly Farms helped them grow both economically and knowledgewise in farming
                  </p>
              </div>

              <div className="flex space-x-[20px] mt-[50px] overflow-x-scroll">
                <div className="block">
                  <img className="h-[400px] w-[270px] object-cover z-[10]" src="/static/media/image2.jpg" alt="image4" />
                  <p className="text-black text-[20px] font-[700] font-inter">Stacey Gathoni</p>
                  <p className="text-black font-sans font-[400] leading-[19.5px] text-[15px] w-[199px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                </div>

                <div className="block">
                  <img className="h-[400px] w-[270px] object-cover z-[10]" src="/static/media/image1.png" alt="image4" />
                  <p className="text-black text-[20px] font-[700] font-inter">Stacey Gathoni</p>
                  <p className="text-black font-sans font-[400] leading-[19.5px] text-[15px] w-[199px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                </div>

                <div className="block">
                  <img className="h-[400px] w-[270px] object-cover z-[10]" src="/static/media/image3.jpg" alt="image4" />
                  <p className="text-black text-[20px] font-[700] font-inter">Stacey Gathoni</p>
                  <p className="text-black font-sans font-[400] leading-[19.5px] text-[15px] w-[199px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                </div>


              </div>

              <div className="flex justify-center mt-[50px]">
                <button className="h-[48px] w-[236px] bg-[#008000] text-white rounded-[15px]">Read More</button>
              </div>
              

            
            
             
              {/* <img className="h-[400px] w-[270px] object-cover z-[10x]" src="/static/media/image3.jpg" alt="image4" />
              <img className="h-[400px] w-[270px] object-cover z-[10x]" src="/static/media/image3.jpg" alt="image4" />
              <img className="h-[400px] w-[270px] object-cover z-[10x]" src="/static/media/image3.jpg" alt="image4" />
              <img className="h-[400px] w-[270px] object-cover z-[10x]" src="/static/media/image3.jpg" alt="image4" /> */}

            </div>
           
  </div>
  )
  }
  export default Reviews2
