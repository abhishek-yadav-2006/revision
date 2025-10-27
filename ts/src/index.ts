


interface User{
    id: string,
    name: string,
    age: string,
    email : string,
    password : string
}


type UpdateProps =  Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updtedProps : UpdatePropsOptional){

}

updateUser({
    name : "das"

})