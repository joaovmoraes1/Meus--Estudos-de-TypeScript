// Tipos Básicos

// Declara uma variável chamada 'age' do tipo number e inicializa com 5
let age: number = 5; 

// Declara uma constante chamada 'firstName' do tipo string e inicializa com "Felipe"
const firstName: string = "Felipe"; 

// Declara uma constante chamada 'isValid' do tipo boolean e inicializa com true
const isValid: boolean = true; 

// Declara uma variável chamada 'idk' do tipo any, permitindo que ela armazene qualquer tipo de dado
let idk: any = 5;

// Atribuindo um valor string à variável 'idk'
idk = "12"; 

// Atribuindo um valor boolean à variável 'idk'
idk = true;

// Declara um array chamado 'ids' do tipo number[], contendo números
const ids: number[] = [1, 2, 3, 4, 5];

// Declara um array chamado 'booleans' do tipo boolean[], contendo valores booleanos
const booleans: boolean[] = [true, false, true, false];

// Declara um array chamado 'names' do tipo string[], contendo strings
const names: string[] = ["Felipe", "Jane"];

// Tupla
// Declara uma tupla chamada 'person' que deve conter um número e uma string
const person: [number, string] = [1, "Jane"];

// Lista de Tuplas
// Declara um array chamado 'people' que deve conter tuplas com um número e uma string
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Doe"],
];

// Intersections
// Declara uma variável chamada 'productId' que pode ser do tipo string, number ou boolean
const productId: string | number | boolean = false;

// Enum
// Define um enum chamado 'Direction' com valores numéricos e string
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

// Atribui o valor 'Left' do enum 'Direction' à variável 'direction'
const direction = Direction.Left;

// Type Assertions
// Declara uma variável chamada 'productName' do tipo any, que pode conter qualquer tipo de dado
const productName: any = "Boné";

// Usando Type Assertion para garantir que 'productName' é uma string
// let itemId = productName as string; 
// Usando Type Assertion com sintaxe alternativa
let itemId = <string>productName;

// Imprime o valor da variável 'direction' no console
console.log(direction);