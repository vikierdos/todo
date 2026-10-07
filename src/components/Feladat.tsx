import React from 'react'
import type { AllapotTipus, TodoTipus } from '../adat'
import './css/Feladat.css'

interface feladatokProps{
  elem: TodoTipus,
  setAllapot:(index:number,allapot:AllapotTipus)=>void
  index:number
}
function Feladat({elem, setAllapot, index} : feladatokProps) {
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