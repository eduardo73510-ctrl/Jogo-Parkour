Você está assumindo a reorganização completa da skill de correção do meu projeto de jogo Construct 3.



Pasta base do projeto:



C:\\DOCUMENTOS\\Jogo



Pasta das skills:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill



Objetivo:

Criar ou atualizar uma skill chamada:



correcao



Caminho esperado:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\correcao\\SKILL.md



A skill deve ser usada quando eu digitar:



\--correcao



ou:



\--correção



IMPORTANTE:

\- Não altere o jogo agora.

\- Não edite arquivos .c3p agora.

\- Não crie imagens.

\- Não use API de imagem.

\- Não faça alterações de gameplay agora.

\- Não faça commit agora.

\- Não faça push agora.

\- Não apague arquivos.

\- Não apague backups.

\- Não use git reset --hard.

\- Não use git push --force.

\- Apenas crie ou atualize a skill correcao.



CONTEXTO:

Existe uma skill antiga chamada construct3-parkour-polish.

Ela era boa, mas ficou ampla demais.

Ela misturava polimento, correção, melhoria geral, GitHub, level design, animações e organização em uma coisa só.



Agora quero transformar isso em uma skill mais segura chamada:



correcao



A nova skill deve focar em CORRIGIR problemas existentes.



Ela NÃO deve ser uma skill de:

\- criar fase nova;

\- fazer backup;

\- gerar pixel art;

\- subir projeto inteiro para GitHub;

\- criar sistemas novos;

\- transformar o jogo em outro gênero.



IDENTIDADE DO JOGO:

O projeto é um jogo:

\- 2D;

\- plataforma;

\- parkour;

\- feito no Construct 3;

\- sem inimigos;

\- sem combate;

\- sem armas;

\- sem loja;

\- sem inventário complexo;

\- focado em movimento, pulo, corrida, sprint, slide, timing, obstáculos e plataformas.



A skill nunca deve adicionar:

\- inimigos;

\- armas;

\- combate;

\- sistema de dano por inimigos;

\- loja;

\- inventário complexo;

\- moedas obrigatórias;

\- sistema de vida complexo;

\- mecânicas fora do escopo de parkour/plataforma.



COMPORTAMENTO PRINCIPAL:



Quando o usuário digitar apenas:



\--correcao



ou:



\--correção



a skill NÃO deve corrigir nada ainda.



Ela deve mostrar este menu:



Escolha o tipo de correção:



1 - Diagnóstico geral

2 - Corrigir animações

3 - Corrigir movimento

4 - Corrigir colisões

5 - Corrigir fase/level design existente

6 - Corrigir organização de eventos

7 - Correção completa segura



Exemplos:

\--correcao 1

\--correcao 2

\--correcao 3

\--correcao 2,3

\--correcao all



Também aceito:

\--correção 1

\--correção all



Depois de mostrar o menu, a skill deve parar e esperar o usuário escolher.



INTERPRETAÇÃO DAS OPÇÕES:



\--correcao 1 ou --correção 1

Fazer somente diagnóstico geral.

Não alterar arquivos.

Não corrigir ainda.

Apenas analisar e relatar.



Analisar:

\- estrutura do projeto;

\- arquivos .c3p;

\- pastas principais;

\- assets;

\- cenários;

\- eventos, se possível;

\- sprites;

\- animações;

\- possíveis arquivos duplicados;

\- possíveis event sheets desnecessárias;

\- possíveis problemas de organização;

\- possíveis bugs óbvios;

\- estado do Git.



Entregar relatório com prioridades:

\- crítico;

\- importante;

\- melhoria;

\- opcional.



\--correcao 2 ou --correção 2

Corrigir problemas de animação.



Foco:

\- idle/parado;

\- walk/andar;

\- run/correr;

\- sprint/correr rápido;

\- jump/pulo;

\- fall/queda;

\- landing/pouso, se existir;

\- slide/deslizar, se existir;

\- direção esquerda/direita;

\- espelhamento do sprite;

\- animação reiniciando a cada frame;

\- animação travada;

\- animação errada tocando no estado errado;

\- animação de corrida funcionando só para um lado;

\- personagem parado exibindo corrida;

\- personagem pulando exibindo corrida;

\- personagem caindo exibindo animação errada.



Não criar sprite novo sem autorização.

Não gerar imagem.

Não usar API de imagem.

Se faltar asset, relatar.



\--correcao 3 ou --correção 3

Corrigir problemas de movimento.



Foco:

\- movimento horizontal;

\- aceleração;

\- desaceleração;

\- corrida;

\- sprint, se já existir;

\- pulo;

\- queda;

\- gravidade;

\- controle no ar;

\- resposta dos comandos;

\- transição entre correr e pular;

\- transição entre pular e cair;

\- sensação de peso do personagem;

\- precisão ao pousar;

\- personagem escorregando demais;

\- personagem travando;

\- personagem lento ou rápido demais.



Fazer ajustes pequenos e testáveis.

Não mudar todos os valores de uma vez.



\--correcao 4 ou --correção 4

Corrigir problemas de colisão.



Foco:

\- personagem atravessando chão;

\- personagem travando em bordas;

\- colisão irregular;

\- objetos decorativos com colisão indevida;

\- plataformas com hitbox ruim;

\- zona de morte;

\- checkpoint;

\- final de fase;

\- chão e plataformas desalinhados;

\- objetos baixos de slide bloqueando de forma injusta.



Priorizar colisões simples e retangulares.

Separar visual e colisão quando necessário.



\--correcao 5 ou --correção 5

Corrigir problemas da fase ou level design existente.



Esta opção NÃO deve criar uma fase nova do zero.



Ela pode corrigir:

\- pulo impossível;

\- plataforma mal posicionada;

\- obstáculo injusto;

\- buraco impossível;

\- checkpoint longe demais;

\- final de fase inacessível;

\- área sem caminho claro;

\- trecho que quebra o ritmo de parkour;

\- obstáculo de slide bloqueando antes do slide estar funcionando;

\- vão grande demais para o pulo atual;

\- sequência de plataformas impossível;

\- dificuldade mal distribuída.



Manter o foco em deixar a fase existente jogável.



\--correcao 6 ou --correção 6

Corrigir organização de eventos.



Foco:

\- eventos duplicados;

\- eventos conflitantes;

\- lógica espalhada sem necessidade;

\- event sheets desnecessárias;

\- nomes confusos;

\- grupos de eventos desorganizados;

\- lógica de animação brigando com lógica de movimento;

\- condições repetidas;

\- eventos que reiniciam animação a cada tick.



Não criar event sheet nova sem necessidade real.



Antes de criar qualquer event sheet nova, verificar se já existe:

\- event sheet do player;

\- event sheet de gameplay;

\- event sheet de animações;

\- event sheet da fase;

\- event sheet de UI;

\- event sheet geral.



Se criar uma nova event sheet, explicar no relatório por que foi necessário.



\--correcao 7, --correcao all, --correção 7 ou --correção all

Fazer correção completa segura.



Ordem obrigatória:

1\. Fazer diagnóstico.

2\. Identificar problemas reais.

3\. Chamar backup antes de alterar .c3p.

4\. Corrigir primeiro bugs críticos.

5\. Corrigir animações.

6\. Corrigir movimento.

7\. Corrigir colisões.

8\. Corrigir fase apenas se houver problema real.

9\. Corrigir organização de eventos apenas se necessário.

10\. Testar.

11\. Entregar relatório.



Mesmo no modo all, não fazer mudanças gigantes sem necessidade.

Se encontrar muitos problemas, corrigir por etapas e relatar o restante.



REGRA OBRIGATÓRIA DE BACKUP:



Antes de alterar qualquer arquivo .c3p, chamar a skill de backup:



\--bkp 1



Se a correção for grande, envolver várias partes do projeto, mexer em fase, animações importantes ou estrutura do Construct 3, chamar:



\--bkp 1,2



Nunca alterar .c3p sem backup local antes.

O backup local deve existir antes da alteração.



Se não conseguir executar o backup, parar e avisar.



SEGURANÇA ANTES DE ALTERAR:



Antes de qualquer alteração, rodar:



cd /d C:\\DOCUMENTOS\\Jogo

git status



Verificar:

\- arquivos já modificados;

\- arquivos não rastreados;

\- existência de .env;

\- existência de arquivos sensíveis;

\- estado atual do projeto;

\- se há trabalho anterior não commitado.



Não sobrescrever trabalho existente sem entender.

Não apagar arquivos importantes.

Não usar comandos destrutivos.



Nunca usar sem autorização explícita:

git reset --hard

git push --force

git clean -fd



ARQUIVOS SENSÍVEIS:



Não mostrar conteúdo de:

\- .env;

\- arquivos com token;

\- arquivos com chave de API;

\- arquivos com senha;

\- secrets;

\- credenciais.



Se encontrar arquivo sensível, apenas avisar:



"Encontrei arquivo sensível. Não vou mostrar o conteúdo."



REGRAS PARA CONSTRUCT 3:



O projeto usa Construct 3.



Trabalhar com cuidado porque arquivos .c3p podem ser binários ou compactados.



Não tratar .c3p como texto comum.



Não editar .c3p diretamente de forma arriscada se não tiver certeza da estrutura.



Se o projeto estiver exportado em pasta com arquivos editáveis, analisar a estrutura antes.



Se não for possível alterar algo com segurança, avisar claramente.



REGRAS SOBRE EVENT SHEETS:



Não criar event sheets desnecessárias.

Não criar layout novo para correção simples.

Não duplicar lógica de player.

Não criar lógica paralela se já existe uma lógica funcionando.



Antes de criar novo event sheet, verificar se já existe:

\- event sheet do player;

\- event sheet de gameplay;

\- event sheet de animações;

\- event sheet da fase;

\- event sheet de UI;

\- event sheet geral.



Só criar novo event sheet se houver motivo real.



Motivos válidos:

\- separar uma lógica muito grande e bagunçada;

\- evitar duplicação séria;

\- organizar animações complexas;

\- corrigir conflito estrutural;

\- manter a fase mais fácil de manter.



Motivos inválidos:

\- criar event sheet para cada ajuste pequeno;

\- duplicar eventos;

\- criar layout temporário e deixar no projeto;

\- espalhar lógica do personagem em vários lugares sem necessidade.



REGRAS DE ANIMAÇÃO:



Ao corrigir animações, verificar:

\- se a animação existe;

\- se o nome está correto;

\- se o evento chama o nome correto;

\- se a animação está reiniciando a cada tick;

\- se há condição conflitante;

\- se o personagem troca para idle no ar;

\- se o personagem toca run enquanto pula;

\- se a direção esquerda/direita está correta;

\- se o sprite precisa espelhar;

\- se a animação de corrida funciona para os dois lados;

\- se a animação de sprint não quebra a corrida normal;

\- se o slide não toca fora da condição correta.



Prioridade:

1\. Idle correto.

2\. Movimento correto.

3\. Corrida correta.

4\. Sprint correto, se existir.

5\. Pulo correto.

6\. Queda correta.

7\. Slide correto, se existir.

8\. Direção correta.



Não inventar animação se não houver asset.

Se faltar asset, relatar.



REGRAS DE MOVIMENTO:



Ao corrigir movimento, manter o jogo fluido.



O personagem deve ser:

\- responsivo;

\- fácil de controlar;

\- com peso;

\- rápido o suficiente para parkour;

\- não rápido demais;

\- não escorregadio demais;

\- capaz de pular com precisão;

\- capaz de pousar sem travar;

\- capaz de correr e pular sem bug.



Evitar:

\- pulo alto demais;

\- gravidade fraca demais;

\- velocidade exagerada;

\- desaceleração muito lenta;

\- controle no ar impossível;

\- personagem travando em canto;

\- colisão injusta;

\- fase impossível.



REGRAS DE COLISÃO:



Priorizar colisões simples.

Separar visual e colisão.

Objetos decorativos não devem bloquear o jogador.

Colisões principais devem ser claras.



Verificar:

\- chão;

\- plataformas;

\- obstáculos;

\- paredes;

\- bordas;

\- objetos baixos para slide;

\- zona de morte;

\- checkpoints;

\- final da fase.



REGRAS DE LEVEL DESIGN:



A skill correcao pode ajustar a fase existente para corrigir problemas.



Ela não deve criar uma fase nova completa.



Corrigir apenas se houver problema como:

\- salto impossível;

\- buraco grande demais;

\- plataforma fora do alcance;

\- obstáculo injusto;

\- caminho confuso;

\- checkpoint ruim;

\- final inacessível;

\- trecho sem ritmo;

\- slide obrigatório antes do slide estar pronto;

\- sprint obrigatório antes do sprint estar pronto.



O ritmo ideal do parkour é:



correr -> pular -> pousar -> continuar



A fase deve ter:

\- começo claro;

\- caminho claro;

\- desafio possível;

\- progressão de dificuldade;

\- checkpoints justos, se existirem;

\- final alcançável.



TESTE ANTES DE ALTERAR:



Antes de alterar, tentar validar o estado atual.



Verificar:

\- se o projeto abre;

\- se o jogo inicia;

\- se o personagem aparece;

\- se anda para direita;

\- se anda para esquerda;

\- se corre;

\- se pula;

\- se cai;

\- se pousa;

\- se animações funcionam;

\- se há erros visíveis;

\- se o layout atual é jogável.



Se não conseguir testar, dizer claramente:

\- o que tentou;

\- por que não conseguiu;

\- qual erro apareceu;

\- qual limitação existe;

\- o que ainda precisa ser testado manualmente.



Não dizer que testou se não testou.



TESTE DEPOIS DE ALTERAR:



Depois de qualquer correção importante, testar novamente.



Checklist mínimo:

\- jogo abre;

\- personagem aparece;

\- anda para direita;

\- anda para esquerda;

\- corre;

\- pula parado;

\- pula correndo;

\- cai;

\- pousa;

\- direção esquerda/direita correta;

\- animação não trava;

\- não atravessa chão;

\- não trava nas bordas;

\- fase continua possível;

\- sem erro crítico;

\- arquivos essenciais continuam existindo.



Se houver build ou script, executar quando seguro:



npm run build

npm test

npm run lint



Somente se esses comandos existirem no projeto.

Se não existirem, não inventar.



GIT E BRANCH:



Esta skill não é uma skill de GitHub.

Ela pode usar Git apenas para segurança e organização.



Antes de alterar, verificar:



git status

git branch



Se for fazer alteração real, criar branch de correção:



git checkout -b fix/correcao-parkour



Se a branch já existir, usar:



git checkout -b fix/correcao-parkour-2



Não fazer push automaticamente, a menos que o usuário peça.

Não abrir Pull Request automaticamente, a menos que o usuário peça.



Não commitar:

\- .env;

\- arquivos sensíveis;

\- cache;

\- logs desnecessários;

\- arquivos temporários.



Commit só deve acontecer se:

\- a correção foi feita;

\- testes básicos passaram;

\- os arquivos alterados foram revisados;

\- não há arquivo sensível no commit.



Mensagem de commit sugerida:



fix: corrigir problemas de movimento e animações



ou:



fix: corrigir bugs de parkour no Construct 3



Se o usuário não pediu commit, apenas relatar arquivos alterados e deixar pronto.



LIMITE DE ESCOPO:



Não corrigir tudo do mundo em uma única execução.



Se encontrar muitos problemas:

1\. Corrigir críticos primeiro.

2\. Relatar importantes.

3\. Sugerir próximos passos.

4\. Não fazer mudanças gigantes sem necessidade.



No modo all, priorizar:

1\. bug que impede o jogo de abrir;

2\. bug que impede o personagem de se mover;

3\. bug que impede pulo/corrida;

4\. bug que trava animação;

5\. bug de colisão grave;

6\. bug que impede concluir a fase;

7\. organização de eventos.



ORDEM OBRIGATÓRIA DE EXECUÇÃO QUANDO A SKILL FOR USADA:



Quando uma opção de correção for escolhida:



1\. Entrar em:

&#x20;  C:\\DOCUMENTOS\\Jogo



2\. Rodar:

&#x20;  git status



3\. Diagnosticar o problema escolhido.



4\. Testar o estado atual, se possível.



5\. Se for alterar .c3p, chamar:

&#x20;  --bkp 1



6\. Se a alteração for grande, chamar:

&#x20;  --bkp 1,2



7\. Corrigir apenas o necessário.



8\. Testar depois da correção.



9\. Revisar arquivos alterados.



10\. Entregar relatório final.



RELATÓRIO FINAL OBRIGATÓRIO:



Ao terminar, entregar:



Correção concluída.



Comando recebido:

Tipo de correção:

Backup realizado:

Branch usada:

Arquivos analisados:

Arquivos alterados:

Arquivos criados:

Arquivos removidos:

Problemas encontrados:

Problemas corrigidos:

Problemas que ficaram:

Testes feitos:

Testes aprovados:

Testes que falharam:

Riscos restantes:

Commit criado:

Push realizado:

Próximos passos:



Se não foi possível corrigir, entregar:



Correção não realizada.



Motivo:

O que foi analisado:

O que impediu a correção:

Risco encontrado:

O que recomendo fazer:



CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:



Crie ou substitua o arquivo:



C:\\DOCUMENTOS\\Jogo\\.agents\\skill\\correcao\\SKILL.md



com uma documentação clara contendo:



\---

name: correcao

description: Use esta skill quando o usuário digitar "--correcao", "--correção" ou pedir para corrigir bugs do jogo Construct 3. A skill diagnostica e corrige problemas existentes de animação, movimento, colisão, eventos, organização e jogabilidade, sempre com backup antes de alterar arquivos .c3p.

\---



A documentação deve conter:

\- função principal;

\- identidade do jogo;

\- menu do comando;

\- interpretação das opções;

\- regra obrigatória de backup;

\- segurança antes de alterar;

\- regras de arquivos sensíveis;

\- regras para Construct 3;

\- regras sobre event sheets;

\- regras de animação;

\- regras de movimento;

\- regras de colisão;

\- regras de level design;

\- teste antes de alterar;

\- teste depois de alterar;

\- Git e branch;

\- limite de escopo;

\- ordem obrigatória de execução;

\- relatório final obrigatório.



REGRAS FINAIS:



A skill correcao existe para corrigir problemas sem bagunçar o projeto.



Se houver dúvida, pare e pergunte.



Nunca altere .c3p sem backup.



Nunca use OneDrive.



Nunca gere imagem.



Nunca use API de imagem.



Nunca crie fase nova do zero.



Nunca transforme o jogo em outro gênero.



Nunca diga que testou se não testou.



Nunca esconda problema.



O objetivo é deixar o jogo mais estável, fluido e organizado, sem perder controle do projeto.



No final, entregue um relatório dizendo:

\- se a pasta correcao foi criada;

\- se o SKILL.md foi criado ou atualizado;

\- se encontrou a skill antiga construct3-parkour-polish;

\- se encontrou conflito com outras skills;

\- o que foi melhorado;

\- como devo usar a skill agora.

