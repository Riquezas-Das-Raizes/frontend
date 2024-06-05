import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-lime-100 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold text-yellow-900">Seja Bem Vindo!</h2>
            <p className="text-xl text-yellow-900">Aprecie as riquezas que nossas raízes nos proporcionam!</p>

            <div className="flex justify-around gap-4">
              <Link to="/produtos" className="rounded font-bold text-yellow-900 border-yellow-900 border-solid border-2 py-2 px-4">
                Confira os nossos produtos
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="src\assets\img\logo.png" alt="Imagem da Página Home" className="size-max"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
