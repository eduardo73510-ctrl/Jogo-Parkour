Você está assumindo a criação ou atualização da skill de GitHub do meu projeto de jogo Construct 3.

Pasta base do projeto:

C:\DOCUMENTOS\Jogo

Pasta das skills:

C:\DOCUMENTOS\Jogo\.agents\skill

Objetivo:
Criar ou atualizar uma skill chamada:

github-sync

Caminho esperado:

C:\DOCUMENTOS\Jogo\.agents\skill\github-sync\SKILL.md

Comando principal da skill:

--git

A skill também deve aceitar:

git
github
github-sync
--github
atualizar github
salvar no github
subir para github
sincronizar github
mandar projeto para o github
commit e push
salvar projeto inteiro

IMPORTANTE:
- Não altere o jogo agora.
- Não edite arquivos .c3p agora.
- Não crie imagens.
- Não use API de imagem.
- Não faça commit agora.
- Não faça push agora.
- Não apague arquivos.
- Não apague backups.
- Não remova .env local.
- Apenas crie ou atualize a skill github-sync.

CONTEXTO:
Esta skill substitui as skills antigas:

atualizar-github
atualizar-arquivo

Se elas existirem, não apague automaticamente.
Apenas relate que são antigas/duplicadas e recomende arquivar depois.

A nova skill deve ser clara:

--git = salvar o projeto inteiro no GitHub com segurança

DIFERENÇA ENTRE SKILLS:

--bkp = criar backup/versionamento do .c3p
--m = manutenção/análise geral
--r = resolver problemas encontrados após manutenção
--correcao = corrigir bug específico
--pixel = criar/planejar assets pixel art
--git = sincronizar o projeto inteiro com GitHub

A skill --git NÃO é:
- skill de backup versionado;
- skill de correção;
- skill de manutenção;
- skill de pixel art;
- skill de criação de fase;
- skill para mexer no Construct 3.

Ela serve apenas para versionar e enviar o projeto para o GitHub.

OBJETIVO DO --git:
Quando o usuário digitar:

--git

a skill deve salvar o projeto inteiro no GitHub com segurança.

Salvar o projeto inteiro significa:
- preservar todas as pastas importantes;
- preservar todos os nomes de pastas;
- preservar todos os nomes de arquivos;
- adicionar arquivos novos seguros;
- adicionar alterações seguras;
- remover do Git apenas arquivos que foram removidos localmente, se isso for realmente intencional;
- criar .gitkeep em pastas vazias importantes para elas aparecerem no GitHub;
- atualizar .gitignore para proteger arquivos sensíveis;
- fazer commit claro;
- fazer push.

Mas salvar tudo NÃO significa subir arquivos perigosos.

Nunca subir:
- .env
- *.env
- .env.local
- .env.*
- arquivos com API key
- arquivos com tokens
- arquivos com senha
- secrets
- credentials
- node_modules
- cache
- logs inúteis
- arquivos temporários
- builds descartáveis
- lixo do sistema

COMANDO PRINCIPAL:

Quando o usuário digitar:

--git

a skill deve executar o fluxo de sincronização segura com GitHub.

Não mostrar menu nesse caso.
--git significa: salvar projeto completo no GitHub, com segurança.

COMANDOS OPCIONAIS:

--git status
Apenas analisar o estado do Git e listar o que seria enviado.
Não fazer commit.
Não fazer push.

--git dry-run
Fazer simulação completa.
Mostrar arquivos que seriam adicionados, ignorados e protegidos.
Não fazer commit.
Não fazer push.

--git no-push
Fazer commit, mas não fazer push.

--git msg "mensagem"
Usar mensagem personalizada no commit.

Se o usuário digitar apenas --git, usar mensagem automática clara.

PASTA BASE OBRIGATÓRIA:

Sempre trabalhar nesta pasta:

C:\DOCUMENTOS\Jogo

Antes de qualquer comando, entrar na pasta:

cd /d C:\DOCUMENTOS\Jogo

REGRAS DE SEGURANÇA ABSOLUTAS:

Nunca usar:

git reset --hard
git push --force
git clean -fd

Nunca apagar arquivos.

Nunca apagar backups.

Nunca remover .env local.

Nunca mostrar conteúdo de .env.

Nunca mostrar API key.

Nunca mostrar tokens.

Nunca commitar arquivos sensíveis.

Nunca usar git add . sem antes garantir .gitignore e revisar o status.

Nunca fazer push se houver arquivo sensível staged.

Nunca dizer que subiu para o GitHub se o push falhou.

Nunca dizer que está tudo salvo sem verificar git status antes e depois.

ARQUIVOS SENSÍVEIS:

Nunca commitar:

.env
*.env
.env.local
.env.*
secrets.json
token.json
tokens.json
credentials.json
credentials.*
*.pem
*.key
*.p12
*.pfx
id_rsa
id_ed25519

Se encontrar qualquer arquivo sensível, dizer apenas:

Arquivo sensível encontrado. Conteúdo não exibido.

Se arquivo sensível estiver untracked, garantir que está protegido no .gitignore.

Se arquivo sensível já estiver tracked pelo Git, NÃO remover automaticamente.
Apenas avisar:

Atenção: encontrei arquivo sensível rastreado pelo Git.
Não vou mostrar o conteúdo.
Recomendo remover do rastreamento com autorização usando:
git rm --cached NOME_DO_ARQUIVO

Só executar git rm --cached se o usuário autorizar claramente.

REGRA SOBRE .ENV:

O arquivo .env pode existir localmente.
Ele deve continuar no computador.
Ele não deve ir para o GitHub.

Se .env aparecer no git status como untracked, garantir que .gitignore ignora.

Se .env aparecer como staged, remover do stage:

git restore --staged .env

Se o comando acima não funcionar no ambiente, usar alternativa segura:

git reset .env

Não apagar o .env.
Não alterar o conteúdo do .env.
Não mostrar o conteúdo do .env.

REGRA SOBRE .GITIGNORE:

Antes de fazer git add, verificar se existe .gitignore.

Se não existir, criar.

Se existir, atualizar sem apagar regras existentes.

O .gitignore deve conter pelo menos:

.env
*.env
.env.local
.env.*
secrets.json
token.json
tokens.json
credentials.json
credentials.*
*.pem
*.key
*.p12
*.pfx
id_rsa
id_ed25519

node_modules/
.cache/
tmp/
temp/
logs/
*.log
.DS_Store
Thumbs.db

Não remover regras antigas do .gitignore sem motivo.

Se o projeto precisar versionar alguma pasta normalmente ignorada, avisar antes.

REGRA SOBRE PASTAS VAZIAS:

O GitHub não mostra pastas vazias.

Para salvar a estrutura completa do projeto, a skill deve verificar pastas importantes.

Se uma pasta importante existir e estiver vazia, criar um arquivo:

.gitkeep

dentro dela.

O arquivo .gitkeep serve apenas para manter a pasta no GitHub.

Pastas importantes para preservar, se existirem:

C:\DOCUMENTOS\Jogo\.agents
C:\DOCUMENTOS\Jogo\.agents\skill
C:\DOCUMENTOS\Jogo\Cenario
C:\DOCUMENTOS\Jogo\Eventos
C:\DOCUMENTOS\Jogo\output
C:\DOCUMENTOS\Jogo\test-results
C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Se outras pastas importantes existirem no projeto, também preservar.

Não criar .gitkeep dentro de pastas que devem ser ignoradas, como:

node_modules
.cache
tmp
temp
logs

REGRA SOBRE SALVAR O PROJETO INTEIRO:

Quando o usuário diz salvar tudo, a skill deve entender:

Salvar todos os arquivos seguros do projeto.

Incluir, se existirem:

.agents/
.agents/skill/
Cenario/
Eventos/
output/
test-results/
Versões-Do-Jogo/
arquivos .c3p principais
backups .c3p dentro de Versões-Do-Jogo
assets
sprites
cenários
documentação
README
SKILL.md
arquivos .json seguros
arquivos .md
arquivos de configuração seguros
.gitignore
.gitkeep

Preservar nomes com acento, como:

Versões-Do-Jogo

Usar aspas nos comandos quando caminho tiver acento ou espaço.

Exemplo:

git add "Versões-Do-Jogo"

REGRA SOBRE ARQUIVOS .C3P:

Arquivos .c3p são importantes.

Se existir .c3p alterado fora da pasta de versões, antes de commitar chamar:

--bkp 1

Se a alteração for grande ou se houver vários .c3p alterados, chamar:

--bkp 1,2

A skill --git não deve editar .c3p.
Ela apenas versiona.

Se --bkp falhar, parar e avisar.

Não commitar .c3p alterado sem backup local antes, a menos que o usuário autorize explicitamente.

REGRA SOBRE BACKUPS:

A pasta oficial de backups é:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Se essa pasta existir, ela deve ser incluída no GitHub, exceto se o usuário pedir o contrário.

Se estiver vazia, criar:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo\.gitkeep

Não usar OneDrive.

Não usar Google Drive.

Google Drive manual pertence à skill --bkp, não a esta.

REGRA SOBRE GIT ADD:

A skill deve adicionar arquivos com segurança.

Fluxo recomendado:

1. Rodar git status.
2. Garantir .gitignore.
3. Criar .gitkeep em pastas vazias importantes.
4. Rodar git status novamente.
5. Adicionar arquivos seguros.

Pode usar:

git add -A

somente depois de garantir que .gitignore está correto e depois de verificar que arquivos sensíveis não serão staged.

Antes do commit, rodar:

git status

Se aparecer arquivo sensível staged, remover do stage.

Exemplos:

git restore --staged .env
git restore --staged ".env.local"

ou alternativa:

git reset .env
git reset ".env.local"

Depois verificar novamente:

git status

REGRA SOBRE REMOÇÕES:

git add -A também registra remoções de arquivos.

Antes de commitar remoções, analisar se são intencionais.

Se houver muitos arquivos deletados, parar e perguntar ao usuário antes do commit.

Não commitar remoções grandes sem confirmação.

Se arquivos removidos forem temporários/cache, tudo bem.
Se arquivos removidos forem assets, .c3p, documentação, imagens ou skills, pedir confirmação antes.

REGRA SOBRE COMMIT:

Se não houver alterações após git status, responder:

Nenhuma alteração nova para enviar ao GitHub.

Não criar commit vazio.

Se houver alterações seguras, criar commit.

Mensagem automática sugerida:

chore: sincronizar projeto completo do jogo

Se houver backup .c3p criado:

backup: salvar versões e sincronizar projeto

Se houver alteração de skills:

chore: atualizar skills do projeto

Se o usuário usar:

--git msg "mensagem"

usar a mensagem fornecida.

A mensagem deve ser clara, curta e em português ou inglês simples.

REGRA SOBRE PUSH:

Depois do commit, fazer:

git push

Se o push falhar, relatar o erro.

Se precisar configurar upstream, usar com cuidado:

git push -u origin NOME_DA_BRANCH

Somente se houver remote origin configurado.

Antes disso, verificar:

git branch --show-current
git remote -v

Se não houver remote, avisar:

Não encontrei remote GitHub configurado.
Não foi possível fazer push.

REGRA SOBRE BRANCH:

Não trocar de branch automaticamente.

Trabalhar na branch atual.

Antes de commit, mostrar branch atual.

Se estiver em main/master, pode commitar normalmente se o usuário pediu --git, mas avisar no relatório.

Se houver conflito ou rebase pendente, parar e avisar.

Não fazer merge.

Não fazer rebase.

Não resolver conflito automaticamente sem autorização.

REGRA SOBRE PROJETO CONSTRUCT 3:

Esta skill não deve alterar lógica do Construct 3.

Não editar event sheets.

Não editar layouts.

Não editar sprites.

Não editar animações.

Não mexer no .c3p.

Apenas versionar arquivos seguros no GitHub.

Se encontrar problema no projeto, relatar e recomendar:

--m all

ou:

--correcao

REGRA SOBRE TESTES:

A skill --git não é responsável por testar gameplay.

Mas antes de salvar, pode verificar estruturalmente:

- se a pasta do projeto existe;
- se há arquivo .git;
- se git status funciona;
- se .gitignore existe;
- se pastas importantes existem;
- se arquivos sensíveis não estão staged;
- se commit foi criado;
- se push foi feito.

Não dizer que testou o jogo se não testou.

Se o usuário quiser testar o jogo antes de subir, recomendar:

--m 7

ou:

--correcao 1

ou uma skill de teste, se existir.

FLUXO OBRIGATÓRIO DO --git:

Quando o usuário usar --git, seguir exatamente esta ordem:

1. Entrar na pasta:

cd /d C:\DOCUMENTOS\Jogo

2. Verificar se é um repositório Git:

git rev-parse --is-inside-work-tree

Se não for, parar e avisar.

3. Verificar branch atual:

git branch --show-current

4. Verificar remote:

git remote -v

5. Rodar estado inicial:

git status

6. Verificar se existe .gitignore.

7. Criar ou atualizar .gitignore com regras de segurança.

8. Verificar pastas importantes.

9. Criar .gitkeep em pastas importantes vazias.

10. Verificar se há .c3p alterado.

11. Se houver .c3p alterado, chamar --bkp 1 antes de continuar.

12. Rodar git status novamente.

13. Adicionar arquivos seguros.

14. Rodar git status com arquivos staged.

15. Remover do stage qualquer arquivo sensível que tenha entrado por erro.

16. Se houver arquivos deletados importantes, pedir confirmação antes de commitar.

17. Se não houver alterações, parar com relatório.

18. Criar commit com mensagem clara.

19. Fazer push.

20. Rodar git status final.

21. Entregar relatório final.

COMANDOS ESPERADOS:

cd /d C:\DOCUMENTOS\Jogo

git rev-parse --is-inside-work-tree
git branch --show-current
git remote -v
git status

Depois de garantir .gitignore e .gitkeep:

git add -A
git status

Se .env entrou no stage:

git restore --staged .env

Depois:

git commit -m "chore: sincronizar projeto completo do jogo"
git push
git status

Se o push precisar de upstream:

git push -u origin NOME_DA_BRANCH

Somente se seguro.

COMPORTAMENTO DO --git status:

Quando o usuário usar:

--git status

fazer apenas:

cd /d C:\DOCUMENTOS\Jogo
git status
git branch --show-current
git remote -v

Também verificar:
- se .env está rastreado;
- se .gitignore existe;
- se pastas importantes estão vazias;
- se há alterações pendentes;
- se há arquivos sensíveis em risco.

Não fazer commit.
Não fazer push.

COMPORTAMENTO DO --git dry-run:

Quando o usuário usar:

--git dry-run

simular o fluxo.

Mostrar:
- arquivos que seriam adicionados;
- pastas que precisariam de .gitkeep;
- arquivos ignorados;
- arquivos sensíveis protegidos;
- se seria necessário chamar --bkp;
- mensagem de commit sugerida.

Não alterar arquivos.
Não fazer commit.
Não fazer push.

COMPORTAMENTO DO --git no-push:

Quando o usuário usar:

--git no-push

fazer commit normalmente, mas não fazer push.

No relatório, dizer:

Commit criado, mas push não realizado porque o usuário pediu no-push.

RELATÓRIO FINAL OBRIGATÓRIO:

Ao terminar, responder neste formato:

GITHUB SYNC DO PROJETO

Comando recebido:
...

Pasta do projeto:
C:\DOCUMENTOS\Jogo

Branch atual:
...

Remote:
...

Status inicial:
...

.gitignore:
Criado/Atualizado/Existente sem alteração

Pastas preservadas com .gitkeep:
1. ...
2. ...

Backup chamado:
Sim/Não

Arquivos adicionados:
1. ...

Arquivos modificados:
1. ...

Arquivos removidos:
1. ...

Arquivos ignorados por segurança:
1. .env
2. ...

Arquivos sensíveis encontrados:
Sim/Não
Conteúdo exibido:
Não

Commit criado:
Sim/Não

Mensagem do commit:
...

Push realizado:
Sim/Não

Status final:
...

Problemas encontrados:
1. ...

Próximos passos:
...

SE NÃO HOUVER ALTERAÇÃO:

GITHUB SYNC DO PROJETO

Nenhuma alteração nova para enviar ao GitHub.

Branch atual:
...

Status:
...

Arquivos sensíveis protegidos:
...

Próximos passos:
...

SE O PUSH FALHAR:

GITHUB SYNC DO PROJETO

Commit criado:
Sim/Não

Push realizado:
Não

Erro encontrado:
...

O que significa:
...

Como resolver:
...

Nenhuma tentativa de force push foi feita.

CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:

Crie ou substitua o arquivo:

C:\DOCUMENTOS\Jogo\.agents\skill\github-sync\SKILL.md

com documentação clara contendo:

---
name: github-sync
description: Use esta skill quando o usuário digitar "--git" ou pedir para salvar o projeto inteiro no GitHub. A skill sincroniza C:\DOCUMENTOS\Jogo com o GitHub de forma segura, preservando pastas com .gitkeep, protegendo .env e arquivos sensíveis, criando commit e fazendo push sem usar comandos destrutivos.
---

A documentação deve conter:
- função principal;
- comando --git;
- comandos opcionais;
- diferença entre --git, --bkp, --m, --r, --correcao e --pixel;
- o que significa salvar o projeto inteiro;
- regra de arquivos sensíveis;
- regra sobre .env;
- regra de .gitignore;
- regra de .gitkeep;
- regra sobre .c3p;
- regra sobre backups;
- regra sobre git add;
- regra sobre remoções;
- regra sobre commit;
- regra sobre push;
- regra sobre branch;
- regra sobre Construct 3;
- regra de testes;
- fluxo obrigatório;
- comandos esperados;
- comportamento do --git status;
- comportamento do --git dry-run;
- comportamento do --git no-push;
- relatório final obrigatório.

REGRAS FINAIS:

A skill github-sync existe para salvar o projeto inteiro no GitHub com segurança.

Se houver dúvida, pare e pergunte.

Nunca apague arquivos.

Nunca apague backups.

Nunca use git reset --hard.

Nunca use git push --force.

Nunca use git clean -fd.

Nunca exponha .env.

Nunca exponha API key.

Nunca commite arquivo sensível.

Nunca altere .c3p.

Nunca diga que fez push se o push falhou.

Nunca ignore erro do Git.

Sempre preservar pastas importantes.

Sempre usar .gitkeep para pastas vazias importantes.

Sempre proteger .env.

Sempre entregar relatório claro.

No final, entregue um relatório dizendo:
- se a pasta github-sync foi criada;
- se o SKILL.md foi criado ou atualizado;
- se encontrou atualizar-github antigo;
- se encontrou atualizar-arquivo antigo;
- se há conflito com --bkp;
- o que mudou em relação à skill antiga;
- como devo usar a skill agora.