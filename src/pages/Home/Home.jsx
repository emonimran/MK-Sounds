import React, { useState, useEffect } from "react";
import Search from "../../assets/icons8-search-more-100 1.png";
import Filter from "../../assets/icons8-filter-64 1.png";
import Message from "../../assets/icons8-composing-mail-100 1.png";
import Alarm from "../../assets/icons8-alarm-100 1.png";
import User from "../../assets/icons8-customer-100 1.png";
import Products from "../../products.json";
import ProductsShowcase from "../../components/ProductShowcase/ProductsShowcase";
import Deals from "../../components/Deals/deals";
import ProductSwiper from "../../components/Swiper/ProductSwiper";

function Home() {
  const [products, setProducts] = useState(Products.products);

  // useEffect(() => {
  //   fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch products");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProducts(data.products);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // console.log("products", products);

  return (
    <section className="right-0 w-[1169px] mx-10 mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Headphone</h2>
          <h3 className="font-semibold text-base">For the top brand</h3>
        </div>
        {/* Search and Icons */}
        <div className="flex">
          {/* Search */}
          <div className="flex border-2 rounded-full px-4 py-2 mr-4">
            <img src={Search} alt="" className="h-[28px] w-[28px]" />
            <input
              type="search"
              name=""
              id=""
              className="px-2 focus:outline-none"
              placeholder="Search Product"
            />
            <img src={Filter} alt="" className="h-[28px] w-[28px]" />
          </div>
          {/* Icons */}
          <div className="flex items-center">
            <div className="w-[36px] h-[36px] mx-1 bg-light-green flex items-center justify-center rounded">
              <img src={Message} alt="" height="30px" width="30px" />
            </div>
            <div className="w-[36px] h-[36px] mx-1 bg-light-green flex items-center justify-center rounded">
              <img src={Alarm} alt="" height="34px" width="34px" />
            </div>
            <div className="w-[36px] h-[36px] mx-1 bg-light-green flex items-center justify-center rounded">
              <img src={User} alt="" height="34px" width="34px" />
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* ProductsShow */}
        <ProductsShowcase products={products} />
      </div>

      <div className="flex items-center">
        {/* SWIPER */}
        <div className="w-2/3">
          <ProductSwiper />
        </div>
        {/* DAILY DEALS */}
        <div className="w-1/3">
          <Deals></Deals>
        </div>
      </div>
    </section>
  );
}

export default Home;
