import { createContext, useContext, useState, type ReactNode } from "react";
import { TODOLISTA, type AllapotTipus, type TodoTipus } from "../adat";

/**itt fogjuk kezelni az állapotot
 * létrehozunk egy contecxtet és egy providert
 * a context az akörnyezet amin belül a provider adatait tudjuk használni
 * 1. context és provider létrehozása
 * 2. providerben használt state-ek és a függvények megadása
 * 3. szülőkomponens ölelgetése a providerrel
 * 4. felhasználni a komponensekben a provider value-ban
 */
export const TodoContext=createContext<feladatokContextValue | undefined>(undefined)

interface TodoProviderProps{
    children: ReactNode
}

interface feladatokContextValue{
  lista: TodoTipus[],
  setAllapot:(index:number,allapot:AllapotTipus)=>void
}

export function TodoProvider({children}:TodoProviderProps){
    const [lista,setLista]=useState<TodoTipus[]>(TODOLISTA)

  function setAllapot(index: number, allapot: AllapotTipus){
    console.log(index, allapot)
    /** 3 lépésben modósítjuk a lista állapotát*/
    const ujLista:TodoTipus[] = [...lista]
    ujLista[index].allapot=allapot
    setLista(ujLista)
  }
    return(
        <TodoContext.Provider value={{lista, setAllapot}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoContext(){
    const context=useContext(TodoContext)
      if(context === undefined){
        throw new Error("Az app csak provideren belül használható!")
      }
      return context
}