//@ts-nocheck
"use client"
import Link from "next/link";
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen)
  };

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
    setIsMegaMenuOpen(!isMegaMenuOpen)
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    // setIsMegaMenuOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSelectedCategory(null);
    setIsMegaMenuOpen(false)
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedCategory(null);
  };

  // Function to handle clicking on a main category
  const handleCategoryClick = (item: string) => {
    setSelectedCategory(item === selectedCategory ? null : item); // Toggle selectedCategory state
  };

  // Function to navigate back to main category list
  const navigateBack = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div className={`relative w-full md:h-[74px] h-[56px] z-50 ${props}`}>
        <div className="flex justify-between items-center my-3 md:mx-5">
          <div className="form-search relative">
            <Icon.MagnifyingGlass size={25} className='absolute ml-4 md:ml-0 left-10 md:left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
            <Icon.List size={25} onClick={toggleSidebar} className='md:hidden absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer' />
            <input type="text" placeholder='Search' className='hidden md:block h-12 rounded-3xl border border-line text-sm w-full pl-10 pr-4' />
          </div>
          <div className="inset-0 flex items-center justify-center z-0">
            <Link href="/" className="hidden md:flex justify-center items-center cursor-pointer decoration-inherit text-3xl font-extrabold">Mizzan + Main</Link>
            <Icon.Rocket size={50} className='md:hidden flex justify-center items-center cursor-pointer' />
          </div>
          <div className="flex justify-between items-center gap-3">
            <Icon.User size={25} color='black' className='absolute mr-4 right-10 top-1/2 -translate-y-1/2 cursor-pointer' />
            <Icon.Handbag size={25} color='black' className='absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer' />
          </div>
        </div>
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
            <div id="mega-menu-full-image" className={`items-center justify-between ${isMegaMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">New</Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">BestSellers</Link>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Shop
                    
                  </button>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Dress Shirts
                    
                  </button>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Bottoms
                    
                  </button>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Golf
                    
                  </button>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Last Chance
                    
                  </button>
                </li>
                <li  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                  <button
                    id="mega-menu-full-cta-image-button"
                    data-collapse-toggle="mega-menu-full-image-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={toggleMegaMenu}
                  >
                    Explore
                    
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="mega-menu-full-image-dropdown" className={`mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
              <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                <li>
                  <Link href="/collections/online-store" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Online Stores
                  </Link>
                </li>
                <li>
                  <Link href="/collections/segmentation" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Segmentation
                  </Link>
                </li>
                <li>
                  <Link href="/collections/marketing-crm" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Marketing CRM
                  </Link>
                </li>
                <li>
                  <Link href="/collections/online-store" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Online Stores
                  </Link>
                </li>
              </ul>
              <ul className="mb-4 space-y-4 md:mb-0">
                <li>
                  <Link href="/collections/our-blogs" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link href="/collections/terms-conditions" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/collections/licennse" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    License
                  </Link>
                </li>
                <li>
                  <Link href="/collections/resources" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    Resources
                  </Link>
                </li>
              </ul>
              <Link href="#" className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style={{ backgroundImage: 'url(/docs/images/dashboard-overview.png)' }}>
                <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
                <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                  Get started
                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {
          isSidebarOpen && <nav className="md:hidden fixed inset-0 bg-white shadow-lg border border-gray-200 rounded-md p-4 z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end mb-3">
              <Icon.X size={25} className="cursor-pointer" onClick={closeSidebar} />
            </div>
            {selectedCategory ? ( // Render subcategories if a category is selected
              <>
                <div className="flex mb-3">
                  <Icon.ArrowLeft size={25} className="cursor-pointer mx-4" onClick={navigateBack} /> {/* Back button */}
                  <div className="text-base font-bold">{selectedCategory}</div> {/* Display selected category name */}
                </div>
                <ul className="flex flex-col gap-4 pb-3.5">
                  {categories[selectedCategory].map((category, index) => (
                    <li key={index} className=" hover:bg-gray-10">
                      <strong>{category.name}</strong>
                      <ul className="mt-1">
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
              </>
            ) : (
              // Render main category list
              <ul className="flex flex-col gap-4 pb-3.5">
                <Link href="/"><div className="text-3xl font-bold text-center">Mizzen + Main</div></Link>
                {Object.keys(categories).map((item) => (
                  <li
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCategoryClick(item)} // Handle click on main category
                    className="flex justify-between items-center"
                  >
                    <div className="text-base cursor-pointer after:transition-width after:absolute after:-bottom-2.5 after:left-0 after:right-0 after:h-0.5 after:duration-200 after:ease-in-out after:w-0 after:bg-blue-400 hover:text-blue-400">
                      {item}
                    </div>
                    <Icon.CaretRight size={25}></Icon.CaretRight> {/* Placeholder for future icon to open subcategories */}
                  </li>
                ))}
              </ul>
            )}
          </nav>
        }
      </div>
    </>
  );
};

export default Menu;
