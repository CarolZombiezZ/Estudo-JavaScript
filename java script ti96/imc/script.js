var t_fieldNome=document.querySelector("#nome"); //Estou pegando pelo ID
console.log(t_fieldNome)

var t_fielData=document.querySelector("#data_nasc"); //Estou pegando pelo ID
console.log(t_fielData)

var t_fielAltura=document.querySelector("#altura"); //Estou pegando pelo ID
console.log(t_fielAltura)

var t_fielPeso=document.querySelector("#peso"); //Estou pegando pelo ID
console.log(t_fielPeso)


var btnCalcular=document.querySelector("#calcular");
console.log(btnCalcular)



//Funções

function somar(n1,n2){

    return n1+n2


}

console.log(somar(23,45))

//Quando eu clicar no botão ele vai somar os valores e vai imprimir no console.

//Estou pedindo para add um evento de clique no botão

//eu vou passar uma função que vai rodar toda vez que eu 

btnCalcular.addEventListener("click", function soma(e){
console.log(`Nome: ${t_fieldNome.value} Peso:${t_fielPeso.value} Altura${t_fielAltura.value}, DataNascimento${t_fielData.value}`)





})