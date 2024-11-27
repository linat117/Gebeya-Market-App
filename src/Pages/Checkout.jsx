import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";

   
const Checkout = () => {
  // Get the product and selectedImage from the location state passed from the home page
  const location = useLocation();
    const product = location.state?.product;
    const items = {
       Card: (
        <form className="flex flex-col space-y-4">
        <label>
        <p className="font-poppins font-semibold"> Name on card:</p>
          <input
            type="text"
            placeholder="First name and last name"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
       <p className="font-poppins font-semibold"> Card Number:</p>
          <input
            type="email"
            placeholder="0000 0000 0000 0000"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </label>
        <div className="flex">
<div>
<p className="font-poppins font-semibold ">Expiry</p>
<div className="space-x-[40px]" >
  <input className="w-[250px] border border-gray-400  h-[40px] rounded-md px-[10px]" placeholder="MM"/>
  <input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]" placeholder="YYYY"/>
</div>
</div>
<div className="ml-[3rem]">
<p className="font-poppins font-semibold"> CVV:</p>
<input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]" placeholder="CVV"/>
</div>
        </div>
      </form>
          ),
          Wallet: (
            <form className="flex flex-col space-y-4">
            <label>
             <p className="font-poppins font-semibold"> Name on Wallet:</p>
              <input
                type="text"
                placeholder="First name and last name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
           <p className="font-poppins font-semibold"> Wallet number:</p>
              <input
                type="email"
                placeholder="0000 0000 0000 0000"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </label>
            <div className="flex">
<div>
  <p className="font-poppins font-semibold ">Expiry</p>
  <div className="space-x-[40px]" >
      <input className="w-[250px] border border-gray-400  h-[40px] rounded-md px-[10px]" placeholder="MM"/>
      <input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]" placeholder="YYYY"/>
  </div>
</div>
<div className="ml-[3rem]">
  <p className="font-poppins font-semibold ">CVV</p>
  <input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]" placeholder="CVV"/>
</div>
            </div>
          </form>
          ),
          BankTransfer: (
            <form className="flex flex-col space-y-4">
              <label>
              <p className="font-poppins font-semibold"> Name on book:</p>
                <input
                  type="text"
                  placeholder="First name and last name"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
             <p className="font-poppins font-semibold"> Account Number:</p>
                <input
                  type="email"
                  placeholder="0000 0000 0000 0000"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </label>
              <div className="flex">
<div>
    <p className="font-poppins font-semibold ">Expiry</p>
    <div className="space-x-[40px]" >
        <input className="w-[250px] border border-gray-400  h-[40px] rounded-md px-[10px]" placeholder="MM"/>
        <input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]" placeholder="YYYY"/>
    </div>
</div>
<div className="ml-[3rem]">
<p className="font-poppins font-semibold"> CVV</p>
    <input className="w-[250px] border border-gray-400 h-[40px] rounded-md px-[10px]"  placeholder="CVV"/>
</div>
              </div>
            </form>
          ),
          
       };
       const [activeCategory, setActiveCategory] = useState("Card");
       const [content, setContent] = useState(items["Card"]);
     
       const changeCategory = (category) => {
         setActiveCategory(category);
         setContent(items[category]);
       };
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F2F2] w-full py-[24px] h-full overflow-x-hidden">
        {/* Breadcrumb */}
       

        <div className="flex py-[36px]">
          {/* Product Image Section */}
          <div className="flex border border-[#C1C1C1] bg-white w-[920px] ml-[5rem] mt-[1rem] h-[500px] rounded-[16px]">
           <div>
            <div className="block ml-[2rem] space-y-[12px]">
                <h1 className="font-poppins font-semibold text-[28px] mb-[2rem]  mt-[1.2rem]">Shipping Address</h1>
           <p className="font-poppins font-semibold">Name</p>
           <input className="w-[850px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="First & last name"/>
           <p className="font-poppins font-semibold">Address 1</p>
           <input className="w-[850px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="412, Dubai St"/>
           <p className="font-poppins font-semibold">Address 2</p>
           <input className="w-[850px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="23rd, Boulevard Ave"/>
          
            </div>
            <div className="flex ml-[2rem] mt-[1rem] space-x-[50px]">
           <div className="space-y-[16px]"> 
             <p className="font-poppins font-semibold">City</p>
           <input className="w-[250px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="Enter City"/>
           </div>
           <div className="space-y-[16px]">
             <p className="font-poppins font-semibold">State</p>
           <input className="w-[250px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="Select State"/>
           </div>
           <div className="space-y-[16px]">
             <p className="font-poppins font-semibold">Zip</p>
           <input className="w-[250px] h-[44px] px-[8px] border border-gray-300 rounded-[12px]" placeholder="Zip code"/>
           </div>
            </div>
           </div>
            
            
          </div>

          {/* Placeholder for Right Section */}
          <div className="border border-[#C1C1C1] bg-white w-[440px] ml-[1.3rem] mt-[1rem] h-[450px] rounded-[16px]">
        <h1 className="font-poppins font-semibold text-[20px] px-[130px] py-[20px]"> Order Summary</h1>
        <hr/>
        <div className="flex">
<div className="w-[100px] h-[100px] mt-[1rem] ml-[1rem] bg-[#F2F2F2] rounded-[12px]">
    <img src="" className=""/>
</div>
<div className="ml-[1rem] mt-[1rem] block">
    <h1 className="font-poppins font-semibold text-[18px] mt-[1rem]">Burberry shine</h1>
    <p className="text-[12px] text-gray-400">FENDI</p>
</div>
        </div>
        <div className="flex ml-[1rem] mt-[1.5rem] mb-[1rem] space-x-[290px]">
            <div className="font-poppins text-gray-400 space-y-[12px]">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Tax</p>
            </div>
            <div className="font-poppins  space-y-[12px]">
                <p>$150</p>
                <p>$10</p>
                <p>$5</p>
            </div>

        </div>
        <hr/>
        <div className="flex ml-[1rem] mt-[1rem] mb-[1rem] space-x-[330px]">
<p>Total</p>
<p>$165</p>
        </div>
        <button className="bg-[#FEA301] ml-[3rem] text-white w-[350px] h-[40px] rounded-md">Place order</button>
           </div>
        </div>
        <div >
           <div className="border border-[#C1C1C1] bg-white w-[1380px] ml-[5rem] mt-[0rem] h-[600px] rounded-[16px]">
<div>
<div className="flex flex-col items-center space-y-4">
      {/* Buttons in flex layout */}
    
      <div className=" ml-[-8rem] mt-[3rem]">
       <h2 className="font-poppins font-semibold text-[24px]"> Payment method</h2>
      <div className="flex space-x-[90px] mb-[2rem] ml-[4rem] mt-[2rem]">
        {Object.keys(items).map((category) => (
          <button
            key={category}
            onClick={() => changeCategory(category)}
            className={`w-[200px] h-[90px] border border-[#C1C1C1] rounded-[23px] transition-all 
            ${
              activeCategory === category
                ? "bg-[#FEA301] text-white"
                : "bg-white text-black hover:bg-[#FEA301] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {content && (
        <div className=" w-[900px] mt-[2rem] mr-[4rem] p-[1rem] border border-[#C1C1C1]/[50%] leading-[38px] rounded-lg bg-[#F2F2F2]">
          <p>{content}</p>
        </div>
      )}
    </div>
      {/* Displaying the text below the buttons */}
    </div>
</div>
           </div>
        </div>
      </div>
      {/*Footer section */}
      <div className="w-full bg-primary">
  {/* Logo and Social Icons */}
  <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-8 md:px-32 py-6">
  

    {/* Footer Links */}
    <div className="w-full md:w-auto mt-8 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
      {/* About Dropdown */}
      <div>
        <details className="md:hidden">
          <summary className="text-white font-bold cursor-pointer">About</summary>
          <ul className="text-white space-y-2 mt-2">
            <li>About Us</li>
            <li>News & Blog</li>
            <li>Location</li>
          </ul>
        </details>
        <ul className="hidden md:block text-white space-y-2">
          <li className="font-bold">About</li>
          <li>About Us</li>
          <li>News & Blog</li>
          <li>Location</li>
        </ul>
      </div>
      

      {/* Products Dropdown */}
      <div>
        <details className="md:hidden">
          <summary className="text-white font-bold cursor-pointer">Products</summary>
          <ul className="text-white space-y-2 mt-2">
            <li>Pricing</li>
            <li>Store</li>
            <li>Features</li>
          </ul>
        </details>
        <ul className="hidden md:block text-white space-y-2">
          <li className="font-bold">Products</li>
          <li>Pricing</li>
          <li>Store</li>
          <li>Features</li>
        </ul>
      </div>

      {/* Discover Dropdown */}
      <div>
        <details className="md:hidden">
          <summary className="text-white font-bold cursor-pointer">Discover</summary>
          <ul className="text-white space-y-2 mt-2">
            <li>Contact Us</li>
            <li>Customers</li>
            <li>Affiliates</li>
          </ul>
        </details>
        <ul className="hidden md:block text-white space-y-2">
          <li className="font-bold">Discover</li>
          <li>Contact Us</li>
          <li>Customers</li>
          <li>Affiliates</li>
        </ul>
      </div>
      <hr/>
        {/* Logo */}
    <div className="text-center md:text-left">
      <img src="/img/footer-logo.png" alt="Footer Logo" className="lg:w-[170px] w-[70px] mx-auto md:mx-0" />
      <div className="flex justify-center md:justify-start space-x-4 mt-4">
        <img src="/icons/insta.png" alt="Instagram" className="lg:w-[22px] h-[22px]" />
        <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-[22px] h-[22px]" />
        <img src="/icons/x.png" alt="X" className="w-[22px] h-[22px]" />
      </div>
    </div>
    </div>
  </div>
</div>
    
    </>
  );
};

export default Checkout;
