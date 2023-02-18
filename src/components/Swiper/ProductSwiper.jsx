import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";

import Productss from "../../products.json";

function ProductSwiper() {
  const Products = Productss.products;
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={4.5} className="w-full">
        {Products.map((product) => (
          <SwiperSlide>
            <h1>name={product.name}</h1>
            <h1>newPrice={product.price}</h1>
            <h1>rating={product.ratting}</h1>
            <h1>image={product.picture}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSwiper;
