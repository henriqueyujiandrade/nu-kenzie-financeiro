import './styles.css'
import imagem from './img/inicial.png'
import titulo from './img/titulo.png'

function Inicial({onClick}){
    return (
        <div className="inicio">
            <div className='tituloInicial'>
                <h1><figure><img src={titulo} alt="titulo"></img></figure></h1>
                <h2>Centralize o Controle das suas finanças</h2>
                <span>de forma rápida e segura</span>
                <button onClick={onClick}>iniciar</button>
            </div>
            <div className='imagemInicial'>
                <figure>
                    <img src={imagem}></img>
                </figure>
            </div>
        </div>
    )
}

export default Inicial