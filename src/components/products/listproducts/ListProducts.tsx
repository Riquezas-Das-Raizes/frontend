import { useState, useContext, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Product from "../../../models/Produto";
import CardProducts from "../cardproducts/CardProducts";
import { buscar } from "../../../services/Service";

interface Category {
  id: number;
  nome: string;
}

function ListProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProducts() {
    setLoading(true);
    try {
      const endpoint = selectedCategory
        ? `/categorias/${selectedCategory}/produto`
        : "/produtos";
      await buscar(
        endpoint,
        (data: Product[]) => {
          if (Array.isArray(data)) {
            setProducts(data);
            console.log(data);
          } else {
            setProducts([]);
          }
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar(
        "/categorias",
        (data: Category[]) => {
          if (Array.isArray(data)) {
            setCategories(data);
          } else {
            setCategories([]);
          }
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
      setCategories([]);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  useEffect(() => {
    buscarProducts();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto my-4">
      <select
        value={selectedCategory ?? ""}
        onChange={(e) => setSelectedCategory(Number(e.target.value))}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="">Todas as Categorias</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.nome}
          </option>
        ))}
      </select>

      {loading ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
          {products.length === 0 ? (
            <p className="col-span-full text-center">
              Nenhum produto encontrado.
            </p>
          ) : (
            products.map((product) => (
              <CardProducts key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ListProducts;
