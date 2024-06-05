import Carrossel from "../../components/carrossel/Carrossel"

function Home() {
    return (
       <>
          <Carrossel />
          <div className="bg-custom-beige size-full">
              <h2> Lista de produtos </h2>
          </div>
       </>
    );
}

export default Home;