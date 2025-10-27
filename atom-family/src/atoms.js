import {atomFamily} from "recoil"
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
    key : "todosAtomFamily",
    default : (id) => {    // id is the parameter passed to atomFamily
        return TODOS.find((todo) => todo.id === id)
    }   
})