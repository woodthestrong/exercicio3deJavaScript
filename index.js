function myFunction(){
    var nome = prompt("Digite o seu nome");
    var sobrenome = prompt("Digite o seu sobrenome");
    var idade = prompt("Digite a sua idade");
    var sexo = prompt("Digite o seu sexo");
    var nomeDoPai = prompt("Digite o nome do seu pai");
    var nomeDaMae = prompt("Digite o nome da sua mãe");
    var nomeDaSegundaPessoa = prompt("Digite o seu nome");
    var sobrenomeDaSegundaPessoa = prompt("Digite o seu sobrenome");
    var idadeDaSegundaPessoa = prompt("Digite a sua idade");
    var sexoDaSegundaPessoa = prompt("Digite o seu sexo");
    var nomeDoPaiDaSegundaPessoa = prompt("Digite o nome do seu pai");
    var nomeDaMaeDaSegundaPessoa = prompt("Digite o nome da sua mãe");
    console.table([nome, sobrenome, idade, sexo, nomeDoPai, nomeDaMae]);
    console.table([nomeDaSegundaPessoa, sobrenomeDaSegundaPessoa, idadeDaSegundaPessoa, sexoDaSegundaPessoa, nomeDoPaiDaSegundaPessoa, nomeDaMaeDaSegundaPessoa]);
    if (idade > idadeDaSegundaPessoa){
        console.log(nome + " é maior do que " + nomeDaSegundaPessoa);
    } else {
        console.log(nomeDaSegundaPessoa + " é maior do que " + nome);
    }
}
