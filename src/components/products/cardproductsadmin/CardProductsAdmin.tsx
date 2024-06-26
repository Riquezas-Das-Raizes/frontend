import { Link } from 'react-router-dom';
import Product from '../../../models/Produto';


interface CardProductProps {
    product: Product
}

function CardProductsAdmin({ product }: CardProductProps) {

    return (
        <>
            <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
                <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                        <h3 className='text-lg font-bold text-center uppercase'>
                            {product.usuario?.nome}
                        </h3>
                    </div>
                    <div className='p-4 '>
                        <h4 className='text-lg font-semibold uppercase'>{product.nome}</h4>
                        <p>{product.preco}</p>
                        <img src={product.imagem} alt="" />
                        <p>Categoria: {product.categoria?.nome}</p>
                    </div>
                </div>
                <div className="flex">
                    <Link to={`/editarproduto/${product.id}`} 
                        className='w-full text-white bg-indigo-400 
                        hover:bg-indigo-800 flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarproduto/${product.id}`} 
                        className='text-white bg-red-400 
                        hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardProductsAdmin