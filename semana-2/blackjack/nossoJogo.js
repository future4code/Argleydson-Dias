/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo(a) ao Blackjack!");

let querJogar = confirm("Pronto para testar sua sorte no jogo de Blackjack?");

if (querJogar) {
  let card1Usr = comprarCarta();
  let cadr2Usr = comprarCarta();
  let card1Bot = comprarCarta();
  let card2Bot = comprarCarta();

  let scoreUsr = card1Usr.valor + cadr2Usr.valor;
  let scoreBot = card1Bot.valor + card2Bot.valor;

  console.log(`Cartas do Usuário: ${card1Usr.texto} ${cadr2Usr.texto} Score: ${scoreUsr}`);
  console.log(`Cartas do Dealer: ${card1Bot.texto} ${card2Bot.texto} Score: ${scoreBot}`);

  if (scoreUsr > scoreBot) {
    console.log("Você ganhou!" + "\n" + "Atualize a página(F5) caso queira jogar novamente.");
  } else if (scoreUsr < scoreBot) {
    console.log("Você perdeu!" + "\n" + "Atualize a página(F5) caso queira jogar novamente");
  } else if (scoreUsr === scoreBot) {
    console.log("Empatou!" + "\n" + "Atualize a página(F5) caso queira jogar novamente");
  }
} else {
  console.log("Atualize a página(F5) caso mude de ideia e queira jogar.");
}
