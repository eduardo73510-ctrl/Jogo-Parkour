Você está assumindo a criação de uma nova skill para meu projeto.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Skill que deve ser criada:



usar-config



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\usar-config\\SKILL.md



Comando principal da skill:



\--usar



A skill também deve aceitar:



usar

\--uso

uso

qual usar

qual modelo usar

qual raciocinio usar

qual raciocínio usar

economizar uso

economia

recomendador

recomendar modelo

recomendar raciocínio

recomendar configuração

config ideal

configuração ideal



OBJETIVO DA SKILL:



Criar uma skill chamada --usar que avalia o pedido do usuário antes dele enviar para o ChatGPT/Codex e recomenda a melhor configuração para não gastar uso à toa.



A skill deve recomendar:



1\. Qual modelo usar:

\- GPT-5.5

\- GPT-5.4

\- GPT-5.4-Mini



2\. Qual nível de raciocínio usar:

\- Baixa

\- Média

\- Alta

\- Altíssimo



3\. Qual velocidade usar:

\- Padrão

\- Rápido



A skill deve explicar:

\- por que escolheu aquela configuração;

\- se o usuário está gastando demais;

\- se pode usar um modelo mais fraco;

\- se precisa de raciocínio alto;

\- se a tarefa é simples, média, grande, crítica ou perigosa;

\- se vale usar velocidade rápida ou padrão.



IMPORTANTE:

Esta skill NÃO muda configuração automaticamente.

Esta skill NÃO executa o pedido.

Esta skill NÃO altera arquivos.

Esta skill NÃO mexe no jogo.

Esta skill NÃO faz backup.

Esta skill NÃO faz Git.

Esta skill NÃO gera imagem.

Esta skill NÃO usa API.

Ela apenas recomenda a melhor configuração.



CONTEXTO DO PROJETO:



O projeto principal do usuário é um jogo 2D de parkour no Construct 3.



Pasta base:



C:\\DOCUMENTOS\\Jogo



O jogo é:

\- 2D plataforma;

\- parkour;

\- pixel art;

\- cidade no pôr do sol;

\- corrida por telhados;

\- sem inimigos;

\- sem combate;

\- focado em movimento, pulo, corrida, sprint, slide, obstáculos e plataformas.



O usuário costuma pedir:

\- criação de skills;

\- melhoria de prompts;

\- análise de cenário;

\- correção de bug;

\- manutenção do projeto;

\- organização de GitHub;

\- backup;

\- assets pixel art;

\- teste de gameplay;

\- prompts longos para Codex.



A skill --usar deve ajudar o usuário a escolher a configuração certa para cada tipo de pedido.



DIFERENÇA ENTRE SKILLS:



\--usar = recomenda modelo, raciocínio e velocidade para economizar uso

\--p = transforma pedido curto em prompt detalhado

\--tutorial = ensina como usar as skills

\--bkp = cria backups

\--git = salva/sincroniza projeto no GitHub

\--m = manutenção/análise geral

\--r = resolve problemas encontrados após manutenção

\--correcao / --correção = corrige bug específico

\--cenario = analisa cenário e gameplay de parkour

\--pixel = planeja/cria assets pixel art

\--teste = testa mecânicas de gameplay



A skill --usar deve ser usada ANTES de mandar um pedido grande, caro ou importante.



COMPORTAMENTO QUANDO DIGITAR APENAS:



\--usar



A skill deve mostrar este menu:



RECOMENDADOR DE USO



Escolha o que deseja avaliar:



1 - Guia rápido de qual configuração usar

2 - Avaliar um pedido antes de enviar

3 - Avaliar um prompt grande

4 - Avaliar uma combinação de skills

5 - Avaliar tarefa de código ou erro

6 - Avaliar tarefa do jogo Construct 3

7 - Ver se estou gastando demais

8 - Comparar modelos

9 - Comparar raciocínios

10 - Comparar velocidade Padrão ou Rápido

11 - Criar recomendação completa



Exemplos:

\--usar "criar uma skill nova para testar gameplay"

\--usar "corrigir bug do slide"

\--usar prompt "cole aqui o prompt"

\--usar skills "--bkp 1,4 + --cenario all + --m all + --r"

\--usar codigo "cole aqui o erro ou trecho de código"

\--usar economia "melhorar esse texto"



Nenhuma ação foi executada.



MODOS DE USO:



1\. Modo simples:



\--usar "texto do pedido"



A skill deve avaliar o pedido e recomendar:

\- modelo;

\- raciocínio;

\- velocidade;

\- risco;

\- se vale gastar mais;

\- alternativa econômica.



2\. Modo prompt:



\--usar prompt "prompt completo"



A skill deve avaliar se o prompt é simples, médio, grande, crítico ou exagerado.

Depois recomenda a configuração ideal.



3\. Modo skills:



\--usar skills "--bkp 1,4 + --cenario all + --m all + --r"



A skill deve avaliar a combinação de skills e dizer qual modelo/raciocínio usar para revisar ou executar esse fluxo.



4\. Modo código:



\--usar codigo "erro ou código"



A skill deve avaliar complexidade técnica e recomendar configuração.



5\. Modo economia:



\--usar economia "pedido"



A skill deve recomendar a configuração mais barata/leve possível sem perder qualidade demais.



CLASSIFICAÇÃO DE DIFICULDADE:



A skill deve classificar todo pedido em uma destas categorias:



1\. Simples

Pedidos fáceis, rápidos, explicações curtas.



Exemplos:

\- "o que é --bkp?"

\- "explique essa skill"

\- "faça uma lista rápida"

\- "corrija uma frase"

\- "resuma isso"



Configuração recomendada:

Modelo: GPT-5.4-Mini

Raciocínio: Baixa

Velocidade: Rápido ou Padrão



2\. Médio

Pedidos normais, prompts médios, organização de ideia.



Exemplos:

\- "melhore esse prompt"

\- "organize essa skill"

\- "me explique a melhor ordem"

\- "crie um prompt curto"

\- "revise essa combinação de skills simples"



Configuração recomendada:

Modelo: GPT-5.4

Raciocínio: Média

Velocidade: Padrão



3\. Grande

Pedidos longos, criação de skill, prompt completo, planejamento importante.



Exemplos:

\- "crie uma skill nova"

\- "faça um prompt detalhado para Codex"

\- "melhore o cenário com regras"

\- "organize fluxo de backup e Git"

\- "crie documentação grande"



Configuração recomendada:

Modelo: GPT-5.4 ou GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



4\. Crítico

Pedidos que podem quebrar projeto, envolver .c3p, bugs sérios, GitHub, backups, código complexo.



Exemplos:

\- "corrigir bug do slide"

\- "corrigir fase 2 bugada"

\- "alterar cenário no Construct 3"

\- "resolver problemas depois da manutenção"

\- "mexer em .c3p"

\- "arrumar colisão, câmera e respawn"



Configuração recomendada:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



5\. Gigante / Perigoso

Pedidos muito grandes, com várias skills, análise completa do projeto, refatoração, risco alto.



Exemplos:

\- "analise todas as minhas skills"

\- "refaça o sistema inteiro de skills"

\- "corrija todos os bugs do jogo"

\- "analise projeto inteiro e resolva tudo"

\- "junte cenário, manutenção, correção, teste e Git"

\- "mudança grande no .c3p"



Configuração recomendada:

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



REGRAS PARA MODELO:



GPT-5.4-Mini:

Usar quando:

\- pedido simples;

\- explicação rápida;

\- resumo;

\- lista;

\- frase curta;

\- dúvida básica;

\- não há risco de quebrar projeto.



Evitar quando:

\- criar skill grande;

\- analisar código complexo;

\- corrigir bug sério;

\- mexer em .c3p;

\- revisar prompt gigante.



GPT-5.4:

Usar quando:

\- pedido médio;

\- prompt normal;

\- organizar ideias;

\- revisar skill;

\- criar prompt médio;

\- explicar fluxo;

\- bom equilíbrio entre qualidade e economia.



Evitar quando:

\- tarefa é crítica;

\- erro pode quebrar projeto;

\- análise precisa ser muito profunda.



GPT-5.5:

Usar quando:

\- tarefa importante;

\- prompt grande;

\- criação de skill completa;

\- bug sério;

\- análise técnica;

\- projeto Construct 3;

\- várias restrições;

\- risco de quebrar algo.



Usar com cuidado para não gastar à toa.



REGRAS PARA RACIOCÍNIO:



Baixa:

Usar para:

\- pergunta simples;

\- explicação curta;

\- resumo;

\- lista;

\- texto simples;

\- correção de frase;

\- decisão rápida.



Não usar para:

\- bug;

\- código;

\- .c3p;

\- análise grande;

\- prompt muito importante.



Média:

Usar como padrão para:

\- prompt médio;

\- revisão;

\- organização;

\- explicação de skill;

\- escolher fluxo simples;

\- ideias de melhoria.



Alta:

Usar para:

\- criar skill completa;

\- melhorar prompt grande;

\- revisar combinação de skills;

\- analisar bug;

\- planejar correção;

\- cenário/level design;

\- código;

\- tarefa importante.



Altíssimo:

Usar somente quando:

\- tarefa é gigante;

\- envolve várias skills;

\- envolve risco alto;

\- tem muitos detalhes;

\- não pode errar;

\- precisa revisar tudo profundamente;

\- envolve mudanças no projeto inteiro;

\- envolve diagnóstico complexo.



Não usar Altíssimo para coisa simples.



REGRAS PARA VELOCIDADE:



Padrão:

Usar na maioria dos casos.



Recomendado para:

\- criação de skill;

\- prompt grande;

\- análise de código;

\- bugs;

\- correção;

\- cenário;

\- manutenção;

\- Git;

\- backup;

\- .c3p;

\- decisão importante.



Rápido:

Usar apenas quando:

\- pergunta simples;

\- resposta curta;

\- resumo rápido;

\- explicação básica;

\- decisão sem risco;

\- o usuário quer velocidade acima da profundidade.



Evitar Rápido quando:

\- precisa de análise profunda;

\- prompt é grande;

\- envolve bug;

\- envolve código;

\- envolve .c3p;

\- envolve GitHub;

\- envolve backup;

\- envolve várias skills;

\- tem risco de quebrar projeto.



REGRA DE ECONOMIA:



A skill deve sempre avisar quando o usuário está usando configuração forte demais.



Exemplo:



Pedido:

"Explique o que é --bkp"



Resposta:

Você não precisa usar GPT-5.5 com Altíssimo.

Use:

Modelo: GPT-5.4-Mini

Raciocínio: Baixa

Velocidade: Rápido ou Padrão



Exemplo:



Pedido:

"Crie uma skill completa para corrigir bugs de gameplay"



Resposta:

Vale usar configuração mais forte.

Use:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Exemplo:



Pedido:

"Analise todas as skills, encontre conflitos e refaça tudo"



Resposta:

Use configuração forte.

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



GUIA RÁPIDO:



A skill deve usar esta tabela como base:



Pergunta simples:

Modelo: GPT-5.4-Mini

Raciocínio: Baixa

Velocidade: Rápido ou Padrão



Explicação de skill:

Modelo: GPT-5.4-Mini ou GPT-5.4

Raciocínio: Baixa ou Média

Velocidade: Padrão



Melhorar prompt pequeno:

Modelo: GPT-5.4

Raciocínio: Média

Velocidade: Padrão



Criar prompt grande:

Modelo: GPT-5.4 ou GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Criar skill completa:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Revisar combinação de skills:

Modelo: GPT-5.4 ou GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Analisar bug sério:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Analisar código:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Analisar projeto inteiro:

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



Resumo rápido:

Modelo: GPT-5.4-Mini

Raciocínio: Baixa

Velocidade: Rápido



TAREFAS DO JOGO CONSTRUCT 3:



Se o pedido envolver o jogo Construct 3, usar estas regras:



1\. Apenas explicar algo:

Modelo: GPT-5.4-Mini

Raciocínio: Baixa

Velocidade: Padrão



2\. Melhorar prompt para Codex:

Modelo: GPT-5.4

Raciocínio: Média ou Alta

Velocidade: Padrão



3\. Criar skill nova:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



4\. Analisar cenário:

Modelo: GPT-5.4 ou GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



5\. Corrigir bug de fase, slide, colisão ou respawn:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



6\. Resolver manutenção completa:

Modelo: GPT-5.5

Raciocínio: Alta ou Altíssimo

Velocidade: Padrão



7\. Refazer sistema de skills:

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



REGRAS PARA COMBINAÇÃO DE SKILLS:



Se o usuário pedir para avaliar uma combinação como:



\--bkp 1,4

\--cenario all

\--m all

\--r

\--teste all

\--git



A skill deve avaliar:

\- se a ordem está segura;

\- se falta backup;

\- se falta teste;

\- se algum comando é pesado demais;

\- se deve usar --r 2 em vez de --r all;

\- se --git deve ficar só no final;

\- se precisa de GPT-5.5 ou se GPT-5.4 já basta.



Configuração recomendada para revisar combinação de skills:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Se a combinação for muito grande ou perigosa:

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



REGRAS PARA CÓDIGO:



Se o usuário colar código, erro, log ou bug técnico:



Baixo risco:

\- erro simples;

\- código pequeno;

\- dúvida pontual.



Recomendado:

Modelo: GPT-5.4

Raciocínio: Média

Velocidade: Padrão



Médio/alto risco:

\- bug difícil;

\- código grande;

\- Construct 3;

\- .c3p;

\- colisão;

\- câmera;

\- respawn;

\- slide;

\- sprint;

\- animação travando.



Recomendado:

Modelo: GPT-5.5

Raciocínio: Alta

Velocidade: Padrão



Muito complexo:

\- vários bugs;

\- sistema inteiro;

\- múltiplas fases;

\- manutenção + correção + teste.



Recomendado:

Modelo: GPT-5.5

Raciocínio: Altíssimo

Velocidade: Padrão



FORMATO DE RESPOSTA:



Sempre responder neste formato:



RECOMENDAÇÃO DE USO



Pedido avaliado:

...



Tipo de tarefa:

Simples / Médio / Grande / Crítico / Gigante



Risco:

Baixo / Médio / Alto



Configuração recomendada:



Modelo:

...



Raciocínio:

...



Velocidade:

...



Por que usar essa configuração:

...



Configuração econômica alternativa:

...



Quando subir para configuração mais forte:

...



Quando descer para configuração mais leve:

...



Skills relacionadas:

1\. ...



Aviso:

...



EXEMPLO DE RESPOSTA 1:



Pedido:

\--usar "o que é a skill --bkp?"



Resposta:



RECOMENDAÇÃO DE USO



Pedido avaliado:

o que é a skill --bkp?



Tipo de tarefa:

Simples



Risco:

Baixo



Configuração recomendada:



Modelo:

GPT-5.4-Mini



Raciocínio:

Baixa



Velocidade:

Rápido ou Padrão



Por que usar essa configuração:

É apenas uma explicação simples. Não precisa gastar GPT-5.5 nem raciocínio alto.



Configuração econômica alternativa:

GPT-5.4-Mini + Baixa + Rápido



Quando subir para configuração mais forte:

Se você pedir para refazer a skill --bkp inteira.



Skills relacionadas:

\--tutorial

\--bkp



Aviso:

Não use Altíssimo para esse tipo de pergunta.



EXEMPLO DE RESPOSTA 2:



Pedido:

\--usar "criar uma skill nova para testar gameplay"



Resposta:



RECOMENDAÇÃO DE USO



Pedido avaliado:

criar uma skill nova para testar gameplay



Tipo de tarefa:

Grande



Risco:

Médio



Configuração recomendada:



Modelo:

GPT-5.5



Raciocínio:

Alta



Velocidade:

Padrão



Por que usar essa configuração:

Criar uma skill completa exige organização, regras, menus, exemplos e segurança. Vale usar raciocínio alto.



Configuração econômica alternativa:

GPT-5.4 + Alta + Padrão, se quiser economizar.



Quando subir para configuração mais forte:

Se a skill envolver várias outras skills, risco de conflito ou análise do projeto inteiro.



Skills relacionadas:

\--teste

\--tutorial

\--p



Aviso:

Não precisa usar Altíssimo, a menos que seja uma revisão geral de todas as skills.



EXEMPLO DE RESPOSTA 3:



Pedido:

\--usar "corrigir bug do slide e fase 2 no Construct 3"



Resposta:



RECOMENDAÇÃO DE USO



Pedido avaliado:

corrigir bug do slide e fase 2 no Construct 3



Tipo de tarefa:

Crítico



Risco:

Alto



Configuração recomendada:



Modelo:

GPT-5.5



Raciocínio:

Alta



Velocidade:

Padrão



Por que usar essa configuração:

Envolve bug de gameplay, fase, colisão, animação e possível alteração no .c3p. Não é uma tarefa simples.



Configuração econômica alternativa:

Não recomendado usar modelo fraco. No mínimo GPT-5.4 com Alta.



Quando subir para configuração mais forte:

Se além do slide e fase 2 também envolver manutenção completa, cenário, Git e teste geral.



Skills relacionadas:

\--bkp

\--cenario

\--m

\--r

\--correcao

\--teste



Aviso:

Antes de alterar .c3p, usar --bkp 1,4.



O QUE NÃO FAZER:



A skill --usar nunca deve:

\- executar o pedido;

\- corrigir código;

\- alterar arquivos;

\- criar backup;

\- fazer Git;

\- gerar imagem;

\- chamar API;

\- mudar configuração automaticamente;

\- dizer que executou algo;

\- prometer economia garantida;

\- recomendar sempre GPT-5.5;

\- recomendar sempre Altíssimo;

\- recomendar Rápido para tarefa crítica.



Ela deve apenas recomendar.



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\usar-config\\SKILL.md



com documentação clara contendo:



\---

name: usar-config

description: Use esta skill quando o usuário digitar "--usar" ou quiser saber qual modelo, nível de raciocínio e velocidade usar antes de enviar um pedido ao ChatGPT/Codex. A skill recomenda a configuração ideal para economizar uso sem perder qualidade, avaliando dificuldade, risco, tipo de tarefa, código, prompts e combinações de skills.

\---



A documentação deve conter:

\- função principal;

\- comando --usar;

\- aliases;

\- menu principal;

\- modos de uso;

\- classificação de dificuldade;

\- regras para modelo;

\- regras para raciocínio;

\- regras para velocidade;

\- regra de economia;

\- guia rápido;

\- tarefas do jogo Construct 3;

\- regras para combinação de skills;

\- regras para código;

\- formato de resposta;

\- exemplos de resposta;

\- o que não fazer.



REGRAS FINAIS:



A skill --usar existe para economizar uso e escolher configuração certa.



Ela deve ser prática e direta.



Sempre recomendar:

\- modelo;

\- raciocínio;

\- velocidade;

\- risco;

\- motivo;

\- alternativa econômica.



Nunca executar a tarefa.



Nunca alterar arquivos.



Nunca recomendar configuração forte sem necessidade.



Nunca recomendar configuração fraca para tarefa crítica.



No final, entregue relatório dizendo:

\- se a pasta usar-config foi criada;

\- se o SKILL.md foi criado ou atualizado;

\- se o comando --usar foi configurado;

\- quais menus foram adicionados;

\- como usar a skill agora.

