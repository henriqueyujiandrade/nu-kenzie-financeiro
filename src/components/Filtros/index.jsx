import './styles.css'

function Filtros({setFilter}){
    

    return (
        <div className="filtrosBotoes">
            <h2>Resumo financeiro</h2>
            <button onClick={() => setFilter(0)}>Todos</button>
            <button onClick={() => setFilter(1)}>Entradas</button>
            <button onClick={() => setFilter(2)}>Despesas</button>
        </div>
    )
}

export default Filtros