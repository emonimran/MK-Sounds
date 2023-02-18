import Productss from "../../products.json";

function Deals() {
  const Products = Productss.products;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Daily Deals</h2>
        <h4 className="text-lg">View All</h4>
      </div>
      <div>
        {Products.map((product, key) => {
          return (
            <div key={key} className="flex items-center">
              <div className="bg-grey/80 rounded-full h-[50px] w-[50px] mr-2">
                <img
                  src={product.picture}
                  alt={product.key}
                  width="48px"
                  height="48px"
                />
              </div>
              <div className="mr-2">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-xs">
                  {product.review} Reviews and {product.order} Order
                </p>
              </div>
              <p className="text-sm text-grey/80">Price ${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deals;
