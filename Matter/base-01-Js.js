/* 
operadores :
 == igual, != não é igual 
<= menor ou igual
=== igual e de mesma classe, !== diverente inclusive clase 
*/



console.log('*-----------desafio entrada------------*')


/*console.log( 5<4) false (boolean)
console.log( 4 == "4") true 
console.log( 4 === "4") false  pois um é number o outro string
console.log( 5!=4) true
console.log( 5!==4) true
DESAFIOS : verificar se pessoa é maior de idade*/

const idade = 17

if (idade>= 18){
    console.log("permitir entrada")
}else {
    console.log("bloquear entrada")
}

if (idade == 17){
    console.log("voltar quando tiver 18")
}


/* =========================================================
OPERADORES LOGÍCOS : 
&& "E" as duas condições devem ser verdadeiras para condição final verdadeira
|| "OU" uma das condições tem de ser verdadeira
! "NÃO" nega uma condiçõa

==========================================================*/

/*console.log(5==5 && 6==6) true 
console.log(5==5 && 6!=6) console.log(5!=5 && 6==6) false
console.log(5==5 && 6!=6) console.log(5!=5 && 6==6) true
console.log(!(5>6))
DESAFIOS simplificando usando operadores*/

if (!(idade>= 18) || idade===17){
    console.log("bloquear entrada")
}else {
    console.log("permitir entrada")
}

/* =========================================================
OPERADORES ARTIMÉTICOS : 
* MULTIPLICÇÃO
% DIVISÃO
+ ADIÇÃO
- SUBRITAÇÃO

==========================================================*/
console.log('*--------------caculos----------------- *')


console.log(2*2)
console.log(2+2)
console.log(2%2)
console.log(2-2)


console.log('*----------------desafio media---------------*')

/*
Objetos : usar virgula "," apos cada objeto. Ex :
 const aluno01 = {
   nome : 'mike',
   nota : 9 
} 

como acesar objeto: ponto "." para acessar funcionalidades ou mais adequadamente MÉTODOS
aluno01.nome ou .nota etc etc
 
console por ex é um objeto e tem diversas funcionalidades e propriedades
*/ 

/* VETORES ou ARRAYS: agrupar vários objetos em uma unica variável Ex :
const [ Objetos
] 
Ex : const nomeAlunos = ['mike','luu','joao']

Usar virgula apos objetos

Como acessar : variavel[posiçao(começando do 0)]
Ex : console.log(nomeAlunos)
*/

/* FUNÇÕES E METODOS : reaproveitamento de codigos 
function calculaMedia(alunos){
    return media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

*/


//vetor 1
const turmaA = [
 //objeto 1
    {
        nome : 'mike',
        nota : 9,
        

    },
 //objeto 2
    {
        nome : 'luu',
        nota : 7
    },
 //objeto 3
    {
        nome : 'joao',
        nota : 6
    },
    {
        nome : 'nina',
        nota : 10
    },
    {
        nome : 'ale',
        nota : 8
    }
    
]
//vetor2
 const turmaB = [
  
  //objeto 1    
    {
        nome : 'dudu',
        nota : 2
    },
  //objeto 2  
    {
        nome : 'mari',
        nota : 6
    },
  //objeto 3 
    {
        nome : 'vi',
        nota : 1
    }
    
]

/*funcao 1 referente a media
usa se turma dentro do () pra referir aos objetos q podem ser turma A ou B 
[] é referente a posição do vetor 
 . é referente a função requerida do objeto
 return media = (turma[0].nota + turma[1].nota + turma[2].nota) / 3
*/
/*function calculaMedia() funcionara normal pois acessa o escopo geral 
uso de function calculaMedia(turma) é para acessar qualquer turma tipo turma1 e turma2 
*/
function calculaMedia(turma){
    let soma = 0;
    for (let i = 0; i < turma.length; i++){
         soma = soma + turma[i].nota ;  
     }
 
     const media = soma / turma.length
     return media
 }   
 
//retorno da função media -> declarar variavel media 1 e 2 = funcao calculaMedia (turma requerida) 
const media1 = calculaMedia (turmaA)
const media2 = calculaMedia(turmaB)

/*funcao 2 referente a resposta
usa se media dentro do () pra se referir a variavel media que pode ser 1 ou 2
media e turma são variaveis da equaçao. Sendo turma referente aos vetores turmaA e turmaB
é preciso colar turma como variavel da função pra ser usada dentro {} da sua formulação*/
function resposta(media,turma) {
        if (media>5){
        console.log(`media da ${turma} é ${media} parabens`)
    } else {
        console.log(`media da ${turma} é ${media} lamento`)
    }
} 

//retorno da função mensagem -> declaração de varável = função resposta(media referida)
console.log(turmaA)
const resposta1 = resposta(media1,'turmaA')
console.log(turmaB)
const resposta2 = resposta(media2,'turmaB')

/*function marcarreprovado(turma){
     for (let turma of turmas){
        turma.reprovado = false 
        if(turma.nota < 5){
            turma.reprovado = true
        }
        console.table(turmas)
    }

function enviarmensagemreprovado(turma){
    for (let i = 0; i < turma.length; i++){
     if (turma[i].reprovado == true){
         console.log(`o aluno ${turma[i].nome} foi reprovado com a nota ${turma[i].nota}` )
     }
    }   
}
enviarmensagemreprovado(turmaA)
nviarmensagemreprovado(turmaA)*/

function marcarreprovado(turma){
        turma.reprovado = false/* .reprovado sem estar no escopo novo funcao de objeto*/
        if(turma.nota < 5){
            turma.reprovado = true
        }
    //console.table(turmas)/*.table apresentação bonita*/
}

function enviarmensagemreprovado(turma){
     if (turma.reprovado/*nao é necessario o "== true" pois já é um boolean da func anterior*/){
         console.log(`o aluno ${turma.nome} foi reprovado com a nota ${turma.nota}` )
     }
    }
 /*estrutura de repeticao igual ao or (let i = 0; i < turma.length; i++){ porem atulaizada 
    usa se o plural dos vetores e objetos da turmaA e B e o padrao of
    for (let turma of turmas){'fazer algo'}
    ou seja para cada turma das turmas faz algo até acabar turmas
    */   
function reprovadogeral(turmas){
    for (let turma of turmas){
        marcarreprovado(turma)
        enviarmensagemreprovado(turma)
    }
   
}

reprovadogeral(turmaA)
reprovadogeral(turmaB)





