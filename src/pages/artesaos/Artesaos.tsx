import { Browser, InstagramLogo } from "@phosphor-icons/react";

function Artesaos() {
  return (
    <div className="bg-custom-beige px-4">
      <h1 className="p-5 text-center text-4xl font-bold">
        Conheça nossos artesãos
      </h1>
      <div className="p-6">
        <p className="px-8 text-xl text-center">
          Nessa seção você terá a oportunidade de explorar o talento e a
          dedicação que transformam matéria-prima em arte. Cada peça que você
          vê aqui é resultado de horas de trabalho cuidadoso, habilidades
          apuradas e uma paixão inabalável pelo ofício. Nossos artesãos vêm
          trazendo sua própria história, técnica e inspiração. Eles utilizam
          materiais locais e sustentáveis, respeitando as tradições culturais
          e inovando com criatividade. Ao adquirir uma peça, você não está
          apenas comprando um produto único, mas também apoiando esses
          talentosos artistas e suas comunidades.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="bg-custom-green rounded-lg shadow-md p-6 my-6 text-center w-full md:w-1/2 lg:w-1/4">
            <img src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/ED2EF.webp?updatedAt=1719080084710" alt="" className="rounded-full mx-auto h-48 w-48" />
            <h3 className="text-xl font-bold my-2">NÔMADE E PATAXÓ</h3>
            <p className="mb-0">Desde 2013, uma família formada por uma nômade e um indígena Pataxó, baseada em São Paulo - SP, trabalha 
              com miçangas de vidro jablonex, criando peças inspiradas nos povos originários da terra, feitas à mão 
              com carinho e amor, aceitando encomendas mediante contato direto.</p>
              <div className="justify-center flex gap-2 p-3 text-white ">Conheça mais desse artesão!</div>
              <div className="flex justify-center">
              <div className="p-3 text-custom-black "> <a href="https://www.elo7.com.br/nomadeepataxo" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <Browser size={35} /> </a></div>
              <div className="x gap-2 p-3 text-custom-black"> <a href="https://www.instagram.com/nomade_e_pataxo/" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <InstagramLogo size={35} /> </a></div>
              </div>               
          </div>
          <div className="bg-custom-green rounded-lg shadow-md p-6 my-6 text-center w-full md:w-1/2 lg:w-1/4">
            <img src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/819B56.webp?updatedAt=1719080053188" alt="" className="rounded-full mx-auto h-48 w-48" />
            <h3 className="text-xl font-bold my-2">HULUKI ARTE INDIGENA</h3>
            <p className="mb-0">Desde 2018, a Huluki, com sede em São Paulo - SP, promove a venda de arte indígena autêntica, gerando renda 
              para comunidades artesãs e oferecendo aos clientes uma experiência enriquecedora e satisfatória.</p>
              <div className="justify-center flex gap-2 p-3 text-white">Conheça mais desse artesão!</div>
              <div className="flex justify-center">
              <div className="p-3 text-custom-black "> <a href="https://www.elo7.com.br/hulukiarteindigena" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <Browser size={35} /> </a></div>
              <div className="x gap-2 p-3 text-custom-black"> <a href="https://www.instagram.com/huluki_arteindigena?igsh=NWt2MXcwNDUyY3Nw " target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <InstagramLogo size={35} /> </a></div>
              </div>                
          </div>
          <div className="bg-custom-green rounded-lg shadow-md p-6 my-6 text-center w-full md:w-1/2 lg:w-1/4">
            <img src="https://ik.imagekit.io/natashadev/Riqueza%20das%20Ra%C3%ADzes/DE3DDE.jpg?updatedAt=1719080075655" alt="" className="rounded-full mx-auto h-48 w-48" />
            <h3 className="text-xl font-bold my-2">AWATXUHU ARTESANATO </h3>
            <p className="mb-0">Aqui você vai encontrar peças produzidas manualmente pelas artesãs da Comunidade Indígena Puyanawa.</p>
            <div className="justify-center flex gap-2 p-3 text-white">Conheça mais desse artesão!</div>
              <div className="flex justify-center">
              <div className="p-3 text-custom-black "> <a href="https://www.elo7.com.br/AwatxuhuArtesanatosPuyanawa" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <Browser size={35} /> </a></div>
              <div className="x gap-2 p-3 text-custom-black"> <a href="https://www.instagram.com/awatxuhu_artesanatos/ " target="_blank" rel="noopener noreferrer" className=" hover:text-gray-200"> <InstagramLogo size={35} /> </a></div>
              </div>               
          </div>
        </div>
      </div>

      <h2 className="p-5 text-center text-2xl font-bold">Agradecimento</h2>
      <p className="px-8 text-xl text-center">
        Gostaríamos de expressar nossa profunda gratidão aos artesãos que
        generosamente disponibilizaram as fotos dos seus produtos para este
        trabalho. Suas contribuições não só enriquecem nossa plataforma, mas
        também ajudam a contar a história por trás de cada peça. Agradecemos
         imensamente por compartilhar seu incrível trabalho conosco e com o mundo.
      </p>
    </div>
  );
}

export default Artesaos;
