import { useState } from "react";
import Navbar from "../Components/Navbar";
const Home = () => {
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
    return ( 
        <>
        <Navbar/>
        <div>
            <div className="flex bg-[#882BEC] w-screen h-[650px] ">
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
            <div>
                <div className="flex">
                <div><h1 className="mt-[4.6rem] text-[32px] font-poppins font-semibold ml-[5rem]">Latest Collections</h1></div>
              <div className="flex ml-[63rem] mt-[7rem]">
                <button className="flex  rounded-[16px] py-[0px] w-[82px] h-[22px] space-x-[22px]">
                    <img src="/icons/left.png " className="px-[1px] bg-[#FEA301] h-[27px]  rounded-l-[16px]"/>
                    <img src="/icons/rignt.png" className="px-[3px] bg-[#FEA301] h-[27px] rounded-r-[16px]"/>
                   
                    </button>
                
                </div>
                </div>
                <div className="flex">
                    <div className="w-[440px] h-[397px] border border-[#C1C1C1] mb-[3rem] ml-[5rem] mt-[2.7rem] rounded-[18px]">
                        <div className=" w-[420px] h-[207px] mt-[0.6rem] ml-[0.6rem] py-[12px] rounded-[8px] bg-[#C1C1C1]/[22%]">
                      <div className="flex">
                       <div><img src="/icons/heart.png" className="ml-[0.8rem]  py-[10px] border border-white rounded-full px-[10px] bg-white"/></div> 
                   <div> <button className="w-[70px] h-[30px] bg-white  ml-[18rem] rounded-[16px] text-[12px]">In Stock</button></div> 
                    </div>
                    <div className="ml-[1rem] mt-[-7rem] py-[72px] px-[92px]"><img src="/img/french_kiss_bag.png" className="w-[180px] h-[180px]"/></div>
                  
                    </div>
                    <div className="flex">
                    <div> <button className="w-[60px] h-[25px] bg-white  ml-[0.6rem] rounded-[16px] border border-[#C6C6C6] text-[12px] mt-[0.5rem] text-[#1E1E1E]/[70%]">Women</button></div> 
                    <div className="flex ml-[17.5rem]">
                        <div><img src="/icons/star1.png" className="py-[12px]"/></div>
                        <div><button className=" h-[25px] bg-white  ml-[0rem]  text-[12px] mt-[0.5rem] font-poppins text-[#1E1E1E]/[70%]">2K+ rating</button></div> 
                        
                        </div> 
                   
                    </div>
                    <div className="ml-[0.6rem] mt-[0.8rem]">
                        <span className="font-poppins font-semibold text-[#1E1E1E] ">French Kiss Bag</span>
                        <p className="text-[#808080] font-poppins text-[12px] font-medium">ALDO</p>
                    </div>
                    <div className="flex mt-[2rem] ml-[0.6rem]">
                        <span className="font-poppins font-semibold mt-[0.5rem]">$500</span>
                        <button className="border  text-[#FFFFFF] bg-[#FEA301] text-[12px] font-poppins font-medium py-[10px] px-[12px] rounded-[10px] ml-[18rem]"><a href="/CartPage">Add to cart</a></button>
                    </div>
                    </div>
                    
                    <div className="w-[440px] h-[397px] border border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]">
                        <div className=" w-[420px] h-[207px] mt-[0.6rem] ml-[0.6rem] py-[12px] rounded-[8px] bg-[#C1C1C1]/[22%]">
                      <div className="flex">
                       <div><img src="/icons/heart.png" className="ml-[0.8rem]  py-[10px] border border-white rounded-full px-[10px] bg-white"/></div> 
                   <div> <button className="w-[70px] h-[30px] bg-white  ml-[18rem] rounded-[16px] text-[12px]">In Stock</button></div> 
                    </div>
                    <div className="ml-[2rem] mt-[-6rem] py-[68px] px-[92px]"><img src="/img/Burberry_Shine.png" className="w-[180px] h-[180px]"/></div>
                  
                    </div>
                    <div className="flex">
                    <div> <button className="w-[60px] h-[25px] bg-white  ml-[0.6rem] rounded-[16px] border border-[#C6C6C6] text-[12px] mt-[0.5rem] text-[#1E1E1E]/[70%]">Kids</button></div> 
                    <div className="flex ml-[17.5rem]">
                        <div><img src="/icons/star1.png" className="py-[12px]"/></div>
                        <div><button className=" h-[25px] bg-white  ml-[0rem]  text-[12px] mt-[0.5rem] font-poppins text-[#1E1E1E]/[70%]">1K+ rating</button></div> 
                        
                        </div> 
                   
                    </div>
                    <div className="ml-[0.6rem] mt-[0.8rem]">
                        <span className="font-poppins font-semibold text-[#1E1E1E] ">Burberry shine</span>
                        <p className="text-[#808080] font-poppins text-[12px] font-medium">FENDI</p>
                    </div>
                    <div className="flex mt-[2rem] ml-[0.6rem]">
                        <span className="font-poppins font-semibold mt-[0.5rem]">$150</span>
                        <button className="border  text-[#FFFFFF] bg-[#FEA301] text-[12px] font-poppins font-medium py-[10px] px-[12px] rounded-[10px] ml-[18rem]"><a href="/CartPage">Add to cart</a></button>
                    </div>
                    </div>
                    <div className="w-[440px] h-[397px] border border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]">
                        <div className=" w-[420px] h-[207px] mt-[0.6rem] ml-[0.6rem] py-[12px] rounded-[8px] bg-[#C1C1C1]/[22%]">
                      <div className="flex">
                       <div><img src="/icons/heart.png" className="ml-[0.8rem]  py-[10px] border border-white rounded-full px-[10px] bg-white"/></div> 
                   <div> <button className="w-[70px] h-[30px] bg-white  ml-[18rem] rounded-[16px] text-[12px]">In Stock</button></div> 
                    </div>
                    <div className="ml-[3rem] mt-[-7.5rem] py-[92px] px-[92px]"><img src="/img/Alvero_Gown.png" className="w-[130px] h-[120px"/></div>
                  
                    </div>
                    <div className="flex">
                    <div> <button className="w-[60px] h-[25px] bg-white  ml-[0.6rem] rounded-[16px] border border-[#C6C6C6] text-[12px] mt-[0.5rem] text-[#1E1E1E]/[70%]">Women</button></div> 
                    <div className="flex ml-[17.5rem]">
                        <div><img src="/icons/star1.png" className="py-[12px]"/></div>
                        <div><button className=" h-[25px] bg-white  ml-[0rem]  text-[12px] mt-[0.5rem] font-poppins text-[#1E1E1E]/[70%]">5K+ rating</button></div> 
                        
                        </div> 
                   
                    </div>
                    <div className="ml-[0.6rem] mt-[0.8rem]">
                        <span className="font-poppins font-semibold text-[#1E1E1E] ">Alvero Gown</span>
                        <p className="text-[#808080] font-poppins text-[12px] font-medium">DIVINE</p>
                    </div>
                    <div className="flex mt-[2rem] ml-[0.6rem]">
                        <span className="font-poppins font-semibold mt-[0.5rem]">$300</span>
                        <button className="border  text-[#FFFFFF] bg-[#FEA301] text-[12px] font-poppins font-medium py-[10px] px-[12px] rounded-[10px] ml-[18rem]"><a href="/CartPage">Add to cart</a></button>
                    </div>
                    </div>
                    <div>
                        
                    </div>
                   
                </div>
            </div>
            <div>
            <div>
            <div>
      {/* Category Buttons */}
      <div className="flex space-x-[36px] ml-[5rem] mt-[3rem] mb-[2rem]">
        {Object.keys(items).map((category) => (
          <button
            key={category}
            onClick={() => changeCategory(category)}
            className={`w-[200px] h-[40px] border border-[#C1C1C1] rounded-[23px] ${
              activeCategory === category ? "bg-[#FEA301] text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Items */}
      <div className="ml-[5rem]">
        {/* First Row */}
        <div className="flex space-x-[36px] mb-[2rem]">
          {items[activeCategory].slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[240px] border border-[#C1C1C1] rounded-[8px] flex flex-col items-center p-2"
            >
                <div className="w-[150px] h-[100px] mt-[1rem] rounded-[12px] bg-gray-100 px-[40px] py-[14px]">
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
        <div className="flex space-x-[36px]">
          {items[activeCategory].slice(6, 12).map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[240px] border border-[#C1C1C1] rounded-[8px] flex flex-col items-center p-2"
            >
              <div className="w-[150px] h-[100px] mt-[1rem] rounded-[12px] bg-gray-100 px-[40px] py-[14px]">
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
      <div className=" bg-[#D0D0D0] w-[1380px] h-[400px] ml-[5rem] mt-[4rem] rounded-[16px]">
        
        <div className="flex"><div className=" ml-[3rem] mt-[1rem]"> 
<div className="font-poppins font-semibold text-white text-[40px]  w-[450px]">Our Curated Summer Collection</div>
<div className="font-poppins font-regular text-[16px]  w-[360px] leading-[26px] text-white mt-[0.9rem]">Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.</div>
      <button className="bg-[#FEA301] mt-[2rem] h-[38px] w-[160px] rounded-[12px] text-white">Explore Now</button>
        </div>
    
        <div><img src="/summer_advert.png" className="h-[400px]  rounded-[16px] w-[1150px] ml-[rem]"/></div>
      </div>
      <div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFD700]  mt-[-23.5rem] ml-[35.6rem]"></div>

          <div className="w-[22px] h-[22px] rounded-full bg-primary mt-[2.6rem] ml-[66rem]"></div>
          <div className="w-[22px] h-[22px] rounded-full bg-primary mt-[0.6rem] ml-[46rem]  "></div>
          <div className="flex mt-[6rem] ml-[33.4rem]">    <div className="w-[12px] h-[12px] rounded-full bg-primary/[49%]  "></div>
          <div className="w-[26px] h-[26px] rounded-full bg-[#FFD700] ml-[12rem] "></div>
          </div> <div className="w-[22px] h-[22px] rounded-full bg-primary ml-[29rem] mt-[5rem] ml-[42rem]  "></div>
          <div className="w-[12px] h-[12px] rounded-full bg-primary/[49%] ml-[58rem] "></div>
       
        </div>
      </div>
      <h1 className="mt-[4.6rem] text-[40px] font-semibold ml-[5rem] font-poppins">Browse by category</h1>
      <div className="flex">
        <div className="w-[320px] h-[397px]  border-[#C1C1C1] mb-[3rem] ml-[5rem] mt-[2.7rem] rounded-[18px]">
          <div className="w-[320px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
          <img src="img/casual_shirt.png" className="py-[8px] px-[46px]"/></div>
          <div className="font-poppins font-bold text-[18px] mt-[2.4rem] ml-[5.7rem]"> Casual Wear</div>
          <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] ml-[4.3rem]">Over 20 categories in stock</div>
        </div>
        <div className="w-[320px] h-[397px]  border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]">
          <div className="w-[320px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
          <img src="img/vintage_dress.png" className="py-[1px] px-[46px]"/></div>
          <div className="font-poppins font-bold text-[18px] mt-[2.4rem] ml-[5.7rem]">Vintage</div>
          <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] ml-[4.3rem]">Over 31 categories in stock</div>
        </div> <div className="w-[320px] h-[397px]  border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]">
          <div className="w-[320px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
          <img src="img/beauty_products.png" className="py-[30px] px-[46px]"/></div>
          <div className="font-poppins font-bold text-[18px] mt-[2.4rem] ml-[5.7rem]"> Beauty products</div>
          <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] ml-[4.3rem]">Over 24 categories in stock</div>
        </div>
        <div className="w-[320px] h-[397px]  border-[#C1C1C1] mb-[3rem] ml-[2rem] mt-[2.7rem] rounded-[18px]">
          <div className="w-[320px] h-[240px] bg-[#C6C6C6]/[30%] rounded-[18px]">
          <img src="img/gym_wears (2).png" className="py-[8px] px-[46px]"/></div>
          <div className="font-poppins font-bold text-[18px] mt-[2.4rem] ml-[5.7rem]"> Gym wears</div>
          <div className="font-poppins font-normal text-[12px] text-[#C6C6C6]/[80%] mt-[0.3rem] ml-[4.3rem]">Over 62 categories in stock</div>
        </div>
      </div>
      {/*Footer section */}
      <div className="w-screen h-[70px] bg-primary flex">
        <div>
            <img src="/img/footer-logo.png" className="w-[170px] ml-[8rem] mt-[4rem]"/>
            <div className="flex space-x-[12px] mt-[1.5rem] ml-[9.7rem]">
                <img src="/icons/insta.png" className="w-[22px] h-[22px]"/>
                <img src="/icons/whatsapp.png" className="w-[26px] h-[26px]"/>
                <img src="/icons/x.png" className="w-[24px] h-[24px] mt-[0.1rem]"/>
            </div>
        </div>
        <div className="flex space-x-[68px] mt-[5rem] ml-[44rem]  ">
        <div >
            <ul className="text-white leading-[36px] font-poppins">
                <li className="font-bold ">About</li>
                <li>About Us</li>
                <li>News & Blog</li>
                <li>Location</li>
            </ul>
        </div>
        <div>
        <ul className="text-white leading-[36px] font-poppins">
                <li className="font-bold ">Products</li>
                <li>Pricing</li>
                <li>Store</li>
                <li>Features</li>
            </ul>
        </div>
        <div>
        <ul className="text-white leading-[36px] font-poppins">
                <li className="font-bold ">Discover</li>
                <li>Contact Us</li>
                <li>Customers</li>
                <li>Affiliates</li>
            </ul>
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
          </div>*/}
          <div className="w-screen h-[270px] bg-primary"></div>
        </div>
      </div>
    </div>
    
       
        
        </>
     );
}
 
export default Home;