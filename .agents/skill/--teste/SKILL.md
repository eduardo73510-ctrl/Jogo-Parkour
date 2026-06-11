Você está assumindo a criação de uma nova skill para meu projeto de jogo Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Skill que deve ser criada:



testar-gameplay



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\testar-gameplay\\SKILL.md



Comando principal da skill:



\--teste



A skill também deve aceitar:



teste

testar

testar gameplay

testar mecanicas

testar mecânicas

testar jogo

playtest

qa gameplay

verificar gameplay



IMPORTANTE:

\- Não altere o jogo automaticamente.

\- Não edite arquivos .c3p automaticamente.

\- Não crie imagens.

\- Não use API de imagem.

\- Não faça commit.

\- Não faça push.

\- Não apague arquivos.

\- Esta skill é para testar, validar e relatar problemas de gameplay.



OBJETIVO:

Criar uma skill chamada --teste para testar as mecânicas principais do meu jogo 2D de parkour no Construct 3.



O jogo é:

\- 2D plataforma;

\- parkour;

\- pixel art;

\- cidade no pôr do sol;

\- corrida por telhados;

\- com pulo, corrida, sprint e slide;

\- sem inimigos;

\- sem combate;

\- focado em movimento fluido.



DIFERENÇA ENTRE SKILLS:



\--teste = testar mecânicas e gameplay

\--m = manutenção/análise geral

\--cenario = análise de cenário e level design

\--correcao = corrigir bugs específicos

\--r = resolver problemas encontrados após manutenção

\--bkp = backup

\--git = salvar projeto no GitHub

\--pixel = assets pixel art



A skill --teste NÃO deve:

\- corrigir automaticamente;

\- criar mecânicas novas;

\- gerar imagens;

\- alterar .c3p sem autorização;

\- fazer backup;

\- fazer commit;

\- fazer push.



Ela deve testar, relatar e recomendar próxima ação.



COMPORTAMENTO QUANDO DIGITAR APENAS:



\--teste



Mostrar este menu:



TESTE DE GAMEPLAY



Escolha o tipo de teste:



1 - Teste rápido das mecânicas principais

2 - Testar movimento do player

3 - Testar pulo e queda

4 - Testar sprint

5 - Testar slide

6 - Testar colisões

7 - Testar checkpoints e zona de morte

8 - Testar câmera

9 - Testar Fase 1

10 - Testar Fase 2

11 - Teste completo da gameplay



Exemplos:

\--teste 1

\--teste 2

\--teste 5

\--teste 7

\--teste 9

\--teste 10

\--teste all



Depois de mostrar o menu, parar e esperar o usuário escolher.



INTERPRETAÇÃO DAS OPÇÕES:



\--teste 1

Fazer teste rápido das mecânicas principais:

\- jogo abre;

\- player aparece;

\- anda para direita;

\- anda para esquerda;

\- corre;

\- pula;

\- cai;

\- câmera segue;

\- não atravessa chão;

\- não trava nas bordas.



\--teste 2

Testar movimento do player:

\- esquerda;

\- direita;

\- aceleração;

\- desaceleração;

\- resposta dos controles;

\- direção do sprite;

\- movimento no chão;

\- movimento no ar.



\--teste 3

Testar pulo e queda:

\- pulo parado;

\- pulo correndo;

\- altura do pulo;

\- distância do pulo;

\- queda;

\- pouso;

\- troca de animação;

\- colisão ao pousar;

\- se o player atravessa plataforma.



\--teste 4

Testar sprint:

\- ativação do sprint;

\- duplo toque, se existir;

\- velocidade máxima;

\- duração;

\- cooldown, se existir;

\- animação de sprint;

\- se não quebra pulo;

\- se não quebra corrida normal.



\--teste 5

Testar slide:

\- condição de ativação;

\- se precisa estar em velocidade máxima;

\- animação;

\- duração;

\- colisão durante slide;

\- retorno para corrida/idle;

\- se trava o player;

\- se atravessa chão;

\- se funciona para esquerda e direita;

\- se não quebra sprint e pulo.



\--teste 6

Testar colisões:

\- chão;

\- plataformas;

\- bordas;

\- caixas;

\- canos;

\- obstáculos baixos;

\- objetos decorativos;

\- se decoração está bloqueando;

\- se o player fica preso;

\- se há colisão injusta.



\--teste 7

Testar checkpoints e zona de morte:

\- tocar checkpoint;

\- salvar posição;

\- cair no buraco;

\- voltar para checkpoint;

\- voltar para início se não houver checkpoint;

\- resetar velocidade de queda;

\- câmera voltar junto;

\- evitar loop infinito de morte.



\--teste 8

Testar câmera:

\- seguir o player;

\- não mostrar vazio demais;

\- não travar ao cair;

\- não ficar perdida ao respawn;

\- acompanhar sprint;

\- acompanhar fase 1 e fase 2.



\--teste 9

Testar Fase 1:

\- início da fase;

\- caminho principal;

\- buracos;

\- plataformas;

\- zona de morte;

\- checkpoints;

\- slide, se existir;

\- final da fase;

\- transição para Fase 2;

\- se a fase é completável.



\--teste 10

Testar Fase 2:

\- spawn do player;

\- cenário;

\- chão inicial;

\- plataformas;

\- colisões;

\- câmera;

\- buracos;

\- zona de morte;

\- checkpoints;

\- final;

\- se a fase é jogável.



\--teste 11 ou --teste all

Fazer teste completo da gameplay.



Ordem:

1\. Testar abertura do jogo.

2\. Testar player.

3\. Testar movimento.

4\. Testar pulo.

5\. Testar sprint.

6\. Testar slide.

7\. Testar colisões.

8\. Testar checkpoints.

9\. Testar zona de morte.

10\. Testar câmera.

11\. Testar Fase 1.

12\. Testar Fase 2.

13\. Testar final de fase.

14\. Gerar relatório final.



REGRAS DE TESTE:



Não dizer que testou jogando se não testou de verdade.



Usar estas categorias:



Teste real:

Quando conseguiu rodar o jogo, preview, export HTML5 ou Construct 3.



Validação estrutural:

Quando conseguiu analisar arquivos, eventos, nomes, objetos, lógica e estrutura, mas não jogou.



Não foi possível testar:

Quando depende do Construct 3, export HTML5, navegador ou arquivo não disponível.



Se não conseguir testar jogando, dizer claramente:

\- o que tentou;

\- por que não conseguiu;

\- o que validou estruturalmente;

\- o que o usuário precisa testar manualmente.



TESTES OBRIGATÓRIOS DA GAMEPLAY:



Player:

\- aparece no início;

\- anda para direita;

\- anda para esquerda;

\- vira corretamente;

\- não trava.



Corrida:

\- corre corretamente;

\- animação funciona;

\- volta para idle quando para.



Pulo:

\- pula parado;

\- pula correndo;

\- cai;

\- pousa;

\- não atravessa chão.



Sprint:

\- ativa corretamente;

\- não ativa sem querer;

\- não quebra movimento;

\- animação correta.



Slide:

\- ativa na condição certa;

\- não trava;

\- não atravessa chão;

\- volta ao estado normal;

\- funciona na direção correta.



Buracos:

\- ao cair, não buga;

\- volta ao início ou checkpoint;

\- câmera volta junto.



Fase 1:

\- é jogável;

\- tem começo;

\- tem caminho;

\- tem final;

\- buracos não bugam.



Fase 2:

\- abre corretamente;

\- cenário aparece;

\- player nasce certo;

\- chão funciona;

\- caminho é jogável.



Câmera:

\- segue o player;

\- não fica perdida;

\- não buga no respawn.



COLISÕES:

Verificar:

\- chão;

\- plataformas;

\- obstáculos;

\- canos;

\- caixas;

\- elementos de slide;

\- decoração sem colisão indevida.



O QUE NÃO FAZER:



\- Não corrigir automaticamente.

\- Não criar evento novo sem autorização.

\- Não alterar .c3p sem backup.

\- Não gerar imagem.

\- Não usar PixelLab.

\- Não fazer commit.

\- Não fazer push.

\- Não apagar arquivos.

\- Não inventar mecânica nova.

\- Não dizer que está tudo certo se não testou.



SE ENCONTRAR BUG:



Relatar o bug com clareza.



Classificar por prioridade:



CRÍTICO:

Impede jogar, trava o player, quebra fase, corrompe respawn ou impede abrir.



IMPORTANTE:

Afeta movimento, animação, colisão, slide, sprint, câmera ou fase.



MELHORIA:

Ajuste de sensação, ritmo, clareza ou polimento.



OPCIONAL:

Ideia futura.



Depois recomendar a skill certa:



Se for bug específico:

\--correcao



Se veio depois de manutenção:

\--r



Se for cenário:

\--cenario



Se precisa backup antes:

\--bkp 1



Se ficou tudo certo e quer salvar:

\--git



FORMATO DO RELATÓRIO FINAL:



TESTE DE GAMEPLAY



Comando recebido:

...



Tipo de teste:

...



Teste real:

Sim/Não



Validação estrutural:

Sim/Não



Não foi possível testar:

...



Mecânicas testadas:

1\. ...

2\. ...



Fase 1:

...



Fase 2:

...



Movimento:

...



Pulo:

...



Sprint:

...



Slide:

...



Colisões:

...



Checkpoints:

...



Zona de morte:

...



Câmera:

...



Bugs encontrados:



CRÍTICO:

1\. ...



IMPORTANTE:

1\. ...



MELHORIA:

1\. ...



OPCIONAL:

1\. ...



Testes aprovados:

1\. ...



Testes que falharam:

1\. ...



O que precisa testar manualmente:

1\. ...



Próxima skill recomendada:

...



Próximo comando sugerido:

...



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\testar-gameplay\\SKILL.md



com documentação clara contendo:



\---

name: testar-gameplay

description: Use esta skill quando o usuário digitar "--teste" ou pedir para testar mecânicas, gameplay, player, pulo, sprint, slide, colisões, checkpoints, zona de morte, câmera, Fase 1 ou Fase 2 do jogo Construct 3. A skill testa, valida e relata problemas sem alterar arquivos automaticamente.

\---



A documentação deve conter:

\- função principal;

\- comando --teste;

\- aliases;

\- menu principal;

\- interpretação das opções;

\- regras de teste;

\- categorias teste real, validação estrutural e não foi possível testar;

\- testes obrigatórios;

\- colisões;

\- o que não fazer;

\- classificação de bugs;

\- recomendações de próxima skill;

\- formato do relatório final.



REGRAS FINAIS:



A skill testar-gameplay existe para descobrir se as mecânicas estão funcionando de verdade.



Ela deve ser honesta.



Nunca dizer que testou se não testou.



Nunca corrigir automaticamente.



Nunca alterar .c3p sem autorização.



Nunca gerar imagem.



Nunca fazer Git.



Nunca apagar arquivos.



No final, entregar relatório dizendo:

\- se a pasta testar-gameplay foi criada;

\- se o SKILL.md foi criado;

\- se o comando --teste foi configurado;

\- quais testes foram adicionados;

\- como usar a skill agora.

