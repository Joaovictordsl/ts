"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuarios = [
    { id: 1, nome: "John", idade: 25 },
    { id: 2, nome: "Lara", idade: 23 }
];
var usernames = usuarios.map(function (user) { return user.nome; });
console.log(usernames);
