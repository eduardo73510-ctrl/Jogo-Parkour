Você está assumindo a criação ou atualização da skill de manutenção geral do meu projeto de jogo Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Objetivo:

Criar ou atualizar uma skill chamada:



manutencao



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\manutencao\\SKILL.md



Comando principal da skill:



\--m



A skill também deve aceitar:



manutencao

manutenção

\--manutencao

\--manutenção



IMPORTANTE:

\- Não altere o jogo agora.

\- Não edite arquivos .c3p agora.

\- Não crie imagens.

\- Não use API de imagem.

\- Não faça commit agora.

\- Não faça push agora.

\- Não apague arquivos.

\- Não apague backups.

\- Não mova arquivos agora.

\- Não limpe nada agora.

\- Apenas crie ou atualize a skill manutencao.



CONTEXTO:

Esta skill é para manutenção geral do projeto.

Ela deve analisar o projeto inteiro, encontrar bagunça, riscos, arquivos duplicados, versões antigas, problemas de Git, arquivos sensíveis, conflitos entre skills e estrutura do Construct 3.



Ela NÃO é uma skill de correção.

Ela NÃO é uma skill de backup.

Ela NÃO é uma skill de GitHub.

Ela NÃO é uma skill de criação de fase.

Ela NÃO é uma skill de pixel art.



Diferença entre skills:



\--m = manutenção, análise, diagnóstico e organização do plano

\--correcao = corrigir bugs específicos

\--bkp = criar backup

github-sync ou skill parecida = sincronizar projeto no GitHub

pixel-assets = lidar com assets pixel art



COMPORTAMENTO DO COMANDO:



Quando o usuário digitar apenas:



\--m



a skill NÃO deve alterar nada.



Ela deve mostrar este menu:



MANUTENÇÃO DO PROJETO



Escolha o tipo de manutenção:



1 - Diagnóstico geral rápido

2 - Análise completa do projeto

3 - Verificar arquivos, pastas e duplicações

4 - Verificar versões e backups

5 - Verificar Git, GitHub e arquivos sensíveis

6 - Verificar skills e conflitos entre skills

7 - Verificar estrutura Construct 3

8 - Gerar plano de limpeza segura

9 - Manutenção completa sem alterações



Exemplos:

\--m 1

\--m 2

\--m 3

\--m 4

\--m 5

\--m 6

\--m 7

\--m 8

\--m 9

\--m all



Depois de mostrar o menu, parar e esperar o usuário escolher.



INTERPRETAÇÃO DAS OPÇÕES:



\--m 1

Fazer diagnóstico geral rápido.

Não alterar arquivos.

Verificar rapidamente:

\- estrutura principal;

\- arquivos .c3p;

\- pastas importantes;

\- Git status;

\- backups existentes;

\- skills existentes;

\- riscos óbvios.



\--m 2

Fazer análise completa do projeto.

Não alterar arquivos.

Analisar:

\- estrutura inteira;

\- arquivos .c3p;

\- assets;

\- cenários;

\- eventos;

\- layouts;

\- backups;

\- Git;

\- skills;

\- arquivos sensíveis;

\- arquivos duplicados;

\- arquivos antigos;

\- arquivos quebrados;

\- organização geral.



\--m 3

Verificar arquivos, pastas e duplicações.

Não alterar arquivos.

Foco:

\- pastas duplicadas;

\- arquivos com nomes parecidos;

\- arquivos temporários;

\- arquivos grandes;

\- arquivos fora do lugar;

\- pastas vazias;

\- pastas importantes sem .gitkeep;

\- assets soltos;

\- zips antigos;

\- exports antigos;

\- arquivos que parecem não ser usados.



\--m 4

Verificar versões e backups.

Não alterar arquivos.

Foco:

\- pasta oficial de versões;

\- backups .c3p;

\- ordem de versionamento;

\- versões duplicadas;

\- backups antigos fora da pasta certa;

\- risco de sobrescrever versão;

\- se a skill --bkp está coerente;

\- se a pasta antiga Meujogo ainda está sendo usada indevidamente.



\--m 5

Verificar Git, GitHub e arquivos sensíveis.

Não alterar arquivos.

Foco:

\- git status;

\- branch atual;

\- remote;

\- .gitignore;

\- .env;

\- arquivos sensíveis rastreados;

\- arquivos grandes no Git;

\- pastas que não aparecem no GitHub;

\- pastas vazias que precisam de .gitkeep;

\- risco de subir segredo/API key;

\- arquivos que deveriam ser ignorados.



Não mostrar conteúdo de arquivos sensíveis.



\--m 6

Verificar skills e conflitos entre skills.

Não alterar arquivos.

Foco:

\- skill bkp;

\- skill correcao;

\- skill manutencao;

\- skill pixel;

\- skill fase;

\- skill animacoes;

\- skill github-sync;

\- skills antigas como bakups, atualizar-arquivo, resolver, construct3-parkour-polish;

\- responsabilidades duplicadas;

\- nomes confusos;

\- comandos conflitantes;

\- skills que fazem coisa demais.



\--m 7

Verificar estrutura Construct 3.

Não alterar arquivos.

Foco:

\- arquivos .c3p;

\- qual parece ser o principal;

\- layouts;

\- event sheets;

\- sprites;

\- animações;

\- player;

\- comportamento Platform;

\- eventos de movimento;

\- eventos de animação;

\- checkpoints;

\- zona de morte;

\- final da fase;

\- objetos duplicados;

\- event sheets desnecessárias.



Não editar .c3p.



\--m 8

Gerar plano de limpeza segura.

Não executar limpeza ainda.

Apenas gerar um plano com:

\- o que pode ser arquivado;

\- o que pode ser ignorado;

\- o que precisa de backup;

\- o que não deve ser tocado;

\- o que depende de autorização;

\- ordem segura para limpar o projeto;

\- comandos sugeridos, mas sem executar.



\--m 9 ou --m all

Fazer manutenção completa sem alterações.

Ordem:

1\. Verificar Git e estado inicial.

2\. Analisar estrutura do projeto.

3\. Identificar .c3p principal.

4\. Verificar pastas.

5\. Verificar backups.

6\. Verificar arquivos duplicados.

7\. Verificar arquivos sensíveis.

8\. Verificar skills.

9\. Verificar estrutura Construct 3.

10\. Gerar relatório final.

11\. Recomendar próximo passo.



Não alterar arquivos.

Não fazer commit.

Não fazer push.

Não limpar nada.

Não mover nada.

Não apagar nada.



PASTAS IMPORTANTES:



Pasta base:



C:\\DOCUMENTOS\\Jogo



Pasta oficial de versões/backups:



C:\\DOCUMENTOS\\Jogo\\Versões-Do-Jogo



Pasta de eventos/imagens/assets gerados:



C:\\DOCUMENTOS\\Jogo\\Eventos



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Pastas que devem ser verificadas se existirem:



C:\\DOCUMENTOS\\Jogo\\.agents

C:\\DOCUMENTOS\\Jogo\\.agents\\skill

C:\\DOCUMENTOS\\Jogo\\Cenario

C:\\DOCUMENTOS\\Jogo\\Eventos

C:\\DOCUMENTOS\\Jogo\\output

C:\\DOCUMENTOS\\Jogo\\test-results

C:\\DOCUMENTOS\\Jogo\\Versões-Do-Jogo



PASTA ANTIGA:



Se encontrar:



C:\\DOCUMENTOS\\Jogo\\Meujogo



não apagar.



Apenas relatar que é uma pasta antiga usada anteriormente para backups/versões.



Comparar com a pasta oficial atual:



C:\\DOCUMENTOS\\Jogo\\Versões-Do-Jogo



Recomendar migração apenas se fizer sentido e somente com autorização.



REGRAS GERAIS:



\- Não apagar nenhum arquivo.

\- Não sobrescrever versões antigas.

\- Não reiniciar o projeto do zero.

\- Não remover documentação.

\- Não remover eventos existentes.

\- Não criar arte nova.

\- Não chamar skill pixel.

\- Não criar imagens.

\- Não usar API de imagem.

\- Não alterar .c3p antes de entender o projeto.

\- Não tratar .c3p como texto comum.

\- Não fazer commit.

\- Não fazer push.

\- Não usar git reset --hard.

\- Não usar git push --force.

\- Não usar git clean -fd.

\- Não mostrar conteúdo de .env.

\- Não expor tokens, chaves, senhas ou secrets.

\- Não corrigir automaticamente problemas grandes.

\- Não criar sistema novo.



REGRA DE BACKUP:



A skill manutencao normalmente não altera arquivos.



Se o usuário autorizar alguma alteração depois do relatório e essa alteração envolver .c3p, chamar antes:



\--bkp 1



Se for uma alteração grande, chamar:



\--bkp 1,2



Nunca alterar .c3p sem backup.



REGRA SOBRE GIT:



A manutenção pode usar Git apenas para diagnóstico.



Pode executar:



git status

git branch

git remote -v



Não fazer commit.

Não fazer push.

Não trocar branch.

Não resetar.

Não limpar arquivos.



Se encontrar .env rastreado, apenas avisar e recomendar correção segura.



Não executar git rm --cached sem autorização.



REGRA SOBRE PASTAS VAZIAS:



GitHub não mostra pastas vazias.



Durante a manutenção, verificar se existem pastas importantes vazias.



Se existirem, recomendar criar .gitkeep.



Não criar .gitkeep automaticamente na manutenção, a menos que o usuário autorize.



REGRA SOBRE ARQUIVOS SENSÍVEIS:



Se encontrar arquivos como:



.env

\*.env

.env.local

.env.\*

secrets.json

tokens.json

credentials.json



não mostrar conteúdo.



Apenas relatar:



"Arquivo sensível encontrado. Conteúdo não exibido."



Verificar se o .gitignore protege esses arquivos.



REGRA SOBRE .GITIGNORE:



Analisar se o .gitignore contém pelo menos:



.env

\*.env

.env.local

.env.\*

node\_modules/

.cache/

tmp/

temp/

logs/

\*.log



Se faltar algo, recomendar adicionar.



Não alterar automaticamente sem autorização.



REGRA SOBRE ARQUIVO .C3P:



Arquivos .c3p podem ser binários ou compactados.



Não editar diretamente se não tiver certeza.



Pode analisar metadados como:

\- nome;

\- tamanho;

\- localização;

\- data de modificação;

\- relação com backups;

\- se está fora da pasta de versões;

\- se parece ser arquivo principal.



Se for possível inspecionar com segurança, analisar estrutura.

Se não for possível, dizer claramente.



IDENTIFICAR ARQUIVO PRINCIPAL:



Procurar arquivos .c3p fora da pasta:



C:\\DOCUMENTOS\\Jogo\\Versões-Do-Jogo



Ignorar backups versionados.



Se houver apenas um .c3p principal, marcar como provável principal.



Se houver vários .c3p, comparar:

\- nome;

\- pasta;

\- tamanho;

\- data de modificação;

\- relação com backups;

\- histórico;

\- possibilidade de conter player, layout e eventos;

\- se está dentro de pasta de versão;

\- se parece export antigo;

\- se parece arquivo quebrado.



Não escolher automaticamente o arquivo com maior versão.



Se não for possível ter certeza, listar candidatos e pedir decisão do usuário.



ANÁLISE DO JOGO:



Quando analisar o Construct 3, verificar quando possível:



Player:

\- objeto principal do personagem;

\- comportamento Platform;

\- controles;

\- variáveis;

\- estados;

\- movimento;

\- pulo;

\- corrida;

\- sprint;

\- slide;

\- dash, se existir;

\- direção;

\- colisão;

\- câmera.



Animações:

\- idle/parado;

\- walk/andar;

\- run/correr;

\- sprint/correr rápido;

\- jump/pular;

\- fall/cair;

\- landing/pouso;

\- slide;

\- dash;

\- animações sem frames;

\- animações não usadas;

\- nomes errados;

\- animações duplicadas.



Eventos:

\- event sheets existentes;

\- eventos duplicados;

\- eventos conflitantes;

\- eventos em ordem errada;

\- variáveis usadas antes de definir;

\- animações sobrescritas por outros eventos;

\- lógica espalhada demais;

\- grupos mal organizados.



Fase:

\- começo;

\- caminho principal;

\- plataformas;

\- buracos;

\- obstáculos;

\- checkpoints;

\- zona de morte;

\- final da fase;

\- dificuldade;

\- saltos impossíveis;

\- obstáculos injustos;

\- clareza visual.



Skills:

\- verificar se existe bkp;

\- verificar se existe correcao;

\- verificar se existe manutencao;

\- verificar skills duplicadas;

\- verificar comandos duplicados;

\- verificar skills antigas confusas.



CLASSIFICAÇÃO DOS PROBLEMAS:



Todo problema encontrado deve ser classificado como:



CRÍTICO:

Impede o projeto de abrir, ameaça perda de arquivos, expõe segredo, quebra o jogo ou impede uso do .c3p principal.



IMPORTANTE:

Afeta jogabilidade, organização principal, GitHub, backups, player, eventos, animações ou fluxo de trabalho.



MELHORIA:

Melhora organização, clareza, nomes, documentação, pastas, limpeza ou manutenção futura.



OPCIONAL:

Coisas boas de fazer depois, mas que não precisam ser resolvidas agora.



RELATÓRIO FINAL OBRIGATÓRIO:



Usar este formato:



MANUTENÇÃO DO PROJETO



Comando recebido:

...



Tipo de manutenção:

...



Arquivo principal identificado:

...



Candidatos a arquivo principal:

1\. ...

2\. ...

3\. ...



Situação atual:

...



Pastas analisadas:

1\. ...

2\. ...

3\. ...



Arquivos importantes encontrados:

1\. ...

2\. ...

3\. ...



Backups e versões:

...



Git/GitHub:

...



Arquivos sensíveis:

...



Skills analisadas:

...



Problemas encontrados:



CRÍTICO:

1\. ...

2\. ...



IMPORTANTE:

1\. ...

2\. ...



MELHORIA:

1\. ...

2\. ...



OPCIONAL:

1\. ...

2\. ...



Riscos:

1\. ...

2\. ...



Correções feitas:

Nenhuma. Manutenção não altera arquivos sem autorização.



Testes / validações:



Teste real:

...



Validação estrutural:

...



Não foi possível testar:

...



Próxima ação mais segura:

...



Skill recomendada para o próximo passo:

...



Avisos importantes:

...



RECOMENDAÇÃO DE PRÓXIMO PASSO:



Depois do relatório, sugerir uma ação clara.



Exemplos:



Se o problema for bug:

Recomendar:

\--correcao 2

\--correcao 3

\--correcao 4

ou

\--correcao all



Se o problema for backup:

Recomendar:

\--bkp 1

ou

\--bkp 1,2



Se o problema for GitHub:

Recomendar uma skill separada de GitHub/sync.



Se o problema for organização de skills:

Recomendar revisar skills antes de mexer no jogo.



Se o projeto estiver seguro:

Recomendar próxima melhoria de gameplay ou fase.



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\manutencao\\SKILL.md



com documentação clara contendo:



\---

name: manutencao

description: Use esta skill quando o usuário digitar "--m", "manutencao", "manutenção", "--manutencao" ou "--manutenção". A skill faz manutenção técnica geral do projeto Construct 3, analisando arquivos, pastas, backups, Git, skills, riscos e estrutura do jogo sem alterar nada automaticamente.

\---



A documentação deve conter:

\- função principal;

\- comando --m;

\- menu do --m;

\- interpretação das opções;

\- diferença entre manutenção, correção e backup;

\- caminhos importantes;

\- regras gerais;

\- regra de backup;

\- regra de Git;

\- regra de arquivos sensíveis;

\- regra de .gitignore;

\- regra de .c3p;

\- como identificar arquivo principal;

\- análise do jogo;

\- análise das skills;

\- classificação dos problemas;

\- formato do relatório final;

\- recomendação de próximo passo.



REGRAS FINAIS:



A skill manutencao existe para entender o projeto e evitar bagunça.



Se houver dúvida, pare e pergunte.



Nunca altere .c3p sem backup.



Nunca apague arquivos.



Nunca gere imagem.



Nunca use API de imagem.



Nunca faça commit.



Nunca faça push.



Nunca exponha conteúdo sensível.



Nunca diga que testou se não testou.



Nunca corrija automaticamente problemas grandes.



O objetivo é mostrar o estado real do projeto e indicar o próximo passo mais seguro.



No final, entregue um relatório dizendo:

\- se a pasta manutencao foi criada;

\- se o SKILL.md foi criado ou atualizado;

\- se o comando --m foi configurado;

\- se encontrou conflito com outras skills;

\- o que foi melhorado na skill;

\- como devo usar a skill agora.

