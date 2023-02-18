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
            <img src={product.picture} alt={product.name} />
            <h1>{product.name}</h1>
            <h1>Price{product.price}</h1>
            <h1>Rating:{product.ratting}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSwiper;
