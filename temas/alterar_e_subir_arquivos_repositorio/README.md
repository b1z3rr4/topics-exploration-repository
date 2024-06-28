
# Como alterar e subir um arquivo para um repositório


➡️[Link](https://github.com/b1z3rr4/topics-exploration-repository/issues/12) para a Issue

Aqui está um resumo detalhado de como salvar uma alteração feita e subir para um repositório remoto

1. Clonar o repositório (caso você não tenha na sua máquina):
```
git clone [URL DO REPOSITÓRIO]

```

2. Abrir o repositório clonado com o VsCode;

3. Relizar todas as alterações necessárias nos arquivos do projeto. Durante esse processo, vale ressaltar que é uma boa prática realizar commits frequentes e pequenos para manter o histórico de alterações bem organizado;

4. Adicionar as alterações para a área de stage:
```
git add [NOME DO ARQUIVO]
ou
git add .

```
*OBS*: O comando git add [NOME DO ARQUIVO] adiciona SOMENTE o arquivo específico, enquanto que, o comando git add . adiciona TODOS os arquivos alterados ao stage.

5. Realizar o commit:
```
git commit -m "[DESCRIÇÃO DAS ALTERAÇÕES]"

```

6. Obter as alterações remotas (caso seja necessário, se não, pular para o passo 7):
```
git pull origin main

```

7. Enviar as alterações para o repositório remoto:
```
git push origin main

```

## Documentação
[Documentação](https://docs.github.com/pt/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) disponibilizada pelo próprio Github para um melhor aprofundamento

## Autor

Criado por [Vítor Emanuel](https://github.com/vitoremanuel-dev)