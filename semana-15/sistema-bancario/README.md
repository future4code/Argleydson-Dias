# WFS13-S15: Sistema Bancário


## Instruções

- O exercício deve ser resolvido inteiramente apenas com o uso de Typescript. As configurações do `tsconfig.json` devem ser as mesmas que utilizamos durante a semana;
- Crie um comando simples para rodar o código de vocês, usando o `package.json`;
- Sintam-se livres para consultar quaisquer materiais anteriores e utilizar os canais de dúvida.

## Escopo do Projeto

Um dos bancos mais famosos do Brasil, o LabeBank, está passando por alguns problemas sérios de performance em suas aplicações. Isso significa que as movimentações financeiras que passam pelos seus sistemas estão muito lentas: o que é muito preocupante já que impede a empresa de ter novos usuários e crescer. Tendo isto em mente, o LabeBank decidiu elaborar um concurso para uma POC de um sistema bancário usando Typescript.

POC é uma sigla que significa "Proof of Concept" ("Prova de Conceito" em tradução livre). É muito comum fazermos uma POC quando queremos apresentar uma nova tecnologia ou arquitetura para uma empresa, com o objetivo de convencê-la a utilizá-la. Uma POC, normalmente, não é muito complexa, mas deve possuir todas as funcionalidades básicas que permitam concluir se o conceito utilizado é válido para resolver o problema ou não. 

Com isso tudo em mente, você deve implementar uma POC com o objetivo de ganhar esta competição. Descrevemos, abaixo, todas as funcionalidades que a LabeBank precisa e logo depois as etapas de desenvolvimento para os requisitos mínimos deste projeto. 

### Funcionalidades

- **Criar Conta**
    
    Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: **nome**, **CPF** e **data de nascimento**. As contas devem guardar essas informações e uma propriedade para representar o **saldo** do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de **extrato** (possuindo o **valor**, a **data** e uma **descrição**). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.
    
- **Pegar Saldo**
    
    O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 
    
- **Adicionar saldo**
    
    O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
    
- **Pagar Conta**
    
    Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a data, considere que o pagamento deve ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.
    
- **Transferência Interna**
    
    A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.
    

### Requisitos Mínimos

O mínimo do projeto consiste nas funcionalidades de:  Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

1. Crie um **tipo** para representar uma conta para o usuário
2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
5. Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe com as validações descritas nas funcionalidades.
6. Crie um método `GET` na entidade `users`: essa função será responsável por pegar todos os usuários existentes no array de usuários.
7. Adicione uma validação ao item 1 (Criar conta): o usuário deve ser maior de idade para conseguir se cadastrar. Caso seja menor de idade, exiba uma mensagem de erro.

### Desafios

- Clique para ver
    
    Os desafios incluem terminar as demais funcionalidades. Também há uma proposta para o desenvolvimento.
    
    1. Adicione mais uma validação na função do item 1 (Criar conta): verifique se o CPF passado já não está atrelado a alguma conta existente.
    2. Crie um endpoint `get` que receba um CPF como parâmetro e retorne o saldo da conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo no sistema. Se for diferente, exiba uma mensagem de erro.
    3. Crie um endpoint `put` que receba um nome, um CPF e um valor. Ele deve adicionar o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema. Se algum dos dados for diferente, exiba uma mensagem de erro.
    4. Altere o endpoint de adicionar saldo para que ele adicione um item ao extrato da conta do usuário: indicando o **valor** e a **data** da transação. A descrição para este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string.
    5. Crie um endpoint `post` que permita ao cliente pagar uma conta. Ele deve receber uma **data** de vencimento da conta, uma **descrição**, um **valor** e o **CPF** do titular; e salvar uma transação no extrato da conta correspondente. O saldo do usuário **não** deve ser atualizado neste momento. Caso nenhuma **data** seja passada, considere que o pagamento deve ser feito **hoje**.
    6. Crie um novo endpoint `put` responsável por atualizar o saldo de um cliente. Para isto, percorra os itens do extrato e atualize o saldo somente para as contas cujas datas são anteriores a hoje. 
    7. Adicione uma validação ao endpoint de pagar conta: o usuário não pode colocar uma data que já passou.
    8. Adicione mais uma validação ao endpoint de pagar conta: o usuário não pode tentar fazer um pagamento cujo valor seja maior do que seu saldo atual.
    9. Crie um endpoint `post` para permitir a transferência entre contas internas do banco. O usuário deve informar o seu **nome**, o seu **CPF**, o **nome** do destinatário, o **CPF** do destinatário e o **valor**. Para cada transferência, criem um item do extrato para as duas contas envolvidas. Os saldos de ambas não devem ser atualizadas neste momento. (O endpoint de atualizar saldo, que vocês implementaram, já deve fazer isso).
    10. Adicione uma validação para o endpoint de transferência entre contas: verificar se o **saldo** do usuário é **suficiente** para a transferência. Se não for, exiba uma mensagem de erro.
    11. Adicione mais uma validação para a função de transferência entre contas: verificar se ambas as contas (do **remetente** e **destinatário**) existem. Exiba uma mensagem de erro se não existirem.