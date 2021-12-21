# WFS15-S16: To Do List

## Instruções:

Nós criamos um banco de dados específico para cada um de vocês usar durante o Módulo de Backend. O host é `35.226.146.116` na porta `3306`. Os usuários, senhas e nomes do banco de dados foram enviados individualmente para vocês no slack. 

Por serem informações sensíveis n**ão compartilhe as informações de senhas nomes e banco com ninguém!** 

**Não faça o upload destas informações em repositórios do Github que sejam públicos, ou seja, não suba no GitHub que vocês tem conosco. Repetindo: não suba.**

**Configurando o Knex:**

Lembre-se de instalar as dependências:

```bash
npm install knex mysql --save-dev @types/knex
```

Crie uma variável para utilizar como conexão e configure o `dotenv`, criando o arquivo `.env` (adicione-o também no `.gitignore`)

```tsx
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});
```

Lembre-se que você pode utilizar o template fornecido se preferir : 

[knex-express-template.zip](WFS15-S16%20To%20Do%20List%20181f03d9ad1b4c889aa160e8bfb2e05e/knex-express-template.zip)

<aside>
💡 dúvidas sobre a estrutura de um projeto backend? Tem um atalho aqui para o [Estruturando-o-backend-semana-16](https://www.notion.so/Estruturando-o-backend-semana-16-780662c3f6e4408687e03136ea3d3081)

</aside>

---

## Exercício da Semana:

Olá, tudo bem? O exercício de hoje vai lidar com um tema que vocês já estão acostumados. Já pedimos para vocês fazerem só o Front, já pedimos para fazerem o Front integrado, já até pedimos um projeto usando somente Node para isso: uma To Do List. Dessa vez, vai ser um pouquinho diferente, vocês vão fazer o backend dela.

Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

### Endpoints Mínimos

- **1. Criar usuário**
    
    **Método:** POST
    **Path:** `/user`
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
    - O seu código deve gerar o id do usuário
    
- **2. Pegar usuário pelo id**
    
    **Método:** GET
    **Path:** `/user/:id`
    
    **Path Param**: é o id do usuário
    
    **Body de Resposta:**
    
    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar o usuário
    
- **3. Editar usuário**
    
    **Método:** PUT
    **Path:** `/user/edit/:id`
    
    **Path Param**: é o id do usuário
    
    **Body:**
    
    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O seu código só deve alterar o que for enviado
    - Se algum valor enviado for vazio, deve retornar um erro
    
- **4. Criar tarefa**
    
    **Método:** POST
    **Path:** `/task`
    
    **Body:**
    
    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se todos os campos não estão vazios,
    - O seu código deve gerar o id da tarefa,
    - A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco
    
- **5. Pegar tarefa pelo id**
    
    **Método:** GET
    **Path:** `/task/:id`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"status": "to_do",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um erro se não encontrar a task
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)

### Desafios

- **6. Pegar todos os usuários**
    
    **Método:** GET
    **Path:** `/user/all`
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    
- **7. Pegar tarefas criadas por um usuário**
    
    **Método:** GET
    **Path:** `/task?creatorUserId=id`
    
    **Query String:** indica o id do usuário que criou através da chave `creatorUserId`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"status": "to_do",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se foi enviado o `creatorUserId` e devolver um erro específico caso não tenha sido
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **8. Pesquisar usuário**
    
    **Método:** GET
    **Path:** `/user?query=astro`
    
    **Query String:** indica o termo de busca através da chave `query`
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev",
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se foi enviado a `query` e devolver um erro específico caso não tenha sido
    - Você deve buscar no banco por usuários cujo apelido ou email contenham a `query` fornecida
    - O endpoint deve retornar um array vazio se não encontrar os resultados
    
- **9. Atribuir um usuário responsável a uma tarefa**
    
    **Método:** POST
    **Path:** `/task/responsible`
    
    **Body:**
    
    ```json
    {
    	"task_id": "Astro Dev",
    	"responsible_user_id": "astrodev"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    
- **10. Pegar usuários responsáveis por uma tarefa**
    
    **Método:** GET
    **Path:** `/task/:id/responsible`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    
- **11. Pegar tarefa pelo id**
    
    **Método:** GET
    **Path:** `/task/:id`
    
    **Path Param**: é o id da tarefa
    
    **Body de Resposta:**
    
    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev",
    	"responsibleUsers": [
    		{
    			"id": "001",
    			"nickname": "astrodev"
    		}
    	]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador e de todos os usuários responsáveis
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **12. Atualizar o status da tarefa pelo id**
    
    **Method:** PUT
    
    **Path:** `/task/status/:id/`
    
    **Body:**
    
    ```json
    {
    	"status": "doing"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    
- **13. Pegar todas as tarefas por status**
    
    **Método:** GET
    **Path:** `/task?status=valor_do_status`
    
    **Query String:** indica o status através da chave `status`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **14. Pegar todas as tarefas atrasadas**
    
    **Método:** GET
    **Path:** `/task/delayed`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev"
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **15. Retirar um usuário responsável de uma tarefa**
    
    **Método:** DELETE
    **Path:** `/task/:taskId/responsible/:responsibleUserId`
    
    **Path Param**: o primeiro indica o id da task (`taskId`)e o segundo o id do usuário responsável (`responsibleUserId`)
    
    **Observações**:
    
    - O seu código deve validar se os ids da task e do usuário foiram enviados
    - O endpoint deve retornar um erro se não encontrar a task, ou se não encontrar o usuário ou se o usuário não for responsável por essa tarefa, antes de deletar
    
- **16. Atribuir mais de um responsável a uma tarefa**
    
    **Método:** POST
    **Path:** `/task/responsible`
    
    **Body:**
    
    ```json
    {
    	"task_id": "001",
    	"responsible_user_ids": ["001"]
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    - O seu código deve verificar se a task e todos os usuários existem
    - Perceba que ele possui o mesmo path do endpoint do exercício 9. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de usuário.
    
- **17. Procurar tarefa por termos**
    
    **Método:** GET
    **Path:** `/task?query=tarefa`
    
    **Query String:** indica o termo de busca através da chave `query`
    
    **Body de Resposta:**
    
    ```json
    {
    	"tasks": [{
    		"taskId": "001",
    		"title": "Criar banco dos alunos",
    		"description": "Devemos criar o banco dos alunos para o módulo do backend",
    		"limitDate": "04/05/2020",
    		"creatorUserId": "001",
    		"creatorUserNickname": "astrodev",
    	}]
    }
    ```
    
    **Observações**:
    
    - O seu código deve validar se o status da task foi enviado
    - O endpoint deve retornar um erro se não encontrar a task
    - O endpoint deve retornar um array vazio se não encontrar nenhum resultado
    - O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)
    
- **18. Atualizar o status de várias tarefas**
    
    **Método:** PUT
    **Path:** `/task/status/edit`
    
    **Body:**
    
    ```json
    {
    	"task_ids": ["001"],
    	"status": "done"
    }
    ```
    
    **Observações**:
    
    - O seu código deve verificar se todos os parâmetros foram enviados e não estão vazios
    - O seu código deve verificar se todas as tasks existem
    - Perceba que ele possui o mesmo path do endpoint do exercício 12. A ideia é que você utilize o mesmo endpoint, altere-o para que funcione com um array de ids de task, ao invés dos parâmetros de path.
    
- **19. Deletar tarefa**
    
    **Método:** DELETE
    **Path:** `/task/:id`
    
    **Path Param**: o parâmetro indica o id da task (`taskId`)
    
    **Observações**:
    
    - O seu código deve validar se o id da task foi enviado
    - Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas
    
- **20. Deletar usuário**
    
    **Método:** DELETE
    **Path:** `/user/:id`
    
    **Path Param**: o parâmetro indica o id do usuário (`id`)
    
    **Observações**:
    
    - O seu código deve validar se o id do usuário foi enviado
    - Ao apagar a task, todas as relações de usuários responsáveis relacionadas a essa task devem ser apagadas
    - Além disso, todas as tasks criadas por esse usuário devem ser deletas e todas as relações de responsáveis atraeladas a essas tasks

### Dicas de Modelagem

- Clique para ver
    
    Vamos separar essas dicas em três seções:
    
    - Tabela de usuários
        
        Essa é bem simples já que deverá guardar 4 imformações: id, name, nickname e email.
        
        ```sql
        CREATE TABLE TodoListUser (
        		id VARCHAR(255) PRIMARY KEY, 
            name VARCHAR(255) NULL, 
            nickname VARCHAR(255) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL
        );
        ```
        
    - Relação: Usuário Criador e Tarefa
        
        Sempre que formos pensar em uma relação, devemos, primeiramente, classificá-la entre: `1:1`, `1:N` e `N:M`. Vamos fazer isso com a relação entre usuário criador e tarefa. 
        
        Um usuário, no nosso sistema, pode criar quantas tarefas ele quiser. Só que uma tarefa tem apenas um usuário criador. Isso caracteriza uma relação `1:N`. "Cada `1` usuário está relacionado a `N` tarefas que ele criou". 
        
        Esse tipo de relação pode ser representada de uma forma muito simples: criando uma propriedade `user_id` na tabela de Tarefas (`N`) que é a chave estrangeira que a relacione com um único usuário (`1`) .
        
        ```sql
        CREATE TABLE TodoListTask (
        		id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255) NOT NULL, 
            description TEXT NOT NULL, 
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id varchar(255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
        );
        ```
        
        Usamos o operador `DEFAULT` para sempre criar uma tarefa com o status `to_do`, já que uma tarefa sempre começa como "a fazer".
        
         
        
    - Relação: Usuário Responsável e Tarefa
        
        Vamos fazer a mesma análise aqui: Um usuário, no nosso sistema, pode ser responsável por quantas tarefas ele quiser. Além disso, uma tarefa pode ter mais de um usuário responsável. Isso caracteriza uma relação `N:M`. "Cada  usuário está relacionado a `N` tarefas que ele ele é responsável; e cada tarefa pode possuir `M` usuários responsáveis." 
        
        Esse tipo de relação pode ser representada criando uma tabela intermediária que irá guardar cada um dos pares: usuário + tarefa. Chamaremos essa tabela de: `TodoListResponsibleUserTaskRelation`, que terá duas colunas: uma para o id da tarefa (`task_id`) e outra para o usuário (`responsible_user_id`) 
        
        ```sql
        CREATE TABLE TodoListResponsibleUserTaskRelation (
        		task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
            FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
        );
        ```
        

### Dicas de Express

- Clique para ver
    
    Lembre-se de ter importado o `express` e também `Request` e `Response`
    
    ```tsx
    import express, {Request, Response} from "express";
    ```
    
    - Como criar um endpoint `get`:
    
    ```tsx
    app.get("/caminhoDoEndpoint", async (req: Request, res: Response)=>{
       try{ //inicio de um sonho
          //corpo da função. Como é um get, normalmente buscaremos alguma informação.
    
          //fim do corpo da função
          //deu tudo certo
          res.status(200).send({chaveDoRetorno: valorDaBusca});
       }catch(error){
          //deu tudo errado
          res.status(400).send({chaveDoErro: valorDoErro});
       }
    });
    ```
    
    - Como criar um endpoint `post`:
    
    ```tsx
    app.post("/caminhoDoEndpoint", async (req: Request, res: Response)=>{
       try{ //inicio de um sonho
          //corpo da função. Como é um post, normalmente buscaremos enviaremos uma mensagem de erro ou sucesso.
    
          //fim do corpo da função
          //deu tudo certo
          res.status(200).send({chaveDoRetorno: mensagemDeSucesso});
       }catch(error){
          //deu tudo errado
          res.status(400).send({chaveDoErro: mensagemDeErro});
       }
    });
    ```
    

### Dicas gerais

- Clique para ver
    
    Lembre-se que consultas feitas com o `knex().raw` tem seu resultado dentro de um array, enquanto com o **queryBuilder**, o resultado já vem fora deste array.
    
    Exemplo com **queryBuilder**
    
    ```tsx
    async function mySelect(valor: string): Promise<any>{
    
    	const result = await knex()
            .select("*")
            .from("NOME_DA_TABELA")
            .where({coluna: valor});
    
    	return result;
    }
    ```
    
    Exemplo com **raw**
    
    ```tsx
    async function mySelect(valor: string): Promise<any>{
    
    	const result = await knex().raw(`
    		SELECT * FROM NOME_DA_TABELA
    	  WHERE COLUNA = "${valor}"
    	`);
       
    	return result[0];
    }
    ```
    

**Começar o projeto**

```powershell
$ npm init -y
$ tsc --init
$ touch .env .gitignore 
$ mkdir src build
$ cd src
$ touch index.ts
$ mkdir endpoints data
```

tsconfig.json

```json
{
   "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "sourceMap": true,
      "outDir": "./build",
      "rootDir": "./src",
      "removeComments": true,
      "strict": true,
      "noImplicitAny": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true
   }
}
```

I**nstalar dependências**

express: pra pode conversar pelo protocolo HTTP com o front

knex: pra poder conversar com o banco pela porta 3306

mysql: nosso client específico

dotenv: para esconder a senha do banco (.env)

```json
$ npm i express knex mysql dotenv
```

I**nstalar dependências de desenvolvimento**

```json
$ npm i @types/express @types/node typescript ts-node-dev -D
```

editar o arquivo .gitignore

```json
node_modules
build
.env
```

editar o arquivo package.json

```json
"scripts": {
      "start": "tsc && node build/index.js", 
    	"dev": "ts-node-dev src/index.ts",    
    	"test": "echo \"Error: no test specified\" && exit 1"
  },
```

“editar o arquivo .env

```json
DB_HOST = 35.226.146.116
DB_USER = argleydson-leao
DB_PASSWORD = FRF$dGROEQ!7@fPbv4nc
DB_SCHEMA = maryam-argleydson-leao
```