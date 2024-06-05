import "./Sobrenos.css";

function Sobrenos() {
  return (
    <div className="bg-custom-beige">
      <h1 className="p-5 flex justify-center text-4xl font-bold">Sobre nós</h1>
      <div className="flex">
        <div className="p-4">
          <h2 className="p-5 text-center text-2xl font-bold">Quem somos?</h2>
          <p className="flex justify-center item-center p-4 text-xl">
            Somos Riqueza das Raízes! Somos mais do que uma simples loja
            virtual; somos um portal para a celebração da cultura, da arte e da
            sustentabilidade. Nossa missão é trazer para você produtos únicos e
            autênticos, feitos à mão pelos povos originários do Brasil,
            conhecidos por muitos como indígenas. Através da nossa plataforma,
            buscamos valorizar a riqueza cultural e as tradições ancestrais que
            estes artesãos preservam e compartilham com tanto orgulho.
          </p>

          <h2 className="p-5 text-center text-2xl font-bold">Nossa missão</h2>
          <p className="flex justify-center item-center p-4 text-xl">
            A Riqueza das Raízes tem como missão fomentar a economia sustentável
            e o comércio justo, oferecendo uma plataforma onde a autenticidade e
            a qualidade dos produtos artesanais indígenas possam ser apreciadas
            e adquiridas. Cada item disponível em nossa loja é um testemunho do
            talento, da criatividade e da conexão profunda desses artesãos com a
            natureza.
          </p>
        </div>
        <div className="fundosobrenos hidden lg:block m-5"></div>
      </div>
    </div>
  );
}

export default Sobrenos;
