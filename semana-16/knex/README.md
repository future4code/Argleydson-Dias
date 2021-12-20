# Aula 47 - Knex.js

## Referências:

`EN`

[Knex.js - A SQL Query Builder for Javascript](http://knexjs.org/)

[ORM vs Query Builders vs Raw SQL](https://dev.to/imthedeveloper/orm-vs-query-builders-vs-raw-sql-2m43)

[Multi-table queries with JOINs](https://sqlbolt.com/lesson/select_queries_with_joins)

[Estruturando o backend v2](https://www.notion.so/Estruturando-o-backend-semana-16-780662c3f6e4408687e03136ea3d3081)

## Materiais de Aula:

[](https://vimeo.com/groups/741714/videos/649517200)

- Slides
    
    [Aula 47 - Knex.js.pdf](Aula%2047%20-%20Knex%20js%2038db36f30b85404d8fd2f653781f0ed1/Aula_47_-_Knex.js.pdf)
    
- Coding Together
    
    [template-knex.zip](Aula%2047%20-%20Knex%20js%2038db36f30b85404d8fd2f653781f0ed1/template-knex.zip)
    
    [exercicios-da-aula-knex.zip](Aula%2047%20-%20Knex%20js%2038db36f30b85404d8fd2f653781f0ed1/exercicios-da-aula-knex.zip)
    

## Exercícios para tarde:

- **LEIA aqui antes de começar! LEIA! ESTÁ DIFERENTE**
    - **Informações do banco**
        
        Nós criamos um banco de dados específico para cada um de vocês usar durante o Módulo de Backend. O host é `35.226.146.116`,  na porta `3306`. Os usuários, senhas e nomes do banco de dados foram enviados individualmente para vocês no slack. 
        
        **Não compartilhe essas informações com ninguém!** 
        
        **Não suba em repositórios do GitHub que sejam públicos, ou seja, não suba no GitHub que vocês tem conosco. Repetindo: não suba.**
        
    - **Configurando o Knex**
        
        Lembre-se de instalar as dependências:
        
        ```bash
        npm install knex mysql dotenv
        ```
        
        Crie uma variável para utilizar como conexão e configure o `dotenv`, criando o arquivo `.env` (adicione-o também no `.gitignore`)
        
        ```tsx
        import knex from "knex";
        import dotenv from "dotenv";
        
        dotenv.config();
        
        export const connection = knex({
          client: "mysql",
          connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
        		multipleStatements: true
          },
        });
        ```
        
    - **Configurando o Express**
        
        Lembre-se de instalar as dependências:
        
        ```bash
        npm install express @types/express cors @types/cors
        ```
        
        O arquivo base tem que conter:
        
        - A criação do app `express`;
        - Colocar o `middleware` para converter o `body`;
        - Criar o servidor
        
        ```tsx
        import express from "express";
        import cors from "cors";
        import { AddressInfo } from "net";
        
        const app = express();
        
        app.use(express.json());
        app.use(cors());
        
        const server = app.listen(process.env.PORT || 3003, () => {
          if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Server is running in http://localhost:${address.port}`);
          } else {
            console.error(`Failure upon starting server.`);
          }
        });
        ```
        
    - **Template**
        
        Você pode usar esse template se preferir:
        
        [aula-knex-express-template.zip](Aula%2047%20-%20Knex%20js%2038db36f30b85404d8fd2f653781f0ed1/aula-knex-express-template.zip)
        
        Ou ainda, dar uma olhada no **Estruturando o backend, versão semana 16**
        
        [Estruturando o backend - semana 16](https://www.notion.so/Estruturando-o-backend-semana-16-780662c3f6e4408687e03136ea3d3081)
        

Durante essa semana iremos construir, nos exercícios da tarde, um pequeno sistema de um cinema. Ele deverá ter informações sobre atores, filmes, ingressos, e mais. Faça os exercícios abaixo em ordem. 

Você deverá entregar hoje um arquivo Markdown, nas pastas dessa semana (como vocês já estão acostumados a fazer). A ideia de usar Markdown é só para vocês terem contato com essa linguagem. Não se preocupem em fazer nada muito bonito ou rebuscado. 

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
    
    Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer *queries* no banco. 
    
    Abaixo, estamos pegando o Actor com o id `001`
    
    ```tsx
    import { Request, Response } from "express"
    
    // Esse arquivo seria o index.ts
    
    const getActorById = async (id: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
      `)
    
    	return result[0][0]
    }
    
    // Assim a chamada funciona fora dos endpoints com .then()/.catch
    getActorById("001")
    	.then(result => {
    		console.log(result)
    	})
    	.catch(err => {
    		console.log(err)
    	});
    
    // Assim a chamada funciona fora dos endpoints com await
    (async () => {
      console.log(await getActorById("001") )
    })()
    
    // Ou então podemos chamá-la dentro de um endpoint
    app.get("/users/:id", async (req: Request, res: Response) => {
      try {
        const id = req.params.id
    
        console.log(await getActorById(id))
    
        res.end()
      } catch (error) {
    		console.log(error.message)
        res.status(500).send("Unexpected error")
      }
    }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
    ```
    
    Perceba algumas coisas importantes nesse código: o uso da template string para acessar a variável que a função recebe; o jeito com que o valor é retornado: `result[0][0]`. Isso acontece porque uma *query* feita com o `raw` devolve exatamente o que o banco MySQL devolveu.
    
    Utilize os *raws* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.
    
    *a. Explique como é a resposta que temos quando usamos o `raw`.* 
    ``` 
    O método RAW utiliza uma sintaxe bastante similar ao Workbench. Utiliza-se template string para passar os dados da requisição.
    ```
    
    *b. Faça uma função que busque um ator pelo nome;*
    ```typescript
    const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor 
    WHERE name = "${name}"
    `)
    return result[0]
    }; 
    
    app.get("/actor/search", async (req: Request, res: Response) => {
      try{
        const name = req.query.name as string;
        res.status(200).send( await searchActor(name));
      }catch(error:any){
        console.log(error.message);
        res.status(500).send (error.sqlMessage || error.message)
      }
    }
    );
    ```
    
    *c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

    ```typescript
    const countActors = async (gender: string): Promise<any> => {
      const result = await connection.raw (`
      SELECT COUNT (*) as count FROM Actor
      WHERE gender = ${gender}
      `);
      const count = result [0][0].count;
      return count;
    } 
    
    app.get("/actor/search/gender", async (req: Request, res: Response) => {
      try{
        const gender = req.query.gender as string;
        res.status(200).send( await countActors(gender));
      }catch(error:any){
        console.log(error.message);
        res.status(500).send (error.sqlMessage || error.message)
      }
   }
  );
  ```
    
    - Dicas
        
        b.
        
        ```tsx
        const searchActor = async (name: string): Promise<any> => {
          const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}"
          `)
          return result
        }
        ```
        
        c.
        
        ```tsx
        const countActors = async (gender: string): Promise<any> => {
          const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
          `);
        	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
        	// o valor no resultado!
          const count = result[0][0].count;
          return count;
        };
        ```
        
    
- Exercício 2
    
    Agora vamos treinar um pouco os *query builders*. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:
    
    ```tsx
    const createActor = async (
      id: string,
      name: string,
      salary: number,
      dateOfBirth: Date,
      gender: string
    ): Promise<void> => {
      await connection
        .insert({
          id: id,
          name: name,
          salary: salary,
          birth_date: dateOfBirth,
          gender: gender,
        })
        .into("Actor");
    };
    ```
    
    Podemos mandar um objeto javascript diretamente que o knex vai criar a query para nós. Perceba só que temos sempre que colocar como **chaves** do objeto os nomes das **colunas** que estão nas tabelas (como fizemos com `birth_date`).
    
    Existem várias funções que podemos encadear: `update()`, `delete()`, `set()`, `select()`, `from()`, `avg()`, `count()` e muito outras. Pesquise na internet se tiver dúvida em qual usar!
    
    Utilize os *query builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.
    
    *a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*
    
    *b. Uma função que receba um id e delete um ator da tabela*
    
    *c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*
    
    - Dicas
        
        a.
        
        ```tsx
        const updateActor = async (id: string, salary: number): Promise<any> => {
          await connection("Actor")
            .update({
              salary: salary,
            })
            .where("id", id);
        };
        ```
        
        b.
        
        ```tsx
        const deleteActor = async (id: string): Promise<void> => {
          await connection("Actor")
            .delete()
            .where("id", id);
        }; 
        ```
        
        c.
        
        ```tsx
        const avgSalary = async (gender: string): Promise<any> => {
          const result = await connection("Actor")
            .avg("salary as average")
            .where({ gender });
        
          return result[0].average;
        };
        ```
        
    
- Exercício 3
    
    Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo `id`.  Queremos criar um método GET que receba como *path param* o *id* do ator cujas informações queremos pegar. Para isso, devemos:
    
    - Usar a função `get` do express
    - Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`
    
    ```tsx
    app.get("/actor/:id", async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const actor = await getActorById(id);
    
        res.status(200).send(actor)
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```
    
    a. Crie um endpoint com as especificações acima
    
    b. Crie um endpoint agora com as seguintes especificações:
    
    - Deve ser um GET (`/actor`)
    - Receber o gênero como um *query param* (`/actor?gender=`)
    - Devolver a quantidade de atores/atrizes desse gênero
    
    - Dicas
        
        ```tsx
        app.get("/actor", async (req: Request, res: Response) => {
          try {
            const count = await countActors(req.query.gender as string);
            res.status(200).send({
              quantity: count,
            });
          } catch (err) {
            res.status(400).send({
              message: err.message,
            });
          }
        });
        ```
        
    
- Exercício 4
    
    Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:
    
    - Definir o método como `POST`
    - Criar um path: `/actor`
    - Receber os parâmetros pelo body
    
    ```tsx
    app.post("/actor", async (req: Request, res: Response) => {
      try {
        await createActor(
          req.body.id,
          req.body.name,
          req.body.salary,
          new Date(req.body.dateOfBirth),
          req.body.salary
        );
    
        res.status(200).send();
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    });
    ```
    
    Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe.
    
    Crie um endpoint para cada uma das especificações abaixo:
    
    - a.
        - Deve ser um PUT (`/actor`)
        - Receber o salário e o id pelo body
        - Simplesmente atualizar o salário do ator com id em questão
    - b.
        - Deve ser um DELETE (`/actor/:id`)
        - Receber id do ator como *path param*
        - Simplesmente deletar o ator da tabela
    
    - Dicas
        
        a. 
        
        ```tsx
        app.put("/actor", async (req: Request, res: Response) => {
          try {
            await updateSalary(req.body.id, req.body.salary);
            res.status(200).send({
              message: "Success",
            });
          } catch (err) {
            res.status(400).send({
              message: err.message,
            });
          }
        });
        ```
        
        b. 
        
        ```tsx
        app.delete("/actor/:id", async (req: Request, res: Response) => {
          try {
            await deleteActor(req.params.id);
          } catch (err) {
            res.status(400).send({
              message: err.message,
            });
          }
        });
        ```
        
    

- **Desafios**
    - Exercício 5
        
        Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!
        
        Especificações do Endpoint:
        
        - Deve ser um POST (`/movie`)
        - Receber todas as informações pelo body
        - Criar o filme na tabela
        
        - Dicas
            
            ```tsx
            const createMovie = async (
              id: string,
              title: string,
              synopsis: string,
              releaseDate: Date,
              playingLimitDate: Date
            ) => {
              await connection
                .insert({
                  id: id,
                  title: title,
                  synopsis: synopsis,
                  releas_date: releaseDate,
                  playing_limit_date: playingLimitDate,
                })
                .into("Movie");
            };
            
            app.post("/movie", async (req: Request, res: Response) => {
              try {
                await createMovie(
                  req.body.id,
                  req.body.title,
                  req.body.synopsis,
                  req.body.releaseDate,
                  req.body.playingLimitDate
                );
            
                res.status(200).send({
                  message: "Success"
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```
            
    - Exercício 6
        
        Especificações do Endpoint:
        
        - Deve ser um GET (`/movie/all`)
        - Não recebe nada
        - Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens
        
        - Dicas
            
            ```tsx
            const getAllMovies = async (): Promise<any> => {
              const result = await connection.raw(`
                SELECT * FROM Movie LIMIT 15
              `);
            
              return result[0];
            };
            
            app.post("/movie/:id", async (req: Request, res: Response) => {
              try {
                const movies = await getAllMovies();
            
                res.status(200).send({
                  movies: movies,
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```
            
        
    - Exercício 7
        
        Especificações do Endpoint:
        
        - Deve ser um GET (`/movie/search`)
        - Deve receber o termo de busca como uma query string (`/movie/search?query=`)
        - Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento
        
        - Dicas
            
            ```tsx
            app.get("/movie/search", async (req: Request, res: Response) => {
              try {
                const movies = await searchMovie(req.query.query as string);
            
                res.status(200).send({
                  movies: movies,
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```
            
    
    Se você acabou o exercício de hoje, e também os desafios, nossos parabéns! 🥳
    
    Agora, pode prosseguir para o exercício dessa semana.