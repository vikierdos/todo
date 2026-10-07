import { useState } from 'react'
import './App.css'
import Feladatok from './components/Feladatok'
import { TODOLISTA, type AllapotTipus, type TodoTipus } from './adat'

function App() {

  const [lista,setLista]=useState<TodoTipus[]>(TODOLISTA)

  function setAllapot(index: number, allapot: AllapotTipus){
    console.log(index, allapot)
    /** 3 lépésben modósítjuk a lista állapotát*/
    const ujLista:TodoTipus[] = [...lista]
    ujLista[index].allapot=allapot
    setLista(ujLista)
  }

  return (
    <>
      <header><h1>To Do</h1></header>
      <article>
        <Feladatok lista={TODOLISTA} setAllapot={setAllapot}/>
      </article>
      <footer>
        <p>Erdős Viktória</p>
      </footer>
    </>
  )
}

export default App
