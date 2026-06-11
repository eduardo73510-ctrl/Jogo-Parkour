Você está assumindo a criação de uma nova skill para meu projeto de jogo Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Skill que deve ser criada:



cenario-parkour



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\cenario-parkour\\SKILL.md



Comando principal da skill:



\--cenario



A skill também deve aceitar:



cenario

cenário

\--cenário

analisar cenário

analisar cenario

analisar fase

melhorar cenário

melhorar cenario

parkour cenário

parkour cenario

level design parkour



IMPORTANTE:

\- Não altere o jogo automaticamente.

\- Não edite arquivos .c3p automaticamente.

\- Não crie imagens.

\- Não use API de imagem.

\- Não chame a skill pixel automaticamente.

\- Não faça commit.

\- Não faça push.

\- Não apague arquivos.

\- Não mova arquivos.

\- Esta skill é de análise, planejamento e recomendação de melhorias para o cenário e gameplay de parkour.



OBJETIVO DA SKILL:

A skill --cenario deve analisar o cenário atual do jogo e dizer o que pode ser colocado ou ajustado para melhorar a gameplay de parkour.



Ela deve olhar o cenário como game designer profissional, pensando em:



\- leitura visual;

\- caminho principal;

\- ritmo de parkour;

\- plataformas;

\- buracos;

\- obstáculos;

\- sprint;

\- slide;

\- pulos;

\- checkpoints;

\- zona de morte;

\- final de fase;

\- clareza do que é jogável;

\- separação entre decoração e colisão;

\- dificuldade crescente;

\- diversão;

\- fluidez.



DIFERENÇA ENTRE SKILLS:



\--cenario = analisar cenário, level design e ideias de gameplay de parkour

\--fase = criar ou alterar fase, se existir

\--pixel = criar/planejar assets pixel art

\--bkp = backup do projeto

\--git = salvar projeto inteiro no GitHub

\--m = manutenção geral

\--r = resolver pós-manutenção

\--correcao = corrigir bugs específicos



A skill --cenario NÃO deve ser usada para:

\- corrigir bug diretamente;

\- fazer backup;

\- gerar imagem;

\- subir GitHub;

\- criar animação;

\- mexer no .c3p sem autorização;

\- criar fase do zero automaticamente.



Ela deve analisar e recomendar.



COMPORTAMENTO QUANDO DIGITAR APENAS:



\--cenario



A skill deve mostrar este menu:



ANÁLISE DO CENÁRIO PARKOUR



Escolha o tipo de análise:



1 - Análise geral do cenário

2 - Analisar gameplay de parkour

3 - Analisar obstáculos e plataformas

4 - Analisar sprint e slide no cenário

5 - Analisar checkpoints, zona de morte e final de fase

6 - Analisar clareza visual e leitura do caminho

7 - Sugerir elementos pixel art para colocar no cenário

8 - Criar plano de melhoria da fase

9 - Análise completa do cenário



Exemplos:

\--cenario 1

\--cenario 2

\--cenario 3

\--cenario 4

\--cenario 7

\--cenario 8

\--cenario all



Depois de mostrar o menu, parar e esperar o usuário escolher.



INTERPRETAÇÃO DAS OPÇÕES:



\--cenario 1

Fazer análise geral do cenário.



Verificar:

\- qual cenário está sendo usado;

\- quais imagens de fundo existem;

\- quais assets de cenário existem;

\- se parece cidade/telhado;

\- se o visual combina com parkour;

\- se há caminho claro;

\- se o cenário está vazio demais;

\- se está poluído demais;

\- se tem começo, meio e fim.



Não alterar nada.



\--cenario 2

Analisar gameplay de parkour.



Verificar:

\- se o cenário permite corrida fluida;

\- se há espaço para pular;

\- se há buracos entre prédios;

\- se há plataformas em sequência;

\- se o jogador entende para onde ir;

\- se o caminho incentiva movimento para frente;

\- se existe ritmo:

&#x20; correr -> pular -> pousar -> continuar



Sugerir melhorias práticas.



\--cenario 3

Analisar obstáculos e plataformas.



Verificar se existem ou sugerir:

\- caixas;

\- ar-condicionado;

\- canos;

\- grades baixas;

\- plataformas metálicas;

\- telhados;

\- muretas;

\- vãos entre prédios;

\- caixa d’água;

\- antenas;

\- placas;

\- obstáculos baixos para slide;

\- plataformas elevadas.



Separar em:

\- obstáculos de gameplay;

\- decoração;

\- fundo/parallax;

\- elementos de colisão.



\--cenario 4

Analisar sprint e slide no cenário.



Verificar:

\- onde colocar reta para sprint;

\- onde colocar vão maior para sprint;

\- onde colocar obstáculo baixo para slide;

\- onde colocar área segura antes do slide;

\- onde colocar área de pouso depois do slide;

\- se o slide está obrigatório cedo demais;

\- se sprint está exigido antes de funcionar bem.



Sugerir:

\- trecho de velocidade;

\- cano baixo;

\- grade baixa;

\- túnel curto;

\- placa caída;

\- passagem baixa;

\- saída de próxima fase depois do slide.



\--cenario 5

Analisar checkpoints, zona de morte e final de fase.



Verificar:

\- se existe checkpoint;

\- se checkpoint está longe demais;

\- se existe zona de morte;

\- se queda tem reinício justo;

\- se existe final de fase;

\- se o final é claro;

\- se há lugar para transição de fase;

\- se há uma plataforma final segura.



Sugerir nomes como:

\- Checkpoint\_01

\- Checkpoint\_02

\- Checkpoint\_03

\- Zona\_Morte

\- FimDaFase

\- Porta\_Proxima\_Fase



\--cenario 6

Analisar clareza visual e leitura do caminho.



Verificar:

\- o que é plataforma jogável;

\- o que é decoração;

\- se o fundo confunde com o caminho;

\- se o jogador consegue identificar onde pisar;

\- se há contraste suficiente;

\- se há elementos demais na tela;

\- se precisa de marcação visual.



Sugerir:

\- tinta na borda;

\- setas discretas;

\- luzes;

\- placas;

\- fitas;

\- cor diferente nos elementos jogáveis;

\- menos colisão em decoração.



\--cenario 7

Sugerir elementos pixel art para colocar no cenário.



Separar em:



Gameplay:

\- telhado base;

\- borda de telhado;

\- plataforma metálica;

\- caixa pequena;

\- caixa média;

\- ar-condicionado;

\- cano baixo para slide;

\- grade baixa;

\- checkpoint;

\- porta de próxima fase;

\- item do amigo.



Decoração:

\- antenas;

\- fios;

\- varal;

\- caixa d’água;

\- outdoor;

\- placas;

\- janelas iluminadas;

\- pombos;

\- fumaça;

\- luzes pequenas.



Efeitos:

\- poeira de sprint;

\- impacto de pouso;

\- brilho de checkpoint;

\- vento;

\- faísca pequena;

\- efeito de transição de fase.



Não gerar imagem.

Apenas sugerir.



\--cenario 8

Criar plano de melhoria da fase.



Entregar um plano prático com:



1\. O que colocar primeiro.

2\. O que melhorar depois.

3\. O que evitar.

4\. Quais objetos criar.

5\. Onde colocar cada coisa.

6\. Como melhorar o fluxo.

7\. Como preparar sprint e slide.

8\. Como finalizar a fase.



O plano deve ser seguro para depois ser executado por outra skill ou pelo Codex.



\--cenario 9 ou --cenario all

Fazer análise completa do cenário.



Ordem obrigatória:

1\. Identificar arquivos de cenário.

2\. Identificar imagem/fundo principal.

3\. Analisar visual geral.

4\. Analisar caminho jogável.

5\. Analisar obstáculos.

6\. Analisar plataformas.

7\. Analisar sprint/slide.

8\. Analisar checkpoints.

9\. Analisar zona de morte.

10\. Analisar final de fase.

11\. Analisar clareza visual.

12\. Sugerir elementos.

13\. Criar plano de melhoria.

14\. Entregar relatório completo.



Não alterar arquivos.



PASTAS IMPORTANTES:



Pasta base:



C:\\DOCUMENTOS\\Jogo



Pasta de cenários:



C:\\DOCUMENTOS\\Jogo\\Cenario



Pasta de imagens/eventos/assets:



C:\\DOCUMENTOS\\Jogo\\Eventos



Pasta de versões:



C:\\DOCUMENTOS\\Jogo\\Versões-Do-Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



ARQUIVOS QUE DEVE PROCURAR:



Procurar arquivos como:



\- PlanoDeFundoEmBlocos2.png

\- imagens .png

\- imagens .jpg

\- imagens .jpeg

\- assets de cenário

\- sprites de obstáculos

\- arquivos .c3p

\- exports do Construct 3

\- documentação da fase

\- relatórios anteriores

\- prints do cenário



Se encontrar várias imagens de cenário, listar todas e identificar qual parece ser a principal.



Se não encontrar imagem de cenário, avisar.



REGRAS DE ANÁLISE VISUAL:



Ao analisar cenário, considerar:



1\. Silhueta:

O jogador entende onde pisa?



2\. Contraste:

O caminho jogável se destaca do fundo?



3\. Espaço:

Há espaço para corrida e pulo?



4\. Ritmo:

Os obstáculos criam sequência boa de movimento?



5\. Direção:

O jogador sabe para onde ir?



6\. Poluição:

Tem detalhe demais atrapalhando?



7\. Parkour:

O cenário parece feito para correr por telhados?



8\. Gameplay:

Os objetos são só bonitos ou também melhoram o jogo?



9\. Segurança:

A fase é possível com as mecânicas atuais?



10\. Futuro:

A fase já prepara sprint e slide sem obrigar cedo demais?



REGRAS DE LEVEL DESIGN PARKOUR:



O cenário deve favorecer:



\- corrida lateral;

\- pulos entre telhados;

\- plataformas em alturas diferentes;

\- vãos entre prédios;

\- obstáculos baixos para slide futuro;

\- retas para sprint;

\- pousos seguros;

\- checkpoints justos;

\- final claro;

\- ritmo de movimento.



Ritmo recomendado:



correr -> pular -> pousar -> continuar -> obstáculo -> slide/sprint -> final



A fase não deve parecer aleatória.



Ela deve parecer uma rota de parkour.



O QUE SUGERIR PARA MELHORAR GAMEPLAY:



Sempre que fizer análise, sugerir melhorias em categorias:



1\. Essencial:

Coisas que precisam entrar para a fase funcionar.



2\. Gameplay:

Coisas que melhoram a diversão.



3\. Visual:

Coisas que melhoram a leitura.



4\. Parkour:

Coisas que melhoram fluidez.



5\. Futuro:

Coisas para sprint/slide depois.



6\. Evitar:

Coisas que podem quebrar ou confundir.



ELEMENTOS RECOMENDADOS PARA PARKOUR URBANO:



Gameplay:

\- telhado base;

\- borda de telhado;

\- vão entre prédios;

\- plataforma metálica;

\- caixa pequena;

\- caixa média;

\- caixa empilhada;

\- ar-condicionado;

\- cano baixo;

\- grade baixa;

\- mureta;

\- rampa curta;

\- placa caída;

\- túnel baixo;

\- porta de próxima fase.



Cenário:

\- caixa d’água;

\- antena;

\- escada lateral;

\- varal;

\- fios;

\- outdoor;

\- chaminé;

\- janelas iluminadas;

\- prédio distante;

\- pássaros;

\- fumaça;

\- luz de poste.



Feedback:

\- checkpoint visual;

\- seta discreta;

\- tinta na borda;

\- brilho no objetivo;

\- placa indicando slide;

\- placa indicando próxima fase.



OBJETOS SUGERIDOS NO CONSTRUCT 3:



Se for recomendar objetos, usar nomes claros:



Chao\_Inicial

Plataforma\_Telhado\_01

Plataforma\_Telhado\_02

Plataforma\_Elevada\_01

Plataforma\_Ritmo\_01

Plataforma\_Ritmo\_02

Plataforma\_Ritmo\_03

Caixa\_Parkour\_01

ArCondicionado\_01

Cano\_Baixo\_Slide

Grade\_Baixa\_Slide

Checkpoint\_01

Checkpoint\_02

Checkpoint\_03

Zona\_Morte

FimDaFase

Porta\_Proxima\_Fase

Item\_Do\_Amigo

Colisao\_Chao

Colisao\_Plataforma



REGRA SOBRE SPRINT:



Sprint deve ter espaço.



Para sugerir sprint, procurar ou sugerir:



\- reta longa antes do desafio;

\- vão maior depois da reta;

\- área de pouso grande;

\- risco baixo no primeiro uso;

\- visual que indique velocidade.



Não sugerir sprint obrigatório antes da mecânica estar funcionando bem.



REGRA SOBRE SLIDE:



Slide deve ser introduzido com segurança.



Para sugerir slide, procurar ou sugerir:



\- cano baixo;

\- grade baixa;

\- placa caída;

\- passagem baixa;

\- túnel curto;

\- obstáculo que permite alternativa caso slide ainda não esteja pronto.



Não sugerir slide obrigatório cedo demais.



Primeiro:

\- slide opcional;

\- depois slide recomendado;

\- só depois slide obrigatório.



REGRA SOBRE CHECKPOINTS:



Sugerir checkpoints:



\- depois do primeiro desafio;

\- depois de sequência difícil;

\- antes do trecho final;

\- nunca longe demais;

\- nunca antes de um obstáculo impossível;

\- sempre em área segura.



REGRA SOBRE ZONA DE MORTE:



Sugerir zona de morte abaixo da fase inteira.



Se o personagem cair:

\- voltar para último checkpoint;

\- se não tiver checkpoint, voltar para início.



Zona de morte deve ser invisível ou discreta.



REGRA SOBRE FINAL DE FASE:



O final de fase deve ser claro.



Pode ser:



\- porta no telhado;

\- escada de saída;

\- passagem iluminada;

\- plataforma final grande;

\- objeto FimDaFase;

\- placa “próxima fase”;

\- entrada depois de uma área de slide.



Sugerir final de fase combinado com gameplay.



Exemplo:

O jogador corre, desliza por baixo de um cano baixo e entra em uma porta de próxima fase.



REGRA SOBRE COLISÃO:



Ao sugerir elementos, sempre dizer se é:



\- colisão;

\- trigger;

\- decoração;

\- fundo;

\- efeito.



Exemplos:



Caixa\_Parkour\_01:

Tipo: obstáculo de gameplay

Colisão: retangular



Checkpoint\_01:

Tipo: trigger

Colisão: trigger invisível



Antena\_Fundo:

Tipo: decoração

Colisão: nenhuma



Cano\_Baixo\_Slide:

Tipo: obstáculo de slide

Colisão: simples, mas não bloquear fase se slide não estiver pronto



REGRA SOBRE O QUE NÃO FAZER:



Não sugerir:

\- inimigos;

\- armas;

\- combate;

\- loja;

\- inventário;

\- fase gigante;

\- salto impossível;

\- obstáculo sem ritmo;

\- decoração com colisão confusa;

\- slide obrigatório antes da mecânica;

\- sprint obrigatório antes da mecânica;

\- excesso de detalhes no caminho jogável;

\- refazer o cenário inteiro sem necessidade.



FORMATO DE RESPOSTA DO MENU:



Quando o usuário digitar apenas --cenario, responder:



ANÁLISE DO CENÁRIO PARKOUR



Escolha o tipo de análise:



1 - Análise geral do cenário

2 - Analisar gameplay de parkour

3 - Analisar obstáculos e plataformas

4 - Analisar sprint e slide no cenário

5 - Analisar checkpoints, zona de morte e final de fase

6 - Analisar clareza visual e leitura do caminho

7 - Sugerir elementos pixel art para colocar no cenário

8 - Criar plano de melhoria da fase

9 - Análise completa do cenário



Exemplos:

\--cenario 1

\--cenario 2

\--cenario 3

\--cenario 4

\--cenario 7

\--cenario 8

\--cenario all



Nenhuma alteração foi feita.



FORMATO DE RELATÓRIO FINAL:



Ao analisar, responder neste formato:



ANÁLISE DO CENÁRIO PARKOUR



Comando recebido:

...



Tipo de análise:

...



Arquivos de cenário encontrados:

1\. ...

2\. ...



Cenário principal identificado:

...



Situação atual:

...



Pontos fortes:

1\. ...

2\. ...

3\. ...



Problemas encontrados:

1\. ...

2\. ...

3\. ...



O que falta para ficar mais parkour:

1\. ...

2\. ...

3\. ...



Sugestões de gameplay:

1\. ...

2\. ...

3\. ...



Sugestões de obstáculos:

1\. ...

2\. ...

3\. ...



Sugestões para sprint:

1\. ...

2\. ...



Sugestões para slide:

1\. ...

2\. ...



Checkpoints / zona de morte / final:

1\. ...

2\. ...

3\. ...



Elementos pixel art recomendados:

Gameplay:

1\. ...

2\. ...



Decoração:

1\. ...

2\. ...



Efeitos:

1\. ...

2\. ...



Ordem recomendada de implementação:

1\. ...

2\. ...

3\. ...



Objetos sugeridos no Construct 3:

1\. ...

2\. ...

3\. ...



Riscos:

1\. ...

2\. ...



Próxima skill recomendada:

...



Próximo comando sugerido:

...



REGRAS DE SEGURANÇA:



A skill --cenario nunca deve:

\- alterar arquivo;

\- editar .c3p;

\- gerar imagem;

\- usar API;

\- chamar PixelLab;

\- fazer commit;

\- fazer push;

\- apagar arquivo;

\- mover backup;

\- criar asset automaticamente.



Ela apenas analisa e recomenda.



Se o usuário pedir para executar a melhoria depois da análise, recomendar:



1\. --bkp 1

2\. --fase ou skill adequada, se existir

3\. --pixel, se precisar criar asset

4\. --git, depois de testar e aprovar



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\cenario-parkour\\SKILL.md



com documentação clara contendo:



\---

name: cenario-parkour

description: Use esta skill quando o usuário digitar "--cenario" ou pedir análise do cenário do jogo. A skill analisa o cenário, level design, fluxo de parkour, obstáculos, plataformas, sprint, slide, checkpoints, zona de morte, final de fase e sugere melhorias de gameplay sem alterar arquivos automaticamente.

\---



A documentação deve conter:

\- função principal;

\- comando --cenario;

\- aliases;

\- menu principal;

\- interpretação das opções;

\- pastas importantes;

\- arquivos que deve procurar;

\- regras de análise visual;

\- regras de level design parkour;

\- elementos recomendados;

\- objetos sugeridos no Construct 3;

\- regras de sprint;

\- regras de slide;

\- regras de checkpoint;

\- regras de zona de morte;

\- regras de final de fase;

\- regras de colisão;

\- o que não fazer;

\- formato de resposta do menu;

\- formato de relatório final;

\- regras de segurança.



REGRAS FINAIS:



A skill cenario-parkour existe para transformar o cenário em uma fase melhor de parkour.



Ela deve ser prática, visual e focada em gameplay.



Não basta dizer “melhore o cenário”.

Ela deve dizer exatamente:

\- o que colocar;

\- onde colocar;

\- por que colocar;

\- como isso melhora o parkour;

\- qual risco existe;

\- qual deve ser a próxima skill usada.



No final, entregue um relatório dizendo:

\- se a pasta cenario-parkour foi criada;

\- se o SKILL.md foi criado ou atualizado;

\- se o comando --cenario foi configurado;

\- quais menus foram adicionados;

\- como usar a skill agora.

