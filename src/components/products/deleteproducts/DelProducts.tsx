import { useState, useContext, useEffect } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Product from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"
import { hotAlerta } from "../../../util/hotAlerta"


function DeleteProduct() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<Product>({} as Product)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduct, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            hotAlerta('Você precisa estar logado', "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduct() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            hotAlerta('Product apagada com sucesso', "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                hotAlerta('Erro ao deletar a product.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-custom-green text-white font-bold text-2xl'>
                    Produto
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{product.nome}</p>
                    <p>{product.preco}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-900 hover:bg-custom-red w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-custom-green 
                        hover:bg-custom-emerald flex items-center justify-center'
                        onClick={deletarProduct}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct