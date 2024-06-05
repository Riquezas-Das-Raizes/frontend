import Carrossel from "../../components/carrossel/Carrossel"
import HomeProducts from "../../components/products/homeproducts/HomeProducts";

function Home() {
    return (
        <>
            <Carrossel />
            <div className="bg-custom-beige size-full p-5 text-xl font-bold">
                <h2> Lançamentos! </h2>
                <HomeProducts />
            </div>
        </>
    );
}

export default Home;