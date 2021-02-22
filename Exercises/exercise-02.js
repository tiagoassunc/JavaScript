/* Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo: */

const programador = {
  nome: "Tiago",
  idade: 19,
  tecnologias: [
    {
      nome: "c++",
      especialidades: "desktop"
    },

    {
      nome: "python",
      especialidades: "data science"
    },

    {
      nome: "java script",
      especialidades: "web/mobile"
    }
  ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} come especialidade em ${programador.tecnologias[0].especialidades}`)