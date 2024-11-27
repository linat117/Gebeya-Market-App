import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [MoredropdownOpen, setMoreDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-white w-full h-16 px-8 flex items-center justify-between overflow-x-hidden">
      {/* Logo*/}
     

      {/* Navbar Links (visible on large screens) */}
      <div className="hidden lg:flex  space-x-6 ">
      <div className="">
       <a href="/"> <img src="/img/image.png" className=" w-8 h-8 ml-[1rem] mr-[1.3rem] " alt="Logo" /></a>
      </div> 
        <ul className="lg:flex items-center  space-x-6">
          <li>
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <span className="font-poppins text-lg">Register/Sign In</span>
              <img src={dropdownOpen ? "/icons/up.png" : "/icons/down.png"} className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 w-48 mt-2">
                <ul>
                  <li className="px-4 py-2"><a href="/" className="text-black">Register</a></li>
                  <li className="px-4 py-2"><a href="/" className="text-black">Sign In</a></li>
                </ul>
              </div>
            )}
          </li>
          <li><a href="/" className="font-poppins text-lg">Home</a></li>
          <li><a href="#" className="font-poppins text-lg">Men</a></li>
          <li><a href="#" className="font-poppins text-lg">Women</a></li>
          <li><a href="#" className="font-poppins text-lg">Kids</a></li>
          <li><a href="#" className="font-poppins text-lg">Accessories</a></li>
          <li>
            <button onClick={toggleMoreDropdown} className="flex items-center space-x-2">
              <span className="font-poppins text-lg">More</span>
              <img src={MoredropdownOpen ? "/icons/up.png" : "/icons/down.png"} className="w-4 h-4" />
            </button>
            {MoredropdownOpen && (
              <div className="absolute bg-white border border-gray-300 w-48 mt-2">
                <ul>
                  <li className="px-4 py-2"><a href="/perfume" className="text-black">Perfumes</a></li>
                  <li className="px-4 py-2"><a href="/jewelry" className="text-black">Jewelry</a></li>
                  <li className="px-4 py-2"><a href="/gym" className="text-black">Gym wears</a></li>
                  <li className="px-4 py-2"><a href="/vintage" className="text-black">Vintage wears</a></li>
                  <li className="px-4 py-2"><a href="/sport" className="text-black">Sport wear</a></li>
                  <li className="px-4 py-2"><a href="/pj" className="text-black">Pyjamas</a></li>
                  <li className="px-4 py-2"><a href="/slipper" className="text-black">Slippers</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      
      <div className=" lg:hidden flex items-center ">
     
        <button onClick={toggleMenu}>
          <img src={isOpen ? "icons/Cancel.png" :"icons/Humberger.png"} className="w-8 h-8 lg:hidden  " alt="Menu" /> 
        </button>
        <div>
       <a href="/"> <img src="/img/image.png" className="w-8 h-8  ml-[1rem] " alt="Logo" /></a>
      </div>
        
        {isOpen && (
          <div className="absolute top-16 left-0 w-[220px] bg-white shadow-lg z-10">
            <ul className="flex flex-col space-y-[11px] items-center py-4">
            <li>
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <span className="font-poppins text-lg">Register/Sign In</span>
              <img src={dropdownOpen ? "/icons/up.png" : "/icons/down.png"} className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 w-48 mt-[-1.3rem] ml-[11rem]">
                <ul>
                  <li className="px-4 py-2"><a href="/Home" className="text-black">Register</a></li>
                  <li className="px-4 py-2"><a href="#" className="text-black">Sign In</a></li>
                </ul>
              </div>
            )}
          </li>
              <li><a href="/" className="text-lg py-2">Home</a></li>
              <li><a href="#" className="text-lg py-2">Men</a></li>
              <li><a href="#" className="text-lg py-2">Women</a></li>
              <li><a href="#" className="text-lg py-2">Kids</a></li>
              <li><a href="#" className="text-lg py-2">Accessories</a></li>
              <li>
            <button onClick={toggleMoreDropdown} className="flex items-center space-x-2">
              <span className="font-poppins text-lg">More</span>
              <img src={MoredropdownOpen ? "/icons/up.png" : "/icons/down.png"} className="w-4 h-4" />
            </button>
            {MoredropdownOpen && (
              <div className="absolute bg-white border border-gray-300 w-48 mt-[-16.6rem] ml-[8rem]">
                <ul>
                  <li className="px-4 py-2"><a href="/perfume" className="text-black">Perfumes</a></li>
                  <li className="px-4 py-2"><a href="/jewelry" className="text-black">Jewelry</a></li>
                  <li className="px-4 py-2"><a href="/gym" className="text-black">Gym wears</a></li>
                  <li className="px-4 py-2"><a href="/vintage" className="text-black">Vintage wears</a></li>
                  <li className="px-4 py-2"><a href="/sport" className="text-black">Sport wear</a></li>
                  <li className="px-4 py-2"><a href="/pj" className="text-black">Pyjamas</a></li>
                  <li className="px-4 py-2"><a href="/slipper" className="text-black">Slippers</a></li>
                </ul>
              </div>
            )}
          </li>
          <div className="flex items-center   w-42 rounded-lg  px-3 py-2">
          <img src="icons/uk.png"/>
          <p className="ml-[0.3rem]">EN/Currency</p>
          <img src="icons/down.png"/>
        </div>
            </ul>
          </div>
        )}
      </div>

      {/* Search and Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg  px-2 py-2">
          <img src="/icons/search.png" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="ml-[1rem] w-72 text-black focus:outline-none"
          />
        </div> <div className="lg:flex items-center md:hidden hidden   w-42 rounded-lg  px-3 py-2">
          <img src="icons/uk.png"/>
          <p className="ml-[0.3rem]">EN/Currency</p>
          <img src="icons/down.png"/>
        </div>
        <div className="relative">
          <a href="/CartPage">
            <img src="/icons/cart.png" className="w-12 h-12  rounded-full " alt="Cart" />
          </a>
        </div>
      </div>

      {/* Hamburger Menu (visible on small and medium screens) */}
      
    </div>
  );
};

export default Navbar;
