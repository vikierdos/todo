import React from 'react'
import Feladat from './Feladat'
import type { AllapotTipus, TodoTipus } from '../adat'
import './css/Feladatok.css'

interface feladatokProps{
  lista: TodoTipus[],
  setAllapot:(index:number,allapot:AllapotTipus)=>void
}

function Feladatok({lista, setAllapot} : feladatokProps) {
  return (
    <div className='feladatok'>
      {lista.map((e,i)=>(<Feladat key={e.id} elem={e} index={i} setAllapot={setAllapot} />))}
    </div>
  )
}

export default Feladatok