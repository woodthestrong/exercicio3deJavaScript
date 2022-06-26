function myFunction(){
    var nome = prompt("Digite o seu nome");
    var sobrenome = prompt("Digite o seu sobrenome");
    var idade = prompt("Digite a sua idade");
    var sexo = prompt("Digite o seu sexo");
    var nomeDoPai = prompt("Digite o nome do seu pai");
    var nomeDaMae = prompt("Digite o nome da sua mãe");
    console.log("Nome: " + nome);
    console.log("Sobrenome: " + sobrenome);
    console.log("Idade: " + idade);
    console.log("Sexo: " + sexo);
    console.log("Nome do pai: " + nomeDoPai);
    console.log("Nome da mãe: " + nomeDaMae);
    console.table([nome, sobrenome, idade, sexo, nomeDoPai, nomeDaMae]);
}