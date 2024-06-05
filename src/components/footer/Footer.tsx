import { EnvelopeSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex bg-custom-green text-white rounded-3xl py-10 px-20 shadow-xl m-12">
       <div className="container flex justify-between">
        <div className=" flex gap-20 p-4">
          <div className="flex">
            <img
            src="https://imgur.com/X24BbNj.png"
            alt="Logo"
            className="w-24 h-auto"
            />
          </div>
          <div className="flex flex-col">
            <strong className="text-lg pb-2">Sobre a Loja</strong>
            <Link to="/artesaos" className="hover:underline">
               Origem Produtos
              </Link>
              <Link to="/missao" className="hover:underline">
               Missão
              </Link>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg pb-2">Institucional</strong>
              <Link to="/sobrenos" className="hover:underline">
               Quem somos
              </Link>
              <Link to="/contatos" className="hover:underline">
               Contatos
              </Link>
          </div>
          <div className="flex flex-col" >
            <strong className="text-lg pb-2">Redes Sociais</strong>
            <div className="flex flex-row gap-5 px-3">
              <LinkedinLogo size={32} />
              <GithubLogo size={32} />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <div className="flex gap-4">
            <a
              className="flex px-6 py-1 h-10 text-center 
             bg-custom-beige text-custom-emerald font-bold border border-custom-emerald rounded
              active:text-white hover:bg-custom-black hover:text-white"
              href="/"
            >
              <WhatsappLogo size={27} />
              Whatsapp
            </a>
            <a
              className=" flex px-6 py-1 h-10 text-center
              bg-custom-beige border text-custom-emerald font-bold border-custom-emerald rounded
              hover:bg-custom-black hover:text-white active:bg-white"
              href="/"
            >
              <EnvelopeSimple size={27} />
               Email
            </a>
          </div>
          <div className="font-light  text-right pt-4">
            <p>Riqueza das Raízes | Copyright: 2024 </p>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
