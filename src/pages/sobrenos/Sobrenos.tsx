import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import "./Sobrenos.css";
import { teamMembers, TeamMember } from "../../util/teamMembers";

function Sobrenos() {
  return (
    <div className="bg-custom-beige">
      <div className="flex flex-col bg-background p-4">
  <div className="flex flex-col sm:flex-row">
    <div className="quemsomosimg flex flex-col justify-center items-center m-5 sm:w-3/5 w-11/12 rounded-lg shadow-xl relative">
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="p-5 text-center text-5xl sm:text-9xl font-extrabold text-white">
          Quem somos
        </h2>
      </div>
    </div>
    <div className="flex-col self-center sm:w-3/5 w-full">
      <p className="flex justify-center items-center p-4 text-base sm:text-xl">
        Somos Riqueza das Raízes! Somos mais do que uma simples loja virtual;
        somos um portal para a celebração da cultura, da arte e da
        sustentabilidade. Nossa missão é trazer para você produtos únicos e
        autênticos, feitos à mão pelos povos originários do Brasil, conhecidos
        por muitos como indígenas. Através da nossa plataforma, buscamos
        valorizar a riqueza cultural e as tradições ancestrais que estes
        artesãos preservam e compartilham com tanto orgulho.
      </p>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row bg-custom-green">
    <div className="flex-col self-center sm:w-3/5 w-full">
      <p className="flex justify-center items-center p-4 text-base sm:text-xl">
        A Riqueza das Raízes tem como missão fomentar a economia sustentável e o
        comércio justo, oferecendo uma plataforma onde a autenticidade e a
        qualidade dos produtos artesanais indígenas possam ser apreciadas e
        adquiridas. Cada item disponível em nossa loja é um testemunho do
        talento, da criatividade e da conexão profunda desses artesãos com a
        natureza.
      </p>
    </div>
    <div className="missaoimg flex flex-col justify-center items-center m-5 sm:w-3/5 w-11/12 rounded-lg shadow-xl relative">
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="p-5 text-center text-5xl sm:text-9xl font-extrabold text-white">
          Nossa missão
        </h2>
      </div>
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
                  <img
                    className="w-full h-full object-cover rounded-l-lg"
                    src={member.imgSrc}
                    alt={`${member.name} Avatar`}
                  />
                </div>
                <div className="flex-grow p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                    {member.name}
                  </h3>
                  <span className="text-gray-500 dark:text-white font-mono">
                    {member.role}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200 ">
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
