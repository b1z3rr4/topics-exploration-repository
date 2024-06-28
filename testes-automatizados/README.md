# Testes Automatizados

Acredito que seja mais indicado criar os testes desde o início, pois você consegue ter a manutenção do código mais fácil e garantir que tudo funcione como esperado. Além disso, os testes vão ajudar a identificar os erros logo no começo, o que acaba economizando tempo e esforço mais tarde.

Se deixarmos para fazer os testes somente quando o projeto estiver finalizado, o risco de encontrar muitos problemas de uma só vez pode ser grande. fazendo a correção dos erros muito mais difícil e demorada, já que precisaremos revisar grandes partes do código.

## Exemplo de Teste com Jest

Fiz um exemplo simples utilizando a ferramenta Jest, para testar uma função simples que processa dados de um formulário.

### Passos para Configurar e Executar Testes com Jest

#### 1. Abrindo a pasta testes-automatizados no terminal

Abra o seu terminal e execute o comando abaixo

```bash
cd \testes-automatizados
```

#### 2. Instalação do Jest

Ainda no seu terminal, execute o comando:

```bash
npm install --save-dev jest
```

#### 3. Abrindo a pasta /examples no terminal

Novamente no terminal, execute o comando abaixo:

```bash
cd /examples
```

#### 4. Execute o teste com o comando

Após isso é só executar o comando abaixo para que o teste seja feito

```bash
npx jest
```

#### 5. O retorno do teste:
No seu terminal após iniciar o teste, quando o mesmo for finalizado o que irá aparecer no seu terminal é essa mensagem de sucesso:

```bash
 PASS  examples\função.test.js
  √ Deve processar corretamente os dados do formulário (6 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.578 s, estimated 2 s
Ran all test suites.
```
