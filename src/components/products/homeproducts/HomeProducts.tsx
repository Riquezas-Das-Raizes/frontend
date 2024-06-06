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
        <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {produtos.map((produto) => (
                    <CardProducts key={produto.id} product={produto} />
                ))}
            </div>
        </div>
    );
}

export default HomeProducts;
