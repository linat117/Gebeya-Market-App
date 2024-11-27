import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";

   
const CartPage = () => {
  // Get the product and selectedImage from the location state passed from the home page
  const location = useLocation();
  const { product, selectedImage } = location.state;

  // State to handle the currently selected image
  const [currentImage, setCurrentImage] = useState(selectedImage);

  // Array of images (for example purposes, it's the same as product images)
  const images = product.images;
  const [quantity, setQuantity] = useState(0); // Initial value is 0
  
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1); // Decrease value by 1, ensure it doesn't go below 0
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1); // Increase value by 1
  };
  const items = {
   Overview: `Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.
Built-in arch support to help maintain healthy foot development.
Soft insoles and adequate padding to support growing feet.
Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.
Built-in arch support to help maintain healthy foot development.
Soft insoles and adequate padding to support growing feet.`,
   Description: `Built-in arch support to help maintain healthy foot development.
Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.
Built-in arch support to help maintain healthy foot development.
Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.`,
    Warranty: `Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.Built-in arch support to help maintain healthy foot development.
Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, and patterns and themes to appeal to kids
Rubber outsoles with good traction to prevent slips and falls.Built-in arch support to help maintain healthy foot development.`,
    Reviews:`Rubber outsoles with good traction to prevent slips and falls.Built-in arch support to help maintain healthy foot development.
    Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, 
    and patterns and themes to appeal to kids.
    Rubber outsoles with good traction to prevent slips and falls.Built-in arch support to help maintain healthy foot development.
    Soft insoles and adequate padding to support growing feet.Available in a wide range of colors, patterns, 
    and patterns and themes to appeal to kids`
  };

  const [activeCategory, setActiveCategory] = useState("Overview");
  const [content, setContent] = useState(items["Overview"]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setContent(items[category]);
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F2F2] w-full h-full py-[24px] overflow-x-hidden">
        {/* Breadcrumb */}
        <div className="flex space-x-[10px] ml-[5rem] py-[18px]">
          <p>Home</p> <p>&gt;</p> <p>Kids</p> <p>&gt;</p> <p>Shoes</p> <p>&gt;</p> <p>Sneakers</p>
        </div>

        <div className="flex">
          {/* Product Image Section */}
          <div className="flex border border-[#C1C1C1] bg-white w-[920px] ml-[5rem] mt-[1rem] h-[500px] rounded-[16px]">
            <div>
              {/* Large Image Display */}
              <div className="w-[300px] h-[240px] ml-[1.2rem] mt-[1.2rem] rounded-[16px] bg-[#F2F2F2] flex items-center justify-center">
                <img src={currentImage} alt="Selected" className="py-[14px] px-[32px]" />
              </div>

              {/* Thumbnail Images */}
              <div className="flex mt-[1rem]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`bg-[#F2F2F2] w-[62px] h-[62px] rounded-[8px] ml-[0.7rem] mt-[0.5rem] flex items-center justify-center cursor-pointer ${
                      image === currentImage ? "border-2 border-[#FEA301]" : ""
                    }`}
                    onClick={() => setCurrentImage(image)}
                  >
                    <img src={image} alt={`Image ${index + 1}`} className="w-[48px] h-[48px] rounded-[8px]" />
                  </div>
                ))}
              </div>
              <div className="ml-[3rem] mt-[1.5rem] ">
                <p className="font-poppins">Share this product</p>
                <div className="flex space-x-[12px] mt-[1.5rem] ">
                <img src="/icons/insta.png" className="w-[22px] invert h-[22px]"/>
                <img src="/icons/whatsapp.png" className="w-[22px] invert h-[22px]"/>
                <img src="/icons/x.png" className="w-[22px] invert h-[20px] mt-[0.1rem]"/>
            </div>
              </div>
            </div>
            <div className="mt-[1rem] ml-[1rem]">
              <h2 className="text-[20px] font-poppins font-semibold text-[40px]">{product.name}</h2>
              
              <h2 className="text-[20px]  font-Poppins font-semibold text-[20px]">BRAND:{product.description}</h2>
              <hr/>
              <p className="text-[16px] font-poppins  font-semibold mt-[1rem]">
                {product.price}<span className="font-normal text-gray-500 ml-[0.8rem] line-through"> $300</span>
                
              </p>
              <span className="font-poppins text-green-800 mb-[0.5rem] font-normal">50 units left</span><br/>
              <span className="font-poppins text-gray-400 font-normal">+ Shipping fee may vary on location</span>
            <p className="flex text-gray-400"><img src="/icons/star1.png"/>1K+ rating</p>
            <hr className="text-gray-400"></hr>
            <div className="flex ">
            <span className="font-poppins mt-[1.2rem] mr-[0.9rem]">Quantity:</span>
            <div className="flex justify-center items-center w-[130px] h-[50px] rounded-[8px] mt-[0.5rem] mb-[0.5rem] border border-black">
     
      {/* Minus Button */}
      
      <button
        onClick={handleDecrease}
        className="w-[40px] h-full flex justify-center items-center bg-[#FEA301]  rounded-l-[8px] hover:bg-[#FEA301]/[52%]"
      >
        -
      </button>

      {/* Value Display */}
      <div className="flex justify-center items-center w-[50px] h-full bg-white text-xl font-semibold">
        {quantity}
      </div>

      {/* Plus Button */}
      <button
        onClick={handleIncrease}
        className="w-[40px] h-full flex justify-center items-center bg-[#FEA301]  rounded-r-[8px] hover:bg-[#FEA301]/[52%]"
      >
        +
      </button>
    </div>
    </div>
            <div className="flex font-poppins">
                <span className="mt-[0.2rem]">Size: </span>
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]">20</div>
           
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]">25</div>
                
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]">32</div>
                
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]">37</div>
                <a href="#" className="text-[10px] mt-[0.5rem]">See all size guides</a>
            </div>
            <div className="flex font-poppins mt-[0.7rem]">
                <span className="mt-[0.2rem]">Colors: </span>
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]"><p className="w-[18px] h-[18px] bg-green-400 mt-[0.2rem]"></p></div>
           
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]"><p className="w-[18px] h-[18px] bg-blue-400 mt-[0.2rem]"></p></div>
                
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]"><p className="w-[18px] h-[18px] bg-red-400 mt-[0.2rem]"></p></div>
                
                <div className="border border-gray-400 rounded-[5px] w-[40px] h-[32px] px-[10px] py-[3px] ml-[0.5rem]"><p className="w-[18px] h-[18px] bg-purple-400 mt-[0.2rem]"></p></div>

            </div>
            <div className="space-x-[30px] mt-[2rem]">
                <button className="border border-black py-[7px] px-[13px] rounded-[8px] bg-primary/[70%] text-white">Save for later</button>
              <a href="/Checkout"> <button  className="border border-black py-[7px] px-[13px] rounded-[8px] bg-[#FEA301]/[70%] ">Buy Now</button></a> 
           
            </div>
            <p className="font-poppins text-[14px] mt-[1rem] text-green-700">PICKUP AND PAY ON COLLECTION AVAILABLE</p>
            </div>
            <div>
                <img src="icons/heart.png" className="ml-[12rem] mt-[2rem] w-[40px] h-[40px] bg-[#FEA301] py-[5px] px-[5px] rounded-full"/>
            </div>
          </div>

          {/* Placeholder for Right Section */}
          <div className="border border-[#C1C1C1] bg-white w-[440px] ml-[1.3rem] mt-[1rem] h-[500px] rounded-[16px]">
            <h1 className="font-poppins text-[24px] ml-[6rem] mt-[1rem] mb-[0.5rem] font-semibold">Delivery and returns</h1>
            <hr className="ml-[2rem] mr-[2rem]  "/>
            <p className="ml-[2rem]">Location:</p>
            <input className="border border-black/[55%] w-[350px] ml-[2rem] py-[5px] mt-[0.4rem] mb-[1rem] rounded-[8px]" placeholder="Location"/>
            <input className="border border-black/[55%] w-[350px] ml-[2rem] py-[5px] mt-[0.4rem] rounded-[8px]" placeholder="Sub-location"/>
           
            <p className="ml-[2rem] mt-[0.8rem] font-poppins font-semibold "> Delivery</p>
            <p className="ml-[2rem] mr-[2rem] font-poppins">Estimated delivery time is 1-12 business days 
For Same-Day-Delivery: Please place your order before 12pm
Next-Day-Delivery: Orders placed after 12pm will be delivered the next day.
Note: Availability may vary by location</p>
<p className="ml-[2rem] mt-[0.8rem] font-poppins font-semibold ">Return policy</p>
<p className="ml-[2rem] mr-[2rem] font-poppins" >Guaranteed 7-day return policy
For details about return shipping options, please visit our Contact page</p>
          </div>
        </div>
        <div >
           <div className="border border-[#C1C1C1] bg-white w-[1380px] ml-[5rem] mb-[4rem] mt-[2rem] h-[500px] rounded-[16px]">
<div>
<div className="flex flex-col items-start ml-[5rem] mt-[3rem]">
      <div className="flex space-x-[36px] mb-[2rem]">
        {Object.keys(items).map((category) => (
          <button
            key={category}
            onClick={() => changeCategory(category)}
            className={`w-[200px] h-[40px] border border-[#C1C1C1] rounded-[23px] transition-all 
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
        <div className="mt-[2rem] mr-[4rem] p-[1rem] border border-[#C1C1C1]/[50%] leading-[38px] rounded-lg bg-[#F2F2F2]">
          <p>{content}</p>
        </div>
      )}
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

export default CartPage;
