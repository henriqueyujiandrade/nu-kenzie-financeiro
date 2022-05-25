import './styles.css'


function Total({list}){
    
    const total = list.filter((obj)=> obj.type == 'Entrada').reduce((a,b) => a + Number(b.value),0)
    const despesa = list.filter((obj)=> obj.type == 'Despesa').reduce((a,b) => a + Number(b.value),0)
    const final = total - despesa
    const format = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(final)
       

    return (
        <div className='valorTotal'>
            <div>
                <h2>Valor Total:</h2>
                <p>O valor se refere as entradas e depesas</p>
            </div>
            <span>{format}</span>
        </div>
    )
}

export default Total