import Carrossel from "../../components/carrossel/Carrossel"
import HomeProducts from "../../components/products/homeproducts/HomeProducts";

function Home() {
    return (
        <>
            <Carrossel />
            <div className="bg-custom-beige size-full p-5 mt-10 text-xl font-bold">
                <h2 className="ml-9 sm:ml-12 lg:ml-12"> Lançamentos</h2>
                <HomeProducts />
            </div>
        </>
    );
}

export default Home;