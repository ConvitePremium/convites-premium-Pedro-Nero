/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo.
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Pedro Nero",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5588988281435",
    mensagem: "Olá! Confirmo minha presença no aniversário do Pedro Nero."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "google.com/maps/place/Travessuras+Buffet/data=!4m2!3m1!1s0x0:0xd6c4b02555c3a45a?sa=X&ved=1t:2428&ictx=111",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: false,
    manual: true,
    contagem: true
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":31.712773312699678,"top":93.90507341119181,"width":35.74440270567093,"height":4.273875856144915} },
    manual: { mostrarTexto:true, posicao: {"left":35.393290734824284,"top":90.22266642154274,"width":28.383399061501596,"height":3.353276166430366} },
    contagem: { mostrarTexto:true, posicao: {"left":30.48593937200479,"top":91.94879056539783,"width":37.78914674021566,"height":4.043729774752007} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:13.181315457069418, top:60.46603504495421, width:19.64355312204473, height:11.449252034014982 },
        map: { left:39.877708602195895, top:60.23587558732271, width:19.292465283626143, height:11.399863780795407 },
        gift: { left:66.46063047811518, top:60.1099680847421, width:19.567092651757186, height:11.52034966267883 },
        manual: { left:25.76906368406491, top:76.46142454156453, width:19.292465283626143, height:11.399863780795407 },
        countdown: { left:53.783320424201435, top:75.87521609668785, width:19.567092651757186, height:11.52034966267883 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  // corNumero altera somente a cor dos números.
  // corLegenda altera a cor de Meses, Dias, Horas, Min e Seg.
  // Aceita hexadecimal, nome de cor ou rgb().
  contagem: {
    dataEvento: "2026-09-07T17:30:00",
    textoFinal: "A festa começou!",
    corNumero: "#330099",
    corLegenda: "#FFCC00",
    posicao: { left:17.405747678714057, top:50.41656897266649, width:63.96165510183707, height:13.123130085037458 }
  }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
