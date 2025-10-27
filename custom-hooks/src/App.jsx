import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

function useCounter() {

  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(c => c + 1)
  }
  return {
    count,
    increaseCount
  }
}


function App() {
  // const [currentPost, setCurrentPost] = useState(1);
  // const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPost);
  // const [state, setState] = useState(0);  // 2 => 3

  // const prev = usePrev(state);  //2

  const [inputval, setInputVal] = useState("");

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  //  return (
  //   <div>
  //     <button onClick={() => setCurrentPost(currentPost + 1)}>Next Post</button>
  //     <div>
  //       {JSON.stringify(finalData)}
  //     </div>
  //   </div>
  //  )

  // return (
  //   <div>
  //     {state}
  //     <button  onClick={() => {setState(c => c+1)}}>click me </button>
  //     <p>the previous value state is {prev}</p>
  //   </div>
  // )

  const debounceVal = useDebounce(inputval, 500)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    console.log("some backend logic after some delay")
  }, [debounceVal])

  // return for useDebounce
  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  )
}

export default App
