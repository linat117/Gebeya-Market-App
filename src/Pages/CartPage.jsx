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
  const [text, setText] = useState(''); // Initial text is empty

  // Function to change text when a button is clicked
  const handleButtonClick = (newText) => {
    setText(newText);
  };
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F2F2] w-screen h-full">
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
           <div className="border border-[#C1C1C1] bg-white w-[1380px] ml-[5rem] mt-[2rem] h-[500px] rounded-[16px]">
<div>
<div className="flex flex-col items-center space-y-4">
      {/* Buttons in flex layout */}
      <div className="flex space-x-4">
        <button
          onClick={() => handleButtonClick('Button 1 clicked!')}
          className="px-4 py-2   rounded-[22px] hover:bg-[#FEA301] active:bg-[#FEA301] border border-black"
        >
         Overview
        </button>
        <button
          onClick={() => handleButtonClick('Button 2 clicked!')}
          className="px-4 py-2   rounded-[22px] hover:bg-[#FEA301] active:bg-[#FEA301] border border-black"
        >
          Description
        </button>
        <button
          onClick={() => handleButtonClick('Button 3 clicked!')}
          className="px-4 py-2   rounded-[22px] hover:bg-[#FEA301] active:bg-[#FEA301] border border-black"
        >
          Warranty
        </button>
        <button
          onClick={() => handleButtonClick('Button 4 clicked!')}
          className="px-4 py-2   rounded-[22px] hover:bg-[#FEA301] active:bg-[#FEA301] border border-black"
        >
          Reviews
        </button>
      </div>

      {/* Displaying the text below the buttons */}
      <p className="text-xl font-semibold">{text}</p>
    </div>
</div>
           </div>
        </div>
      </div>
      <div className="w-screen bg-primary h-full text-white">
      {/* Desktop and tablet screens */}
      <div className="flex flex-col md:flex-row md:space-x-[68px] p-4">
        {/* About Section */}
        <div className="mt-4">
          <ul className="leading-[36px] font-poppins">
            <li className="font-bold">About</li>
            <li>About Us</li>
            <li>News & Blog</li>
            <li>Location</li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="mt-4">
          <ul className="leading-[36px] font-poppins">
            <li className="font-bold">Products</li>
            <li>Pricing</li>
            <li>Store</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Discover Section */}
        <div className="mt-4">
          <ul className="leading-[36px] font-poppins">
            <li className="font-bold">Discover</li>
            <li>Contact Us</li>
            <li>Customers</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </div>

      {/* Mobile View: Dropdowns for each section */}
      <div className="md:hidden mt-4">
        <div className="space-y-4">
          <div>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="w-full text-left font-bold bg-primary text-white"
            >
              About
            </button>
            {isAboutOpen && (
              <ul className="pl-4 space-y-2">
                <li>About Us</li>
                <li>News & Blog</li>
                <li>Location</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left font-bold bg-primary text-white"
            >
              Products
            </button>
            {isProductsOpen && (
              <ul className="pl-4 space-y-2">
                <li>Pricing</li>
                <li>Store</li>
                <li>Features</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
              className="w-full text-left font-bold bg-primary text-white"
            >
              Discover
            </button>
            {isDiscoverOpen && (
              <ul className="pl-4 space-y-2">
                <li>Contact Us</li>
                <li>Customers</li>
                <li>Affiliates</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Logo and Social Icons */}
      <div className="border-t border-white mt-4 pt-4 pb-4 flex flex-col items-center">
        <img src="/img/footer-logo.png" className="w-[170px]" alt="Footer Logo" />
        <div className="flex space-x-4 mt-4">
          <img src="/icons/insta.png" className="w-[22px] h-[22px]" alt="Instagram" />
          <img src="/icons/whatsapp.png" className="w-[26px] h-[26px]" alt="WhatsApp" />
          <img src="/icons/x.png" className="w-[24px] h-[24px]" alt="Other Icon" />
        </div>
      </div>

      {/* Empty space below */}
    </div>
    </>
  );
};

export default CartPage;
