Você está assumindo a atualização da skill tutorial do meu projeto Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Skill que deve ser atualizada:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\tutorial\\SKILL.md



Objetivo:

Atualizar a skill --tutorial para incluir a nova skill:



\--cenario



A skill --cenario foi criada para analisar o cenário do jogo, level design, gameplay de parkour, obstáculos, plataformas, sprint, slide, checkpoints, zona de morte, final de fase e sugestões de melhoria visual/gameplay.



IMPORTANTE:

\- Não altere o jogo.

\- Não edite .c3p.

\- Não crie imagens.

\- Não use API.

\- Não faça backup.

\- Não faça commit.

\- Não faça push.

\- Apenas atualize a documentação da skill tutorial.



A skill tutorial deve continuar sendo apenas um guia para ensinar como usar as outras skills.



Atualize o SKILL.md da tutorial para incluir:



\--cenario = analisar cenário, level design e melhorias de parkour



A lista principal de skills agora deve ficar assim:



\--tutorial = ensinar como usar as skills e escolher o melhor comando

\--bkp = criar backup do .c3p, backup no GitHub, Drive manual ou ZIP completo

\--git = salvar/sincronizar o projeto inteiro no GitHub

\--m = manutenção/análise geral do projeto

\--r = resolver problemas encontrados depois da manutenção

\--correcao / --correção = corrigir bug específico

\--pixel = criar, planejar ou organizar assets pixel art

\--cenario = analisar cenário, level design e melhorias de parkour

\--fase = criar ou melhorar fase de parkour, se existir

\--animacoes = revisar ou trabalhar animações, se existir



ATUALIZAR MENU PRINCIPAL DO --tutorial:



Quando o usuário digitar apenas:



\--tutorial



a skill deve mostrar:



TUTORIAL DAS SKILLS DO PROJETO



Escolha o que deseja aprender:



1 - Guia rápido das skills

2 - Qual skill usar agora?

3 - Fluxos prontos por situação

4 - Combinações seguras de comandos

5 - Explicar uma skill específica

6 - Guia de backup e segurança

7 - Guia de GitHub

8 - Guia de manutenção, resolução e correção

9 - Guia de pixel art e assets

10 - Guia de cenário e parkour

11 - Comandos mais usados

12 - O que NÃO fazer

13 - Guia completo



Exemplos:

\--tutorial 1

\--tutorial 2

\--tutorial 3

\--tutorial 5 bkp

\--tutorial 5 git

\--tutorial 5 pixel

\--tutorial 5 cenario

\--tutorial 10

\--tutorial completo



Nenhuma ação foi executada.



ATUALIZAR OPÇÃO 1 — Guia rápido das skills:



Adicionar:



\--cenario:

Analisa o cenário do jogo e sugere melhorias para gameplay de parkour, como plataformas, obstáculos, sprint, slide, checkpoints, zona de morte, final de fase e leitura visual. Não altera arquivos automaticamente.



ATUALIZAR OPÇÃO 2 — Qual skill usar agora?



Adicionar estas recomendações:



Se o usuário quer analisar o cenário:

Recomendar:

\--cenario



Se quer melhorar gameplay de parkour no cenário:

Recomendar:

\--cenario all



Se quer saber onde colocar slide ou sprint:

Recomendar:

\--cenario 4



Se quer saber quais elementos pixel art colocar no cenário:

Recomendar:

\--cenario 7



Se quer criar um plano de melhoria da fase:

Recomendar:

\--cenario 8



Se quer analisar tudo do cenário:

Recomendar:

\--cenario all



Se o usuário diz:

"meu cenário está bonito, mas não parece fase"

Recomendar:

\--cenario all



Se o usuário diz:

"quero transformar o cenário em parkour"

Recomendar:

\--cenario 8



ATUALIZAR OPÇÃO 3 — Fluxos prontos por situação:



Adicionar novo fluxo:



Fluxo 9 — Melhorar cenário para parkour:

1\. --cenario all

2\. ler o relatório

3\. --pixel 8, se precisar listar assets

4\. --pixel 1, se precisar criar prompt de asset

5\. --bkp 1, antes de alterar .c3p

6\. --fase ou skill adequada para implementar

7\. --git, depois de testar e aprovar



Adicionar outro fluxo:



Fluxo 10 — Criar área de slide e próxima fase:

1\. --cenario 4

2\. --cenario 5

3\. --pixel 5, se precisar criar asset visual

4\. --bkp 1

5\. implementar no Construct 3

6\. testar slide/final

7\. --git



Adicionar outro fluxo:



Fluxo 11 — Analisar cenário antes de criar assets:

1\. --cenario 7

2\. --pixel 1

3\. confirmar geração só se necessário

4\. salvar assets em C:\\DOCUMENTOS\\Jogo\\Eventos

5\. --git



ATUALIZAR OPÇÃO 4 — Combinações seguras:



Adicionar:



Analisar cenário completo:

\--cenario all



Analisar cenário + listar assets:

\--cenario all

\--pixel 8



Analisar slide/sprint:

\--cenario 4



Analisar cenário + plano de fase:

\--cenario 8



Antes de aplicar mudanças no cenário:

\--bkp 1

\--cenario all

implementar com cuidado

\--git



Combinação segura para melhorar fase:

\--m all

\--cenario all

\--bkp 1

implementar melhorias

\--git



Combinação perigosa:

\- mexer no cenário dentro do .c3p sem --bkp

\- criar asset pixel art sem antes saber se ele melhora a gameplay

\- usar --pixel direto sem --cenario quando o problema é level design

\- criar fase nova sem analisar o cenário atual



ATUALIZAR OPÇÃO 5 — Explicar skill específica:



Adicionar suporte para:



\--tutorial 5 cenario

\--tutorial 5 cenário

\--tutorial 5 --cenario



Resposta esperada:



SKILL EXPLICADA



Skill:

\--cenario



Serve para:

Analisar o cenário do jogo e sugerir melhorias de parkour, level design, plataformas, obstáculos, sprint, slide, checkpoints, zona de morte, final de fase e clareza visual.



Quando usar:

\- quando o cenário está bonito, mas ainda não parece fase;

\- quando quiser melhorar gameplay de parkour;

\- quando quiser saber onde colocar plataformas;

\- quando quiser preparar sprint e slide;

\- quando quiser melhorar o caminho jogável;

\- quando quiser planejar obstáculos urbanos;

\- quando quiser decidir quais assets pixel art criar.



Comandos principais:

1\. --cenario

&#x20;  Mostra menu.



2\. --cenario all

&#x20;  Analisa tudo do cenário.



3\. --cenario 4

&#x20;  Analisa sprint e slide no cenário.



4\. --cenario 7

&#x20;  Sugere elementos pixel art para colocar no cenário.



5\. --cenario 8

&#x20;  Cria plano de melhoria da fase.



O que ela NÃO faz:

\- não altera .c3p automaticamente;

\- não gera imagem;

\- não usa PixelLab;

\- não faz backup;

\- não faz commit;

\- não implementa sozinha.



Exemplo de uso:

\--cenario all



Cuidado:

Depois de analisar, faça backup com --bkp 1 antes de aplicar mudanças no jogo.



CRIAR NOVA OPÇÃO 10 — Guia de cenário e parkour:



A opção:



\--tutorial 10



deve explicar a skill --cenario.



Conteúdo esperado:



GUIA DE CENÁRIO E PARKOUR



Use --cenario quando quiser transformar o cenário em uma fase melhor de parkour.



Comandos:



\--cenario

Mostra menu.



\--cenario 1

Análise geral do cenário.



\--cenario 2

Analisa gameplay de parkour.



\--cenario 3

Analisa obstáculos e plataformas.



\--cenario 4

Analisa onde colocar sprint e slide.



\--cenario 5

Analisa checkpoints, zona de morte e final de fase.



\--cenario 6

Analisa clareza visual e leitura do caminho.



\--cenario 7

Sugere elementos pixel art para colocar no cenário.



\--cenario 8

Cria plano de melhoria da fase.



\--cenario all

Análise completa do cenário.



Quando usar:

\- antes de criar uma fase;

\- antes de pedir assets pixel art;

\- antes de implementar slide;

\- antes de implementar sprint;

\- quando o cenário está vazio;

\- quando a fase não tem ritmo;

\- quando o jogador não sabe para onde ir;

\- quando quer melhorar gameplay sem copiar outros jogos.



Fluxo recomendado:



1\. --cenario all

2\. --cenario 8

3\. --pixel 1 ou --pixel 8, se precisar de assets

4\. --bkp 1

5\. implementar com cuidado

6\. testar

7\. --git



ATUALIZAR OPÇÃO 11 — Comandos mais usados:



Como a antiga opção 10 virou guia de cenário, renumerar "Comandos mais usados" para opção 11.



Adicionar estes comandos na lista:



\--cenario

Mostra menu de análise de cenário.



\--cenario all

Analisa tudo do cenário.



\--cenario 4

Analisa sprint e slide.



\--cenario 7

Sugere elementos pixel art para o cenário.



\--cenario 8

Cria plano de melhoria da fase.



ATUALIZAR OPÇÃO 12 — O que NÃO fazer:



Adicionar alertas:



\- Não criar assets pixel art sem saber se eles ajudam a gameplay.

\- Não transformar o cenário em fase gigante sem análise.

\- Não colocar slide obrigatório antes do slide funcionar.

\- Não colocar sprint obrigatório antes do sprint funcionar.

\- Não confundir decoração com plataforma jogável.

\- Não colocar colisão em decoração que parece fundo.

\- Não mexer no .c3p do cenário sem --bkp 1.

\- Não usar --pixel quando o problema é level design; use --cenario primeiro.



ATUALIZAR OPÇÃO 13 — Guia completo:



Adicionar uma seção:



CENÁRIO E PARKOUR



\--cenario é a skill para analisar e planejar melhorias no cenário.



Ela ajuda a decidir:

\- onde colocar plataformas;

\- onde colocar buracos;

\- onde colocar obstáculos;

\- onde colocar slide;

\- onde colocar sprint;

\- onde colocar checkpoints;

\- onde colocar zona de morte;

\- onde colocar final de fase;

\- quais assets pixel art criar;

\- como melhorar a leitura visual.



Ordem recomendada:

1\. --cenario all

2\. --cenario 8

3\. --pixel 8, se precisar de lista de assets

4\. --pixel 1, se precisar de prompt

5\. --bkp 1

6\. implementar

7\. --git



ATUALIZAR GUIA INTELIGENTE POR OBJETIVO:



Adicionar:



Usuário:

"quero melhorar o cenário"



Resposta:

Use:

\--cenario all



Usuário:

"quero colocar slide no final da fase"



Resposta:

Use:

\--cenario 4

Depois:

\--pixel 5, se precisar criar asset visual

Antes de implementar:

\--bkp 1



Usuário:

"quero saber quais objetos colocar no cenário"



Resposta:

Use:

\--cenario 7



Usuário:

"quero transformar o cenário em parkour"



Resposta:

Use:

\--cenario 8



Usuário:

"não sei se o cenário está bom para gameplay"



Resposta:

Use:

\--cenario all



Usuário:

"quero fazer uma fase melhor"



Resposta:

Use:

\--cenario all

Depois:

\--cenario 8



ATUALIZAR FORMATO DO MENU PRINCIPAL:



No SKILL.md, garantir que o menu principal fique com 13 opções, incluindo:



10 - Guia de cenário e parkour

11 - Comandos mais usados

12 - O que NÃO fazer

13 - Guia completo



REGRAS FINAIS:

\- Não executar --cenario automaticamente.

\- Apenas explicar e recomendar.

\- Não alterar arquivos.

\- Não gerar imagens.

\- Não fazer backup.

\- Não fazer commit.

\- Não fazer push.

\- O tutorial deve ensinar quando usar --cenario e como combinar com --pixel, --bkp e --git.



No final, entregar relatório dizendo:

\- se a skill tutorial foi atualizada;

\- se --cenario foi adicionado;

\- se o menu foi atualizado para 13 opções;

\- se os fluxos com --cenario foram adicionados;

\- como usar agora.

