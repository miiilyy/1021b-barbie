import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType ={
    titulo:string
    sinpse:string
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("Guilherme")
        function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
            console.log(e.target.value)
            setTexto ("Tere")
        }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar Filme</p>
    <input className='barrapesquisa' type='text' onChange={mudaTexto}/>
    <div>
    <p className='texto_digitado'>pesquisa:{texto}</p>
    </div>
    </div>
    <main className="content-main"> 
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                    Barbieland por ser uma boneca 
                    de aparência menos do que 
                    perfeita, Barbie parte para o 
                    mundo humano em busca da 
                    verdadeira felicidade."
                    imagem="/barbie.png"
                    />
            <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons,
             chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam."
                    imagem="/250px-Transformers-poster.jpg"
                    />
                     <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons,
             chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam."
                    imagem="/250px-Transformers-poster.jpg"
                    />
                     <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons,
             chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam."
                    imagem="/250px-Transformers-poster.jpg"
                    />

        </main>
    </>
    )
}


