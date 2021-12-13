## Exercício 1 
Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo.

Abaixo está a query que cria essa tabela no MySQL

~~~mysql
CREATE TABLE Actor(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR (6) NOT NULL
);
~~~

<ol type="a">
  <li> Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.</li>
    <ul>
      <li> "CREATE TABLE", responsável por criar a tabela; o comando</li>
      <li> "VARCHAR", responsável por restringir a quantidade máxima de caracteres (255 nesse caso) e se caso essa quantidade não seja atingida ele armazenará a quantidade inserida pelo usuário, </li>
      <li> "PRIMARY KEY" para identificar o id como chave primária; </li>
      <li> "NOT NULL" torna obrigatório o preenchimento do dado. </li>
    </ul>

  <li> O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.</li>
  <ul>
    <li>SHOW DATABASES: retornou o meu banco de dados -> information_schema -> "maryam-argleydson-leao"</li>
    <li> SHOW TABLES: retornou minhas tabelas criadas até o momento.</li>
  </ul>

<li> O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.</li>
  <ul>
    <li>DESCRIBE Actor: retornou a tabela Actor com seus Types.</li>
  </ul>
</ol>

 ## EXERCICIO 2 
 O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

 ~~~mysql
 INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "001",
   "Tony Ramos", 
   400000, 
   "1948-08-25", 
   "male" 
);
 ~~~
Atente-se a 3 fatos nessa query:
<ol>
  <li>A ordem dos valores (VALUES) é definida pela lista colocada depois do nome da tabela (ACTOR): (id, name, salary, birth_date).</li>
  <li>Os valores VARCHAR (strings) devem ser indicados com "</li>
  <li>As datas seguem o padrão: YYYY-MM-DD</li>
</ol>


a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.
 ~~~mysql
 INSERT INTO Actor
 VALUES
 ("002",
 "Glória Pires",
 1200000, 
 "1963-08-23",
 "female");
~~~

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
~~~mysql
INSERT INTO Actor 
VALUES
("002",
"Pedro",
5000, 
"1990-05-05",
"male");
~~~
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', a mensagem de erro
-- indica que houve uma duplicação da chave primária "002".

c)
~~~mysql
INSERT INTO Actor (id, name, salary)
VALUES
(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female");
~~~

-- Error Code: 1136. Column count doesn't match value count at row 1, a mensagem de erro 
-- informa que a contagem de colunas não coincide com a contagem de valores informados.

d)
~~~mysql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
~~~
-- Error Code: 1364. Field 'name' doesn't have a default value, a mensagem
-- informa que o campo "name" não foi preenchido

e)
~~~mysql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
~~~
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- A mensagem de erro informa que a data de nascimento está incorreta, visto que precisa ser uma string entre aspas.

f) 
~~~mysql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~

 ## EXERCICIO 3 

a) Escreva uma query que retorne todas as informações das atrizes
 ~~~mysql
 SELECT * FROM Actor
 WHERE gender = "female";
 ~~~
 
b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
 ~~~mysql
 SELECT salary FROM Actor
 WHERE name = "Tony Ramos";
 ~~~
 
c) screva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
 ~~~mysql
 SELECT * FROM Actor
 WHERE gender = "invalid";
 ~~~
 -- Não retornou nada (id = null, name = null, salary = null, birth_date = null, gender = null)
 
d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
 ~~~mysql
 SELECT id, name, salary FROM Actor
 WHERE salary <= 500000;
 ~~~
 
e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
 ~~~mysql
 SELECT id, nome FROM Actor
 WHERE id = "002";
 ~~~
 -- O erro informa que a coluna "nome" não existe. Precisa mudar para name
 ~~~mysql
 SELECT id, name FROM Actor
 WHERE id = "002";
 ~~~
 
  ## EXERCICIO 4

~~~mysql  
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
~~~

a) Explique com as suas palavras a query acima: 
Essa query segue uma estrutura. 1) é solicitado tudo "*" de Actor. 2) é realizado um filtro de todos os nomes que começam com as letras "A" ou "J", depois, com base nessa filtragem, é realizada uma outra filtragem, agora para retornar todos os nomes que começam com as letras A e J que tem salário superior a 300000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
~~~mysql 
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
~~~

c) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
~~~mysql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR  name LIKE "%G%";
~~~

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
~~~mysql
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR  name LIKE "%G%" OR name LIKE "%a%" OR  name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
~~~

  ## EXERCICIO 5

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
~~~mysql
CREATE TABLE Films(
id VARCHAR (255) PRIMARY KEY,
título VARCHAR (255) NOT NULL,
sinopse TEXT,
data_de_lançamento DATE NOT NULL,
avaliação FLOAT NOT NULL
);
~~~
-- TEXT é um dos tipos de dados mais utilizados para armazenar textos.

b) Crie 4 filmes com as seguintes informações: 
~~~mysql
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
~~~

c)
~~~mysql
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes 
  confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta 
  depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai 
  se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
~~~

d)
~~~mysql
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos 
  acaba por acarretar sua morte precoce",
  "2017-11-02", 
  8
);
~~~

e)
~~~mysql
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Central do Brasil",
  "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas 
   para pessoas analfabetas, que ditam o que querem contar às suas famílias. 
   Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, 
   o filho de nove anos de idade de uma de suas clientes, acaba sozinho 
   quando a mãe é morta em um acidente de ônibus. Ela reluta em cuidar do 
   menino, mas se junta a ele em uma viagem pelo interior do Nordeste em 
   busca do pai de Josué, que ele nunca conheceu.",
  "1998-04-03", 
  10
);
~~~

 ## EXERCICIO 6
Escreva uma query que:
a) Escreva uma query que:
~~~mysql
  SELECT id, título, avaliação FROM Films
  WHERE id = "004";
~~~

b) Retorne um filme a partir de um nome específico;
~~~mysql
  SELECT * FROM Films
  WHERE título = "Central do Brasil";
~~~

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
~~~mysql
  SELECT id, título, sinopse FROM Films
  WHERE avaliação >= 7;
~~~

 ## EXERCICIO 7 
 Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra vida
~~~mysql
    SELECT * FROM Films
    WHERE título LIKE "%vida%";
~~~

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
~~~mysql
    SELECT * FROM Films
    WHERE título LIKE "%TERMO DE BUSCA%" OR 
		sinopse LIKE "%TERMO DE BUSCA";
~~~

c) Procure por todos os filmes que já tenham lançado
~~~mysql
	SELECT * FROM Films
    WHERE data_de_lançamento <"2021-11-22";
~~~

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
~~~mysql
    SELECT * FROM Films
    WHERE data_de_lançamento < "2021-11-22" and
    (título LIKE "%TERMO DE BUSCA%" OR
    sinopse LIKE "%TERMO DE BUSCA%") AND avaliação >= 7;
~~~