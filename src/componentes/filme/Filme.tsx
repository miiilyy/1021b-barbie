import './Filme.css'
    type FilmeProps={
        titulo: string,
        sinopse:string,
        imagem:string
    }
    export default function Filme(){
    return(
        <div className="filme_content">
        <img src={props,imagem} alt=""/>
        <div className="texto_foto">
        <h1>{props,titulo}</h1>
        <p className="sinopse"></p>
        </div>
        </div>
           
    )
}