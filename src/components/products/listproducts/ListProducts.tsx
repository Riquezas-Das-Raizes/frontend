import { useState, useContext, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Product from "../../../models/Produto";
import { buscarPor } from "../../../services/Service";
import CardProducts from "../cardproducts/CardProducts";

function ListProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function buscarProducts() {
    try {
      await buscarPor("/produtos", setProducts);
    } catch (error: any) {}
  }

  useEffect(() => {
    buscarProducts();
  }, [products.length]);

  return (
    <>
      {products.length === 0 && (
        <div className="justify-center text-center flex p-5">
          <Triangle
            visible={true}
            height="130"
            width="130"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div
        className="container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {products.map((product) => (
          <CardProducts key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ListProducts;
