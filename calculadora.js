/*
- Number() - converte valores em números;
- Prompt() - registra entradas de usuário;
- Alert() - mostra mensagem ao usuário;
- Template Strings - para usar Strings com expressões;
*/

function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma opção: \n 1 - soma(+)\n 2 - subtração(-) \n 3 - multiplicação(*) \n 4 - divisão real(/) \n 5 - divisão inteira(%) \n 6 - potenciação(**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Operação inválida!");
  } else {
    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: ")); //precisa fazer a conversar para que a entrada do usuário seja entendida como número
    let resultado;

    if (!n1 || !n2) {
      alert("Entrada inválida! Digite somente números!");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisão() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function restoDivisao() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} + ${n2} é ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim \n 2 - Não");

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Saindo...");
        } else {
          alert("Digite uma opção válida");
          novaOperacao();
        }
      }
    }

    /*if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisão();
    } else if (operacao == 5) {
      restoDivisao();
    } else if (operacao == 6) {
      potenciacao();
    }*/

    switch(operacao){
        case 1:
            soma();
        break;
        case 2:
            subtracao();
        break;
        case 3:
            multiplicacao();
        break;
        case 4:
            divisão();
        break;
        case 5:
            restoDivisao();
        break;
        case 6:
            potenciacao();
        break;
        default:
            alert('Opção inválida! Escolha uma opção de 1 a 6.')
    }
  }
}

calculadora();
