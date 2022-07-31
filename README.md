# Aplicação de teste automatizado com nodejs-express

Nesta aplicação tem o foco de apresentar o funcioamento de um teste automatizado, com isso criei o backend que salva um produdo e sua quantidade em uma base de dados mongodb, utilizando micros serviços, ou seja com requisições com seus respectivos endpoints.


## Modulos instalados para realizar os teste automatizados

**Instalar o gerenciador do teste:**
  
      npm install -g mocha
    
**Instalar as ferramentar que vamos usar:**

    npm install --save-dev chai chai-http

Mocha = [https://mochajs.org/]
Chai = [http://chaijs.com/]

Para realizar o teste, inicia o termina na página do projeto e executa `mocha`