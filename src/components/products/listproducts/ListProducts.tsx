import { useState, useContext, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Product from "../../../models/Produto";
import { buscar, buscarPor } from "../../../services/Service";
import CardProducts from "../cardproducts/CardProducts";

function ListProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProducts() {
    try {
      await buscarPor("/produtos", setProducts);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProducts();
  }, [products.length]);

  return (
    <>
      {products.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
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
