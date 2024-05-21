import Card from "../../components/card/Card";
import "./Contatos.css"

function Contatos () {

    return (
        <>
        <h1 className="contatos-titulo"> Contatos </h1>
<div className="contatos-container">

  
    <Card 
    foto=" src\assets\img\bianca-img.jpeg"
    alt="foto de perfil"
    titulo = "Bianca Vasconcelos"
    texto = "dev"
    link="github"
    path="https://github.com/ppbiancav"

    />
    <Card 
    foto=" src\assets\img\gabriel-img.jpeg"
    alt="foto de perfil"
    titulo = "Gabriel Aranda"
    texto = "dev"
    link="github"
    path="https://github.com/Gabriel-Aranda1406"

    />
      <Card 
    foto=" src\assets\img\lorena-img.jpeg"
    alt="foto de perfil"
    titulo = "Lorena Belo"
    texto = "dev"
    link="github"
    path="https://github.com/Lorenabelo"

    />

<Card 
    foto=" src\assets\img\natasha-img.jpeg"
    alt="foto de perfil"
    titulo = "Natasha Morais"
    texto = "dev"
    link="github"
    path="https://github.com/natashamorais"

    />
    <Card 
    foto=" src\assets\img\thais-img.jpeg"
    alt="foto de perfil"
    titulo = "Thais"
    texto = "dev"
    link="github"
    path="https://github.com/thaissan"

    />
    <Card 
    foto=" src\assets\img\vinicios-img.png"
    alt="foto de perfil"
    titulo = "Vinicios "
    texto = "dev"
    link="github"
    path="https://github.com/ViniOM"

    />
    <Card 
    foto=" src\assets\img\vitor-img.jpeg"
    alt="foto de perfil"
    titulo = "Vitor Monea"
    texto = "dev"
    link="github"
    path="https://github.com/vmonea"

    />
    <Card 
    foto=" src\assets\img\yasmine-img.jpeg"
    alt="foto de perfil"
    titulo = "Yasmine Lamark"
    texto = "dev"
    link="github"
    path="https://github.com/yasminelamark"

    />
</div>


    </>
    );

}
export default Contatos;