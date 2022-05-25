import './styles.css'
import tituloPrincipal from './img/tituloPrincipal.png'

function Header({onClick}){
    return (
    <header>
        <h1><figure><img src={tituloPrincipal} alt='tituloPrincipal'></img></figure></h1>
        <button onClick={onClick}>Inicio</button> 
    </header>

    )
}

export default Header