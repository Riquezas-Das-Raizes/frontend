import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import Product from "../../../models/Produto";
import CardProducts from "../cardproducts/CardProducts";

function HomeProducts(){
    const[produtos, setProdutos]= useState<Product[]>([]);
    async function listar () {
        try{
            await buscar("/produtos", setProdutos, {})
        }catch(error){}
    }
    useEffect(() =>{
        listar()
    }, [produtos.length])
    console.log(produtos);

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">{produtos.map((produto)=>(
            <CardProducts key={produto.id}product={produto}/>
        ))}</div>
    )
}

export default HomeProducts; 