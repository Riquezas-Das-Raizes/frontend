import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { TeamMember, teamMembers } from "../../util/teamMembers";
import "./Sobrenos.css";

function Sobrenos() {
  return (
    <div className="bg-custom-beige">
      <div className="flex flex-col">
        <div className="p-4 flex max-sm:flex-col">
          <div className="quemsomosimg m-5 w-2/5 rounded-lg shadow-xl">
            <h2 className="p-5 text-center text-9xl font-extrabold text-white">
              Quem somos
            </h2>
          </div>
          <div className="flex-col self-center flex-1">
            <p className="p-4 text-xl text-justify">
              Somos Riqueza das Raízes! Mais do que uma simples loja virtual,
              somos um portal para a celebração da cultura, da arte e da
              sustentabilidade. Nossa missão é trazer para você produtos únicos
              e autênticos, feitos à mão pelos povos originários do Brasil,
              conhecidos por muitos como indígenas. Através da nossa plataforma,
              buscamos valorizar a riqueza cultural e as tradições ancestrais
              que estes artesãos preservam e compartilham com tanto orgulho.
              A Riqueza das Raízes foi desenvolvida com base no ODS 8 da ONU,
              que promove o trabalho decente e o crescimento econômico sustentável,
              inclusivo e sustentado.
            </p>
          </div>
        </div>
        <div className="p-4 flex bg-custom-green max-sm:flex-col">
          <div className="flex-col self-center flex-1">
            <p className="p-4 text-xl text-justify">
              Na Riqueza das Raízes, nossa missão vai além da comercialização
              de produtos. Nós nos dedicamos a promover e valorizar a cultura e
              a arte dos povos originários do Brasil. Cada peça que oferecemos é
              uma expressão autêntica das tradições ancestrais e da criatividade
              dos artesãos indígenas, que, com habilidade e orgulho, mantêm viva
              a herança cultural de suas comunidades. Estamos comprometidos com
              a sustentabilidade e o comércio justo, garantindo que os artesãos
              recebam uma remuneração digna pelo seu trabalho, em alinhamento com
              o ODS 8 da ONU. Este objetivo visa promover o crescimento econômico
              inclusivo e sustentável, o emprego pleno e produtivo, e o trabalho
              decente para todos.
            </p>
          </div>
          <div className="missaoimg m-5 w-2/5 rounded-lg shadow-xl">
            <h2 className="p-5 text-center text-9xl font-extrabold text-white">
              Nossa missão
            </h2>
          </div>
        </div>
      </div>
      <section id="equipe">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Nossa Equipe
            </h2>
            <p className="lg:mb-16 sm:text-xl">
              Conheça nossa equipe dedicada que trabalha incansavelmente para
              trazer o melhor da cultura indígena até você.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {teamMembers.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="flex bg-gray-50 rounded-lg shadow-2xl dark:bg-custom-green dark:border-gray-700"
              >
                <div className="flex-none w-1/3">
                  <a href="#">
                    <img
                      className="w-full h-full object-cover rounded-l-lg"
                      src={member.imgSrc}
                      alt={`${member.name} Avatar`}
                    />
                  </a>
                </div>
                <div className="flex-grow p-5 min-w-0">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    {member.role}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200 break-words">
                    {member.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <LinkedinLogo className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      >
                        <GithubLogo className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobrenos;
