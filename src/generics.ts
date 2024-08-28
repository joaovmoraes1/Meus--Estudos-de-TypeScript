// Função genérica que retorna o valor passado como argumento
const returnValue = <T>(value: T): T => value;

// Usando a função returnValue com tipo string
const message = returnValue<string>("Hello World");

// Usando a função returnValue com tipo number
const count = returnValue<number>(5);

// Função genérica que retorna o primeiro valor de um array
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

// Usando a função getFirstValueFromArray com um array de strings
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);

// Usando a função getFirstValueFromArray com um array de números
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Função assíncrona que retorna uma Promise que resolve com uma string
const returnPromise = async (): Promise<string> => {
  return "5";
};

// Classe genérica que representa um número
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

// Criando uma instância da classe GenericNumber com tipo number
const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});