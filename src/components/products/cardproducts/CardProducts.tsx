import Product from '../../../models/Produto';


interface CardProductProps {
  product: Product;
}

function CardProducts({ product }: CardProductProps) {

    return (
        <>
            <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
                <div>
                    <div className='p-4 '>
                        <h4 className='text-lg font-semibold uppercase'>{product.nome}</h4>
                        <p>{product.preco}</p>
                        <img src={product.imagem} alt="" />
                        <p>Categoria: {product.categoria?.nome}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProducts;
