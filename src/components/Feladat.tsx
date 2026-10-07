import type { TodoTipus } from '../adat'
import './css/Feladat.css'
import { useTodoContext } from '../contexts/TodoContexts'

interface feladatokProps{
  elem: TodoTipus,
  index:number
}

function Feladat({elem, index} : feladatokProps) {
  const {setAllapot}=useTodoContext()
  return (
    <div className='feladat'>
        <h3>{elem.tennivalo}</h3>
        <p>{elem.allapot}</p>
        <button onClick={()=>setAllapot(index,"kész")} title='kész'>✔️</button>
        <button onClick={()=>setAllapot(index,"folyamatban")} title='folyamatban'>〰️</button>
        <button onClick={()=>setAllapot(index,"törölve")} title='törölve'>✖️</button>
        <button onClick={()=>setAllapot(index,"létrehozva")} title='létrehozva'>Alapállapot</button>
    </div>
  )
}

export default Feladat