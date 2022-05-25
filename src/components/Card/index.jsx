import './styles.css'
import imagem from './img/listaVazia.png'
import { FaTrash } from "react-icons/fa"

function Card({list, callback, filter}){
    const listEntrada = list.filter((obj) => obj.type == 'Entrada')
    const listDespesa = list.filter((obj) => obj.type == 'Despesa')
    let finalList = []

    if(filter == 0){
        finalList = list
    } 
    else if(filter == 1){
        finalList = listEntrada
    }
    
    else{
        finalList = listDespesa
    }

    return (
        <div>
        {finalList.length == 0?
            <figure>
            <img src={imagem} alt='listaVazia'></img>
            </figure> :
        <ul className='cardList'>
            {finalList.map((obj,index) => (
            <li className={obj.type}>
                <div>
                <h2 key ={obj.description}> {obj.description}</h2>
                <p key={obj.type}>{obj.type}</p>
                </div>
                <span key={obj.value} >{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(obj.value)}</span>
                <button key ={index} onClick={() => callback(index)}><FaTrash/></button>
            </li>        
            ))}
        </ul>
        }
        </div>
    )
}


export default Card