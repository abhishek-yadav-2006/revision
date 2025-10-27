
import { todosAtomFamily } from './atoms'
 import {RecoilRoot, useRecoilValue} from "recoil"

function App() {
   return (
    <RecoilRoot>
      <Todo id={1} /> 
      <Todo id={2} /> 
    </RecoilRoot>
   )
}


function Todo({ id }) {

  const currentTodo = useRecoilValue(todosAtomFamily(id))

  return (
    <>
     {currentTodo.title}
     {currentTodo.description}
    </>
  )
}




export default App
