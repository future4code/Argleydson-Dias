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

alert("Bem vindo(a) ao Blackjack!")

let querJogar = confirm("Pronto para testar sua sorte no jogo de Blackjack?")

let usuario = [];
let bot = [];

if (querJogar) {
   // distribuir cartas iniciais, são 2 para cada.
   let distribuirCards = false;
   while (!distribuirCards) {
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      bot.push(comprarCarta())
      bot.push(comprarCarta())

      // se as cartas forem A, sortea novamente
      if ((usuario[0].valor === 11 && usuario[1].valor === 11) || (bot[0].valor === 11 && bot[1].valor === 11)) {
         usuario = []
         bot = []
      } else {
         distribuirCards = true
      }
   }

   let comprar = true;

   while (comprar) {
      let msg = "";
      let score = 0;

      for (let carta of usuario) {
         msg += carta.texto + " "
         score += carta.valor
      }

      if (score > 21) {
         comprar = false;
      } else {
         let comfirmaCompra = confirm(`
            Suas cartas são ${msg}. Soma: ${score}
            A carta revelada do computador é ${bot[0].texto}. 
            Deseja comprar mais uma carta?
         `)
         if (comfirmaCompra) {
            usuario.push(comprarCarta())
         } else {
            comprar = false
         }
      }
   }

   //Pontuação
   let pntsUsr = 0;
   let pntsBot = 0;
   let msgUsr = "";
   let msgBot = "";

   for (let carta of usuario) {
      pntsUsr += carta.valor
      msgUsr += carta.texto + " "
   }

   for (let carta of bot) {
      pntsBot += carta.valor
      msgBot += carta.texto + " "
   }

   // bot de compras de carta do computador
   if (pntsUsr <= 21) {
      while (pntsBot < pntsUsr && pntsBot <= 21) {
         bot.push(comprarCarta())
         pntsBot = 0
         msgBot = ""
         for (let carta of bot) {
            pntsBot += carta.valor
            msgBot += carta.texto + " "
         }
      }
   }

   // resultado
   let result = "";

   if (pntsUsr > pntsBot && pntsUsr <= 21 || pntsBot > 21 && pntsUsr <= 21) {
      result = "Você venceu!"
   } else if (pntsUsr < pntsBot && pntsBot <= 21 || pntsUsr > 21 && pntsBot <= 21) {
      result = "Você perdeu!"
   } else {
      result = "Empate!"
   }

   // informar resultados
   alert(`
   Cartas do Usuário: ${msgUsr} Score: ${pntsUsr}
   Cartas do Dealer: ${msgBot} Score: ${pntsBot}
   ${result} 
   Atualize a página(F5) caso queira jogar novamente!  
   `)


} else {
   alert("Atualize a página(F5) caso mude de ideia e queira jogar.")
}
