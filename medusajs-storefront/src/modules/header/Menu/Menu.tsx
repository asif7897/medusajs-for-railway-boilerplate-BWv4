//@ts-nocheck
"use client"
import Link from "next/link";
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import img1 from "lib/img1.png"
import img2 from "lib/logo1.png"
import img5 from "lib/img5.png";
import img6 from "lib/img6.png";
import img7 from "lib/img7.jpg";
import img8 from "lib/img8.png";
import Image from "next/image";
interface Props {
  props: string;
}

const Menu: React.FC<Props> = ({ props }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  console.log(hoveredItem);

  const categories: { [key: string]: Category[] } = {
    New: [
      { name: "New Arrivals", subcategories: ["Men", "Women", "Kids"], image: img1 },
      { name: "Seasonal Trends", subcategories: ["Spring Collection", "Summer Collection", "Fall Collection"], image: img2 },
      { name: "Limited Edition", subcategories: ["Exclusive Items", "Signature Series", "Collector's Edition", "Embroidery Designs", "E-Gift Cards", "Mizzen+Main x VESSEL Collaboration"], image: img7 },
    ],
    Bestsellers: [
      { name: "Top Sellers", subcategories: ["Men's Top Sellers", "Women's Top Sellers", "Kids' Top Sellers"], image: img5 },
      { name: "Customer Favorites", subcategories: ["Most Loved", "Highest Rated", "Best Reviewed"], image: img7 },
      { name: "Popular Choices", subcategories: ["Trending Now", "Weekly Bestsellers", "Seasonal Hits"], image: img6 },
    ],
    DressShirt: [
      { name: "Formal Shirts", subcategories: ["Classic Dress Shirts", "Business Attire", "Formal Wear"], image: img7 },
      { name: "Casual Shirts", subcategories: ["Weekend Shirts", "Relaxed Fit", "Everyday Casual"], image: img8 },
      { name: "Special Occasions", subcategories: ["Wedding Collection", "Party Shirts", "Event Ready", "Embroidery Designs", "E-Gift Cards", "Mizzen+Main", "VESSEL Collaboration"], image: img1 },
    ],
    Shop: [
      { name: "Tops", subcategories: ["Shop All", "Dress Shirts", "No Tuck Dress Shirts", "Short Sleeve Dress Shirts", "Polos", "T-Shirts & Undershirts", "Quarter Zips & Pullovers", "Hoodies", "Blazers", "Outerwear", "Suits"], image: img2 },
      { name: "Bottoms", subcategories: ["Shop All", "Chinos", "5-Pocket Pants", "Joggers", "Shorts"], image: img5 },
      { name: "Accessories", subcategories: ["Shop All", "Bags", "Belts", "Hats", "Ties & Pocket Squares"], image: img1 },
      { name: "Featured", subcategories: ["Core Basics", "Casual Wear", "Fresco Suit", "Embroidery Designs", "E-Gift Cards", "Mizzen+Main x VESSEL Collaboration"], image: img5 },
    ],
    LastChance: [
      { name: "Clearance Sale", subcategories: ["Final Markdowns", "Last Chance Deals", "End of Season"], image: img7 },
      { name: "Liquidation", subcategories: ["Closeout Items", "Overstock Bargains", "Discontinued Styles", "Fresco Suit", "Embroidery Designs", "E-Gift Cards"], image: img2 },
      { name: "Flash Sale", subcategories: ["Limited Time Offers", "Flash Deals", "One Day Only"], image: img8 },
      { name: "Closeout Deals", subcategories: ["Winter Clearance", "Spring Closeouts", "Summer Blowout"], image: img1 },
    ],
    Golf: [
      { name: "Golf Apparel", subcategories: ["Men's Golf Wear", "Women's Golf Apparel", "Junior Golf Clothing"], image: img2 },
      { name: "Golf Accessories", subcategories: ["Golf Bags", "Golf Shoes", "Gloves & Hats"], image: img5 },
      { name: "Golf Gear", subcategories: ["Clubs & Equipment", "Golf Technology", "Training Aids"], image: img2 },
      { name: "Golf Clearance", subcategories: ["Discounted Clubs", "Closeout Balls", "End-of-Season Apparel"], image: img5 },
    ],
    Bottom: [
      { name: "Casual Pants", subcategories: ["Chinos", "Khakis", "Cargo Pants"], image: img2 },
      { name: "Denim Jeans", subcategories: ["Slim Fit Jeans", "Straight Leg", "Bootcut"], image: img7 },
      { name: "Shorts", subcategories: ["Cargo Shorts", "Bermuda Shorts", "Athletic Shorts"], image: img8 },
      { name: "Summer Styles", subcategories: ["Vacation Shorts", "Beachwear", "Poolside Fashion", "Fresco Suit", "Embroidery Designs", "E-Gift Cards"], image: img1 },
    ],
    TheMainSale: [
      { name: "Main Sale", subcategories: ["Seasonal Markdowns", "Limited Quantity", "Warehouse Clearance"], image: img2 },
      { name: "Special Offers", subcategories: ["Bundle Deals", "Multi-Buy Discounts", "Member Exclusive"], image: img5 },
      { name: "Promotions", subcategories: ["Holiday Sales", "Back-to-School Deals", "Anniversary Specials"], image: img7 },
      { name: "Clearance Extravaganza", subcategories: ["Final Closeouts", "Overstock Blowout", "Last Call"], image: img5 },
    ],
  };



  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className={`relative w-full md:h-[74px] h-[56px] ${props}`}>
        <div className="flex justify-between items-center mx-5">
          <div className="form-search relative mt-2">
            <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
            <input type="text" placeholder='Search' className=' h-12 rounded-3xl border border-line text-sm w-full pl-10 pr-4' />
          </div>
          <div className="inset-0 flex items-center justify-center z-0">
            <a href="" className="flex justify-center items-center cursor-pointer decoration-inherit text-3xl font-extrabold">Mizzan + Main</a>
          </div>
          <div className="flex justify-between items-center gap-3">
            <Icon.User size={24} color='black' />
            <Icon.Handbag size={24} color='black' />
          </div>
        </div>
        <nav className="block isolate bg-white">
          <ul className=" absolute justify-center gap-4 pb-3.5 flex w-full lg:gap-6">
            {Object.keys(categories).map((item) => (
              <li
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="" className="text-base cursor-pointer after:transition-width after:absolute after:-bottom-2.5 after:left-0 after:right-0 after:h-0.5 after:duration-200 after:ease-in-out after:w-0 after:bg-blue-400 hover:text-blue-400">
                  <Link href={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item}
                  </Link>
                </a>
                {"Shop" === item && (
                  <div className="absolute left-0 right-0 mt-2 h-[330px]  bg-white shadow-lg border border-gray-200 rounded-md p-4 z-10">
                    <div className="flex justify-center items-center">
                      <ul className="flex justify-center gap-5 h-full items-center">
                        {categories[item].map((category, index) => (
                          <li key={index} className=" hover:bg-gray-10">
                            <strong>{category.name}</strong>
                            <ul className="mt-3">
                              {category.subcategories.map((subcategory, subIndex) => (
                                <li className="text-[#081a2c]" key={subIndex}>
                                  <Link href={`/collections/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {subcategory}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between">
                        {categories[item].slice(0, 2).map((category, index) => ( // Limiting to two images with slice
                          <div className="w-1/2" key={index}>
                            <Image
                              src={category.image} // Using the first image from the images array
                              alt='Image'
                              width={200}
                              height={200}
                              className='logo-image'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
