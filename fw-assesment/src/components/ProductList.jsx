import { useState, useEffect } from "react";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setAllProducts(data.products);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1 className="mt-3 text-lg font-bold text-center text-[50px]">
        Product Catalog
      </h1>
      <p className="text-center">Discover amazing products</p>
      <div className="pt-20 grid grid-cols-4 gap-6 px-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <p className="mt-3 text-lg font-semibold">{product.title}</p>
            <p className="text-gray-500 text-sm">${product.price}</p>
            <button type="button" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-200 transition">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;