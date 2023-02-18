import { useState } from "react";
import Star from "../../assets/icons8-starburst-shape-30 4.png";
import Wishlist from "../../assets/icons8-filled-heart-32 (1) 1.png";

function ProductsShowcase({ products }) {
  const firstItem = products[4];
  console.log(firstItem.picture);
  console.log(firstItem);
  const { name, picture, oeder, price, ratting, review, _id } = firstItem;

  const [count, setCount] = useState(0);

  const [color, setColor] = useState("greenish");

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="flex items-center justify-center w-[713px] h-[330px] rounded-2xl shadow-2xl">
      <div className="w-2/5 flex items-center justify-center">
        <img src={picture} alt={name} />
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <div className="mb-2">
          <h3 className="font-semibold text-2xl">{name}</h3>
          <div className="flex items-center">
            <img src={Star} alt="rating star" />
            <img src={Star} alt="rating star" />
            <img src={Star} alt="rating star" />
            <img src={Star} alt="rating star" />
            <img src={Star} alt="rating star" />
            <p className="ml-2"> {`( ${review}+ Reviews )`}</p>
          </div>
          <p className="mb-2">
            Ergonomic or cupe with on-oor controls up to 22 hours of tening
            time. Apple Wi crip & Closs{" "}
          </p>
          <p className={`text-${color} text-lg`}>Price: $ {price}</p>
          <div className="flex items-center mb-8">
            <h3>Color:</h3>
            <button
              onClick={() => setColor("greenish")}
              className="bg-greenish rounded-full w-4 h-4 mx-2"
            ></button>
            <button
              onClick={() => setColor("cyan")}
              className="bg-cyan rounded-full w-4 h-4 mr-2"
            ></button>
            <button
              onClick={() => setColor("blue")}
              className="bg-blue rounded-full w-4 h-4 mr-2"
            ></button>
            <button
              onClick={() => setColor("purple")}
              className="bg-purple rounded-full w-4 h-4 mr-2"
            ></button>
            {/* button */}
            <div className="shadow-lg rounded-full flex items-center justify-between w-16 p-1 border-2">
              <button
                onClick={handleDecrement}
                className="rounded-full bg-grey font-semibold w-4 h-5"
              >
                -
              </button>
              {count}
              <button
                onClick={handleIncrement}
                className="rounded-full bg-grey font-semibold w-4 h-5"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center">
            {/* wishlist */}
            <button className="px-2 py-1 border-2 border-greenish rounded-xl mr-2">
              <img src={Wishlist} alt="wishlist" width="32px" height="32px" />
            </button>
            {/* add to cart */}
            <button className="my-auto px-2 py-2 border-2 border-greenish rounded-xl mr-2">
              Add to cart
            </button>
            {/* BuyNow */}
            <button className="my-auto px-2 py-2 border-2 bg-greenish border-greenish rounded-xl mr-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsShowcase;
