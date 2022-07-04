import fs from "fs";
let input = Number(fs.readFileSync("stdin.txt", "utf-8"));

class Calcular {
  constructor(valor) {
    this.dividendo = valor;
    this.notas = [100, 50, 20, 10, 5, 2];
    this.moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
    this.divisor = 0;
    this.resto = 0;
    this.strNotas = `nota(s)`;
    this.strMoedas = `moeda(s)`;
  }

  mensagem(strTipoEspecie) {
    console.log(`${strTipoEspecie.slice(0, -3)}s:`.toUpperCase());
  }

  logica() {
    this.mensagem(this.strNotas);
    for (let i = 0; i < this.notas.length; i++) {
      this.divisor = this.notas[i];
      console.log(`${Math.floor(this.dividendo / this.divisor)} ${this.strNotas} de R$ ${this.notas[i].toFixed(2)}`);
      this.resto = (this.dividendo % this.divisor).toFixed(2);
      this.dividendo = this.resto;
    }
    return this.resto;
  }
  
  solucao() {
    this.logica();
  }
}
const desafio1021 = new Calcular(input);
desafio1021.solucao();
