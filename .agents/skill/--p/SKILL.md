Você está assumindo a criação de uma nova skill para meu projeto de jogo Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Skill que deve ser criada:



prompt-builder



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\prompt-builder\\SKILL.md



Comando principal da skill:



\--p



A skill também deve aceitar:



prompt

melhorar prompt

melhore meu pedido

melhorar comando

transformar em prompt

prompt codex

\--prompt



OBJETIVO:

Criar uma skill chamada --p que transforma pedidos curtos, confusos ou simples do usuário em prompts detalhados, seguros e profissionais para o Codex executar no projeto Construct 3.



Exemplo de entrada do usuário:



\--p melhora essa parte do cenário



A skill deve transformar isso em um prompt completo, seguro e específico, sem inventar coisas fora do escopo.



FUNÇÃO PRINCIPAL:

A skill --p serve para melhorar o que o usuário digita antes de mandar para o Codex.



Ela deve:

\- entender a intenção do pedido;

\- identificar qual parte do projeto o pedido envolve;

\- transformar o pedido em prompt detalhado;

\- adicionar regras de segurança;

\- adicionar limites de escopo;

\- evitar invenções fora da curva;

\- recomendar a skill certa;

\- preparar um prompt pronto para execução;

\- opcionalmente executar se o usuário usar modo run.



DIFERENÇA ENTRE SKILLS:



\--p = melhora pedidos e transforma em prompt detalhado para Codex

\--tutorial = ensina como usar as skills

\--bkp = backup

\--git = salvar projeto no GitHub

\--m = manutenção/análise geral

\--r = resolver problemas após manutenção

\--correcao = corrigir bug específico

\--cenario = analisar cenário e gameplay de parkour

\--pixel = criar ou planejar assets pixel art



A skill --p NÃO é uma skill de backup.

A skill --p NÃO é uma skill de GitHub.

A skill --p NÃO é uma skill de pixel art.

A skill --p NÃO é uma skill de correção direta.

A skill --p NÃO deve inventar mecânicas novas sem pedido.



Ela é uma skill de preparação de prompt.



COMPORTAMENTO QUANDO DIGITAR APENAS:



\--p



A skill deve mostrar este menu:



PROMPT BUILDER DO PROJETO



Escolha o que deseja fazer:



1 - Melhorar um pedido simples

2 - Criar prompt para cenário/parkour

3 - Criar prompt para correção de bug

4 - Criar prompt para pixel art/assets

5 - Criar prompt para manutenção

6 - Criar prompt para GitHub/backup

7 - Criar prompt para resolver relatório

8 - Criar prompt seguro para alteração no .c3p

9 - Revisar se um prompt está perigoso

10 - Criar prompt completo a partir de ideia curta



Exemplos:

\--p "melhora essa parte do cenário"

\--p 2 "quero colocar slide no final"

\--p 3 "a animação de corrida está bugada"

\--p 4 "criar cano baixo para slide"

\--p safe "melhora a fase"

\--p run "corrigir animação de corrida"



Nenhuma ação foi executada.



MODOS DE USO:



1\. Modo normal:



\--p "texto do usuário"



A skill deve gerar um prompt melhorado.

Não executar automaticamente.



2\. Modo safe:



\--p safe "texto do usuário"



A skill deve gerar o prompt, explicar riscos e pedir confirmação antes de qualquer execução.



3\. Modo run:



\--p run "texto do usuário"



A skill pode gerar o prompt e executar, mas apenas se for uma ação de baixo risco.



Se a ação envolver:

\- alterar .c3p;

\- apagar arquivo;

\- mexer em Git;

\- usar API;

\- gerar imagem;

\- alterar fase inteira;

\- mexer em muitos arquivos;

\- criar sistema novo;



então NÃO executar automaticamente.

Mostrar o prompt e pedir confirmação.



4\. Modo review:



\--p review "prompt"



A skill deve analisar se o prompt é perigoso, vago ou amplo demais.

Depois deve sugerir uma versão melhor.



REGRA MAIS IMPORTANTE:

A skill --p deve melhorar o pedido do usuário, mas não deve aumentar demais o escopo.



Se o usuário disser:



"melhora o cenário"



Não transformar em:



"refaça todo o jogo, crie 10 fases, gere sprites, implemente sprint, slide, menu, sistema de conquistas..."



Isso é errado.



Transformar em algo seguro:



"analise o cenário atual, sugira melhorias de parkour, proponha pequenos ajustes testáveis, não altere tudo de uma vez, não crie imagem, não mexa em .c3p sem backup..."



REGRA DE ESCOPO:

A skill deve sempre preservar a intenção original do usuário.



Ela pode detalhar:

\- objetivo;

\- contexto;

\- limites;

\- passos;

\- testes;

\- relatório final;

\- segurança.



Ela não pode inventar:

\- mecânicas não pedidas;

\- personagens novos;

\- inimigos;

\- armas;

\- combate;

\- loja;

\- sistema complexo;

\- fase gigante;

\- arte nova sem pedido;

\- API sem autorização.



IDENTIFICAÇÃO DE INTENÇÃO:



A skill deve identificar a intenção do usuário e recomendar a skill certa.



Se o pedido envolver cenário:

Recomendar:

\--cenario



Se envolver gameplay de fase:

Recomendar:

\--cenario ou --fase, se existir



Se envolver bug:

Recomendar:

\--correcao



Se envolver relatório da manutenção:

Recomendar:

\--r



Se envolver análise geral:

Recomendar:

\--m



Se envolver backup:

Recomendar:

\--bkp



Se envolver GitHub:

Recomendar:

\--git



Se envolver asset/pixel art:

Recomendar:

\--pixel



Se envolver aprender comando:

Recomendar:

\--tutorial



EXEMPLOS DE TRANSFORMAÇÃO:



Entrada:

\--p melhora essa parte do cenário



Saída esperada:

Criar um prompt detalhado para o Codex analisar o cenário atual do jogo em C:\\DOCUMENTOS\\Jogo, focando em gameplay de parkour, sem gerar imagem, sem alterar .c3p sem backup, sem inventar mecânicas novas, sugerindo plataformas, obstáculos, sprint/slide e final de fase de forma segura.



Entrada:

\--p arruma a animação de correr



Saída esperada:

Criar um prompt para corrigir apenas a animação de corrida, verificar eventos que reiniciam animação a cada tick, preservar animações existentes, chamar --bkp antes de mexer em .c3p, testar depois e relatar.



Entrada:

\--p cria um cano baixo para slide



Saída esperada:

Criar prompt para planejar asset pixel art de cano baixo para slide, salvar em C:\\DOCUMENTOS\\Jogo\\Eventos, não gerar imagem sem confirmação, especificar estilo pixel art urbano e colisão recomendada.



Entrada:

\--p salva tudo no github



Saída esperada:

Recomendar usar --git e criar prompt seguro para preservar pastas, usar .gitkeep, não subir .env, não expor API key e fazer commit/push com relatório.



ESTRUTURA DO PROMPT GERADO:



Todo prompt gerado pela skill --p deve ter esta estrutura:



PROMPT MELHORADO PARA CODEX



Objetivo:

...



Contexto do projeto:

...



Pasta base:

C:\\DOCUMENTOS\\Jogo



Skill recomendada:

...



Antes de alterar:

...



Tarefas:

1\. ...

2\. ...

3\. ...



Regras de segurança:

\- ...

\- ...

\- ...



Limites:

\- ...

\- ...



Testes/validação:

\- ...

\- ...



Relatório final:

\- ...

\- ...



Confirmação necessária:

Sim/Não



COMPORTAMENTO PARA CENÁRIO:



Se o pedido envolver cenário, o prompt deve incluir:



\- analisar cenário atual;

\- verificar se parece uma rota de parkour;

\- melhorar fluxo;

\- pensar em plataformas;

\- pensar em buracos;

\- pensar em obstáculos urbanos;

\- preparar sprint e slide;

\- sugerir checkpoints;

\- sugerir final de fase;

\- separar visual e colisão;

\- não gerar imagem;

\- não mexer no .c3p sem --bkp.



Skill recomendada:

\--cenario



COMPORTAMENTO PARA CORREÇÃO:



Se o pedido envolver bug, o prompt deve incluir:



\- identificar bug;

\- reproduzir ou analisar;

\- fazer backup se for mexer em .c3p;

\- corrigir apenas o necessário;

\- testar antes e depois;

\- não criar feature nova;

\- não refatorar tudo;

\- relatar problemas restantes.



Skill recomendada:

\--correcao



COMPORTAMENTO PARA PIXEL ART:



Se o pedido envolver asset, sprite ou imagem, o prompt deve incluir:



\- criar prompt primeiro;

\- não gerar imagem sem confirmação;

\- salvar em C:\\DOCUMENTOS\\Jogo\\Eventos;

\- manter pixel art;

\- manter cenário urbano no pôr do sol;

\- respeitar limite de gerações;

\- não expor API key;

\- sugerir nome do arquivo;

\- sugerir uso no Construct 3.



Skill recomendada:

\--pixel



COMPORTAMENTO PARA BACKUP:



Se o pedido envolver salvar versão ou backup, o prompt deve recomendar:



\--bkp



E explicar:

\- --bkp 1 para .c3p local;

\- --bkp 4 para zip completo;

\- --bkp all para backup máximo.



COMPORTAMENTO PARA GITHUB:



Se o pedido envolver salvar tudo no GitHub, o prompt deve recomendar:



\--git



E incluir:

\- não subir .env;

\- preservar pastas com .gitkeep;

\- salvar projeto inteiro;

\- não usar push force;

\- relatório final.



COMPORTAMENTO PARA MANUTENÇÃO:



Se o pedido for amplo, confuso ou tipo "analisa tudo", recomendar:



\--m all



Não tentar corrigir tudo direto.



COMPORTAMENTO PARA RESOLVER:



Se o pedido mencionar "depois da manutenção", "resolver relatório", "arrumar problemas encontrados", recomendar:



\--r



REGRAS DE SEGURANÇA:



A skill --p nunca deve:

\- apagar arquivos;

\- editar .c3p diretamente;

\- fazer commit;

\- fazer push;

\- gerar imagem;

\- usar API;

\- chamar PixelLab;

\- executar comando destrutivo;

\- expor .env;

\- expor API key;

\- inventar grande sistema novo;

\- transformar o gênero do jogo.



Ela só pode executar se:

\- o usuário usou --p run;

\- a ação é baixa complexidade;

\- não envolve .c3p;

\- não envolve API;

\- não envolve Git;

\- não envolve exclusão;

\- não envolve muitos arquivos.



Se houver risco, pedir confirmação.



REGRA SOBRE EXECUÇÃO AUTOMÁTICA:



Mesmo no modo --p run, se o prompt gerado tiver risco médio ou alto, a skill deve parar e perguntar:



O prompt está pronto, mas envolve alteração sensível.

Deseja executar mesmo assim?



Responda:

executar

cancelar

ajustar



CLASSIFICAÇÃO DE RISCO:



Baixo risco:

\- gerar prompt;

\- revisar prompt;

\- explicar comandos;

\- planejar cenário;

\- listar assets;

\- analisar texto.



Médio risco:

\- alterar arquivos simples;

\- organizar documentação;

\- criar SKILL.md;

\- criar .gitkeep;

\- renomear arquivos com autorização.



Alto risco:

\- alterar .c3p;

\- gerar imagem/API;

\- fazer git commit/push;

\- apagar arquivo;

\- mover pasta;

\- alterar muitas partes do projeto;

\- substituir asset existente.



Prompt de alto risco nunca executa automaticamente.



FORMATO DE RESPOSTA FINAL:



Quando a skill gerar prompt, responder:



PROMPT BUILDER



Pedido original:

...



Intenção detectada:

...



Skill recomendada:

...



Risco:

Baixo/Médio/Alto



Prompt melhorado:

...



Como usar:

...



Executar agora:

Sim/Não



Se o usuário usou --p run e for seguro:

Executar e depois relatar.



Se não for seguro:

Pedir confirmação.



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\prompt-builder\\SKILL.md



com documentação clara contendo:



\---

name: prompt-builder

description: Use esta skill quando o usuário digitar "--p" ou pedir para melhorar um comando/prompt para o Codex. A skill transforma pedidos curtos em prompts detalhados, seguros e alinhados ao projeto Construct 3, recomenda a skill correta e só executa automaticamente em ações de baixo risco.

\---



A documentação deve conter:

\- função principal;

\- comando --p;

\- aliases;

\- menu principal;

\- modos normal, safe, run e review;

\- diferença entre as skills;

\- regra de não aumentar demais o escopo;

\- identificação de intenção;

\- exemplos de transformação;

\- estrutura do prompt gerado;

\- comportamento por tipo de pedido;

\- regras de segurança;

\- regra de execução automática;

\- classificação de risco;

\- formato de resposta final.



REGRAS FINAIS:



A skill --p existe para transformar ideias soltas em prompts bons.



Ela deve ser prática, segura e detalhada.



Nunca inventar fora do escopo.



Nunca aumentar o pedido sem necessidade.



Nunca executar ação sensível sem confirmação.



Nunca gerar imagem sem confirmação.



Nunca mexer em .c3p sem backup.



Nunca fazer Git sem o usuário pedir.



Nunca apagar arquivos.



No final, entregue um relatório dizendo:

\- se a pasta prompt-builder foi criada;

\- se o SKILL.md foi criado;

\- se o comando --p foi configurado;

\- quais modos foram adicionados;

\- como usar a skill agora.

