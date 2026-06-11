# Relatorio de playtest - ParkourGamer

Data: 2026-06-11
Build testada: `C:\DOCUMENTOS\Jogo\ParkourGamer.zip`
Ambiente: export HTML5 do Construct servido em `http://127.0.0.1:4177/index.html`

## Resumo

O jogo abre no desktop, renderiza corretamente em 1280x720 e os controles principais respondem. A direcao visual da fase esta forte: skyline em pixel art, boa leitura das plataformas e objetos de aviso coerentes com o tema urbano.

Os principais problemas encontrados estao em responsividade/mobile e comunicacao de controles. Em mobile, tanto retrato quanto paisagem resultaram em tela preta na captura automatizada, mesmo com o canvas presente no DOM. No desktop, nao existe HUD ou texto de instrucao, e o pulo usa `W`/seta para cima, nao Space, o que pode confundir jogadores acostumados com platformers.

## Achados

### Alta prioridade - Mobile aparece como tela preta

Evidencias:
- `screen_mobile.png`
- `screen_mobile_landscape.png`

O canvas existe e ocupa a viewport, mas a imagem capturada fica totalmente preta em retrato e paisagem. Isso sugere problema de renderizacao/orientacao no contexto mobile automatizado ou ausencia de fallback/estado visual quando o navegador simula dispositivo movel.

Impacto: jogadores mobile podem encontrar uma tela vazia, especialmente porque o manifesto define orientacao landscape e fullscreen.

Subsistema provavel: configuracao de export/mobile do Construct, orientacao, WebGL/canvas scaling ou inicializacao do renderer em mobile.

### Media prioridade - Falta instrucao visivel de controles

O jogo nao exibe texto ou HUD de controle. Pelos eventos do build, os controles sao:
- mover: setas esquerda/direita ou A/D
- pular: W ou seta para cima
- slide: S ou seta para baixo
- sprint: duplo toque lateral

Durante o primeiro teste, Space nao pulou. Isso e um risco de UX porque Space e expectativa comum em jogo de plataforma no teclado.

Impacto: jogador pode achar que o pulo nao funciona.

Subsistema provavel: onboarding/HUD/input mapping.

### Media prioridade - Sprint/slide precisam de feedback mais claro

O sprint move mais rapido e o slide altera a postura, mas nao ha feedback de estado, particula, som, rastro ou indicador de cooldown. Como o level design usa placas de slide/sprint, a acao deveria comunicar claramente quando entrou e quando acabou.

Impacto: dificuldade de aprender timing e diagnosticar erro do jogador.

Subsistema provavel: animacao do personagem, FX, HUD leve ou audio.

### Baixa prioridade - Avisos WebGL/performance no ambiente headless

Console registrou renderizacao via WebGL 2 com SwiftShader e aviso de software rendering/performance caveat. Isso e esperado no navegador headless usado no teste, mas vale validar em navegador normal com GPU real.

Impacto: baixo para build, medio se aparecer em maquinas reais sem aceleracao.

Subsistema provavel: ambiente de teste/renderizador.

## Pontos positivos

- Boot desktop sem erro fatal.
- Canvas preenche corretamente 1280x720.
- Arte de fundo e cenario tem identidade visual consistente.
- Leitura das plataformas, gaps e placas de perigo esta clara no desktop.
- Movimento lateral, pulo com `ArrowUp`/`W`, sprint por duplo toque e slide por `ArrowDown`/`S` estao mapeados no build.

## Evidencias geradas

- `screen_initial.png`: estado inicial desktop.
- `screen_move_jump.png`: movimento lateral com tentativa inicial de pulo usando Space.
- `screen_sprint.png`: sprint/progresso lateral.
- `screen_slide.png`: slide.
- `screen_correct_jump_1.png`, `screen_correct_jump_2.png`, `screen_correct_jump_3.png`: passada com pulo correto usando seta para cima.
- `screen_mobile.png`: mobile retrato.
- `screen_mobile_landscape.png`: mobile paisagem.
- `playtest-results.json`: console e estado do canvas.
- `playtest-long-results.json`: tentativa longa e estado mobile.

## Recomendacoes

1. Adicionar uma tela curta ou prompt contextual com controles: A/D ou setas, W/Up para pular, S/Down para slide, duplo toque para sprint.
2. Considerar mapear Space como pulo tambem.
3. Investigar tela preta em mobile; testar em navegador real no celular e em Chrome/Edge desktop com device emulation.
4. Adicionar feedback de sprint/slide: pequena animacao, rastro, som, ou mudanca visual mais forte.
5. Validar uma passada completa ate a fase 2 em navegador com GPU real, porque o teste automatizado confirma boot e verbos principais, mas nao garante conclusao completa do jogo.
