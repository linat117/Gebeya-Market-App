import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const products =[
  {
    id: 1,
    images: ["img/french_kiss_bag.png", "img/Burberry_Shine.png","img/Alvero_Gown.png", "img/Product2Two.png"],
    name: "French Kiss Bag",
    description: "ALDO",
    price: "$500",
  },
  
  {
    id: 2,
    images: ["img/Burberry_Shine.png", "img/product2Side.png", "img/Product2Two.png", "img/french_kiss_bag.png"],
    name: "Burberry shine",
    description: "FENDI",
    price: "$150",
  },
  {
    id: 3,
    images: ["img/Alvero_Gown.png", "img/product2Side.png", "img/Product2Two.png", "img/french_kiss_bag.png"],
    name: "Alvero Gown",
    description: "Divine",
    price: "$300",
  }
      ];
const Home = () => {
  const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Men");

    // Example data for each category (including image and description)
    const items = {
      Men: [
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
      ],
      Women: [
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
      ],
      Kids: [
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
      ],
      Perfumes: [
       
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
      ],
      Sport: [
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
      ],
      Jewelry: [
       
        { id: 7, image: "/img/sunglasses.png",name:"Sunglasses", description: "See all collections" },
        { id: 8, image: "/img/sun_wear.png",name:"Sun wear", description: "See all collections" },
        { id: 9, image: "/img/hat.png",name:"Hats", description: "See all collections" },
        { id: 10, image: "/img/slippers.png",name:"Slippers", description: "See all collections" },
        { id: 4, image: "/img/lingrae.png",name:"Lingerie", description: "See all collections" },
        { id: 5, image: "/img/Belts.png",name:"Belts", description: "See all collections" },
        { id: 6, image: "/img/street_wear.png",name:"Street wear", description: "See all collections" },
        { id: 1, image: "/img/shoe.png", name:"Shoes", description: "See all collections" },
        { id: 2, image: "/img/Bag.png",name:"Bags", description: "See all collections" },
        { id: 3, image: "/img/Jacket.png",name:"Jackets", description: "See all collections" },
        { id: 11, image: "/img/wigs.png",name:"Wigs", description: "See all collections" },
        { id: 12, image: "/img/costmetics.png",name:"Cosmetics", description: "See all collections" },
      ],
    };
     // Function to handle category change
     const changeCategory = (category) => {
      setActiveCategory(category);
    };
    const handleAddToCart = (product) => {
      navigate("/CartPage", { state: { product } });
    };
  
   
    return ( 
        <>
        <Navbar/>
        <div className="overflow-x-hidden overflow-auto">
            <div className="hidden lg:flex bg-[#882BEC] w-full h-[650px] ">
<div className="mt-[6rem]">

    <span className="ml-[7rem] font-alfa-slab text-[122px] font-regular  text-[#FFFFFF]">Gebeya</span>
<img src="/img/shoee.jpeg" className="ml-[13.75rem] mt-[1rem] w-[210px] h-[210px] rounded-full"/>
</div>
<div>
<img src="/img/person.jpg" className="mt-[3.87rem] ml-[3.8rem] w-[250px] h-[250px] rounded-full"/>
<button className="bg-[#FEA301] w-[350px] h-[50px] mt-[6rem]  "><span className="font-poppins h-[20px] text-[18px] font-medium">Explore Now</span></button>
</div>
<div className="block ml-[4rem] mr-[6rem] mt-[5rem]">
<span className=" text-[#FFFFFF] font-poppins font-regular w-[320px] text-[20px] leading-[32px] ">Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service.<br/></span>
<span className=" mt-[-1rem] text-[122px] font-alfa-slab font-regular text-[#FFFFFF]">SHOP</span>
<img src="/img/shirt.jpeg" className="w-[183px] h-[183px] rounded-full ml-[4rem]"/>
</div>
            </div>
            {/*mobile view */}
            <div className=" lg:hidden bg-[#882BEC] w-full h-[500px] ">
<div className="mt-[0rem] py-[24px]">

    <span className="ml-[2rem] mt-[2rem]  font-alfa-slab text-[42px] font-regular  text-[#FFFFFF]">TIMBU</span>
</div>
<div>
<img src="/img/person.jpg" className="mt-[-1rem] ml-[5.2rem] w-[200px] h-[200px] rounded-full"/>
<span className=" mt-[4rem] text-[42px] ml-[14rem] font-alfa-slab font-regular text-[#FFFFFF]">SHOP</span>

<button className="bg-[#FEA301] w-[300px] h-[50px] mt-[3rem] ml-[1.7rem] "><span className="font-poppins h-[20px] text-[18px] font-medium">Explore Now</span></button>

</div>
<div className="block ml-[4rem] mr-[6rem] mt-[5rem]">
</div>
            </div>
            {/*Tablet view */}
            
            <div>
                <div className="flex">
                <div><h1 className="mt-[4.6rem] text-[32px] font-poppins font-semibold  lg:ml-[5rem] ml-[1.5rem]">Latest Collections</h1></div>
              <div className="flex lg:ml-[63rem] hidden   lg:mt-[7rem]">
                <button className="flex  rounded-[16px] py-[0px] w-[82px] h-[22px] space-x-[22px]">
                    <img src="/icons/left.png " className="px-[1px] bg-[#FEA301] h-[27px]  rounded-l-[16px]"/>
                    <img src="/icons/rignt.png" className="px-[3px] bg-[#FEA301] h-[27px] rounded-r-[16px]"/>
                   
                    </button>
                
                </div>
                </div>
                <div className="flex lg:ml-[3rem] ml-[0rem] overflow-x-auto whitespace-nowrap lg:overflow-visible">
  {products.map((product) => (
    <div
      key={product.id}
      className="inline-block lg:w-[440px] w-[220px] h-[397px] border border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]"
    >
      <div className="lg:w-[420px] w-[200px] h-[207px] mt-[0.6rem] ml-[0.6rem] mr-[0.6rem] py-[12px] rounded-[8px] bg-[#C1C1C1]/[22%]">
        <div className="flex">
          <div>
            <img
              src="/icons/heart.png"
              className="ml-[0.8rem] py-[10px] border border-white rounded-full px-[10px] bg-white"
              alt="Heart icon"
            />
          </div>
          <div>
            <button className="w-[70px] h-[30px] bg-white lg:ml-[18rem] ml-[4rem] rounded-[16px] text-[12px]">
              In Stock
            </button>
          </div>
        </div>
        <div className="ml-[1rem] mt-[-7rem] lg:py-[72px] py-[102px]  lg:px-[92px] px-[10px]">
          <img
            src={product.images[0] || "img/french_kiss_bag.png"}
            alt={product.name}
            className="lg:w-[180px] w-[130px] lg:h-[180px] h-[130px]"
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <button className="w-[60px] h-[25px] bg-white ml-[0.6rem] rounded-[16px] border border-[#C6C6C6] text-[12px] mt-[0.5rem] text-[#1E1E1E]/[70%]">
            Women
          </button>
        </div>
        <div className="flex lg:ml-[17.5rem] ml:[8rem]">
          <div>
            <img src="/icons/star1.png" className="py-[12px] lg:ml-[0rem] ml-[4rem]" alt="Star icon" />
          </div>
          <div>
            <button className="h-[25px] bg-white lg:ml-[0rem]  text-[12px] mt-[0.5rem] font-poppins text-[#1E1E1E]/[70%]">
              2K+ rating
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[0.6rem] mt-[0.8rem]">
        <span className="font-poppins font-semibold text-[#1E1E1E]">{product.name}</span>
        <p className="text-[#808080] font-poppins text-[12px] font-medium">
          {product.description}
        </p>
      </div>
      <div className="flex mt-[2rem] ml-[0.6rem]">
        <span className="font-poppins font-semibold mt-[0.5rem]">{product.price}</span>
        <button
          onClick={() => handleAddToCart(product)}
          className="border text-[#FFFFFF] bg-[#FEA301] text-[12px] font-poppins font-medium py-[10px] px-[12px] rounded-[10px] lg:ml-[18rem] ml-[4rem]"
        >
          Add to cart
        </button>
      </div>
    </div>
  ))}
</div>

          </div>
            <div>
            <div>
            <div>
      {/* Category Buttons */}
     <div className="lg:flex lg:space-x-[16px] lg:ml-[5rem] ml-[1.5rem] mt-[3rem] mb-[2rem] flex overflow-x-auto gap-[16px]">
  {Object.keys(items).map((category) => (
    <button
      key={category}
      onClick={() => changeCategory(category)}
      className={`lg:w-[200px] lg:h-[40px] w-[150px] mb-[2rem] h-[40px] border border-[#C1C1C1] rounded-[23px] shrink-0 ${
        activeCategory === category ? "bg-[#FEA301] text-white" : ""
      }`}
    >
      {category}
    </button>
  ))}
</div>


      {/* Display Items */}
      <div className="lg:ml-[5rem] ml-[1rem] ">
        {/* First Row */}
        <div className="lg:flex grid md:grid-cols-3 grid-cols-2 lg:space-x-[36px] lg:mb-[2rem] ">
          {items[activeCategory].slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="lg:w-[200px] lg:h-[240px] border border-[#C1C1C1] rounded-[8px] flex flex-col items-center p-2 lg:m-0 m-3"
            >
                <div className="lg:w-[150px] h-[100px] mt-[1rem] rounded-[12px] bg-gray-100 px-[40px] py-[14px]">
              <img
                src={item.image}
                alt={item.description}
                className="w-[70px] h-[70px] object-cover  "
              />
              </div>
              <p className="mt-2 text-center text-sm">{item.name}</p>
              
              <p className="mt-2 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="lg:flex grid md:grid-cols-3 grid-cols-2 lg:space-x-[36px]">
          {items[activeCategory].slice(6, 12).map((item) => (
            <div
              key={item.id}
              className="lg:w-[200px]  lg:h-[240px] border border-[#C1C1C1] rounded-[8px] flex flex-col items-center p-2 lg:m-0 m-3"
            >
              <div className="lg:w-[150px] lg:h-[100px] mt-[1rem] rounded-[12px] bg-gray-100 px-[40px] py-[14px]">
              <img
                src={item.image}
                alt={item.description}
                className="w-[70px] h-[70px] object-cover  "
              />
              </div>
              <p className="mt-2 text-center text-sm">{item.name}</p>
              
              <p className="mt-2 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-[2rem]">
        <button className="w-[180px] h-[40px] border border-[#C1C1C1] rounded-[10px] bg-primary text-white font-medium">
          See More
        </button>
      </div>

      {/* Placeholder for Other Sections */}
      <div className=" bg-[#D0D0D0] lg:w-[1380px] w-[315px] lg:h-[400px] h-[360px] lg:ml-[5rem] ml-[1.8rem] lg:mt-[4rem] mt-[2rem] rounded-[16px]">
        
        <div className="flex"><div className=" lg:ml-[3rem] ml-[1rem] lg:mt-[1rem] mt-[1rem]"> 
<div className="font-poppins font-semibold lg:text-primary text-white lg:text-[40px] text-[18px]  lg:w-[450px] w-[200px]">Our Curated Summer Collection</div>
<div className="font-poppins font-regular text-[16px]  lg:w-[360px] w-[280px] leading-[26px] lg:text-primary  text-white mt-[0.9rem]">Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.</div>
      <button className="bg-[#FEA301] mt-[2rem] ml-[0.8rem] h-[38px] w-[260px] rounded-[12px] text-white">Explore Now</button>
        </div>
    
        <div className="hidden"><img src="/summer_advert.png" className=" h-[400px]   rounded-[16px] lg:w-[1150px] sm:hidden ml-[rem]"/></div>
      </div>
      <div>
        <div className="lg:hidden w-[10px] h-[10px] rounded-full bg-[#FFD700] lg:mt-[-23.5rem] mt-[-17rem]  lg:ml-[35.6rem] ml-[20rem]"></div>

          <div className="w-[22px] h-[22px] rounded-full bg-primary lg:mt-[2.6rem] mt-[1.9rem] lg:ml-[66rem] ml-[16rem]"></div>
          <div className="w-[22px] h-[22px] rounded-full bg-primary lg:mt-[0.6rem] mt-[3.5rem] lg:ml-[46rem] ml-[18rem] "></div>
          <div className="flex lg:mt-[6rem] lg:ml-[33.4rem]">   
             <div className="w-[12px] h-[12px] rounded-full bg-primary/[49%] ml-[2rem] mt-[0.2rem] "></div>
          <div className="lg:hidden w-[26px] h-[26px] rounded-full bg-[#FFD700] lg:ml-[12rem] ml-[5rem] mt-[2rem] "></div>
          </div> <div className="w-[22px] h-[22px] rounded-full bg-primary lg:ml-[29rem] lg:mt-[5rem] mt-[4rem] lg:ml-[42rem] ml-[18rem] "></div>
          <div className="w-[12px] h-[12px] rounded-full bg-primary/[49%] lg:ml-[58rem]  ml-[4rem]"></div>
       
        </div>
      </div>
      <h1 className="lg:mt-[4.6rem] mt-[2rem] lg:text-[40px] text-[28px] font-semibold lg:ml-[5rem] ml-[2rem] font-poppins">Browse by category</h1>
      <div className="flex overflow-x-auto space-x-4 ml-[2rem] lg:mt-[3rem] mt-[1.6rem] sm:ml-[5rem]">
  <div className="lg:w-[320px] lg:h-[397px]   border-[#C1C1C1] mb-[3rem] rounded-[18px]">
    <div className="lg:w-[320px] w-[250px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
      <img src="img/casual_shirt.png" className="lg:py-[8px] py-[38px] px-[46px] " alt="Casual Shirt" />
    </div>
    <div className="font-poppins font-bold text-[18px] mt-[2.4rem] text-center">Casual Wear</div>
    <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] text-center">
      Over 20 categories in stock
    </div>
  </div>
  <div className="lg:w-[320px] lg:h-[397px] border-[#C1C1C1] mb-[3rem] rounded-[18px]">
    <div className="lg:w-[320px] w-[250px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
      <img src="img/vintage_dress.png" className="lg:py-[1px]  py-[28px] px-[46px]" alt="Vintage Dress" />
    </div>
    <div className="font-poppins font-bold text-[18px] mt-[2.4rem] text-center">Vintage</div>
    <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] text-center">
      Over 31 categories in stock
    </div>
  </div>
  <div className="lg:w-[320px] lg:h-[397px] border-[#C1C1C1] mb-[3rem] rounded-[18px]">
    <div className="lg:w-[320px] w-[250px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
      <img src="img/beauty_products.png" className="lg:py-[30px] py-[48px] px-[46px]" alt="Beauty Products" />
    </div>
    <div className="font-poppins font-bold text-[18px] mt-[2.4rem] text-center">Beauty Products</div>
    <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] text-center">
      Over 24 categories in stock
    </div>
  </div>
  <div className="lg:w-[320px] lg:h-[397px] border-[#C1C1C1] mb-[3rem] mr-[1rem] rounded-[18px]">
    <div className="lg:w-[320px] w-[250px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
      <img src="img/gym_wears (2).png" className="lg:py-[8px] py-[39px] px-[46px]" alt="Gym Wears" />
    </div>
    <div className="font-poppins font-bold text-[18px] mt-[2.4rem] text-center">Gym Wears</div>
    <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] text-center">
      Over 62 categories in stock
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

    </div>

      {/* See More Button
      <div className="flex justify-center mt-8">
        <button className="w-48 h-10 border border-gray-300 rounded-lg bg-primary text-white">
          See More
        </button>
      </div>
    </div> */}

        {/* "See more" button 
        <div>
          <button className="flex w-[180px] h-[40px] border border-[#C1C1C1] rounded-[10px] mt-[2rem] ml-[42.5rem] bg-primary text-white font-poppins font-medium items-center">
            See more
            <img src="/icons/arrow.png" alt="Arrow" />
          </button>
        </div>
*/}
        {/* Other sections 
        <div className="bg-gray-100 w-[1230px] h-[400px] ml-[8rem] mt-[4rem]"></div>
        <div>
          <h1 className="mt-[4.6rem] text-[32px] font-poppins font-semibold ml-[8rem]">
            Browse by category
          </h1>
          <div className="flex">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-[360px] h-[397px] border border-[#C1C1C1] mb-[3rem] ml-[8rem] mt-[2.7rem] rounded-[18px]"
              >
                <div className="w-[320px] h-[207px] mt-[1.2rem] ml-[1.2rem] rounded-[8px] bg-[#C1C1C1]/[22%]"></div>
              </div>
            ))}
          */}
         {/*</div>*/}
        </div>
      </div>
    </div>
    
       
        
        </>
     );
}
 
export default Home;