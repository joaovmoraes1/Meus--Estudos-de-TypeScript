interface MathFunc {
    (x: number, y: number): number;
  }
  
  // Função de soma que implementa a interface MathFunc
  const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
  };
  
  // Função de subtração que implementa a interface MathFunc
  const sub: MathFunc = (x: number, y: number) => {
    return x - y;
  };
  
  // Chamando a função sum e armazenando o resultado na variável value
  const value = sum(2, 3);
  
  // Função para logar uma mensagem no console
  const log = (message: string): void => {
    console.log(message);
  };
  
  // Usando a função log para imprimir a variável value
  log(`O resultado da soma é: ${value}`);