import { CardInterface } from "../../models/Card"
import "./Card.css"

function Card ({foto,alt, titulo, texto, link, path }: CardInterface){

    return(
        <>
        <div className="card-container">
            <img className ="card-img" src = {foto} alt={alt}/>
            <h3 className="card-titulo"> {titulo} </h3>
            <p className="card-texto"> {texto}</p>
            <a className="card-link" href={path}> {link}</a>
            

        </div>
        </>
    );


};

export default Card;