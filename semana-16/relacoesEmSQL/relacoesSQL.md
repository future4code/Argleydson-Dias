# Aula 48 - Relações em SQL

## Referências:

`EN`

[SQL Joins](https://www.w3schools.com/sql/sql_join.asp)

[SQL JOIN](https://www.dofactory.com/sql/join)

[Inner Join - Animated](https://dataschool.com/how-to-teach-people-sql/inner-join-animated/)

## Materiais de Aula:

- Slides
    
    [Aula 48 - Relações em SQL.pdf](Aula%2048%20-%20Relac%CC%A7o%CC%83es%20em%20SQL%209ec9edf8f3dd4b2b8895ec5c2c822ede/Aula_47_-_Relacoes_em_SQL.pdf)
    

## Exercícios para tarde:

- **Leia aqui antes de começar!**
    - Informações do banco
        
        Nós criamos um banco de dados específico para cada um de vocês usar durante o Módulo de Backend. O host é `35.226.146.116` na porta `3306`. Os usuários, senhas e nomes do banco de dados serão enviados individualmente para vocês no slack. 
        
        **Não compartilhe essas informações com ninguém!** 
        
        **Não suba em repositórios do GitHub que sejam públicos, ou seja, não suba no GitHub que vocês tem conosco. Repetindo: não suba.**
        

Durante essa semana iremos construir, nos exercícios de tarde, um pequeno sistema de um cinema. Ele deverá ter informações sobre atores, filmes, ingressos, e mais. Faça os exercícios abaixo em ordem. 

Você deverá entregar hoje um arquivo Markdown, nas pastas dessa semana (igual vocês já estão acostumades a fazer). A ideia de usar Markdown é só para vocês terem contato com essa linguagem. Não se preocupem em fazer nada muito bonito ou rebuscado. 

- Leia as instruções sobre Markdown
    
    Você pode pesquisar em algum desses sites:
    
    [Guia básico de Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)
    
    [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/)
    
    Para testar o Markdown:
    
    [Online Markdown Editor - Dillinger, the Last Markdown Editor ever.](https://dillinger.io/)
    
    - Exemplo
        
        ```sql
        ### Exercício 1
        a) A resposta da pergunta é: sim, porque sim.
        b) A query é:
        ```
        SELECT * FROM Table;
        ```
        
        ### Exercício 2
        a) A resposta é: Blablabla, porque:
        1. Bleus
        2. Blius
        3. Blos
        
        b) Isso está errado, pelos motivos:
        * Óbvio
        * Sem dúvida
        ```
        

- Exercício 1
    
    No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 
    
    As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela
    
    ```sql
    CREATE TABLE Rating (
    		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
    		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    )
    ```
    
    *a. Explique o que é uma chave estrangeira*
    ```
    Chave estrangeira é responsável por fazer a relação entre distintas tabelas e está sempre referenciada a PRIMARY KEY. No caso do exerício 1 essa relação é entre a tabela Rating e Movie. 
    ```
    
    *b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
    ```sql
    INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES
    (
      "001",
      "Filme muito bom",
      10,
      "001"
      );
    ```
    
    *c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
    ```sql
    INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES
    (
      "003",
      "Filme ruim",
      3,
      "004"
      );
    ```
    ```sql
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-argleydson-leao`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    
    A menssagem de erro informa que não é possível adicionar ou atualizar a nova linha por algum erro na chave estrangeira, ou seja, no ID inválido que foi digitado.
    ```
        
    d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
    ```sql
    ALTER TABLE Movie DROP COLUMN Rating;
    ```
    
    *e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
    ```sql 
    DELETE FROM Movie
    WHERE id = "002";    
    ```
    ```sql
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-argleydson-leao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
     
    A menssagem indica que o arquivo não pode ser removido por está relacionado a outra tabela.
    ```
  
    
    - Dicas
        
        b. Exemplo de uma avaliação
        
        ```sql
        INSERT INTO Rating (id, comment, rate, movie_id) 
        VALUES (
        		"001",
            "Muito bom!",
            7,
        		"004"
        );
        ```
        
        d. 
        
        ```sql
        ALTER TABLE Movie DROP COLUMN rating;
        ```
        
    
- Exercício 2
    
    Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**
    
    Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.
    
    ```sql
    CREATE TABLE MovieCast (
    		movie_id VARCHAR(255),
    		actor_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        FOREIGN KEY (actor_id) REFERENCES Actor(id)
    );
    ```
    
    *a. Explique, com as suas palavras, essa tabela*
    ```
    Essa tabela consegue relacionar atores e atrizes com filmes. Ela tem uma relação de vários para vários N:M Para realizar essa relação essa tabela necessita de duas chaves estrangeiras, uma para a PRIMARY KEY da Movie e outra para a PRIMARY KEY de Actor.
    ```
    
    *b. Crie, ao menos, 6 relações nessa tabela* 
    ```sql
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "001",
      "002"
      );
    
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "001",
      "003"
      );
      
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "001",
      "004"
      );
      
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "002",
      "004"
      );
      
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "003",
      "006"
      );
      
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "003",
      "005"
      );
  ```
    
    *c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
    ```sql
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES
    (
      "003",
      "001"
      );
    ```
    ```sql
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails(`maryam-argleydson-leao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    
    A mensagem de erro indicou um problema da chave estrangeira, ou seja, com problema no ID.
    ```
    
    *d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
    ```sql
    DELETE FROM Actor
    WHERE id = 002;
    ```
    ```sql
    Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect. 
    
    Aconteceu um erro pois o tabela está vinculada a outra tabela.
    ```
    - Dicas
        
        b. Exemplo de uma criação
        
        ```sql
        INSERT INTO MovieCast(movie_id, actor_id)
        VALUES(
        		"004",
            "001"
        )
        ```
        
    
- Exercício 3
    
    Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 
    
    Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 
    
    ```sql
    SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
    ```
    
    *a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
    ``` 
    A query acima utiliza o operador JOIN que junta os registros de distintas tabelas. O operador ON especifica as condições para retorno das queries.
    ```
    
    *b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
    ```sql
    SELECT * FROM Movie
    INNER JOIN Rating
    ON Movie.id = Rating.movie_id;
    ```
    
    - Dicas
        
        b. 
        
        ```sql
        SELECT m.id as movie_id, r.rate as rating FROM Movie m
        INNER JOIN Rating r ON m.id = r.movie_id;
        ```
        

- **Desafios**
    - Exercício 4
        
        Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.
        
        *a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
        
        *b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
        
        *c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*
        
        - Dicas
            
            a.
            
            ```sql
            SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
            FROM Movie m
            LEFT JOIN Rating r ON m.id = r.movie_id;
            ```
            
            b.
            
            ```sql
            SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
            RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
            ```
            
            c.
            
            ```sql
            SELECT AVG(r.rate), m.id, m.title FROM Movie m
            LEFT JOIN Rating r ON m.id = r.movie_id
            GROUP BY (m.id);
            ```
            
        
    - Exercício 5
        
        Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.
        
        Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:
        
        ```sql
        SELECT * FROM Movie m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id;
        ```
        
        *a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*
        
        *b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*
        
        *c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*
        
        - Veja a query
            
            ```sql
            SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
            LEFT JOIN MovieCast mc ON m.id = mc.movie_id
            JOIN Actor a ON a.id = mc.actor_id;
            ```
            
        
        *d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*
        
        - Dicas
            
            b.
            
            ```sql
            SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
            LEFT JOIN MovieCast mc ON m.id = mc.movie_id
            JOIN Actor a ON a.id = mc.actor_id;
            ```
            
            c. 
            
            ```sql
            SELECT 
            		m.id as movie_id, 
                m.title, 
                a.id as actor_id, 
                a.name, 
                r.rate, 
                r.comment 
            FROM Movie m
            LEFT JOIN Rating r on r.movie_id = m.id
            LEFT JOIN MovieCast mc ON m.id = mc.movie_id
            JOIN Actor a ON a.id = mc.actor_id;
            ```
            
        
    - Exercício 6
        
        Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`,  `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.
        
        *a. Que tipo de relação é essa?*
        
        *b. Explicite a query que você usou para criar a tabela*
        
        *c. Crie ao menos 2 óscar para cada um dos filmes* 
        
        *d. Faça uma query que retorne todos os filmes e seus respectivos óscar*
        
        - Dicas
            
            Como esse é o último exercício da semana, iremos dar apenas uma dica: essa relação é M:N. Por que um óscar pode ser dado a vários filmes (em anos diferentes, obviamente) e um filme também pode ganhar vários óscar.
            
        
    
    Se você acabou o exercício de hoje, parabéns! 🥳
    
    Agora, pode prosseguir par o exercício dessa semana.
    
    [WFS15-S16: To Do List ](https://www.notion.so/WFS15-S16-To-Do-List-0cbc2ea549c045abbf663e533478cf1d)