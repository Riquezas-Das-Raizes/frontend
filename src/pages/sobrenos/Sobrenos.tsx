import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import "./Sobrenos.css";

function Sobrenos() {
    return (
      <div className="bg-custom-beige">
        <h1 className="p-5 flex justify-center text-4xl font-bold">
          Sobre nós
        </h1>
        <div className="flex">
          <div className="p-4">
            <h2 className="p-5 text-center text-2xl font-bold">Quem somos?</h2>
            <p className="flex justify-center item-center p-4 text-xl">
              Somos Riqueza das Raízes! Somos mais do que uma simples loja
              virtual; somos um portal para a celebração da cultura, da arte e
              da sustentabilidade. Nossa missão é trazer para você produtos
              únicos e autênticos, feitos à mão pelos povos originários do
              Brasil, conhecidos por muitos como indígenas. Através da nossa
              plataforma, buscamos valorizar a riqueza cultural e as tradições
              ancestrais que estes artesãos preservam e compartilham com tanto
              orgulho.
            </p>

            <h2 className="p-5 text-center text-2xl font-bold">Nossa missão</h2>
            <p className="flex justify-center item-center p-4 text-xl">
              A Riqueza das Raízes tem como missão fomentar a economia
              sustentável e o comércio justo, oferecendo uma plataforma onde a
              autenticidade e a qualidade dos produtos artesanais indígenas
              possam ser apreciadas e adquiridas. Cada item disponível em nossa
              loja é um testemunho do talento, da criatividade e da conexão
              profunda desses artesãos com a natureza.
            </p>
          </div>
          <div className="fundosobrenos hidden lg:block m-5"></div>
        </div>

        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                Nossa Equipe
              </h2>
              <p className="lg:mb-16 sm:text-xl ">
                Conheça nossa equipe dedicada que trabalha incansavelmente para
                trazer o melhor da cultura indígena até você.
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/ppbiancav.png"
                    alt="Bianca Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Bianca Vasconcelos</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedora
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ppbiancav" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/Gabriel-Aranda1406.png"
                    alt="Gabriel Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Gabriel Aranda</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedor
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Gabriel-Aranda1406" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/Lorenabelo.png"
                    alt="Lorena Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Lorena Belo</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedora
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Lorenabelo" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/natashamorais.png"
                    alt="Natasha Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Natasha Morais</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedora
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/thaissan.png"
                    alt="Thais Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Thaís Santos</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedora
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/thaissan" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/ViniOM.png"
                    alt="Vitor Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Vinicios Gabriel Oliveira</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolverdor
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ViniOM" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:rounded-none sm:rounded-l-lg flex-none"
                    src="https://github.com/vmonea.png"
                    alt="Vitor Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">
                    Vitor Monea
                    </a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedor
                  </span>
                  <h1 className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at. 
                  </h1>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/vitor-monea/" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/vmonea" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white" 
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-custom-green dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://github.com/yasminelamark.png"
                    alt="Yasmine Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Yasmine Lamark</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Desenvolvedora
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy libero at 
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/vitor-monea/" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/vmonea" target = "_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white" 
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}


export default Sobrenos;
