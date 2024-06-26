import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center bg-custom-green text-white rounded-3xl py-10 px-4 sm:px-10 md:px-20 shadow-xl m-4 sm:m-12">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:flex-row gap-10 p-4">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img
                src="https://imgur.com/X24BbNj.png"
                alt="Logo"
                className="w-24 h-auto"
              />
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <strong className="text-lg pb-2">Sobre a Loja</strong>
              <Link to="/artesaos" className="">
                Origem Produtos
              </Link>
              <Link to="/sobrenos" className="">
                Missão
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <strong className="text-lg pb-2">Institucional</strong>
              <Link to="/sobrenos" className="">
                Quem somos
              </Link>
              <Link to="/sobrenos#equipe" className="">
                Equipe
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <strong className="text-lg pb-8">Redes Sociais</strong>
              <div className="flex flex-row gap-5">
                <LinkedinLogo size={24} />
                <GithubLogo size={24} />
                <InstagramLogo size={24}/>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-0">
              <a
                className="flex items-center justify-center px-2 py-1 h-10 text-center 
                text-white font-bold   rounded
                active:text-white  hover:text-custom-emerald"
                href="/"
              >
                <WhatsappLogo size={27} />
                WhatsApp
              </a>
              <a
                className="flex items-center justify-center px-6 py-1 h-10 text-center
                font-bold rounded text-white
                active:text-white  hover:text-custom-emerald"
                href="/"
              >
                <EnvelopeSimple size={27} />
                E-mail
              </a>
            </div>
            <div className="font-light text-center pt-4">
              <p>Riqueza das Raízes | Copyright: 2024 </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
