// Type
// Define um tipo chamado 'Order' com as propriedades productId e price
type Order = {
    productId: string;
    price: number;
  };
  
  // Define um tipo chamado 'User' com as propriedades firstName, age, email, password (opcional), orders (um array de Order) e um método register
  type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string; // Propriedade opcional
    orders: Order[];
    register(): string;
  };
  
  // Cria uma instância de User chamada 'user' com valores para as propriedades
  const user: User = {
    firstName: "Jane",
    age: 20,
    email: "jane@doe.com",
    orders: [{ productId: "1", price: 200 }],
    register() {
      return "a";
    },
  };
  
  // Define uma função chamada 'printLog' que recebe uma string como argumento
  const printLog = (message: string) => {};
  
  // Chama a função 'printLog' com a propriedade 'password' do objeto 'user', utilizando o operador '!' para indicar que a propriedade não é nula.
  printLog(user.password!);
  
  // Unions
  // Define um tipo chamado 'Author' com a propriedade 'books'
  type Author = {
    books: string[];
  };
  
  // Cria uma instância de um objeto que combina os tipos 'Author' e 'User'
  const author: Author & User = {
    age: 2,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Joao",
    orders: [],
    register() {
      return "a";
    },
  };
  
  // Interfaces
  // Define uma interface chamada 'UserInterface' com propriedades e métodos
  interface UserInterface {
    readonly firstName: string; // Propriedade somente leitura
    email: string;
    login(): string;
  }
  
  // Cria uma instância de UserInterface chamada 'emailUser'
  const emailUser: UserInterface = {
    email: "joao@gmail.com",
    firstName: "Joao",
    login() {
      return "a";
    },
  };
  
  // Define uma interface chamada 'AuthorInterface'
  interface AuthorInterface {
    books: string[];
  }
  
  // Cria uma instância de um objeto que combina as interfaces 'UserInterface' e 'AuthorInterface'
  const newAuthor: UserInterface & AuthorInterface = {
    email: "author@gmail.com",
    firstName: "Joao",
    books: [],
    login() {
      return "a";
    },
  };
  
  // Define um tipo chamado 'Grade' que pode ser um número ou uma string
  type Grade = number | string;
  
  // Cria uma variável chamada 'grade' do tipo 'Grade' e atribui um valor numérico a ela
  const grade: Grade = 1;