import { atomFamily, selectorFamily } from "recoil"

export const todosAtomFamily = atomFamily({
    key: "todosAtom",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => async ({ get }) => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = await res.json();
            return data;
        },
    })

})