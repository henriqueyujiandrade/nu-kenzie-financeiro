
import './App.css';
import {useState} from 'react'
import Inicial from './components/Iniciar';
import Header from './components/Header';
import Form from './components/Form';
import Total from './components/Total';
import Card from './components/Card';
import Filtros from './components/Filtros';

function App() {
  const [page, setPage] = useState(true)
  const [listaTransaction, setListaTransaction] = useState([])
  const [checkFilter, setCheckFilter] = useState(0)
  
 

  function iniciar(){
    setPage(false)
  }

  function inicio(){
    setPage(true)
  }

  

  function removeItem(item){
      const filter = listaTransaction.filter((_,index) => index !== item)
      setListaTransaction(filter)
  }

  return (
    <div className="App">
      {page?
        <Inicial onClick={iniciar}/> :
        <div>
        <Header onClick={inicio}/>
        <main>
          <div className='formAndValue'>
            <Form lista={listaTransaction} setLista={setListaTransaction}/>
            <Total list={listaTransaction}/>
          </div>
          <div>
            <Filtros setFilter={setCheckFilter}/>
            <Card list={listaTransaction} callback={removeItem} filter={checkFilter} />
            
          </div>
        </main>
        </div>
        }
    </div>
  );
}

export default App;
