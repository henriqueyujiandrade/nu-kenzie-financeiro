import {useState} from 'react'
import './styles.css'

function Form({lista, setLista}){
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
    const [type, setType] = useState('Entrada')

    function submit(event){
        event.preventDefault()
        setLista([...lista, { description: description, type: type, value: value },])
        
    }

    return (
    <form className='form' onSubmit={submit}>
        <label className='descricaoLabel'><p>Descrição</p><input className='inputDescricao' type="text" placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} required/></label>
        <span>Ex: Compra de roupas</span>
        <div>
        <label className='valorLabel'><p>Valor</p><input className='inputValor' type="number" placeholder="1 R$" value={value} onChange={(event) => setValue(event.target.value)} required/></label>
        <label><p>Tipo de Valor</p>
            <select className='inputType' name='select' onChange={(event) => setType(event.target.value)}>
            <option type='entrada' value='Entrada'>Entrada</option>
            <option type='despesa' value='Despesa'>Despesa</option>
            </select>
        </label> 
        </div>
        <button type='submit'>Inserir Valor</button>
    </form>
     )
}

export default Form