# Enviando arquivos editados utilizando VSCode e Git
Este diretório tem como finalidade explicar o passo a passo de como enviar arquivos editados no VSCode para o repositório remoto usando o Git.

### Como fazer

1. Primeiramente, deve-se fazer a edição do arquivo desejado.

---

2. Certifique-se de que o VSCode salvou a alteração clicando em `Ctrl` + `S`, caso o salvamento automático do editor de código não esteja ativo.

---

3. Prepare os arquivos para serem incluídos no commit.

Para isso, será utilizado o **git add**, que prepara arquivos específicos ou todos os arquivos modificados no diretório de trabalho para serem incluídos no próximo commit.

###### Se quiser preparar todos:
```
git add .
```
###### Se quiser preparar apenas um arquivo específico:
```
git add <nome do arquivo>
```

---

4. Registre as mudanças feitas no código com uma menságem descritiva.

Para isso, será utilizado o **git commit**, que é usado no Git para salvar as mudanças feitas em arquivos no repositório como uma nova versão, adicionando um registro permanente ao histórico de alterações.

A opção **-m** acompanha o comando e serve para especificar a mensagem de commit diretamente na linha de comando, sendo necessário informá-la dentro de aspas ("").
###### Temos então:
```
git commit -m "mensagem descritiva"
```

---

5. Envie as mudanças locais para um repositório remoto.

Após fazer git commit para registrar suas mudanças localmente, você usa **git push** para enviar esses commits para o repositório remoto, tornando-os disponíveis para outros colaboradores do projeto.

O comando git push pode ser acompanhado de **origin** para especificar o local desejado para o envio. 

**-u origin** também pode acompanhar o comando, servindo para configurar automaticamente sua branch local e fazer o Git lembrar da branch utilizada.

###### Se quiser enviar para uma branch específica:
```
git push origin <nome da branch>
```
###### Se quiser enviar para uma branch específica e salvá-la como padrão:
```
git push -u origin <nome da branch>
```
###### Se já possui uma branch padrão salva:
```
git push
```

---

6. Confira as alterações salvas no repositório remoto.
