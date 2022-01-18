~~~sql
ALTER TABLE `maryam-argleydson-leao`.`Films` 
RENAME TO  `maryam-argleydson-leao`.`Movie` ;
~~~

 Lembre-se que para os exercícios de UPDATE e DELETE, o SQL exige que você desative os Safe Updates. Para fazer isso, rode o seguinte comando no seu Workbench: 
 ~~~sql
SET SQL_SAFE_UPDATES = 0;
~~~

~~~sql
SELECT * FROM Movie;
SELECT * FROM Actor;
~~~


## EXERCÍCIO 1 ##
Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder:

 **a)** 
 ~~~sql
 ALTER TABLE Actor DROP COLUMN salary;
 ~~~
 Toda a coluna "salary" seria deletada. 

 **b)** 
  ~~~sql
 ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
 ~~~
 A coluna gender será substituída por sex.  

 **c)** 
  ~~~sql
 ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
 ~~~
 Foi alterada a coluna gender para que receba até 255 caracteres. 

 **d)** Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
~~~sql
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
~~~

## EXERCÍCIO 2 ##
Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:
~~~sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
~~~
 **a)** Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
 ~~~sql
    UPDATE Actor
    SET name = "Astrobot", birth_date = "2021-11-23"
    WHERE id = "003"; 
~~~

**b)** Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
~~~sql
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
~~~

**c)** Escreva uma query que atualize todas as informações do ator com o id 005
~~~sql
    UPDATE Actor
    SET 
    name = "Bananinha",
    birth_date = "2021-11-23",
    salary = 100000,
    gender = "male"
    WHERE id = "005";
~~~

**d)** Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
~~~sql
    UPDATE Actor
    SET
    name = "Augustinho Carrara",
    birth_date = "1978-11-23",
    salary = 250000,
    gender = "male"
    WHERE id = "007";
~~~

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Foi atualizado um dado na tabela mas nenhuma informação foi adicionada/alterada.alter


## EXERCÍCIO 3 ##
Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`
~~~sql
DELETE FROM Actor WHERE name = "Tony Ramos"
~~~

 **a)**  Escreva uma query que apague a atriz com o nome Fernanda Montenegro
 ~~~sql
    DELETE FROM Actor
    WHERE name = "Fernanda Montenegro";
~~~

 **b)** Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
 ~~~sql
    DELETE FROM Actor
    WHERE
    gender = "male" AND
    salary >1000000;
~~~

## EXERCÍCIO 4 ##
O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. Essa manipulação é dada através de uma função MySQL. O exemplo mais clássico é a função COUNT, que permite contar a quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:
~~~sql
    SELECT COUNT(*) FROM Actor
~~~

Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
~~~sql
    SELECT COUNT(*) FROM Actor WHERE gender = "female"
~~~

Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores
~~~sql
    SELECT AVG(salary) FROM Actor
~~~

Existem outras funções, tais como: MAX e MIN que permitem determinar os valores máximos e mínimos de uma coluna.

 **a)** Escreva uma query que pegue o maior salário de todos os atores e atrizes
~~~sql
    SELECT MAX(salary) FROM Actor;
~~~

 **b)** Escreva uma query que pegue o menor salário das atrizes
~~~sql
    SELECT MIN(salary) FROM Actor
    WHERE gender = "female";
~~~

 **c)** Escreva uma query que pegue a quantidade de atrizes
~~~sql
    SELECT COUNT(*) FROM Actor
    WHERE gender = "female";
~~~

 **d)** Escreva uma query que pegue a soma de todos os salários
~~~sql
    SELECT SUM(salary) FROM Actor;
~~~

## EXERCÍCIO 5 ##
Para finalizar o que vimos na aula, temos que treinar as operações indicadas por `LIMIT`, `ORDER BY` e `GROUP BY`

O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:

```sql
SELECT * FROM Actor LIMIT 3
```

`ORDER BY` permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (`ASC`) ou decrescente (`DESC`). A sintaxe é: `ORDER BY coluna ASC/DESC`. Se quisermos os atores em ordem alfabética:

```sql
SELECT * FROM Actor ORDER BY name ASC
```

Podemos juntar com o `LIMIT` e pegarmos os 4 primeiros atores (em ordem alfabética):

```sql
SELECT * FROM Actor ORDER BY name ASC LIMIT 4
```

Até pegar somente as 4 primeiras atrizes em ordem alfabética:

```sql
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4
```

O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`)

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

 **a)** Releia a última query. Teste-a. Explique o resultado com as suas palavras
~~~sql
    SELECT COUNT(*), gender FROM Actor
    GROUP BY gender;
~~~
Foi contabilizado e agrupado por gênero a quantidade total de atores e atrizes.

 **b)** Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
~~~sql
    SELECT id, name FROM Actor
    ORDER BY name DESC;
~~~

 **c)** Faça uma query que retorne todos os atores ordenados pelo salário
~~~sql
    SELECT * FROM Actor
    ORDER BY salary;
~~~

 **d)** Faça uma query que retorne os atores com os três maiores salarios
~~~sql
    SELECT * FROM Actor 
    ORDER BY salary DESC
    LIMIT 3;
~~~

**e)** Faça uma query que retorne a média de salário por gênero
~~~sql
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;
~~~

## EXERCÍCIO 6 ##
 **a)** Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
~~~sql
    ALTER TABLE Movie
    ADD playing_limit_date DATE;
~~~

 **b)** Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
 ~~~sql
    ALTER TABLE Movie
    CHANGE avaliação rating FLOAT;
~~~

 **c)**  Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
~~~sql
  DATE Movie
    SET playing_limit_date = "2021-12-25"
    WHERE id = "001";

    UPDATE Movie
    SET playing_limit_date = "2020-10-25"
    WHERE id = "002";
~~~

 **d)** Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
~~~sql
    DELETE FROM Movie
    WHERE id = "004";

    UPDATE Movie
    SET sinopse = "Nesse filme a atriz Fernanda Montenegro foi indicada ao oscar de Melhor Atriz"
    WHERE id = "004";
~~~
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Não apareceu "erro" na requisição, no entanto o ID e nem a nova sinopse aparecem na tabela. 

## EXERCÍCIO 7 ## 
Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

 **a)** Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:
~~~sql
    SELECT COUNT(*) FROM Movie
    WHERE rating > 7.5;
~~~

 **b)**  Qual a média das avaliações dos filmes?
~~~sql
    SELECT AVG(rating) FROM Movie;
~~~

 **c)** Qual a quantidade de filmes em cartaz?
~~~sql
    SELECT COUNT(*) FROM Movie
    WHERE playing_limit_date > CURDATE();
~~~

 **d)** Qual a quantidade de filmes que ainda irão lançar?
~~~sql
    SELECT COUNT(*) FROM Movie
    WHERE data_de_lançamento > CURDATE();
~~~

 **e)** Qual a maior nota dos filmes?
~~~sql
    SELECT MAX(rating) FROM Movie;
~~~

 **f)** Qual a menor nota dos filmes?
~~~sql
    SELECT MIN(rating) FROM Movie;
~~~

## EXERCÍCIO 8 ## 
Escreva uma query que:

 **a)** Retorne todos os filmes em ordem alfabética
~~~sql
    SELECT * FROM Movie
    ORDER BY título DESC;
~~~

 **b)** Retorne os 5 primerios filmes em ordem descrente alfabética
~~~sql
    SELECT * FROM Movie
    ORDER BY título ASC
    LIMIT 5;
~~~

 **c)** Retorne os 3 filmes mais recentes em cartaz
~~~sql
    SELECT * FROM Movie
    WHERE data_de_lançamento < CURDATE()
    ORDER BY data_de_lançamento DESC
    LIMIT 3;
~~~

 **d)**  Retorne os 3 filmes melhor avalidos
~~~sql
    SELECT * FROM Movie
    ORDER BY rating DESC
    LIMIT 3;
~~~

