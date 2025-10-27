// App.jsx
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";
import { Suspense } from "react";

function App() {
  return (
     <RecoilRoot>
      <Suspense fallback={<div>Loading app...</div>}>
        <Todo id={1} />
        <Todo id={2} />
      </Suspense>
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [Todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  console.log(Todo);
  if (Todo.state === "loading") {
    return <div>Loading...</div>;
  }else if (Todo.state === "hasValue") {
    return (
      <>
        <h3>Todo {id}</h3>
        <p>{Todo.contents.title}</p>
      </>
    );
  }else if(Todo.state === 'hasError'){
    return (
      <div>
        Error while fetchn=ing data
      </div>
    )
  }

}

export default App;
