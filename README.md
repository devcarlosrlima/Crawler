# Teste de Integração em API utilizando TS

## Configuração do Ambiente de Testes

### Instalação das Dependências:
Abra o terminal e navegue até o diretório do seu projeto. Em seguida, execute o seguinte comando para instalar todas as dependências necessárias:

```
npm install
```
##### Algumas dependencias que usei ( segue meu part do meu package.json):
```
 "dependencies": {
    "@types/express": "^4.17.21",
    "@types/knex": "^0.16.1",
    "express": "^4.18.2",
    "knex": "^2.5.1",
    "mysql2": "^3.5.2",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "@types/jest": "^29.5.12",
    "@types/supertest": "^6.0.2",
    "jest": "^29.7.0",
    "supertest": "^6.3.4",
    "ts-jest": "^29.1.2",
    "ts-node-dev": "^2.0.0"
  }
```

### Configuração do Banco de Dados (Opcional):
Se você estiver usando um banco de dados, certifique-se de que esteja configurado corretamente para os testes. Você pode usar um banco de dados de teste separado para evitar impactar os dados de produção.

## Como Executar os Testes

### Testes Unitários:
Para executar os testes unitários, use:
```
npm run test:unit
```
### Testes de Integração:
Para os testes de integração, execute:
```
npm run test:int
```
### Execução de Todos os Testes:
Se deseja executar todos os testes (unidade e integração), use:
```
npm test
```
#### Notas Adicionais
- Certifique-se de que seus arquivos de teste estão no local correto e possuem os nomes corretos (por exemplo, *.test.ts para testes unitários).
- Verifique se as configurações do Jest estão corretas no arquivo jest.config.js ou onde você as tenha configurado.
- Verifique se todas as dependências estão instaladas corretamente e atualizadas.
- Seguindo estas instruções, você deverá ser capaz de configurar seu ambiente de testes e executar os testes sem problemas. Se encontrar dificuldades, verifique as mensagens de erro e revise suas configurações e código de teste conforme necessário.
