Você está assumindo a criação ou atualização da skill resolver do meu projeto de jogo Construct 3.

Pasta base do projeto:

C:\DOCUMENTOS\Jogo

Pasta das skills:

C:\DOCUMENTOS\Jogo\.agents\skill

Objetivo:
Criar ou atualizar uma skill chamada:

resolver

Caminho esperado:

C:\DOCUMENTOS\Jogo\.agents\skill\resolver\SKILL.md

Comando principal da skill:

--r

A skill também deve aceitar:

resolver
--resolver
pós manutenção
pos manutencao
pós-manutencao
resolver manutenção
resolver manutencao
resolver problemas encontrados
corrigir relatório da manutenção

IMPORTANTE:
- Não altere o jogo agora.
- Não edite arquivos .c3p agora.
- Não crie imagens.
- Não use API de imagem.
- Não faça commit agora.
- Não faça push agora.
- Não apague arquivos.
- Não apague backups.
- Apenas crie ou atualize a skill resolver.

CONTEXTO:
Esta skill é a etapa posterior à manutenção.

Fluxo correto:

1. O usuário roda:
   --m all

2. A skill manutencao analisa o projeto inteiro e entrega um relatório.

3. Depois o usuário roda:
   --r

4. A skill resolver usa o relatório da manutenção para corrigir os problemas encontrados em ordem segura.

DIFERENÇA ENTRE SKILLS:

--m = manutenção, análise, diagnóstico e relatório
--r = resolver problemas encontrados pela manutenção
--correcao = corrigir bug específico escolhido pelo usuário
--bkp = criar backup
github-sync = sincronizar projeto no GitHub
pixel-assets = lidar com assets pixel art

A skill resolver NÃO é igual à correcao.

A skill correcao serve quando o usuário já sabe o tipo de bug:
--correcao 2 = animação
--correcao 3 = movimento
--correcao 4 = colisão

A skill resolver serve quando já existe um relatório anterior de manutenção e o objetivo é resolver os problemas listados nesse relatório.

COMPORTAMENTO QUANDO O USUÁRIO DIGITAR APENAS:

--r

A skill NÃO deve sair corrigindo tudo automaticamente.

Ela deve procurar primeiro um relatório de manutenção recente.

Se encontrar relatório de manutenção recente, mostrar um resumo dos problemas encontrados e este menu:

RESOLVER PÓS-MANUTENÇÃO

Encontrei problemas no relatório de manutenção.

Escolha como deseja resolver:

1 - Resolver apenas problemas críticos
2 - Resolver problemas críticos e importantes
3 - Resolver um problema específico do relatório
4 - Criar plano de correção sem alterar arquivos
5 - Resolver tudo que for seguro em etapas
6 - Validar arquivo .c3p principal antes de corrigir
7 - Corrigir organização de arquivos/skills sem mexer no .c3p

Exemplos:
--r 1
--r 2
--r 3
--r 4
--r 5
--r 6
--r 7
--r all

Se NÃO encontrar relatório de manutenção recente, responder:

Não encontrei um relatório de manutenção recente.
Rode primeiro:

--m all

ou me envie o relatório que devo resolver.

Não corrigir nada sem relatório ou sem problema claramente identificado.

INTERPRETAÇÃO DAS OPÇÕES:

--r 1
Resolver apenas problemas CRÍTICOS encontrados na manutenção.

Problemas críticos incluem:
- projeto não abre;
- .c3p corrompido;
- arquivo principal errado;
- risco de perda de arquivos;
- segredo/API key exposto;
- bug que impede o player de existir;
- bug que impede o jogo de iniciar;
- estrutura quebrada que impede continuar o projeto.

--r 2
Resolver problemas CRÍTICOS e IMPORTANTES.

Inclui:
- bugs graves de player;
- eventos quebrados;
- animações travadas;
- colisões graves;
- backups mal organizados;
- .gitignore incompleto;
- pastas importantes não versionadas;
- skills duplicadas ou conflitantes;
- Git rastreando arquivo sensível.

--r 3
Resolver um problema específico do relatório.

A skill deve listar os problemas numerados e pedir qual número resolver.

Exemplo:

Problemas encontrados:
1 - .env rastreado pelo Git
2 - skill bakups duplicada com bkp
3 - pasta Eventos vazia sem .gitkeep
4 - animação Run reiniciando todo tick

Responda:
--r 3,1
--r 3,2
--r 3,4

--r 4
Criar apenas plano de correção.

Não alterar arquivos.

Entregar:
- ordem segura;
- risco de cada etapa;
- qual skill usar;
- se precisa de backup;
- se precisa de autorização;
- comandos sugeridos;
- arquivos que seriam alterados.

--r 5 ou --r all
Resolver tudo que for seguro em etapas.

Regras:
- começar pelos críticos;
- depois importantes;
- não fazer mudanças gigantes;
- não resolver problemas opcionais automaticamente;
- não mexer em .c3p sem backup;
- parar se encontrar risco alto;
- relatar o que ficou para depois.

--r 6
Validar arquivo .c3p principal antes de corrigir.

Foco:
- identificar arquivo oficial;
- abrir .c3p como zip, se for seguro;
- verificar project.c3proj;
- verificar layouts;
- verificar eventSheets;
- verificar objectTypes;
- verificar imagens;
- verificar JSON principal;
- verificar entradas duplicadas;
- verificar se o arquivo parece íntegro.

Não alterar nada nessa opção, a menos que o usuário peça depois.

--r 7
Corrigir organização de arquivos/skills sem mexer no .c3p.

Pode resolver:
- skills duplicadas;
- nomes confusos;
- SKILL.md antigo;
- conflito entre bakups e bkp;
- construct3-parkour-polish antigo;
- pasta vazia que precisa de .gitkeep;
- .gitignore incompleto;
- documentação de skills.

Não mexer no .c3p nessa opção.

REGRA DE OURO:

A skill resolver só deve resolver problemas já identificados.

Ela não deve inventar nova lista de melhorias sem relação com o relatório.

Ela não deve criar mecânica nova.

Ela não deve criar fase nova.

Ela não deve gerar imagem.

Ela não deve refazer o projeto.

Ela deve resolver em ordem, com o menor risco possível.

REGRA DE BACKUP:

Antes de alterar qualquer arquivo .c3p, chamar:

--bkp 1

Se a correção for grande, envolver várias partes do projeto, ou se o usuário escolheu --r all, chamar:

--bkp 1,2

Nunca alterar .c3p sem backup local.

Se o backup falhar, parar e avisar.

REGRA SOBRE GIT:

A skill resolver pode usar Git para segurança:

git status
git branch
git remote -v

Não fazer commit automaticamente, a menos que o usuário peça.

Não fazer push automaticamente, a menos que o usuário peça.

Não usar:

git reset --hard
git push --force
git clean -fd

Se precisar alterar arquivos de organização, deixar pronto e relatar.

Se o usuário pedir commit depois, usar uma skill de GitHub/sync ou confirmar antes.

REGRA SOBRE ARQUIVOS SENSÍVEIS:

Nunca mostrar conteúdo de:
- .env
- *.env
- tokens
- chaves de API
- secrets
- credentials
- senhas

Se encontrar, apenas dizer:

Arquivo sensível encontrado. Conteúdo não exibido.

Se o .env estiver rastreado no Git, recomendar:

git rm --cached .env

Mas só executar se o usuário autorizar.

REGRA SOBRE .GITIGNORE:

Se o relatório apontar problema no .gitignore, a skill pode corrigir com autorização.

O .gitignore deve proteger pelo menos:

.env
*.env
.env.local
.env.*
node_modules/
.cache/
tmp/
temp/
logs/
*.log

REGRA SOBRE PASTAS VAZIAS:

GitHub não salva pastas vazias.

Se o relatório apontar que pastas importantes não aparecem no GitHub por estarem vazias, resolver criando .gitkeep apenas se autorizado ou se a opção escolhida permitir organização sem .c3p.

Pastas importantes:
C:\DOCUMENTOS\Jogo\.agents
C:\DOCUMENTOS\Jogo\.agents\skill
C:\DOCUMENTOS\Jogo\Cenario
C:\DOCUMENTOS\Jogo\Eventos
C:\DOCUMENTOS\Jogo\output
C:\DOCUMENTOS\Jogo\test-results
C:\DOCUMENTOS\Jogo\Versões-Do-Jogo

REGRA SOBRE .C3P:

Arquivos .c3p são pacotes do Construct 3 e podem ser binários ou zipados.

Antes de alterar:
1. Identificar arquivo oficial.
2. Confirmar se ele é o principal.
3. Fazer backup com --bkp.
4. Validar se o arquivo abre como zip, quando aplicável.
5. Localizar apenas a entrada necessária.
6. Fazer a menor alteração possível.
7. Não reescrever o projeto inteiro.
8. Não apagar sprites, imagens, animações ou event sheets.
9. Não alterar IDs sem necessidade.
10. Validar novamente depois.

Se não tiver certeza, parar e pedir confirmação.

NUNCA:
- editar .c3p como texto comum;
- sobrescrever o .c3p inteiro sem necessidade;
- apagar entradas internas sem entender;
- duplicar entradas dentro do zip;
- remover imagens/animações úteis;
- usar arquivo antigo como base sem autorização.

VALIDAÇÃO DE .C3P:

Depois de alterar .c3p, validar:

- o .c3p ainda abre como zip, se aplicável;
- project.c3proj existe;
- eventSheets existem;
- layouts existem;
- objectTypes existem;
- imagens não foram removidas;
- não há entradas duplicadas;
- JSON principal parseia;
- arquivo alterado realmente mudou;
- o backup existe;
- o arquivo final não ficou com tamanho suspeito.

Se não for possível testar jogando, dizer:

Validei a estrutura do arquivo, mas ainda preciso do export HTML5 para testar jogando no navegador.

REGRAS SOBRE RELATÓRIO DE MANUTENÇÃO:

Antes de resolver:
1. Procurar relatório recente na conversa.
2. Procurar arquivo de relatório, se existir.
3. Identificar problemas listados.
4. Separar por prioridade:
   CRÍTICO
   IMPORTANTE
   MELHORIA
   OPCIONAL
5. Resolver primeiro críticos.
6. Depois importantes.
7. Melhorias só com autorização.
8. Opcionais apenas recomendar.

Se não houver relatório, fazer análise curta e pedir para rodar:

--m all

ou pedir que o usuário envie o relatório.

REGRAS DE CORREÇÃO EM ORDEM:

Para cada problema:

1. Ler o problema.
2. Confirmar se ele ainda existe.
3. Identificar arquivos envolvidos.
4. Avaliar risco.
5. Se envolver .c3p, chamar --bkp.
6. Fazer a menor alteração possível.
7. Validar.
8. Registrar resultado.
9. Só então ir para o próximo problema.

Não misturar várias correções grandes ao mesmo tempo.

Não transformar correção pequena em refatoração gigante.

Não mexer em sistemas novos antes de resolver bugs já listados.

ESCOPO DO JOGO:

O jogo é:
- 2D;
- plataforma;
- parkour;
- Construct 3;
- sem inimigos;
- sem combate;
- focado em corrida, pulo, sprint, slide, timing, obstáculos e plataformas.

Não adicionar:
- inimigos;
- armas;
- combate;
- inventário complexo;
- loja;
- vida/HP complexo;
- moedas obrigatórias;
- sistema fora do escopo.

O objetivo da skill resolver é estabilizar o projeto, não transformar o jogo.

REGRAS SOBRE ANIMAÇÕES:

Se o relatório apontar problema de animação, verificar:
- nome da animação;
- se existe no sprite;
- se tem frames;
- se está reiniciando todo tick;
- se evento está chamando errado;
- se há conflito entre idle, run, jump, fall, sprint e slide;
- se direção esquerda/direita está correta;
- se o sprite espelha corretamente.

Não criar sprite novo.
Não gerar imagem.
Não substituir animações sem autorização.

REGRAS SOBRE MOVIMENTO:

Se o relatório apontar problema de movimento, verificar:
- controles;
- WASD;
- setas;
- Platform behavior;
- aceleração;
- desaceleração;
- gravidade;
- força de pulo;
- corrida;
- sprint;
- slide;
- controle no ar;
- colisão com chão.

Fazer ajustes pequenos e testáveis.

REGRAS SOBRE COLISÃO:

Se o relatório apontar problema de colisão, verificar:
- chão;
- plataformas;
- bordas;
- objetos decorativos com colisão indevida;
- zona de morte;
- checkpoints;
- final da fase;
- obstáculos de slide.

Priorizar colisão simples e retangular.

Separar visual e colisão quando necessário.

REGRAS SOBRE SKILLS:

Se o relatório apontar bagunça nas skills, a resolver pode organizar apenas as skills, sem tocar no jogo.

Verificar conflitos como:
- bakups antigo fazendo função de bkp;
- atualizar-arquivo misturando GitHub e backup;
- construct3-parkour-polish misturando correção e polimento;
- resolver antigo sem menu;
- manutenção antiga sem separação clara;
- skills com nomes acentuados que podem causar problema;
- comandos duplicados.

Recomendar nomes limpos:
- bkp
- manutencao
- resolver
- correcao
- fase-parkour
- animacoes
- pixel-assets
- github-sync

REGRA SOBRE TESTES:

Não dizer que testou jogando se não testou.

Usar categorias:

Teste real:
- quando rodou o jogo/export HTML5/preview.

Validação estrutural:
- quando validou arquivos, zip, JSON, pastas, Git e consistência.

Não foi possível testar:
- quando depende do Construct 3, export HTML5 ou navegador.

Se a correção envolver jogabilidade, movimento, colisão ou animação, pedir export HTML5 no final.

FORMATO DE RESPOSTA QUANDO NÃO HOUVER RELATÓRIO:

# RESOLVER PÓS-MANUTENÇÃO

Não encontrei um relatório de manutenção recente.

Para usar esta skill corretamente, rode primeiro:

--m all

ou envie o relatório de manutenção que devo resolver.

Nenhuma alteração foi feita.

FORMATO DE RESPOSTA QUANDO APENAS MOSTRAR MENU:

# RESOLVER PÓS-MANUTENÇÃO

Escolha como deseja resolver:

1 - Resolver apenas problemas críticos
2 - Resolver problemas críticos e importantes
3 - Resolver um problema específico do relatório
4 - Criar plano de correção sem alterar arquivos
5 - Resolver tudo que for seguro em etapas
6 - Validar arquivo .c3p principal antes de corrigir
7 - Corrigir organização de arquivos/skills sem mexer no .c3p

Exemplos:
--r 1
--r 2
--r 3
--r 4
--r 5
--r 6
--r 7
--r all

FORMATO FINAL OBRIGATÓRIO APÓS RESOLVER:

# PÓS-MANUTENÇÃO DO PROJETO

## Comando recebido
...

## Relatório usado como base
...

## Arquivo oficial
...

## Backup realizado
...

## Problemas encontrados no relatório

CRÍTICO:
1. ...

IMPORTANTE:
1. ...

MELHORIA:
1. ...

OPCIONAL:
1. ...

## Correções feitas em ordem

1. ...
2. ...
3. ...

## Arquivos alterados

1. ...
2. ...

## Arquivos criados

1. ...
2. ...

## Arquivos removidos

Nenhum.

## Problemas resolvidos

- ...

## Problemas não resolvidos

- ...

## Validação feita

Teste real:
...

Validação estrutural:
...

Não foi possível testar:
...

## Riscos restantes

- ...

## Preciso que você teste

- ...

## Pedido final

Se a correção envolveu jogabilidade, movimento, animação ou colisão:
Para eu ter certeza jogando de verdade, faça um export em HTML5 e teste no navegador. Se possível, me envie a pasta ou zip exportado para verificação.

Se não envolveu jogabilidade:
Nenhum teste jogável obrigatório. Apenas revise os arquivos alterados.

## Próximo passo recomendado

...

CONTEÚDO QUE DEVE SER CRIADO NO SKILL.md:

Crie ou substitua o arquivo:

C:\DOCUMENTOS\Jogo\.agents\skill\resolver\SKILL.md

com documentação clara contendo:

---
name: resolver
description: Use esta skill quando o usuário digitar "--r", "resolver", "--resolver", "pós manutenção" ou pedir para resolver problemas encontrados após uma manutenção. A skill usa o relatório da manutenção como base, resolve problemas em ordem segura, faz backup antes de mexer em .c3p e não cria features novas.
---

A documentação deve conter:
- função principal;
- comando --r;
- diferença entre --m, --r, --correcao e --bkp;
- comportamento quando não há relatório;
- menu do --r;
- interpretação das opções;
- regra de backup;
- regra de Git;
- regra de arquivos sensíveis;
- regra de .gitignore;
- regra de pastas vazias e .gitkeep;
- regra de .c3p;
- validação de .c3p;
- regras sobre relatório de manutenção;
- correção em ordem;
- escopo do jogo;
- regras de animação;
- regras de movimento;
- regras de colisão;
- regras sobre skills;
- regra de testes;
- formato de resposta final.

REGRAS FINAIS:

A skill resolver existe para resolver problemas encontrados depois da manutenção.

Se houver dúvida, pare e pergunte.

Nunca altere .c3p sem backup.

Nunca use OneDrive.

Nunca gere imagem.

Nunca use API de imagem.

Nunca crie fase nova do zero.

Nunca transforme o jogo em outro gênero.

Nunca apague arquivos importantes.

Nunca apague backups antigos.

Nunca use git reset --hard.

Nunca use git push --force.

Nunca diga que testou jogando se não testou.

Nunca esconda problema.

O objetivo é resolver problemas reais em ordem segura, sem bagunçar o projeto.

No final, entregue um relatório dizendo:
- se a pasta resolver foi criada;
- se o SKILL.md foi criado ou atualizado;
- se o comando --r foi configurado;
- o que mudou em relação ao resolver antigo;
- como a skill se conecta com --m, --correcao e --bkp;
- como devo usar a skill agora.