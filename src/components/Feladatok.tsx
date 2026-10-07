import Feladat from './Feladat'
import './css/Feladatok.css'
import {useTodoContext } from '../contexts/TodoContexts'

function Feladatok() {
  const {lista}=useTodoContext()

  return (
    <div className='feladatok'>
      {lista.map((e,i)=>(<Feladat key={e.id} elem={e} index={i} />))}
    </div>
  )
}

export default Feladatok