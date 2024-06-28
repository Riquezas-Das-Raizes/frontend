import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import Product from "../../../models/Produto";
import CardProducts from "../cardproducts/CardProducts";

function HomeProducts() {
    const [produtos, setProdutos] = useState<Product[]>([]);

    async function listar() {
        try {
            const todosProdutos = [];
            await buscar("/produtos", (data) => todosProdutos.push(...data), {});
            setProdutos(todosProdutos.slice(0, 3));
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="max-w-full mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 pr-7 sm:grid-cols-2 sm:pr-0 lg:grid-cols-3 lg:pr-0 gap-16">
                {produtos.map((produto) => (
                    <CardProducts key={produto.id} product={produto} />
                ))}
            </div>
        </div>
    );
}

export default HomeProducts;
