import { useState, useContext, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Product from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProducts from "../cardproducts/CardProducts";



function ListProducts() {

    const navigate = useNavigate();

    const [postagens, setProducts] = useState<Product[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProducts() {
        try {
            await buscar('/produtos', setProducts, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            // ToastAlerta('Você precisa estar logado', "info")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProducts()
    }, [postagens.length])

    return (
        <>
            {postagens.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {postagens.map((product) => (
                    <CardProducts key={product.id} product={product} />
                ))}

            </div>
        </>
    );
}

export default ListProducts;