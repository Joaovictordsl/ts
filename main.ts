
type Usuario = {
    id: number;
    nome: string;
    idade: number;
}

const usuarios: Usuario[] = [
    {id: 1, nome: "John", idade: 25},
    {id: 2, nome: "Lara", idade: 23}
]

let usernames = usuarios.map(user => user.nome);

console.log(usernames)


export {}