import { useState } from "react";
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  const [MoredropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setIsOpen((prev) => !prev);
  };
  
  const toggleMoreDropdown = () => {
    setMoreDropdownOpen((prev) => !prev);
    setIsMoreOpen((prev) => !prev);
  };
    return ( 
        < div className="bg-[#FFFFFF] w-screen h-[4.1rem] space-x-[2.75rem]">
        <div className="flex bg-[#FFFFFF] w-[1352px] h-[46.5px] ml-[5rem] mr-[5rem] mt-[1.5rem] mb-[1.22rem]">
<div>
<img src="/img/image.png" className="w-[32px] h-[32px] mt-[0.45rem]"/>
</div>
<div className=" flex mt-[0.7rem] mt-[0.7rem] ml-[4.75rem] ">
<ul class="flex space-x-[24px]">
<li className="flex">
          <button 
            className="flex w-[165px] h-[24px]" 
            onClick={toggleDropdown}
          >
            <img src="/icons/vector.png" className="mr-[0.37rem] mb-[0.37rem] mt-[0.33rem] w-[12px] h-[12.67px]"/>
          <span className=" font-poppins text-[16px] text-[#1E1E1E]/[100%]"> Register/Sign In</span>
          <img src={isOpen ? "/icons/up.png" : "/icons/down.png"} className="w-[16px] h-[16px] mt-[0.25rem] text-[#1E1E1E]/[100%]"/>
          
           
          </button>
          {isOpen && (
            <div  id="dropdown-menu"
            className={`absolute  bg-white border border-[#C1C1C1]  
              w-[194px] h-[132px] mt-[2.73rem] ml-[0.62rem] 
              ${
              dropdownOpen ? "block" : "hidden"
            } group-hover:block`}
          >
              <li className="h-[44px] py-[10px] "><a href="/Home" className=" ml-[4rem] mt-[1.6rem] font-poppins text-[16px] font-medium text-[#000000] h-[24px]">Register</a></li>
              <hr className="w-[127px] ml-[2.06rem] text-[#C1C1C1] mt-[0.62rem]"/>
              <li className="h-[44px] py-[10px]"><a href="#" className="ml-[4.37rem] font-poppins text-[16px] font-medium text-[#000000]">Sign In</a></li>
              </div>
          )}
         
        </li>
            <li><a href="/" className=" font-poppins text-[16px]  font-semibold text-[#1E1E1E]/[100%]">Home</a></li>
            <li><a href="#" className="font-poppins text-[16px] font-normal text-[#1E1E1E]/[100%]">Men</a></li>
            <li><a href="#" className="font-poppins text-[16px] font-normal text-[#1E1E1E]/[100%]">Women</a></li>
            <li><a href="#" className="font-poppins text-[16px] font-normal text-[#1E1E1E]/[100%]">Kids</a></li>
            <li><a href="#" className="font-poppins text-[16px] font-normal text-[#1E1E1E]/[100%]">Accessories</a></li>
            <li>
            <button
            onClick={toggleMoreDropdown}
            className="flex w-[60px] h-[24px] space-x-[4px]"
          >
           <li className="w-[40px] h-[24px] font-poppins text-[16px] text-[#1E1E1E]"> More</li>
          
            <img src={isMoreOpen ? "/icons/up.png" : "/icons/down.png"} className="mt-[4px] "/>
          </button>

          {/* Dropdown Menu */}
          {isMoreOpen && (
          <div
            className={`absolute bg-white border border-[#C1C1C1]  
               w-[194px] h-[280px]   ml-[-3.07rem] mt-[1.3rem] 
              ${
              MoredropdownOpen ? "block" : "hidden"
            } group-hover:block`}
          >
            <a
              href="/perfume"
              className="block ml-[1rem] mt-[0.5rem] mb-[0.5rem]   font-poppins font-medium text-[16px] text-[#000000]"
            >
             <span className="h-[24px] "> Perfumes</span>
            </a>
            <hr/>
            <a
              href="/jewelry"
              className="block  ml-[1rem] mt-[0.5rem] mb-[0.5rem]  font-poppins font-medium text-[16px] text-[#000000]"
            >
            <span className="h-[24px] ">  Jewelries</span>
            </a>
            <hr/>
            <a
              href="/gym"
              className="block  ml-[16px] mt-[0.5rem] mb-[0.5rem] font-poppins font-medium text-[16px] text-[#000000]"
            >
              <span className="h-[24px] ">Gym wears</span>
            </a>
            <hr/>
            <a
              href="/vintage"
              className="block  ml-[16px] mt-[0.5rem] mb-[0.5rem]  font-poppins font-medium text-[16px] text-[#000000]"
            >
             <span className="h-[24px] "> Vintage wears</span>
            </a>
            <hr/>
            <a
              href="/sport"
              className="block ml-[16px] mt-[0.5rem] mb-[0.5rem]  font-poppins font-medium text-[16px] text-[#000000]"
            >
             <span className="h-[24px] "> Sport wear</span>
            </a>
            <hr/>
            <a
              href="/pj"
              className="block ml-[16px]  mt-[0.5rem] mb-[0.5rem]  font-poppins font-medium text-[16px] text-[#000000]"
            >
              <span className="h-[24px] ">Pyjamas</span>
            </a>
            <hr/>
            <a
              href="/slipper"
              className="block ml-[16px] mt-[0.5rem] mb-[0.5rem]  font-poppins font-medium text-[16px] text-[#000000]"
            >
             <span className="h-[24px] "> Slippers</span>
            </a>
          </div>
)}
        </li>
       
       
        

       
        </ul>
        


    
</div>
<div className="flex  ml-[2.75rem] mt-[0.2rem] w-[275px] h-[40px] border border-[#C6C6C6] rounded-[16px] ">
          
          <div className="flex w-[197px] h-[40px] px-[8px] py-[8px]"><img src="/icons/search.png" className="w-[16px] h-[16px] text-[#1E1E1E] ml-[0.5rem] mt-[4px]  opacity-100"/>
          <input type="text" placeholder="Search" className=" w-[57px] h-[24px] font-poppins text-[16px] font-normal align-left text-[#1E1E1E] ml-[0.5rem]" />
          </div>
          <div className="rounded-r-[16px] w-[78px] h-[40px] space-x-[10px] ml-[1rem]  bg-[#882BEC] "><img src="/icons/search.png" className="ml-[23px] mt-[8px] w-[20.28px] h-[20.28px] invert space-x-4 opacity-100"/></div>
        </div> 
        <div className="flex w-[149px] h-[24px] space-x-[4px] ml-[2.75rem] mt-[11.25px]">
         <img src="/icons/uk.png" className="w-[24px] h-[24px]"/>
          <div className=" ml-[28px] font-poppins font-regular text-[16px] text-[#1E1E1E]">EN/Currency</div>
          <img src="/icons/down.png" className="w-[16px] h-[16px] mt-[4px]"/>
          
        </div>    
        <div className="ml-[2.75rem] bg-[#FEA301]">
        <a href="/cart" className="bg-[#FEA301]">
            <img src="/icons/cart.png" alt="Cart" className="w-[47px] h-[46.5px] rounded-full " />
          </a>
        </div>
       
           </div>
        </div>
     );
}
 
export default Navbar;