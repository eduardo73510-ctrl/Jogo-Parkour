Você está assumindo a criação ou atualização da skill de backup do meu projeto de jogo Construct 3.

Pasta base do projeto:

C:\DOCUMENTOS\Jogo

Pasta das skills:

C:\DOCUMENTOS\Jogo\.agents\skill

Skill que deve ser criada ou atualizada:

C:\DOCUMENTOS\Jogo\.agents\skill\bkp\SKILL.md

Comando principal da skill:

--bkp

OBJETIVO PRINCIPAL:
Refazer a skill --bkp para ela ser a skill oficial de backup do projeto.

Ela deve ter este comportamento:

--bkp      = mostra menu
--bkp 1    = backup do .c3p local
--bkp 2    = backup do .c3p local + GitHub
--bkp 3    = backup do .c3p local + Google Drive manual
--bkp 4    = ZIP completo do projeto
--bkp all  = .c3p local + GitHub + Drive manual + ZIP completo

IMPORTANTE:
- Não altere o jogo agora.
- Não edite arquivos .c3p agora.
- Não gere imagens.
- Não use API de imagem.
- Não faça commit agora.
- Não faça push agora.
- Não apague arquivos.
- Não apague backups.
- Não mova arquivos agora.
- Apenas crie ou atualize a skill bkp.

CONTEXTO:
A skill --bkp existe para proteger o projeto.

Ela deve fazer backups seguros de duas formas:

1. Backup versionado do arquivo .c3p principal.
2. Backup completo do projeto em arquivo .zip.

A pasta oficial para salvar backups é:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

A skill antiga pode estar confusa ou incompleta.
Atualize o SKILL.md para deixar tudo claro, seguro e organizado.

CABEÇALHO OBRIGATÓRIO DO SKILL.md:

---
name: bkp
description: Use esta skill quando o usuário digitar "--bkp" ou pedir backup do jogo. A skill cria backups versionados do arquivo .c3p, pode enviar o backup para GitHub, pode preparar envio manual para Google Drive e também pode gerar um .zip completo seguro do projeto em C:\DOCUMENTOS\Jogo\Versões-Do-Jogo.
---

DIFERENÇA ENTRE SKILLS:

--bkp = backup do projeto
--git = salvar/sincronizar projeto inteiro no GitHub
--m = manutenção/análise geral
--r = resolver problemas encontrados após manutenção
--correcao = corrigir bug específico
--pixel = criar/planejar assets pixel art

A skill --bkp NÃO é:
- skill de correção;
- skill de manutenção;
- skill de pixel art;
- skill de criação de fase;
- skill para alterar gameplay;
- skill para editar .c3p;
- skill para sincronizar o projeto inteiro no GitHub.

A opção GitHub dentro da --bkp serve apenas para enviar o backup criado.

Para salvar o projeto inteiro no GitHub, usar a skill --git.

COMPORTAMENTO QUANDO DIGITAR APENAS --bkp:

Quando o usuário digitar somente:

--bkp

a skill NÃO deve executar nenhum backup ainda.

Ela deve mostrar exatamente este menu:

BACKUP DO PROJETO

Escolha o tipo de backup:

1 - Backup do .c3p local
2 - Backup do .c3p local + GitHub
3 - Backup do .c3p local + Google Drive manual
4 - ZIP completo do projeto

Exemplos:
--bkp 1
--bkp 2
--bkp 3
--bkp 4
--bkp 1,4
--bkp 2,4
--bkp 1,2,4
--bkp 1,2,3,4
--bkp zip
--bkp all

Depois de mostrar o menu, parar e esperar o usuário escolher.

Não executar backup se o usuário não escolheu uma opção.

INTERPRETAÇÃO DAS OPÇÕES:

--bkp 1
Criar backup local versionado do arquivo .c3p principal.

--bkp 2
Criar backup local versionado do arquivo .c3p principal e enviar esse backup para o GitHub.

--bkp 3
Criar backup local versionado do arquivo .c3p principal e mostrar o link do Google Drive para envio manual.

--bkp 4
Criar um arquivo .zip completo do projeto.

--bkp zip
Mesmo comportamento de --bkp 4.

--bkp 1,4
Criar backup local do .c3p e também criar ZIP completo do projeto.

--bkp 2,4
Criar backup local do .c3p, enviar o backup para o GitHub e também criar ZIP completo do projeto.

--bkp 1,2,4
Criar backup local do .c3p, enviar o backup para o GitHub e também criar ZIP completo do projeto.

--bkp 1,2,3,4
Criar backup local do .c3p, enviar o backup para o GitHub, mostrar Google Drive manual e criar ZIP completo do projeto.

--bkp all
Criar backup local do .c3p, enviar para GitHub, mostrar Google Drive manual e criar ZIP completo do projeto.

ALIASES ACEITOS:

A skill também deve aceitar:

--bkp local
--bkp github
--bkp git
--bkp drive
--bkp google
--bkp zip
--bkp completo
--bkp full
--bkp tudo
--bkp todos
--bkp all

MAPEAMENTO DOS ALIASES:

--bkp local = --bkp 1
--bkp github = --bkp 2
--bkp git = --bkp 2
--bkp drive = --bkp 3
--bkp google = --bkp 3
--bkp zip = --bkp 4
--bkp completo = --bkp all
--bkp full = --bkp all
--bkp tudo = --bkp all
--bkp todos = --bkp all
--bkp all = executar tudo

REGRA IMPORTANTE SOBRE COMBINAÇÕES:

Se o usuário escolher múltiplas opções que envolvem backup .c3p, criar apenas UM backup .c3p e reutilizar esse mesmo arquivo para GitHub ou Google Drive manual.

Exemplo:

--bkp 1,2,3

Não criar três backups .c3p diferentes.

Criar apenas um backup local .c3p e usar esse mesmo backup para:
- local;
- GitHub;
- Google Drive manual.

PASTA OFICIAL DE BACKUP:

Todos os backups devem ficar em:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Se essa pasta não existir, criar.

Nunca usar OneDrive.

Nunca usar a pasta antiga C:\DOCUMENTOS\Jogo\Meujogo como destino principal.

Se encontrar a pasta antiga:

C:\DOCUMENTOS\Jogo\Meujogo

não apagar.

Apenas relatar que ela parece ser uma pasta antiga de versões/backups.

BACKUP DO .C3P:

Quando a opção envolver backup .c3p, procurar arquivos .c3p dentro de:

C:\DOCUMENTOS\Jogo

Ignorar arquivos .c3p que já estejam dentro de:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Também ignorar arquivos .c3p dentro de pastas antigas de backup, se forem claramente backups.

Se houver apenas um .c3p principal fora da pasta de versões, usar esse arquivo.

Se houver mais de um .c3p principal, listar os candidatos e pedir confirmação antes de continuar.

Não escolher automaticamente só pelo maior número de versão.

Analisar:
- nome;
- localização;
- tamanho;
- data de modificação;
- se parece backup;
- se está fora da pasta de versões;
- se parece ser o arquivo principal do projeto.

Se não encontrar nenhum .c3p, avisar e parar a parte do backup .c3p.

NOME DO BACKUP .C3P:

Usar este padrão:

NomeDoJogo_vX.X_AAAA-MM-DD_HH-MM.c3p

Exemplos:

MeuJogo_v1.0_2026-06-08_14-30.c3p
MeuJogo_v1.1_2026-06-08_15-10.c3p
MeuJogo_v1.2_2026-06-08_16-40.c3p

VERSIONAMENTO DO .C3P:

Detectar a maior versão existente dentro de:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Se existir:

MeuJogo_v1.0_2026-06-08_14-30.c3p
MeuJogo_v1.1_2026-06-08_15-10.c3p

criar:

MeuJogo_v1.2_AAAA-MM-DD_HH-MM.c3p

Depois de v1.9, ir para v2.0.

Depois de v2.9, ir para v3.0.

Nunca sobrescrever backup existente.

Se acontecer conflito de nome, adicionar sufixo:

_copy1
_copy2
_copy3

VALIDAÇÃO DO BACKUP .C3P:

Depois de copiar o .c3p, verificar:

1. O arquivo foi criado.
2. O tamanho é maior que 0.
3. O tamanho é parecido com o arquivo original.
4. O arquivo original ainda existe.
5. O backup está dentro de C:\DOCUMENTOS\Jogo\Versões-Do-Jogo.
6. Nenhum backup antigo foi apagado.

BACKUP NO GITHUB:

Se o usuário escolher:

--bkp 2
--bkp 1,2
--bkp 2,4
--bkp 1,2,4
--bkp all

a skill deve:

1. Criar primeiro o backup local .c3p.
2. Rodar git status.
3. Adicionar apenas o backup criado.
4. Não adicionar o projeto inteiro.
5. Não adicionar .env.
6. Não adicionar arquivos sensíveis.
7. Fazer commit com mensagem clara.
8. Fazer push.

Mensagem de commit sugerida:

backup: criar versão c3p NOME_DO_BACKUP

Comandos esperados, adaptando o nome real:

cd /d C:\DOCUMENTOS\Jogo
git status
git add "Versões-Do-Jogo\NOME_DO_BACKUP.c3p"
git commit -m "backup: criar versão c3p NOME_DO_BACKUP"
git push

Se também foi criado ZIP completo e o usuário escolheu --bkp all ou --bkp 2,4, a skill deve perguntar ou seguir a regra abaixo:

Regra padrão:
- GitHub dentro da --bkp envia apenas o backup .c3p.
- O ZIP completo fica local em Versões-Do-Jogo.
- Para enviar o projeto inteiro ao GitHub, usar --git.

Não enviar o ZIP completo para GitHub automaticamente, a menos que o usuário peça explicitamente.

Motivo:
O ZIP pode ficar grande e o GitHub pode ficar pesado.

GOOGLE DRIVE MANUAL:

Se o usuário escolher:

--bkp 3
--bkp 1,3
--bkp 2,3
--bkp 1,2,3
--bkp all

a skill deve:

1. Criar primeiro o backup local .c3p.
2. Mostrar o caminho do backup criado.
3. Mostrar o link do Google Drive.
4. Avisar que o envio para o Drive é manual.

Link do Google Drive:

https://drive.google.com/drive/folders/1HnqeiSgPCsGPJW1A11oZBOiXdwCQOo9N?hl=pt-br

Não tentar usar API do Google Drive.

Não tentar detectar OneDrive.

Não tentar copiar automaticamente para Google Drive.

Não usar OneDrive.

ZIP COMPLETO DO PROJETO:

Quando o usuário escolher:

--bkp 4
--bkp zip
--bkp 1,4
--bkp 2,4
--bkp 1,2,4
--bkp all

a skill deve criar um arquivo .zip completo seguro do projeto.

Origem do zip:

C:\DOCUMENTOS\Jogo

Destino do zip:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Nome do zip:

Jogo_Backup_Completo_AAAA-MM-DD_HH-MM.zip

Exemplo:

Jogo_Backup_Completo_2026-06-08_15-40.zip

Se já existir zip com o mesmo nome, adicionar sufixo:

_copy1
_copy2
_copy3

REGRA CRÍTICA DO ZIP:

Nunca incluir a pasta:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

dentro do zip.

Motivo:
Essa pasta é onde os backups são salvos.
Se ela entrar dentro do zip, vai criar backup dentro de backup, deixando o arquivo gigante e desorganizado.

EXCLUIR DO ZIP:

Não incluir no zip:

C:\DOCUMENTOS\Jogo\Versões-Do-Jogo
C:\DOCUMENTOS\Jogo\.git
node_modules
.cache
tmp
temp
logs
arquivos .log
.env
*.env
.env.local
.env.*
secrets.json
token.json
tokens.json
credentials.json
credentials.*
arquivos com chaves
arquivos com senhas
arquivos com tokens
arquivos temporários inúteis

Não apagar esses arquivos.

Apenas não colocar dentro do zip.

INCLUIR NO ZIP:

Incluir tudo que for seguro do projeto:

.agents
.agents\skill
Cenario
Eventos
output
test-results
arquivos .c3p principais
assets
sprites
cenários
documentação
README
arquivos .md
arquivos .json seguros
arquivos de configuração seguros
SKILL.md
outros arquivos seguros do projeto

Preservar a estrutura de pastas.

Não achatar os arquivos.

Não renomear arquivos.

Não remover acentos dos nomes.

Preservar nomes originais.

ESTRUTURA ESPERADA DENTRO DO ZIP:

O zip deve conter uma pasta raiz chamada:

Jogo

Exemplo:

Jogo/
  .agents/
  .agents/skill/
  Cenario/
  Eventos/
  output/
  test-results/
  arquivo-do-jogo.c3p
  README.md
  outros-arquivos-seguros

Não colocar todos os arquivos soltos na raiz do zip.

Não incluir:

Jogo/Versões-Do-Jogo/

VALIDAÇÃO DO ZIP:

Depois de criar o zip, validar:

1. O arquivo .zip foi criado.
2. O tamanho do .zip é maior que 0.
3. O zip abre ou lista conteúdo.
4. A pasta Versões-Do-Jogo não está dentro do zip.
5. A pasta .git não está dentro do zip.
6. O arquivo .env não está dentro do zip.
7. Arquivos sensíveis não estão dentro do zip.
8. A estrutura de pastas foi preservada.
9. A pasta Jogo existe como raiz dentro do zip.
10. Arquivos importantes aparecem dentro do zip.

Nunca dizer que o zip foi criado se ele não foi validado.

SEGURANÇA GERAL:

Antes de qualquer backup:

1. Entrar na pasta:

cd /d C:\DOCUMENTOS\Jogo

2. Rodar:

git status

Esse git status é apenas para verificar o estado do projeto.

Não fazer commit, exceto quando a opção GitHub for escolhida.

Não fazer push, exceto quando a opção GitHub for escolhida.

Nunca usar:

git reset --hard
git push --force
git clean -fd

Nunca apagar arquivos.

Nunca apagar backups.

Nunca sobrescrever backup existente.

Nunca sobrescrever zip existente.

Nunca alterar .c3p durante backup.

Nunca expor .env.

Nunca mostrar API key.

Nunca commitar arquivo sensível.

ARQUIVOS SENSÍVEIS:

Nunca mostrar conteúdo de:

.env
*.env
.env.local
.env.*
tokens
secrets
credentials
chaves de API
senhas

Se encontrar arquivo sensível, responder:

Arquivo sensível encontrado. Conteúdo não exibido.

O .env pode existir no computador.
Ele só não pode entrar no zip nem no GitHub.

ORDEM DE EXECUÇÃO DO --bkp:

Quando o usuário escolher uma opção, seguir esta ordem:

1. Entrar em C:\DOCUMENTOS\Jogo.
2. Rodar git status.
3. Interpretar a opção escolhida.
4. Criar a pasta C:\DOCUMENTOS\Jogo\Versões-Do-Jogo se não existir.
5. Se a opção envolver .c3p, identificar o .c3p principal.
6. Se houver vários .c3p candidatos, pedir confirmação.
7. Criar um único backup .c3p versionado, se necessário.
8. Validar o backup .c3p.
9. Se a opção envolver ZIP, criar o zip completo seguro.
10. Validar o zip.
11. Se a opção envolver GitHub, enviar apenas o backup .c3p para GitHub.
12. Se a opção envolver Google Drive manual, mostrar link e caminho do arquivo.
13. Entregar relatório final.

COMPORTAMENTO QUANDO HÁ ERRO:

Se não encontrar .c3p:
- informar claramente;
- se a opção também envolvia ZIP, ainda pode criar o ZIP;
- se a opção era só .c3p, parar.

Se não conseguir criar zip:
- informar erro;
- não dizer que concluiu;
- mostrar causa provável.

Se git push falhar:
- informar erro;
- não usar force push;
- não esconder o problema.

Se encontrar arquivo sensível:
- não mostrar conteúdo;
- excluir do zip;
- impedir commit se estiver staged.

RELATÓRIO FINAL OBRIGATÓRIO:

Ao terminar, responder neste formato:

BACKUP DO PROJETO

Comando recebido:
...

Tipo de backup:
...

Pasta do projeto:
C:\DOCUMENTOS\Jogo

Pasta de destino:
C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

Arquivo .c3p usado:
...

Backup .c3p criado:
Sim/Não

Nome do backup .c3p:
...

Caminho do backup .c3p:
...

ZIP completo criado:
Sim/Não

Nome do ZIP:
...

Caminho do ZIP:
...

Tamanho do ZIP:
...

GitHub usado:
Sim/Não

Commit criado:
Sim/Não

Mensagem do commit:
...

Push realizado:
Sim/Não

Google Drive manual:
Sim/Não

Link do Google Drive:
https://drive.google.com/drive/folders/1HnqeiSgPCsGPJW1A11oZBOiXdwCQOo9N?hl=pt-br

Arquivos/pastas excluídos por segurança:
1. Versões-Do-Jogo
2. .git
3. .env
4. ...

Validação do .c3p:
Backup criado:
Tamanho válido:
Original preservado:

Validação do ZIP:
Zip criado:
Zip abre/lista conteúdo:
.env excluído:
.git excluído:
Versões-Do-Jogo excluída:
Estrutura preservada:
Pasta raiz Jogo criada:

Erros encontrados:
...

Próximos passos:
...

SE O USUÁRIO DIGITOU APENAS --bkp:

Responder apenas com o menu:

BACKUP DO PROJETO

Escolha o tipo de backup:

1 - Backup do .c3p local
2 - Backup do .c3p local + GitHub
3 - Backup do .c3p local + Google Drive manual
4 - ZIP completo do projeto

Exemplos:
--bkp 1
--bkp 2
--bkp 3
--bkp 4
--bkp 1,4
--bkp 2,4
--bkp 1,2,4
--bkp 1,2,3,4
--bkp zip
--bkp all

Nenhum backup foi criado ainda.

CONTEÚDO QUE DEVE SER CRIADO OU ATUALIZADO NO SKILL.md:

Crie ou substitua o arquivo:

C:\DOCUMENTOS\Jogo\.agents\skill\bkp\SKILL.md

A documentação deve conter:

- cabeçalho name e description;
- função principal;
- diferença entre --bkp, --git, --m, --r, --correcao e --pixel;
- menu do --bkp;
- interpretação de todas as opções;
- aliases aceitos;
- regra para não duplicar backup .c3p em combinações;
- pasta oficial de backup;
- regra de backup .c3p;
- versionamento;
- validação do backup .c3p;
- regra de GitHub;
- regra de Google Drive manual;
- regra de ZIP completo;
- exclusões do ZIP;
- inclusões do ZIP;
- validação do ZIP;
- segurança geral;
- arquivos sensíveis;
- ordem de execução;
- comportamento quando há erro;
- relatório final obrigatório.

REGRAS FINAIS:

A skill bkp existe para proteger o projeto.

Se houver dúvida, pare e pergunte.

Nunca apague backup antigo.

Nunca sobrescreva backup existente.

Nunca sobrescreva ZIP existente.

Nunca altere o jogo durante backup.

Nunca inclua .env no ZIP.

Nunca inclua .git no ZIP.

Nunca inclua Versões-Do-Jogo dentro do ZIP.

Nunca exponha API key.

Nunca use OneDrive.

Nunca use Google Drive automático.

Nunca faça push se a opção GitHub não foi escolhida.

Nunca envie o projeto inteiro para GitHub pela --bkp.

Para enviar o projeto inteiro para GitHub, usar --git.

No final, entregue um relatório dizendo:
- se a pasta bkp foi criada;
- se o SKILL.md foi criado ou atualizado;
- se o menu foi atualizado;
- se a opção 4 foi adicionada;
- se o comando --bkp zip foi adicionado;
- se --bkp all agora inclui ZIP completo;
- quais regras de segurança foram adicionadas;
- como devo usar a skill agora.