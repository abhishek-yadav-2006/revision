import axios from "axios"
import { title } from "process"
import { json } from "stream/consumers"

 async function blogs() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return res.data

 }

export default async function Blogs(){

    const todos = await blogs() 
    return(
        <div>
            {todos.map((todo: Itodo) => <Todo title={todo.title} completed={todo.completed}></Todo>)}
        </div>
    )
}

interface Itodo{
    title : String,
    completed : boolean
}


function Todo({title, completed} : Itodo){
    return <div>
        {title}{ completed ? "done" : "not done"}
    </div>
}

