/* Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários 

Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.
Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário */

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}

function CssYes(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS')
      return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const trabalhaCss = CssYes(usuarios[i])

  if (trabalhaCss) {
    console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
  }
}