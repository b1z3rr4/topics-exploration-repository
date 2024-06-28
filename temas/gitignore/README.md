## Configurando o .gitignore para Ignorar Arquivos Específicos

- O arquivo .gitignore é aquele amigo no Git que diz quais arquivos devem ficar fora do radar. Isso é super útil para evitar que coisas como arquivos temporários, logs chatos e outras bagunças entrem no histórico do seu repositório.
---

## Como fazer isso?
  - Criando o `.gitignore`:
    - Na raiz do projeto (onde ficam as pastas e arquivos) crie um arquivo com o nome `.gitignore`.
  
  - O que escrever no arquivo `.gitignore`?
    - Cada linha é um padrão para dizer ao Git o que ignorar.
    - Use * para muitos caracteres ou ? para um só.
    - / é para diretórios e ! é para incluir coisas que normalmente seriam ignoradas.
  
  - Exemplos:
    - Ignorar uma pasta com muitos arquivos e muitas pastas (node_modules por exemplo):
      - Dentro do arquivo `.gitignore` colocamos o nome da pasta ou arquivo que queremos que seja ignorado:
        `node_modules/`
    - Configurações locais do VSCODE ou outra IDE que variam de pc para pc:
      `.idea/`
      `.vscode/`
      `*.iml`
---

## Usando o .gitignore
  - Automaticamente o Git vai pegar todas as pastas ou arquivos que foram colocados dentro do arquivo `.gitignore` quando estiver fazendo os comandos como o `git add` ou `git commit` por exemplo.
---

## Importante...
  - Sempre dar uma revisada no arquivo `.gitignore` para ver se está tudo ok, ou se está ignorando mais arquivos do que o necessário.
  - Ajuste o `.gitignore` para o que o seu projeto mais precisa.
  - Configurar o `.gitignore` direitinho mantém seu repositório limpo e focado no que importa e sem a bagunça de arquivos desnecessários.