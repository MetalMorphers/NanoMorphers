<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>MORPHERS ENGINE</title>
  <link rel="stylesheet" href="./style.css">
  <link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'>
  <link rel="icon" href="M_icon_32x32" sizes="32x32" type="image/x-icon">
<style>
    #finalForm { display: none; }
    #projectLogo { display: none; }
  </style>  
</head>
<body>

<!-- TOAST -->
<div id="toast">PRESS ? FOR CONTROLS</div>

<!-- PANEL -->
<div id="shortcut-panel">

  <div id="shortcut-panel-toggle">
    <span id="toggle-label">CONTROLS [?]</span>
  </div>

  <!-- FILTER FIXE -->
  <div id="filter-fixed">
    <span class="filter-label">VISUAL FILTER</span>
<div class="text-morph" id="filter-morph">
  <div class="circle"></div>      <!-- ← circle en premier -->
  <div class="text-container">
    <span class="filter-OFF">OFF</span>
    <span class="filter-VIVID">VIVID</span>
    <span class="filter-GAMEBOY">GAMEBOY</span>
  </div>
</div>
  </div>

  <!-- CONTENU SCROLLABLE -->
  <div id="shortcut-panel-content">
    <div class="panel-inner">

      <img id="projectLogo"
        src="https://raw.githubusercontent.com/MetalMorphers/NanoMorphers/refs/heads/main/m-LG001-300.png"
        alt="MORPHERS Logo">

      <center>
        <h2>MORPHERS<br>▣ REVIVAL ▣<br>PROTOCOL</h2>
      </center>

      <hr class="pixel-divider">

      <p>
        Morphers are Invaders confined within 25×25 Pixel Art armors.<br>
        They are not alive — they are contained.<br>
        Stabilized by code. Locked in controlled dormancy.<br><br>
        Each Morpher carries a unique DNA — a color-based data signature.<br>
        This DNA is linked to a hidden Glyph Matrix.<br><br>
        The Glyphs form a sequence.<br>
        Without activation, nothing happens.
      </p>

      <hr class="pixel-divider">
      <h2>▫️ YOUR ROLE</h2>
      <p>
        You control the Worm.<br>
        The Worm is a residual fragment of the original Invaders,<br>
        manifesting through your pointer.<br><br>
        Your objective is to synchronize:<br><br>
        > The Morpher's DNA<br>
        > The Glyph Matrix
      </p>

      <hr class="pixel-divider">
      <h2>▫️ PROTOCOL SEQUENCE</h2>
      <p>
        <span style="color: #626262;">1. INITIALIZE</span><br>
        > Synchronize with a Core Glyph to activate the Matrix.<br><br>
        <span style="color: #626262;">2. DECODE</span><br>
        > Trace the Glyphs in the correct order.<br>
        > Precision is essential.<br><br>
        <span style="color: #626262;">[-]</span> Incorrect sequence → Worm integrity degrades.<br>
        <span style="color: #626262;">[+]</span> Exact sequence → Strengthens the Worm and stabilizes the link.
      </p>

      <hr class="pixel-divider">
      <h2>▫️ REVIVAL</h2>
      <p>
        If synchronization is achieved:<br>
        > A bio-digital reaction is triggered.<br>
        > Armor and organic essence begin to fuse.<br>
        > Containment collapses.<br><br>
        This is not resurrection.<br>
        This is mutation.<br>
        Metal and living structure merge into a new hybrid state.
      </p>

      <hr class="pixel-divider">
      <h2>▫️ CONDITIONS</h2>
      <p>
        Revival requires two inseparable conditions:<br><br>
        > Your interaction<br>
        > Permanent Ordinals inscription<br><br>
        Without interaction, no activation.<br>
        Without inscription, no persistence on-chain.
      </p>

      <hr class="pixel-divider">
      <h2>▫️ RESULT</h2>
      <p>
        If the ritual is completed:<br>
        > The Morpher exits dormancy<br>
        > The inscription becomes reactive<br>
        > A unique bio-mechanical entity is permanently anchored to Bitcoin<br><br>
        The Morpher is no longer confined.<br>
        It is <strong>AWAKENED</strong>.
      </p>

      <hr class="pixel-divider">

      <!-- TYPEWRITER END PHRASE -->
      <div id="end-phrase">
        <span id="typewriter-line1"></span>
        <span id="typewriter-line2"><span class="tw-cursor"></span></span>
      </div>

    </div>
  </div>

</div>


<div id="stars"></div>
 <audio loop="loop" id="synthwave-track">
    <source src="https://github.com/MetalMorphers/NanoMorphers/raw/refs/heads/main/snd%20morpher%20Untitled11.ogg" type="audio/ogg"/>
  </audio>

  <!-- Placeholder son glyphs Phase 1 -->
<audio id="glyph-sound">
 <!-- <source src="https://github.com/MetalMorphers/NanoMorphers/raw/refs/heads/main/snd%20morpher%20Untitled2.mp3" type="audio/mp3"/> -->
 <source src="https://github.com/MetalMorphers/NanoMorphers/raw/refs/heads/main/snd%20morpher%20Untitled001.ogg" type="audio/ogg"/>
</audio>
  
<!-- partial:index.partial.html -->
<div class="canvas-container">
<!-- <div class="scanlines"></div> -->
<button class="button" href="#" onclick="show('popup')">UNLEASH</button>
    <div class="scan-line"></div>
    <canvas id="viewport"></canvas>
    <canvas id="matrix"></canvas>
    <div class="box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>
  
<!-- Glyphs cachés - source pour Phase 2 switch -->
<div id="glyphpattern" style="display:none; position:absolute;"></div>
    <!-- This is what will be included inside the popup -->
<div>
  <a href="#" onclick="hide('popup')" class="overlay" id="overlay"></a>
</div>


<!-- PHASE 1 : PETIT POPUP -->
<div class="popup popup-small" id="popup-small">
  <div class="global-container" style="--dna-color:#666666; --dna-rgb:102 102 102;">
    <div class="vignette"></div>
    <div class="wall"></div>
    <div class="horizon-line"></div>
    <div class="floor"></div>

  <!-- Morpher gris Phase 1 - pas de id="restart" -->
<div class="card card-phase1" style=" --gray-mode: 1; --dna-color:#2d2d95;">
  <div class="avatar-wrap">
    <canvas class="avatar-canvas" width="25" height="25"></canvas>
    <canvas class="avatar-mirror" width="25" height="25"></canvas>
  </div>
</div>

  </div>
</div>

<!-- PHASE 2 : GRAND POPUP PLEIN ÉCRAN -->
<div class="popup popup-large" id="popup-large" style="display:none;">
  <btn class="icon-close" onclick="hide('popup-large')" aria-label="Close"></btn>

  <div class="border-wrap">
  <!-- ⚙️ --dna-rgb est injecté par JS via window.MORPHER.dnaRgb -->
  <div class="global-container" id="global-container-large" style="">
    <div class="vignette"></div>
    <div class="wall"></div>
    <div class="horizon-line"></div>
    <div class="floor"></div>
    <div class="popup-content">
      <div id="glyphpattern-large" style="display:none;"></div>
        <div class="parent" id="morpher-view"> <!-- DEBUT -->
        <div class="beamcard active"> <!-- DEBUT -->
          <div class="back"></div>
          <div class="ground"></div>
          <div class="beam"></div>
        <div class="debris"> <!-- DEBUT -->
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
		</div> <!-- FIN -->
          <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
          <!-- La carte -->
          <!-- ⚙️ --Morphersrc est injecté par JS via window.MORPHER.img -->
          <div class="card" id="restart" style="">
            <div class="avatar-wrap">
              <canvas class="avatar-canvas" width="25" height="25"></canvas>
              <canvas class="avatar-mirror" width="25" height="25"></canvas>
            </div>
          </div>
        </div> <!-- FIN -->
      </div> <!-- FIN -->
    </div>

 <!-- Bouton switch en bas -->
<div class="username" id="switch-btn">
  <span class="bracket">¦</span>
  <!-- ⚙️ ID du Morpher injecté par JS via window.MORPHER.id -->
  <span class="switch-label" id="morpher-label">MORPHER #???</span>
  <span class="bracket">¦</span>
</div>
<!-- Hold to share -->
<div id="share-zone">
  <div id="share-hint">
    <div id="share-progress-bar"></div>
    [ HOLD <span id="share-hold-btn">▣</span> TO SHARE ]
  </div>
</div>

  </div><!-- FIN global-container -->
  </div><!-- FIN border-wrap -->
</div><!-- FIN popup-large -->
</div><!-- FIN canvas-container -->
<style>
  @import 'https://fonts.googleapis.com/css?family=Press+Start+2P';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Silkscreen:wght@400;700&display=swap');
  * {
  box-sizing: border-box;
}
/* === BORDER ANIMATION === */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@keyframes border-spin {
  0%   { --gradient-angle: 0deg; }
  100% { --gradient-angle: 360deg; }
}

.border-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding: clamp(2.5px, 0.4vmin, 4px);
  background: conic-gradient(
    from var(--gradient-angle),
    transparent 0deg,
    transparent 60deg,
    var(--dna-color) 120deg,
    transparent 180deg,
    transparent 240deg,
    var(--dna-color) 300deg,
    transparent 360deg
  );
  animation: border-spin 4s linear infinite;
}
/* === END BORDER ANIMATION === */
/* === SHARE ZONE === */
#share-zone {
  position: absolute;
  bottom: clamp(8px, 2vmin, 20px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3px, 0.8vmin, 8px);
  z-index: 200;
  opacity: 0; /* ✨ caché par défaut */
  transition: opacity 0.4s ease;
  pointer-events: none;
}
#share-zone.visible {
  opacity: 1;
  pointer-events: all;
}
#share-hint {
  font-family: "Silkscreen", consolas, sans-serif;
  font-size: clamp(0.5rem, 1vmin, 0.7rem);
  color: #ffffff66;
  letter-spacing: 0.15em;
  text-align: center;
  pointer-events: none;
  position: relative;
  overflow: hidden;
  padding: clamp(3px, 0.6vmin, 6px) clamp(6px, 1.2vmin, 10px);
}

#share-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: rgb(var(--dna-rgb) / 0.35);
  pointer-events: none;
  transition: width 0.05s linear;
  z-index: 0;
}

#share-hint > *:not(#share-progress-bar) {
  position: relative;
  z-index: 1;
}

#share-hold-btn {
  color: #ffffffbb;
  cursor: pointer;
  pointer-events: all;
  padding: 4px 4px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.3s ease;
  font-size: clamp(0.5rem, 1vmin, 0.7rem);
  vertical-align: baseline;
  position: relative;
  z-index: 1;
}

#share-hold-btn:hover {
  color: var(--dna-color);
}

#share-hold-btn.holding {
  color: var(--dna-color);
}


/* ===================== TEXT ===================== */
.popup-large .username {
  position: absolute;
  bottom: clamp(1.5rem, 2.5vmin, 1.8rem);
  /* Centrage robuste */
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  z-index: 200;
  font-family: "Silkscreen", consolas, sans-serif;
  font-size: clamp(1.1rem, 2.1vmin, 1.4rem); /* vmin = adaptatif mobile */
  letter-spacing: 0.25em;
  line-height: 1.1;
  /* Flex pour brackets + label toujours centrés */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(3px, 0.8vmin, 8px);
  width: 100%;
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center; 
  color: #cfcfcf;
  text-shadow: 
0.4vmin 0.4vmin 0vmin #000000;
  -webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}

.bracket {
  color: var(--dna-color);
  font-size: clamp(1.1rem, 2.1vmin, 1.4rem);
  line-height: 1;
  flex-shrink: 0; /* brackets ne rétrécissent jamais */
}

@keyframes arcade-blink {
  0%,  49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Les ¦ restent fixes — seul le texte du label clignote !
.switch-label {
  animation: arcade-blink 1.8s step-end infinite;
}
#switch-btn.glitching .switch-label {
  animation: none; /* pause blink pendant glitch
}
*/

#switch-btn {
  animation: arcade-blink 1.8s step-end infinite;
}
#switch-btn.glitching {
  animation: none; /* pause blink pendant glitch */
}

/* Glitch switch label */
.switch-label {
  white-space: nowrap;
  position: relative;
  display: inline-block;
  overflow: hidden;
  /* Largeur fixe basée sur le texte le plus long */
  min-width: 17ch; /* largeur min pour les labels de switch */
  text-align: center;
}

.switch-label .bars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.switch-label .bars .bar {
  width: 100%;
  flex: 1;
  background: currentColor;
  animation: 0.6s cubic-bezier(0.4, 0.2, 0.175, 1) forwards;
}
.switch-label .bars .bar:nth-child(odd) {
  transform: translateX(100%);
  animation-name: slide-left;
}
.switch-label .bars .bar:nth-child(even) {
  transform: translateX(-100%);
  animation-name: slide-right;
}
.switch-label .bars .bar:nth-child(1) { animation-delay: 0.3s; }
.switch-label .bars .bar:nth-child(2) { animation-delay: 0.2s; }
.switch-label .bars .bar:nth-child(3) { animation-delay: 0.5s; }
.switch-label .bars .bar:nth-child(4) { animation-delay: 0.3s; }
.switch-label .bars .bar:nth-child(5) { animation-delay: 0.4s; }

.switch-label .glitch {
  opacity: 0;
  animation: reveal forwards 0.3s;
  animation-delay: 0.6s;
}

.switch-label .glitch span:not(:last-child) {
  --ratio: calc(100% / var(--slice-count));
  --top: calc(var(--ratio) * (var(--i) - 1));
  --bottom: calc(var(--ratio) * (var(--slice-count) - var(--i)));
  position: absolute;
  white-space: nowrap;
  clip-path: inset(var(--top) 0 var(--bottom) 0);
  animation-duration: 0.3s;
}
.switch-label .glitch span:nth-child(odd) { animation-name: slide-from-left; }
.switch-label .glitch span:nth-child(even) { animation-name: slide-from-right; }
.switch-label .glitch span:last-child {
  opacity: 0;
  animation: reveal steps(1) forwards;
  animation-delay: 1.2s;
}

@keyframes slide-from-left {
  from { transform: translateX(-20%); }
  to   { transform: translateX(0); }
}
@keyframes slide-from-right {
  from { transform: translateX(20%); }
  to   { transform: translateX(0); }
}
@keyframes reveal {
  to { opacity: 1; }
}
@keyframes slide-left {
  to { transform: translateX(-100%); }
}
@keyframes slide-right {
  to { transform: translateX(100%); }
}




/* === FILTER 1 — VIVID === */
/* ✨ EDITABLE : ajuste brightness, saturate, contrast */
.canvas-container.filter-vivid {
/*filter: brightness(1.15) saturate(1.6) contrast(1.2);*/
  filter: brightness(1.2) saturate(1.5) contrast(1.1);
}

/* === FILTER 2 — GAMEBOY === */
.canvas-container.filter-gameboy {
  filter: grayscale(1) sepia(0.6) hue-rotate(60deg)
          brightness(1.05) contrast(1.1);
  /*background-color: #0f380f !important;*/
}
.canvas-container.filter-gameboy * {
  image-rendering: pixelated;
}
/* Scanline GameBoy */
/*
.canvas-container.filter-gameboy::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    linear-gradient(#12101000 50%, #00000026 50%),
    linear-gradient(90deg, #ff000005, #00ff0004, #0000ff05);
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
  z-index: 999999;
  animation: scanline 8s linear infinite;
}
*/


body.gameboy-scanlines::after {
  content: "";
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    linear-gradient(#12101000 50%, #00000026 50%),
    linear-gradient(90deg, #ff000005, #00ff0004, #0000ff05);
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
  z-index: 999998; /* juste en dessous du panel */
  animation: scanline 8s linear infinite;
}
 /* ****************************************************************** */







:root {
  /* Couleurs converties en HEX et RGBA */
  --clr-primary: #2d2d95; /* Équivalent de hsla(280,70%,70%,1) */
  --labs-sys-color-sun-glow: #2d2d95;
  --clr-secondary-darker: #161616; /* Équivalent de hsla(160,45%,10%,1) */
  /*--grid-size: clamp(35px, 4vw, 2rem); /* Ajuste ici */
  /* NEW: ton Morpher 25×25 en base64 (remplace les anciens liens 575px) */
  --morpher-img: url("");
}
#MorpherSource {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}




@font-face {
  font-family: 'space-invaders';
  src: url('https://cdn.jsdelivr.net/gh/MetalMorphers/RETRO-MECHA@main/space-invaders.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'alien-alphabet';
  src: url('https://cdn.jsdelivr.net/gh/MetalMorphers/RETRO-MECHA@main/alien-alphabet.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
/*
.scanlines {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, 
        #0000001a 50%, 
        #ffffff1a 50%);
    background-size: 100% 2px;
    pointer-events: none;
    animation: scanline 0s linear infinite;
}*/

@keyframes scanline {
    from { transform: translateY(-4px); }
    to { transform: translateY(0); }
}


#stars {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

.canvas-container {
  position: fixed; /* 👈 pas absolute */
  margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
  width: min(98vmin, 100%);
  height: min(98vmin, 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;  /*optimise l’animation du shake */
  
}

.box span{
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;  
  box-shadow: #60bc5666 0px 2px 10px 0px,
      #60bc5680 0px 2px 25px 0px;
}

.box span:nth-child(1)
{
  transform:rotate(0deg);
}

.box span:nth-child(2)
{
  transform:rotate(90deg);
}

.box span:nth-child(3)
{
  transform:rotate(180deg);
}

.box span:nth-child(4)
{
  transform:rotate(270deg);
}

.box span:before
{
  content: '';
  position: absolute;
  width:100%;
  height: 1.5vmin;
  background: #60bc5685;
  animation: animate 9s linear infinite;
}

@keyframes animate {
  0% {
  transform:scaleX(0);
  transform-origin: left;
  }
  50%
  {
    transform:scaleX(1);
  transform-origin: left;
  }
  50.1%
  {
    transform:scaleX(1);
  transform-origin: right;
    
  }
  
  100%
  {
    transform:scaleX(0);
  transform-origin: right;
    
  }
}

#matrix, #viewport {
  width: 95vmin; /* Largeur proportionnelle à la taille de la fenêtre */
  height: 95vmin; /* Hauteur proportionnelle à la taille de la fenêtre */
  position: absolute;
  margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0%;
      image-rendering: -webkit-optimize-contrast; /* Pour compatibilité Edge */
      image-rendering: pixelated; /* Fonctionne bien sur la majorité des navigateurs */
       /*box-shadow: 10px 10px #13131380;*/
}

    #matrix {
      z-index: 1;
      opacity: 1;
    }

    #viewport {
      z-index: 2;
      opacity: 1;
    }

html, body {
      cursor: crosshair;
      /*font-family: "Press Start 2P", consolas, sans-serif;*/
      font-family: "Silkscreen", consolas, sans-serif;
      font-size: 2.5vmin;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
  -webkit-user-select: none; /* Empêche la sélection */
  user-select: none; /* Empêche la sélection */
  pointer-events: auto; /* Autorise les événements de clic/touch */
  text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased; /* Pour Safari et Chrome */
    -moz-osx-font-smoothing: grayscale; /* Pour Firefox */
  /*background: #161616;*/
  background: #111111;
  /*background: #212324;*/
  /*background-image:
    radial-gradient(ellipse, #0000 20%, #0004 40%, #000 90%),
    repeating-linear-gradient(to bottom, transparent 0 25px, #2a2a2aa9 25px 26px),
    repeating-linear-gradient(to right, transparent 0 25px, #2a2a2aa9 25px 26px),
    radial-gradient(ellipse 50vmin 50vmin at 50% 50%, #2d2d9560, transparent);
  /*-webkit-animation: move 0.0s linear infinite;
          animation: move 0.0s linear infinite;*/
    }

button {
  position: relative;
  z-index: 3;
  margin-top: 50px;
  background-color: #38383800;
  border: 1px solid #f04949;
  color: #c21313;
  font-size: clamp(0.8rem, 1.3vmin, 1rem);
  padding: 10px 20px;
  
}

button:hover {
  background-color: #2e2e2e;
  color: #cacaca;
  border: 1px solid #f0494900;
  transition: all 0.3s ease 0s;
}
/******************************************************************************/
 /* Overlay pour le fond flou */
  .overlay {
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000000; /* Couleur sombre semi-transparente*/
    -webkit-backdrop-filter: blur(0px);  /*Effet de flou */
    backdrop-filter: blur(0px);  /*Effet de flou */
    display: none; /* Masqué par défaut */

    touch-action: none; /* Désactive les actions tactiles par défaut */
    -webkit-user-select: none; /* Empêche la sélection sur mobile */
    user-select: none;
    -webkit-tap-highlight-color: transparent; /* Supprime la surbrillance au touché */

  }



.icon-close {
  visibility: hidden;
  position: fixed;
  font-family: 'space-invaders', monospace;
  top: 3.5%;
  right: 0%;
  font-size: clamp(0.5rem, 1vmin, 0.7rem);
cursor: pointer;
background:transparent;
border: none;
z-index: 10000;
color: var(--dna-color);
text-decoration: none;
animation: pulse 1.8s ease-in-out infinite;
text-shadow: 
0.4vmin 0.4vmin 0vmin #000000;
}
@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.icon-close::after {
  content: 'M'; /* ← symbole du worm : change pour '6', 'A', etc. */
  position: relative;
  transform: scale(1);
}
.global-container {
  position: relative;   /* important pour que le popup se place correctement */
  width: 100%;
  height: 100%;


 display: flex;
  flex-direction: column;
  align-items: center; /* Centre tout horizontalement */
  background-color:#000;
  /* --- CHANGEMENT 1 : Padding ajusté --- */
  /* On réduit le haut (25px au lieu de 40px) pour remonter l'avatar */
  /* On garde un peu d'espace en bas (35px) */
  padding: 15px 0 35px 0;
  /*backdrop-filter: blur(0px); /* Flou */
  /*background: var(--card-bg-color);*/
 
  /*border: 2px solid rgb(var(--dna-rgb) / 0.6);*/
  /*border: 2px solid var(--dna-color);*/
  
  /*transform: scale(1.5);*/
  
   overflow: hidden; 
     scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
            /* Perspective proportionnelle au popup */
            perspective: 60vmin;

}
.global-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.global-container::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(var(--dna-rgb) / 0.3);
    /* Ensure it doesn't block clicks on the start button */
}
/* Filtre sombre switch glyphs */
.global-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #000000d1;
  /*z-index: 99;*/
  z-index: 100;
  opacity: 0;
  transition: opacity 0.8s ease;
  pointer-events: none;
}

/* Activer le filtre */
.global-container.grid-dark::after {
  opacity: 1;
}

/* Morpher devient comme phase 1 quand grid-dark actif */
.grid-dark .beamcard.active .card .avatar-canvas {
  animation: cardsquash 1s ease-in forwards 0.472s; /* MorpherPulse retiré */
}
#morpher-view {
  transition: opacity 0.8s ease;
}

:root {

   /* ADN piloté par le HTML : style="--dna-color:#2d2d95" */
  --dna-color: var(--dna, #2d2d95);           /* version HEX (si besoin) */
  --dna-rgb: var(--dna-rgb, 45 45 149);      /* version RGB NUMÉRIQUE */

    --grid-size: clamp(25px, 3vw, 45px);        
    /*--grid-size: 35px;       */ 
    --line-width: 2px;
    
    /* ON DÉFINIT DEUX VITESSES */
    --speed-floor: 0.8s; /* Le sol bouge à vitesse normale */
    --speed-wall: 1.6s;  /* Le mur est 3x plus lent pour compenser la perspective */
}
     
        /* --- COINS SOMBRES (Vignette) --- */
          .vignette {
            position: absolute;
            inset: 0;
             
    /*width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, 
        #0000001a 50%, 
        #ffffff1a 50%);
    background-size: 100% 2px;
    pointer-events: none;
    animation: scanline 0.2s linear infinite;*/
    
            
            background: radial-gradient(ellipse, #0000 20%, #15151550 40%, #151515 95%);
            z-index: 40; 
            pointer-events: none;
        }

        /* --- GRILLE --- */
  /* --- GRILLE (Base commune) --- */
.floor, .wall {
    position: absolute;
    background-image: 
        linear-gradient(to right, var(--dna-color) var(--line-width), transparent var(--line-width)),
        linear-gradient(to bottom, var(--dna-color) var(--line-width), transparent var(--line-width));
    background-size: var(--grid-size) var(--grid-size);
    /* On enlève l'animation générique ici */
}

        /* MUR (Synchronisé au centre) */
    .wall {
    width: 100%; height: 50%;
    top: 0; opacity: 0.5;
    background-position: center bottom;
    animation: moveGridDown var(--speed-wall) linear infinite;
    animation-play-state: play; /* <--- L'animation s'arrête net */
}

        /* SOL (3D Accentuable) */
     /* SOL (On applique la vitesse rapide) */
.floor {
    width: 300%; 
    height: 160%;
    top: 50%; left: -100%;
    transform: rotateX(80deg); 
    transform-origin: top center;
    opacity: 1;
    background-position: center top;
    mask-image: linear-gradient(to bottom, #161616 0%, transparent 90%);
    animation: moveGridDown var(--speed-floor) linear infinite;
    animation-play-state: play; /* <--- L'animation s'arrête net */
}

        /* LIGNE HORIZON */
        .horizon-line {
            position: absolute; top: 50%;
            width: 100%; height: 0.1vmin;
            background: var(--dna-color);
            box-shadow: 0 0 1.5vmin 0.5vmin var(--dna-color);
            z-index: 10;
        }

        /* ANIMATION GAUCHE (Calculée en vmin) */
     /* Animation vers le BAS (Comme si le sol venait vers toi) */
/* L'animation (Verticale comme demandé) */
@keyframes moveGridDown {
    from { background-position-y: 0; }
    to   { background-position-y: var(--grid-size); }
}

  /* Pop-up par-dessus l'overlay */
  .popup {
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70vmin;
    height: 94vmin;
    display: none; /* Masqué par défaut */
    align-items: center;
    justify-content: center;
    /*border: 0.1vmin solid #245f35a9;*/
    /*box-shadow: 0 7px 20px 5px #00000088;*/
    /*box-shadow: 0 0px 25px 5px #2d2d95;*/
    /*box-shadow: 0 0px 0.5vmin 0.5vmin #2d2d9540;*/
     box-shadow:
      1vmin 1vmin 0vmin #2a2a2a00;
    overflow: hidden; /* Masque les éléments débordants */
    /*padding: 20px;
    box-sizing: border-box;*/
  }
.popup::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.popup {
  transform: translate(-50%, -50%) scale(0.3);
  opacity: 0;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.6s ease;
}
.popup.popup-zoom-in {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.popup.popup-zoom-out {
  transform: translate(-50%, -50%) scale(0.3);
  opacity: 0;
}

/* Phase 1 : visible mais petit (scale 0.3) */
/* Phase 1 : petit popup taille réelle propre */
.popup-small {
  width: 22vmin;
  height: 28vmin;
  --grid-size: 12px;
  --line-width: 1px;
  cursor: pointer;
}

.popup-small.popup-visible {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

/* Grille adaptée Phase 1 */
.popup-small .wall {
  height: 45%;
}
.popup-small .floor {
  top: 45%;
  transform: rotateX(76deg);
  transform-origin: top center;
}
.popup-small .horizon-line {
  top: 45%;
}


/* Vignette Phase 1 */
.popup-small .global-container {
  perspective: 20vmin;
  border: 2px solid rgb(var(--dna-rgb) / 0.6);
  padding: 8px 0 15px 0;
}







/* Phase 2 : plein écran (scale 1) */
.popup-large.popup-zoom-in {
  /*transform: translate(-50%, -50%) scale(1);*/
  transform: translate(-50%, calc(-50% - 2vh)) scale(1);
  opacity: 1;
}

  /* Contenu de la pop-up centré en colonne */
  .popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


/* Mobile */
@media (max-width: 480px) {
  .popup-small {
    width: 28vmin;
    height: 36vmin;
  }
  .popup-large.popup-zoom-in {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 1;
  }
}

/* Tablette landscape */
@media (max-height: 500px) and (orientation: landscape) {
  .popup-small {
    width: 18vmin;
    height: 24vmin;
  }
  .popup-large.popup-zoom-in {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 1;
  }
}
/*************************************/
/* Glyphs Phase 2 */
#glyphpattern-large {
 
  top: 14%;
  /*left: 50%;
  transform: translate(-50%, -50%);*/
  margin-left: 1.2vmin; /* compense la scrollbar de 8px / 2 */
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 110; /* au-dessus du filtre dark */
  filter: drop-shadow(0 0 2.5vmin var(--dna-color))
          drop-shadow(0 0 5vmin var(--dna-color))
          drop-shadow(0 0 10vmin var(--dna-color));
  transition: opacity 0.6s ease;
}

#glyphpattern {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 110;
  font-family: 'alien-alphabet', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 2s ease-out;
}

.Glyph-wrapper {
  position: relative;
  display: block;
  text-align: center;
  margin: 6vmin 0; /* augmente pour plus d'espace */
  line-height: 1;
}
.Glyph-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 8vmin;
  font-family: 'alien-alphabet', sans-serif;
  -webkit-text-stroke: 0;
  color: transparent;
  text-shadow: 0 0.4vmin 0 #161616, 0 0.8vmin 0 #00000055;
  pointer-events: none;
  z-index: 0;
  line-height: 1;
}
.Glyph {
  display: block;
  position: relative;
  font-size: 8vmin;
  margin: 0;
  z-index: 1;
  line-height: 1;
}
.chrome {
  background-image: linear-gradient(
    #000 0%,
    #161616 20%,
    #1d1d1d 30%,
    #2d2d95 40%,
    #3f3f3f 50%,
    #2a2a2a 60%,
    #3f3f3f 70%,
    #2d2d95 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  /*-webkit-text-stroke-width: 0.06vmin;*/
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(var(--dna-rgb) / 0.4);
  font-family: 'alien-alphabet', sans-serif;
  position: relative;
  z-index: 1;
}

.shine:after {
  content: attr(data-text);
  background-image: linear-gradient(225deg, transparent 53%, #fff 55%, transparent 58%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-background-clip: text;
  z-index: 999;
  background-size: 800% 800%;
  animation: shine 8s ease infinite;
  animation-delay: var(--shine-delay, 0s);
}

@keyframes shine {
  0% { background-position: 0% 51% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 51% }
}
/* Animation d'apparition fade individuelle */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.6s ease-out forwards;
}
.Glyph-shadow.fade-in {
  animation: fadeIn 1.6s ease-out forwards;
}

/***********************************************************************/

.parent {
  z-index: 100;
  display: flex;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.beamcard {
  position: relative;
  box-sizing: border-box;
  width: 33%;
  min-width: 45vmin;
  height: 75vmin;
  margin: auto;
}

.beamcard.active {
  transform: scale3d(1, 1, 1);
  transform-origin: bottom center;
  -webkit-animation-name: player;
          animation-name: player;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -o-object-fit: contain;
     object-fit: contain;
}

@-webkit-keyframes player {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1, 1.03, 1); }
  60% { transform: scale3d(1.03, 1, 1); }
  100% { transform: scale3d(1, 1, 1); }
}

@keyframes player {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1, 1.03, 1); }
  60% { transform: scale3d(1.03, 1, 1); }
  100% { transform: scale3d(1, 1, 1); }
}





/* Morpher Phase 1 - centré dans le petit popup */
.card-phase1 {
  /*position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);*/
  z-index: 50;
  -webkit-user-select: none; /* Empêche la sélection sur WebKit */
  user-select: none; /* Empêche la sélection sur les navigateurs modernes */
  -webkit-user-drag: none; /* Désactive le glisser sur Chrome/Safari */
  touch-action: none; /* Désactive les actions tactiles par défaut */
  -webkit-tap-highlight-color: transparent; /* Supprime la surbrillance au touché */
}

.card-phase1 .avatar-wrap {
  width: 17vmin;
  height: 17vmin;
  position: relative;
  image-rendering: pixelated;

  margin-bottom: 40px;
  top: 5%;

   transform: scale3d(1, 1, 1);
  transform-origin: bottom center;
  -webkit-animation-name: player;
          animation-name: player;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -o-object-fit: contain;
     object-fit: contain;
}

.card-phase1 .avatar-canvas {
  width: 100%;
  height: 100%;
  display: block;
  image-rendering: pixelated;
  
}

.card-phase1 .avatar-mirror {
  content: "";
  position: absolute;
  top: 86%;
  width: inherit;
  height: inherit;
  opacity: 0;
  transform-origin: 50% 0%;
   mask-image: linear-gradient(
    to top,
    #000000de,
    #00000033,
    transparent
  );

  -webkit-animation: cardmirror-perspective 0.0278s ease-in forwards;
          animation: cardmirror-perspective 0.0278s ease-in forwards;
  -webkit-animation-delay: 0.0722s;
          animation-delay: 0.0722s;
  pointer-events: none;
}


















.beamcard.active .card .avatar-canvas {
  width: 100%;
  height: 100%;
  display: block;
  image-rendering: pixelated;
  opacity: 0; /* démarre invisible */

    transform-origin: 50% 100%;

 -webkit-animation: cardsquash 1s ease-in forwards 0.472s,
                    MorpherPulse 2s infinite ease-in-out 1s;

         animation: cardsquash 1s ease-in forwards 0.472s,
                    MorpherPulse 2s infinite ease-in-out 1s;
}









/* ===============================================
   🔵 3 — LA CARTE QUI AFFICHE LE MORPHER (IMPORTANT)
   =============================================== */

.beamcard.active .card .avatar-wrap{
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  top: 0%;
  /* Taille finale du Morpher visuellement = 50vmin x 50vmin */
  width: 60vmin;
  height: 60vmin;

                    
/* Reflet avec Perspective 3D */
  perspective: 1000px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;


  image-rendering: pixelated; /* Important pour pixel art */
  -webkit-user-select: none; /* Empêche la sélection sur WebKit */
  user-select: none; /* Empêche la sélection sur les navigateurs modernes */
  -webkit-user-drag: none; /* Désactive le glisser sur Chrome/Safari */
  touch-action: none; /* Désactive les actions tactiles par défaut */
  -webkit-tap-highlight-color: transparent; /* Supprime la surbrillance au touché */
}

/* ===========================
   🔵 4 — REFLET (MIRROR EFFECT)
   =========================== */
.beamcard.active .card .avatar-mirror {
  /* Mirror layer */
  content: "";
  position: absolute;
  top: 86%;
  width: inherit;
  height: inherit;
  opacity: 0;
  transform-origin: 50% 0%;
   mask-image: linear-gradient(
    to top,
    #000000de,
    #00000033,
    transparent
  );
  /*
  mask-image: linear-gradient(
    to top,
    transparent 0%,
    #00000088 20%,
    #00000044 50%,
    #00000000 100%
  );*/
  -webkit-animation: cardmirror-perspective 0.278s ease-in forwards;
          animation: cardmirror-perspective 0.278s ease-in forwards;
  -webkit-animation-delay: 0.722s;
          animation-delay: 0.722s;
  pointer-events: none;
}
                 
/* =====================
   🔵 — Morpher Pulse
   ===================== */
@keyframes MorpherPulse {
  0%, 100% {
    filter: drop-shadow(0 0 2vmin var(--dna-color));
  }
  50% {
    filter: drop-shadow(0 0 0.6vmin rgb(var(--dna-rgb) / 0.4));
  }
}

/********************************** Bamcard EFFECT ******************************/


.beamcard.active .beam {
  position: absolute;
  top: -110%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 10vmin;
  min-height: 110%;
  background: #ffffff;
  box-shadow: 2vmin 2vmin 5vmin aqua, -2vmin 2vmin 5vmin aqua;
  -webkit-animation: firebeam 0.8s ease-in forwards;
          animation: firebeam 0.8s ease-in forwards;
          filter: drop-shadow(0 0 2rem var(--labs-sys-color-sun-glow));
}

.beamcard.active .back {
  position: absolute;
  width: 32vmin;
  height: 32vmin;
  border-radius: 50%;
  background: #fff;
  top: 50%;
  left: 50%;
  opacity: 0;
  box-shadow: 0 0 3vmin 3vmin #fff, inset 0 0 1px 1px #fff;
  transform: translatex(-50%);
  -webkit-animation: backexplosion 0.3s ease-out;
          animation: backexplosion 0.3s ease-out;
  -webkit-animation-delay: 0.772s;
          animation-delay: 0.772s;
}
.beamcard.active .ground {
  position: absolute;
  bottom: 21vmin;
  left: 50%;
  transform: translatex(-50%);
  opacity: 0;
  background: #ffffff;
  width: 50vmin;
  height: 2vmin;
  border-radius: 50%;
  box-shadow: 20px 0 10px 2px #fff, -20px 0 10px 2px #fff, inset 0 0 1px 1px #fff;
  -webkit-animation: groundexplosion 0.7s ease-in forwards;
          animation: groundexplosion 0.7s ease-in forwards;
  -webkit-animation-delay: 0.472s;
          animation-delay: 0.472s;
          filter: drop-shadow(0 0 2rem var(--labs-sys-color-sun-glow));
}
.beamcard.active .pyro > .before, .beamcard.active .pyro > .after {
  position: absolute;
  width: 1vmin;
  height: 1vmin;
  top: 70%;
  opacity: 0;
  margin-left: 50%;
  border-radius: 0%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  -webkit-animation: 0.6s pyrobang ease-out forwards, 0.6s pyrogravity ease-in forwards;
          animation: 0.6s pyrobang ease-out forwards, 0.6s pyrogravity ease-in forwards;
  -webkit-animation-delay: 0.772s, 0.772s;
          animation-delay: 0.772s, 0.772s;
}
.beamcard.active .pyro > .after {
  -webkit-animation-duration: 0.4615384615s, 0.4615384615s;
          animation-duration: 0.4615384615s, 0.4615384615s;
}
.beamcard.active .debris {
  /* Centering */
  position: absolute;
  left: 50%;
  bottom: 18vmin;
  transform: translate(-50%, 3.5vmin) rotate(180deg) translatex(-1vmin);
}
.beamcard.active .debris > div {
  /* Rotation */
  position: absolute;
  transform-origin: center 7vmin;
}
.beamcard.active .debris > div div {
  width: 2vmin;
  height: 7vmin;
  opacity: 0;
  background: radial-gradient(ellipse at center, #ffffff 0%, #ffffff 21%, #ffffffcc 22%, #00ffff99 23%, #00ffff00 60%, #00ffff00 100%);
  -webkit-animation: debrisexplosion 0.4s ease-out forwards;
          animation: debrisexplosion 0.4s ease-out forwards;
  -webkit-animation-delay: 0.772s;
          animation-delay: 0.772s;
  -webkit-animation-timing-function: cubic-bezier(0.16, 0.02, 1, 0.59);
          animation-timing-function: cubic-bezier(0.16, 0.02, 1, 0.59);
}
.beamcard.active .debris > div div:before, .beamcard.active .debris > div div:after {
  content: "";
  position: absolute;
  background: inherit;
  width: inherit;
  height: inherit;
}
.beamcard.active .debris > div div:before {
  transform: scale(1.4, 0.8) translateY(-110%);
}
.beamcard.active .debris > div div:after {
  transform: scale(1.7, 1) translateY(-160%);
}
.beamcard.active .debris > div:nth-child(1) {
  transform: rotate(115deg);
}
.beamcard.active .debris > div:nth-child(2) {
  transform: rotate(-103deg);
}
.beamcard.active .debris > div:nth-child(3) {
  transform: rotate(-130deg) scale(0.8);
}
.beamcard.active .debris > div:nth-child(4) {
  transform: rotate(135deg) scale(0.8);
}
.beamcard.active .debris > div:nth-child(5) {
  transform: rotate(171deg) scale(1.1);
}
.beamcard.active .debris > div:nth-child(5) div {
  height: 5vmin;
  width: 3vmin;
}
.beamcard.active .debris > div:nth-child(6) {
  transform: rotate(-170deg) scale(0.8);
}
.beamcard.active .debris > div:nth-child(6) div {
  height: 7vmin;
  width: 5vmin;
}

@-webkit-keyframes firebeam {
  0% {
    width: 0.15vmin;
    opacity: 0.5;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 0%);
  }
  60% {
    /* Beam hits ground */
    opacity: 1;
    box-shadow: 2vmin 0 6vmin aqua, -2vmin 0 6vmin aqua;
    transform: translate(-50%, 64%);
  }
  70% {
    width: 15vmin;
    opacity: 1;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 64%);
  }
  100% {
    width: 1.5vmin;
    opacity: 0;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 64%);
  }
}

@keyframes firebeam {
  0% {
    width: 0.15vmin;
    opacity: 0.5;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 0%);
  }
  60% {
    /* Beam hits ground */
    opacity: 1;
    box-shadow: 2vmin 0 6vmin aqua, -2vmin 0 6vmin aqua;
    transform: translate(-50%, 64%);
  }
  70% {
    width: 15vmin;
    opacity: 1;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 64%);
  }
  100% {
    width: 1.5vmin;
    opacity: 0;
    box-shadow: 2vmin 0 2vmin aqua, -2vmin 0 2vmin aqua;
    transform: translate(-50%, 64%);
  }
}
@-webkit-keyframes groundexplosion {
  0% {
    opacity: 0;
    transform: translate(-50%, 0px) scaleX(0);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, 0px) scaleX(1);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, 0px) scaleX(0.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 0px) scaleX(0);
  }
}
@keyframes groundexplosion {
  0% {
    opacity: 0;
    transform: translate(-50%, 0px) scaleX(0);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, 0px) scaleX(1);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, 0px) scaleX(0.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 0px) scaleX(0);
  }
}
@-webkit-keyframes backexplosion {
   0%, 100% {
    opacity: 0;
    transform: translate(-50%, -12.5vmin) scale(0);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -12.5vmin) scale(1);
  }
}
@keyframes backexplosion {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -12.5vmin) scale(0);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -12.5vmin) scale(1);
  }
}
@-webkit-keyframes debrisexplosion {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  20%, 40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, -30vmin);
  }
}
@keyframes debrisexplosion {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  20%, 40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, -30vmin);
  }
}
@-webkit-keyframes cardmirror-perspective {
 0% {
    opacity: 0;
    transform: 
      translateY(-7vmin)
      rotateX(180deg)
      rotateX(0deg)
      scaleY(0.45)
      scaleX(1);
    filter: blur(0px);
  }
  100% {
    opacity: 0.8;
    transform: 
      translateY(41%)
      rotateX(180deg)
      rotateX(0deg)
      scaleY(0.45)
      scaleX(1);
    filter: blur(0px);
  }
}

@keyframes cardmirror-perspective {
  0% {
    opacity: 0;
    transform: 
      translateY(-7vmin)
      rotateX(180deg)
      rotateX(0deg)
      scaleY(0.45)
      scaleX(1);
    filter: blur(0px);
  }
  100% {
    opacity: 0.8;
    transform: 
      translateY(41%)
      rotateX(180deg)
      rotateX(0deg)
      scaleY(0.45)
      scaleX(1);
    filter: blur(0px);
  }
}
@-webkit-keyframes cardsquash {
  0% {
     filter: sepia(100%) hue-rotate(135deg) brightness(300%) saturate(60%);
    transform: translate(0%, -300%) scaleX(0.5) scaleY(1.5);
    opacity: 0;
  }
  11% {
    transform: translate(0%, -197%) scaleX(0.41) scaleY(1.59);
    opacity: 0.1;
  }
  30% {
    transform: translate(0%, -18%) scaleX(0.25) scaleY(1.75);
    opacity: 1;
  }
  35% {
    transform: translate(0%, -2%) scaleX(1.7) scaleY(0.3);
  }
  46% {
    transform: translate(0%, 2%) scaleX(1.8) scaleY(0.2);
    filter: none;
  }
  54% {
    transform: translate(0%, 2%) scaleX(0.8) scaleY(1.2);
  }
  66% {
    transform: translate(0%, 0%) scaleX(1.2) scaleY(0.8);
  }
  78% {
    transform: translate(0%, 0%) scaleX(0.95) scaleY(1.05);
  }
  100% {
    transform: translate(0%, 0%) scaleX(1) scaleY(1);
    opacity: 1;
  }
}
@keyframes cardsquash {
  0% {
     filter: sepia(100%) hue-rotate(135deg) brightness(300%) saturate(60%);
    transform: translate(0%, -300%) scaleX(0.5) scaleY(1.5);
    opacity: 0;
  }
  11% {
    transform: translate(0%, -197%) scaleX(0.41) scaleY(1.59);
    opacity: 0.1;
  }
  30% {
    transform: translate(0%, -18%) scaleX(0.25) scaleY(1.75);
    opacity: 1;
  }
  35% {
    transform: translate(0%, -2%) scaleX(1.7) scaleY(0.3);
  }
  46% {
    transform: translate(0%, 2%) scaleX(1.8) scaleY(0.2);
    filter: none;
  }
  54% {
    transform: translate(0%, 2%) scaleX(0.8) scaleY(1.2);
  }
  66% {
    transform: translate(0%, 0%) scaleX(1.2) scaleY(0.8);
  }
  78% {
    transform: translate(0%, 0%) scaleX(0.95) scaleY(1.05);
  }
  100% {
    transform: translate(0%, 0%) scaleX(1) scaleY(1);
    opacity: 1;
  }
}




@-webkit-keyframes pyrobang {
    100% {
     box-shadow: 
        19.7vmin -35.8vmin #ff6b00, 
        19.5vmin -3.5vmin #ff3d00, 
        -6.8vmin -32.8vmin #ff9b00, 
        16.3vmin 1.4vmin #ffaa00, 
        -1.2vmin -21.9vmin #ffd400, 
        -4.7vmin -28.8vmin #ffed00, 
        20.1vmin 2.6vmin #ffd900, 
        11.4vmin -4.0vmin #ffa600, 
        2.6vmin -9.8vmin #ff9200, 
        11.0vmin -19.4vmin #ff7200, 
        4.6vmin -14.2vmin #ff4500, 
        16.1vmin -19.2vmin #ff5500, 
        -11.2vmin -23.4vmin #ffaa00, 
        7.6vmin -0.1vmin #ffa000, 
        -16.9vmin -0.3vmin #ff4500, 
        5.2vmin -36.3vmin #ff6b00, 
        -12.6vmin 6.8vmin #ff3d00, 
        17.9vmin 3.1vmin #ff1c00, 
        -14.0vmin 2.5vmin #d46f00, 
        -18.3vmin 1.5vmin #a33600, 
        -16.4vmin -34.3vmin #ff5500, 
        0.4vmin -15.3vmin #ff2a00, 
        22.0vmin -13.4vmin #ffa000, 
        -24.2vmin -0.1vmin #d47f00, 
        -24.8vmin -28.6vmin #a30000, 
        -16.2vmin -1.5vmin #ff4500, 
        -19.5vmin -17.0vmin #ff6b00, 
        1.0vmin -28.5vmin #8c4e00, 
        2.5vmin -20.0vmin #d45f00, 
        23.7vmin 0.5vmin #ffd400, 
        5.7vmin -13.4vmin #d49f00, 
        6.9vmin -6.6vmin #ff8400, 
        24.1vmin -39.4vmin #ffaa00, 
        8.1vmin -7.6vmin #d46000, 
        -14.3vmin -39.1vmin #ffb100, 
        -13.5vmin -27.5vmin #ff7700, 
        -19.6vmin -12.4vmin #ff5500, 
        -13.7vmin -12.7vmin #ff3d00, 
        13.5vmin -14.7vmin #ff7000, 
        10.4vmin -9.0vmin #ffa600, 
        -8.6vmin -24.5vmin #ff9500, 
        -23.3vmin -37.8vmin #d47f00, 
        2.6vmin -3.6vmin #ff5500, 
        6.4vmin -38.4vmin #8c4e00, 
        14.6vmin 5.2vmin #d43000, 
        -17.1vmin -19.7vmin #b12c00, 
        15.9vmin -33.7vmin #ff8400, 
        -1.1vmin -32.7vmin #b14e00, 
        20.2vmin 1.3vmin #ffa600, 
        -12.7vmin -35.6vmin #d45f00, 
        -15.6vmin -4.2vmin #d45f00;
    }
  }
  @keyframes pyrobang {
    100% {
      box-shadow: 
        19.7vmin -35.8vmin #ff6b00, 
        19.5vmin -3.5vmin #ff3d00, 
        -6.8vmin -32.8vmin #ff9b00, 
        16.3vmin 1.4vmin #ffaa00, 
        -1.2vmin -21.9vmin #ffd400, 
        -4.7vmin -28.8vmin #ffed00, 
        20.1vmin 2.6vmin #ffd900, 
        11.4vmin -4.0vmin #ffa600, 
        2.6vmin -9.8vmin #ff9200, 
        11.0vmin -19.4vmin #ff7200, 
        4.6vmin -14.2vmin #ff4500, 
        16.1vmin -19.2vmin #ff5500, 
        -11.2vmin -23.4vmin #ffaa00, 
        7.6vmin -0.1vmin #ffa000, 
        -16.9vmin -0.3vmin #ff4500, 
        5.2vmin -36.3vmin #ff6b00, 
        -12.6vmin 6.8vmin #ff3d00, 
        17.9vmin 3.1vmin #ff1c00, 
        -14.0vmin 2.5vmin #d46f00, 
        -18.3vmin 1.5vmin #a33600, 
        -16.4vmin -34.3vmin #ff5500, 
        0.4vmin -15.3vmin #ff2a00, 
        22.0vmin -13.4vmin #ffa000, 
        -24.2vmin -0.1vmin #d47f00, 
        -24.8vmin -28.6vmin #a30000, 
        -16.2vmin -1.5vmin #ff4500, 
        -19.5vmin -17.0vmin #ff6b00, 
        1.0vmin -28.5vmin #8c4e00, 
        2.5vmin -20.0vmin #d45f00, 
        23.7vmin 0.5vmin #ffd400, 
        5.7vmin -13.4vmin #d49f00, 
        6.9vmin -6.6vmin #ff8400, 
        24.1vmin -39.4vmin #ffaa00, 
        8.1vmin -7.6vmin #d46000, 
        -14.3vmin -39.1vmin #ffb100, 
        -13.5vmin -27.5vmin #ff7700, 
        -19.6vmin -12.4vmin #ff5500, 
        -13.7vmin -12.7vmin #ff3d00, 
        13.5vmin -14.7vmin #ff7000, 
        10.4vmin -9.0vmin #ffa600, 
        -8.6vmin -24.5vmin #ff9500, 
        -23.3vmin -37.8vmin #d47f00, 
        2.6vmin -3.6vmin #ff5500, 
        6.4vmin -38.4vmin #8c4e00, 
        14.6vmin 5.2vmin #d43000, 
        -17.1vmin -19.7vmin #b12c00, 
        15.9vmin -33.7vmin #ff8400, 
        -1.1vmin -32.7vmin #b14e00, 
        20.2vmin 1.3vmin #ffa600, 
        -12.7vmin -35.6vmin #d45f00, 
        -15.6vmin -4.2vmin #d45f00;
    }
  }
  

@-webkit-keyframes pyrogravity {
 0% {
    transform: translateY(0vmin);
    opacity: 1;
  }
  100% {
    transform: translateY(25vmin);
    opacity: 0;
  }
}
@keyframes pyrogravity {
  0% {
    transform: translateY(0vmin);
    opacity: 1;
  }
  100% {
    transform: translateY(25vmin);
    opacity: 0;
  }
}


/* ================================================
   PANEL — from MORPHERS_panel
================================================ */
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

  body {
    min-height: 100vh;
    background: #161616;
    margin: 0;
    font-family: 'Silkscreen', monospace;
  }

  /* ================================================
     TOAST
  ================================================ */
  #toast {
    position: fixed;
    bottom: clamp(40px, 6vmin, 60px);
    left: 50%;
    transform: translateX(-50%);
    background: #00000066;
    color: #fff;
    border: 1px solid #2a2a2a;
    padding: clamp(5px, 1vmin, 8px) clamp(10px, 2vmin, 16px);
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.5rem, 1vmin, 0.7rem);
    letter-spacing: 0.15em;
    z-index: 1000001;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    transition: opacity 0.4s ease;
  }
  #toast.visible { opacity: 1; transition: none; }
  #toast.blinking {
    opacity: 1;
    animation: arcade-blink 1.8s step-end infinite;
    pointer-events: none;
  }

  /* ================================================
     PANEL
  ================================================ */
  #shortcut-panel {
/* Styles spécifiques pour la barre de défilement */
scrollbar-width: auto; /* Pour Firefox */
scrollbar-color: var(--dna-color) #161616; /* Couleur de la poignée et de la piste */
scrollbar-width: thin;
    overflow: auto;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000000;
    background: #16161690;
    backdrop-filter: blur(4px);
    color: #aaaaaa;
    border-top: 1px solid #2a2a2a;
    box-shadow: 0 -5px 20px #00000080;
  }

  #shortcut-panel-toggle {
    padding: clamp(5px, 1.2vmin, 6px) 6px;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.6rem, 1.1vmin, 0.8rem);
    letter-spacing: 0.2em;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background: #00000066;
    transition: background 0.2s ease;
    user-select: none;
    -webkit-user-select: none;
  }
  #shortcut-panel-toggle:hover {
    background: #ffffff0d;
  }

  /* ================================================
     FILTER FIXE
  ================================================ */
  #filter-fixed {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(5px, 1vmin, 10px);
    padding: clamp(5px, 1vmin, 10px) 15px;
    border-bottom: 1px solid #ffffff0d;
    background: #0000004d;
  }
  #shortcut-panel.open #filter-fixed {
    display: flex;
  }

  .filter-label {
    color: #626262;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.5rem, 1vmin, 0.7rem);
    letter-spacing: 0.25em;
  }

  .text-morph {
    display: flex;
    align-items: center;
    gap: clamp(5px, 1vmin, 7px);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .text-morph .text-container {
    position: relative;
    width: clamp(60px, 14vmin, 100px);
    height: clamp(14px, 2.5vmin, 20px);
    overflow: hidden;
  }

  .text-morph span {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /*font-weight: bold;*/
    color: #fff;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.45rem, 0.95vmin, 0.65rem);
    letter-spacing: 0.1em;
  }

  .text-morph .filter-OFF     { transform: translateY(0); }
  .text-morph .filter-VIVID   { transform: translateY(20px); }
  .text-morph .filter-GAMEBOY { transform: translateY(40px); }

  .text-morph .circle {
    position: relative;
    flex-shrink: 0;
    width: clamp(6px, 1.5vmin, 10px);
    height: clamp(6px, 1.5vmin, 10px);
    background-color: var(--dna-color, #60bc56);
    border-radius: 0%;
    z-index: 10;
  }

  /* ================================================
     PANEL CONTENT
  ================================================ */
  #shortcut-panel-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out, padding 0.4s ease-out;
  }
  #shortcut-panel.open #shortcut-panel-content {
    max-height: 50vh;
    padding: clamp(10px, 2vmin, 20px);
    overflow-y: auto;
  }
  #shortcut-panel-content::-webkit-scrollbar { width: 3px; }
  #shortcut-panel-content::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
  #shortcut-panel-content::-webkit-scrollbar-thumb {
    background: var(--dna-color, #60bc56);
    border-radius: 2px;
  }

  /* ================================================
     LOGO
  ================================================ */
  #projectLogo {
    display: block;
    width: clamp(60px, 15vmin, 100px);
    height: clamp(60px, 15vmin, 100px);
    margin: 0 auto clamp(6px, 1.5vmin, 10px) auto;
    image-rendering: pixelated;
    animation: auraPulse 2s infinite ease-in-out 1.5s;
  }
  @keyframes auraPulse {
    0%, 100% { filter: drop-shadow(0 0 3vmin var(--dna-color, #60bc56)); }
    50%       { filter: drop-shadow(0 0 0.9vmin var(--dna-color, #60bc56)); }
  }

  /* ================================================
     LORE
  ================================================ */
  .panel-inner {
    max-width: 500px;
    margin: 0 auto;
  }
  .panel-inner center h2 {
    color: #fff;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.6rem, 2vmin, 1.1rem);
    text-align: center;
    text-shadow: 2px 2px 2px #000;
    margin-bottom: clamp(6px, 1.5vmin, 10px);
  }
  .pixel-divider {
    border: none;
    height: 4px;
    width: clamp(100px, 30vmin, 200px);
    margin: clamp(10px, 2vmin, 20px) auto;
    background-image: repeating-linear-gradient(
      to right,
      #ffffff59,
      #ffffff59 4px,
      transparent 4px,
      transparent 16px
    );
  }
  .panel-inner h2 {
    color: #fff;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.5rem, 1.5vmin, 0.9rem);
    margin-bottom: clamp(6px, 1.5vmin, 10px);
    text-shadow: 2px 2px 2px #000;
  }
  .panel-inner p {
    color: #bbbaba;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.4rem, 1.1vmin, 0.7rem);
    line-height: 2;
    text-align: left;
    text-shadow: 2px 2px 2px #000;
    margin-bottom: clamp(8px, 1.5vmin, 12px);
  }

  /* Fade in lore */
  .panel-inner p,
  .panel-inner h2,
  .pixel-divider {
    animation: fadeInData 0.8s ease-out forwards;
    opacity: 0;
  }
  @keyframes fadeInData {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .panel-inner h2:nth-of-type(1) { animation-delay: 0.2s; }
  .panel-inner h2:nth-of-type(2) { animation-delay: 0.4s; }
  .panel-inner h2:nth-of-type(3) { animation-delay: 0.6s; }
  .panel-inner h2:nth-of-type(4) { animation-delay: 0.8s; }
  .panel-inner h2:nth-of-type(5) { animation-delay: 1.0s; }
  .panel-inner p:nth-of-type(1)  { animation-delay: 0.3s; }
  .panel-inner p:nth-of-type(2)  { animation-delay: 0.5s; }
  .panel-inner p:nth-of-type(3)  { animation-delay: 0.7s; }
  .panel-inner p:nth-of-type(4)  { animation-delay: 0.9s; }
  .panel-inner p:nth-of-type(5)  { animation-delay: 1.1s; }
  .panel-inner p:nth-of-type(6)  { animation-delay: 1.3s; }

  /* ================================================
     TYPEWRITER END PHRASE
  ================================================ */
  #end-phrase {
    text-align: center;
    margin: clamp(14px, 3vmin, 24px) auto clamp(4px, 1vmin, 8px) auto;
    min-height: 3.6em;
  }
  #typewriter-line1,
  #typewriter-line2 {
    display: block;
    color: #fff;
    font-family: 'Silkscreen', monospace;
    font-size: clamp(0.75rem, 1.8vmin, 0.8rem);
    letter-spacing: 0.2em;
    text-shadow: 0 0 8px var(--dna-color, #60bc56);
    min-height: 1.6em;
    line-height: 1.8;
  }
  .tw-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: #fff;
    vertical-align: middle;
    margin-left: 2px;
    animation: cursorBlink 0.8s step-end infinite;
  }
  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ================================================
     RESPONSIVE — Tablette landscape
  ================================================ */
  @media (max-height: 500px) and (orientation: landscape) {
    #shortcut-panel.open #shortcut-panel-content {
      max-height: 40vh;
    }
  }
</style>


<!-- partial -->
<!-- partial -->
<!--
<script src='https://cdn.jsdelivr.net/gh/MetalMorphers/RETRO-MECHA@main/p5.min.js'></script>
<script src='https://cdn.jsdelivr.net/gh/MetalMorphers/RETRO-MECHA@main/pixi.min.js'></script>

<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.2/p5.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/pixi.js/3.0.11/pixi.min.js'></script>
-->
<script src='https://arweave.net/4zl9I69C-dl8xQ485xZOkTjgaO6u0VDilSHmla80wgE'></script>
<script src='https://arweave.net/fhQkVUPphB-QTl2XYkxEIpgg6YvzO2NHcsE82ZBKcw8'></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.min.js"></script>
<script src='https://cdn.jsdelivr.net/npm/particles.js@latest/particles.min.js'></script>

<script>

/***************************************************
 * ⚙️ INIT MORPHER — Point d'entrée dynamique
 * Lit window.MORPHER_ID (défini par le fichier Morpher)
 * Cherche les données dans window.MORPHERS_DATA
 * Génère la séquence via window.generateSequence()
 * Injecte tout dans le DOM avant le reste du code
 ***************************************************/
(function() {

  // 1. Récupérer l'ID du Morpher depuis le fichier à minter
  //    ex: window.MORPHER_ID = '#001' (défini dans MORPHER_#001.html)
  var mid = window.MORPHER_ID || '#001'; // fallback #001 pour les tests

  // 2. Récupérer les données depuis MORPHERS_DATA.js
  var data = window.MORPHERS_DATA && window.MORPHERS_DATA[mid];
  if (!data) {
    console.error('[MORPHER ENGINE] Données introuvables pour ID:', mid);
    return;
  }

  // 3. Générer la séquence unique via l'algo
  var seq = window.generateSequence(data.id, data.dna);

  // 4. Créer l'objet global window.MORPHER
  //    utilisé partout dans le code engine
  window.MORPHER = {
    id:       data.id,       // ex: '#001'
    dna:      data.dna,      // ex: '#2d2d95' (HEX)
    dnaRgb:   data.dnaRgb,   // ex: '45 45 149' (pour CSS rgb())
    img:      data.img,      // image base64 du Morpher 25x25
    sequence: seq            // ex: ['w', 'r', 'y']
  };

  // 5. Injecter --Morphersrc sur la carte #restart
  var card = document.getElementById('restart');
  if (card) {
    card.style.setProperty('--Morphersrc', "url('" + data.img + "')");
  }

  // 6. Injecter --dna-rgb sur le global-container Phase 2
  var gc = document.getElementById('global-container-large');
  if (gc) {
    gc.style.setProperty('--dna-rgb', data.dnaRgb);
    gc.style.setProperty('--dna-color', data.dna);
  }

  // 7. Injecter l'ID du Morpher dans le label switch
  var label = document.getElementById('morpher-label');
  if (label) {
    label.textContent = 'MORPHER ' + data.id;
  }

  console.log('[MORPHER ENGINE] Initialisé →', mid, '| DNA:', data.dna, '| Séquence:', seq);

})();
/***************************************************
 * FIN INIT MORPHER
 ***************************************************/

 ////////////////////////BACKGROUND////////////////////////
particlesJS("stars", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "edge",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "", width: 100, height: 100 } },

    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },

    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 50, size_min: 0.1, sync: false } },

    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1 },

    move: {
      enable: true,
      speed: 15,
      direction: "right",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 } } },


  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true },

    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 } } },


  retina_detect: true });
/////////////////////////////////////////////////

////////////////////son final///////////////////
// === Gestion du son final ===
let finalLoopTimeoutId = null;
let finalLoopIntervalId = null;
let finalLoopActive = false;

function startFinalLoop() {
  if (finalLoopActive) return; // Si déjà actif → ne pas relancer
  finalLoopActive = true;

  // Premier son après un léger délai
  finalLoopTimeoutId = setTimeout(() => {
    zzfx(...loopSound);

    // Boucle toutes les 2.65s
    finalLoopIntervalId = setInterval(() => {
      zzfx(...loopSound);
    }, 2650);
  }, 950);
}

function stopFinalLoop() {
  // Supprimer les timers → plus aucun son ne sera lancé
  if (finalLoopTimeoutId) {
    clearTimeout(finalLoopTimeoutId);
    finalLoopTimeoutId = null;
  }
  if (finalLoopIntervalId) {
    clearInterval(finalLoopIntervalId);
    finalLoopIntervalId = null;
  }
  finalLoopActive = false;
}

///////////////////MP3 Fade//////////////////////

// === Gestion du MP3 synthwave ===
const synthwaveTrack = document.getElementById("synthwave-track");
synthwaveTrack.volume = 0; // commence muet

let synthFadeInterval = null;

// Fonction pour fade-in progressif
function fadeInSynth(duration = 2000) {
  clearInterval(synthFadeInterval);
  synthwaveTrack.play();
  let step = 0.05; // vitesse de progression du volume
  synthFadeInterval = setInterval(() => {

    const MAX_SYNTH_VOLUME = 0.35; // ← change ici 0.0 à 1.0
if (synthwaveTrack.volume < MAX_SYNTH_VOLUME) {
  synthwaveTrack.volume = Math.min(MAX_SYNTH_VOLUME, synthwaveTrack.volume + step);

    } else {
      clearInterval(synthFadeInterval);
    }
  }, duration * step);
}

// Fonction pour fade-out progressif
function fadeOutSynth(duration = 2000) {
  clearInterval(synthFadeInterval);
  let step = 0.05;
  synthFadeInterval = setInterval(() => {
    if (synthwaveTrack.volume > 0) {
      synthwaveTrack.volume = Math.max(0, synthwaveTrack.volume - step);
    } else {
      clearInterval(synthFadeInterval);
      //synthwaveTrack.pause();
      //synthwaveTrack.currentTime = 0; // reset au début
    }
  }, duration * step);
}

// Stop complet
function stopSynth() {
  clearInterval(synthFadeInterval);
  synthwaveTrack.pause();
  synthwaveTrack.currentTime = 0;
  synthwaveTrack.volume = 0;
}

// Fade out son glyphs
function fadeOutGlyphSound(duration = 1000) {
  var glyphSound = document.getElementById('glyph-sound');
  if (!glyphSound) return;
  let step = 0.05;
  let fadeInterval = setInterval(() => {
    if (glyphSound.volume > 0) {
      glyphSound.volume = Math.max(0, glyphSound.volume - step);
    } else {
      clearInterval(fadeInterval);
      glyphSound.pause();
      glyphSound.currentTime = 0;
    }
  }, duration * step);
}

 /////////////////////////// overlay & popup ///////////////////////////

var show = function(id) {
  var cardPhase2 = document.querySelector('#restart');
  var cardPhase1 = document.querySelector('.card-phase1');
  var morpherSrc = cardPhase2.style.getPropertyValue('--Morphersrc');
  cardPhase1.style.setProperty('--Morphersrc', morpherSrc);

  // ✨ Init engine Phase 1 ICI après avoir set --Morphersrc
  const enginePhase1 = new MorpherIdleEngine(cardPhase1);
  morpherEngines.set(cardPhase1, enginePhase1);

  // Phase 1 : afficher petit popup avec morpher gris
  var small = document.getElementById('popup-small');
  small.style.display = 'block';
  void small.offsetWidth;
  small.classList.add("popup-visible");

  // Son glyphs : joue une seule fois à l'apparition
 var glyphSound = document.getElementById('glyph-sound');
if (glyphSound) {
  glyphSound.volume = 0.6; // ← change ici 0.0 à 1.0
  glyphSound.currentTime = 0;
  glyphSound.play();
}

  // Clic sur petit popup → Phase 2
  small.addEventListener('click', expandToLarge, { once: true });
}

// État du switch Phase 2
var currentView = 'morpher'; // 'morpher' ou 'glyphs'

function expandToLarge() {
  // Cacher Phase 1
  var small = document.getElementById('popup-small');
  small.classList.remove("popup-visible");
  setTimeout(() => { small.style.display = 'none'; }, 300);

  // Afficher Phase 2
  var large = document.getElementById('popup-large');
  large.style.display = 'block';
  void large.offsetWidth;
  large.classList.remove("popup-zoom-out");
  large.classList.add("popup-zoom-in");

  // Lancer synthwave seulement en Phase 2
  fadeInSynth(2000);

  // Copier glyphs Phase 1 → Phase 2 pour le switch
  var glyphLarge = document.getElementById('glyphpattern-large');
  glyphLarge.innerHTML = document.getElementById('glyphpattern').innerHTML;

  // Vue morpher par défaut en Phase 2
  currentView = 'morpher';
  document.getElementById('morpher-view').style.display = 'block';
  glyphLarge.style.display = 'none';





// --- Fonction glitch label switch
function applyGlitch(newText) {
  var switchBtn = document.getElementById('switch-btn');
  var label = document.querySelector('.switch-label');
  var slice = 20;

  // Pause blink pendant glitch
  switchBtn.classList.add('glitching');

 // Fixer la largeur avant reset
label.style.minWidth = label.offsetWidth + 'px';

// Reset complet
label.textContent = '';

  // Glitch spans
  var glitchDiv = document.createElement('div');
  glitchDiv.className = 'glitch';
  glitchDiv.style.setProperty('--slice-count', slice);

  for (var i = 0; i <= slice; i++) {
    var span = document.createElement('span');
    span.textContent = newText;
    span.style.setProperty('--i', `${i + 1}`);
    if (i !== slice) {
      span.style.animationDelay = `${800 + Math.floor(Math.random() * 200 + 100)}ms`;
    }
    glitchDiv.appendChild(span);
  }
  label.appendChild(glitchDiv);

  // Bars
  var barsDiv = document.createElement('div');
  barsDiv.className = 'bars';
  for (var j = 0; j < 5; j++) {
    var bar = document.createElement('div');
    bar.className = 'bar';
    barsDiv.appendChild(bar);
  }
  label.appendChild(barsDiv);

// Reprendre blink + libérer largeur après fin du glitch
setTimeout(() => {
  switchBtn.classList.remove('glitching');
  label.style.minWidth = '';
}, 1500);
}














// ⚙️ Switch label — utilise l'ID dynamique du Morpher
var globalContainer = document.querySelector('#popup-large .global-container');

document.getElementById('switch-btn').addEventListener('click', function() {
  if (currentView === 'morpher') {
    // === morpher → glyphs ===
    currentView = 'glyphs';

    // Filtre dark + morpher en gray-mode
    globalContainer.classList.add('grid-dark');

    // ✨ Passer morpher en gray-mode
    var morpherCard = document.querySelector('#restart');
    var engine = morpherEngines.get(morpherCard);
    if (engine) {
      engine.grayMode = true;
    }

    // Sons
    fadeOutSynth(1000);
    setTimeout(() => {
      var glyphSound = document.getElementById('glyph-sound');
      if (glyphSound) {
        glyphSound.volume = 0;
        glyphSound.currentTime = 0;
        glyphSound.play();
        let step = 0.05;
        let fadeIn = setInterval(() => {
          if (glyphSound.volume < 0.6) {
            glyphSound.volume = Math.min(0.6, glyphSound.volume + step);
          } else {
            clearInterval(fadeIn);
          }
        }, 50);
      }
      
  glyphLarge.style.display = 'block';
    // Changer label → DNA SEQUENCE
    applyGlitch('DNA SEQUENCE');
    }, 300);

  } else {
    currentView = 'morpher';
    // ⚙️ Remettre label → ID réel du Morpher depuis window.MORPHER
    applyGlitch('MORPHER ' + window.MORPHER.id);

    // Retirer filtre dark
    globalContainer.classList.remove('grid-dark');

    // ✨ Remettre couleurs morpher
    var morpherCard = document.querySelector('#restart');
    var engine = morpherEngines.get(morpherCard);
    if (engine) {
      engine.grayMode = false;
      engine.stop();
      setTimeout(() => engine.restart(), 50);
    }

    // Fade out glyphs + sons
    glyphLarge.style.opacity = '0';
    fadeOutGlyphSound(800);
    fadeInSynth(1000);

    setTimeout(() => {
      glyphLarge.style.display = 'none';
      glyphLarge.style.opacity = '1';
    }, 600);
  }
});
}

// Fonction unique pour cacher le popup
var hide = function(id) {
  var large = document.getElementById('popup-large');
  large.classList.remove("popup-zoom-in");
  large.classList.add("popup-zoom-out");

  // Masquer totalement APRÈS l'animation
  setTimeout(() => {
    large.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }, 500);

  // 🔇 Fade out synthwave
  fadeOutSynth(2000);

  // Reset glyphs
  glyphpattern.style.opacity = "0";
  document.querySelectorAll("#glyphpattern p1").forEach((element) => {
    element.classList.remove("glow-effect");
  });

  // Annuler tous les timeouts
  animationTimeouts.forEach(clearTimeout);
  animationTimeouts = [];
};
/////////////////////////// glyphpattern Animation ///////////////////////////
let glyphpattern = document.getElementById("glyphpattern");

// ⚙️ Séquence générée depuis l'ID du Morpher via generateSequence()
// window.MORPHER est initialisé dans le bloc d'init en haut du script
let splitUp = window.MORPHER.sequence.join(' ').split('');


splitUp.forEach((Glyph, index) => {
  // Wrapper pour chaque paire shadow+glyph
  let wrapper = document.createElement("div");
  wrapper.classList.add("Glyph-wrapper");
// Ombre derrière
  let shadow = document.createElement("span");
  shadow.classList.add("Glyph-shadow", "fade-in");
  shadow.innerText = Glyph;
  shadow.style.animationDelay = `${index * 0.7}s`; // même délai que la Glyph
  wrapper.appendChild(shadow);

// Glyph principale avec effet chrome + fade + shine
  let element = document.createElement("span");
  element.classList.add("Glyph", "chrome", "shine", "fade-in");
  element.setAttribute("data-text", Glyph);
  element.innerText = Glyph;

   // 💡 Appliquer un délai unique pour chaque lettre
   // 🕐 Délai de fade-in
  element.style.animationDelay = `${index * 0.8}s`;

  // 🌟 Délai de shine
  element.style.setProperty('--shine-delay', `${index * 0}s`);
  wrapper.appendChild(element);

  glyphpattern.appendChild(wrapper);
});

///////////////////////////////////////////////////

/*
JavaScript is only used for triggering the animation.
*/
(function() {
	var button = document.querySelector("#restart");
	var count = 0;

	var restartHandler = function(e) {
		var beamcards = document.querySelectorAll(".beamcard");
		count = 0;
		
		// ✨ NOUVEAU : Arrêter TOUS les engines et nettoyer
		morpherEngines.forEach(engine => {
			engine.stop();
		});
		
		// Retirer "active" de toutes les cartes
		beamcards.forEach(el => {
			el.classList.remove("active");
		});
		
		// ✨ NOUVEAU : Attendre que l'animation CSS soit complètement arrêtée
		// L'animation la plus longue dure environ 1s, donc on attend 100ms pour être sûr que tout est clean
		window.setTimeout(() => {
			// Rajouter "active" pour relancer l'animation CSS
			beamcards[0].classList.add("active");
			
			// ✨ NOUVEAU : Redémarrer les engines APRÈS que l'animation CSS ait démarré
			// On attend le délai de l'animation cardsquash (472ms) + un peu de marge
			window.setTimeout(() => {
				morpherEngines.forEach(engine => {
					engine.restart();
				});
			}, 10);  // 500ms = après le début de l'animation cardsquash
		}, 100);
	};
	button.addEventListener("click", restartHandler);
})();
/////////////////////////////
// Ajoutez l'événement touchstart uniquement aux Glyphs
glyphpattern.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Empêche la sélection lors d'un maintien uniquement pour les Glyphs
}, { passive: false }); // `passive: false` est nécessaire pour que `preventDefault` fonctionne
//////////////////////////////

////////////animationCanvas//////////////////

/////////////////////snd animation////////////////////////////
'use strict';

let zzfx, zzfxV, zzfxX;

// ZzFXMicro - Zuper Zmall Zound Zynth - v1.1.8 ~ 884 bytes minified
zzfxV = .6; // volume
zzfx = (p=1, k=.05, b=220, e=0, r=0, t=.1, q=0, D=1, u=0, y=0, v=0, z=0, l=0, E=0, A=0, F=0, c=0, w=1, m=0, B=0) => {
    let M = Math, R = 44100, d = 2 * M.PI, G = u *= 500 * d / R / R, C = b *= (1 - k + 2 * k * M.random(k=[])) * d / R,
    g = 0, H = 0, a = 0, n = 1, I = 0, J = 0, f = 0, x, h;
    e = R * e + 9;
    m *= R;
    r *= R;
    t *= R;
    c *= R;
    y *= 500 * d / R ** 3;
    A *= d / R;
    v *= d / R;
    z *= R;
    l = R * l | 0;
    for (h = e + m + r + t + c | 0; a < h; k[a++] = f) {
        ++J % (100 * F | 0) || (f = q ? 1 < q ? 2 < q ? 3 < q ? M.sin((g % d) ** 3) : M.max(M.min(M.tan(g), 1), -1) : 1 - (2 * g / d %2 + 2) % 2 : 1 - 4 * M.abs(M.round(g / d) - g / d) : M.sin(g),
        f = (l ? 1 - B + B * M.sin(d * a / l) : 1) * (0 < f ? 1 : -1) * M.abs(f) ** D * p * zzfxV * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - w) : a < e + m + r ? w : a < h - c ? (h - a - c) / t * w : 0),
        f = c ? f / 2 + (c > a ? 0 : (a < h - c ? 1 : (h - a) / c) * k[a - c | 0] / 2) : f),
        x = (b += u += y) * M.cos(A * H++), g += x - x * E * (1 - 1E9 * (M.sin(a) + 1) % 2), n && ++n > z && (b += v, C += v, n = 0), !l || ++I % l || (b = C, u = G, n = n || 1);
    }
    p = zzfxX.createBuffer(1, h, R);
    p.getChannelData(0).set(k);
    b = zzfxX.createBufferSource();
    b.buffer = p;
    b.connect(zzfxX.destination);
    b.start();
    return b;
};

zzfxX = new (window.AudioContext || webkitAudioContext)(); // audio context

// Sounds for each animation
const beamSound = [.5,.05,474,.09,.13,.3,0,2.7,-4,0,-84,.09,.01,0,34,0,0,.81,.26,.41,-597];
const backSound = [1.1,.05,87,.07,.27,.42,2,3.3,-8,0,0,0,.25,2,0,.9,0,.39,.22,.04,0];
//const groundSound = [.7, .45, 340, 0, .23, .36, 3, .2, -43, 1, 0, 0, .02, 0, -1, -0.2, 0, .74, .01, 0, 0];
const groundSound = [4.1,.05,143,0,.1,.05,0,3.8,-6,16,0,0,.06,0,0,0,.26,.59,.1,.28,0];

// Function to play the beam sound with an echo effect
function playBeamSoundWithEcho() {
    zzfx(...beamSound); // Play the original sound

    // Echo effect: repeat with decreasing volume
    const echoDelay = 300;
    const repetitions = 3;
    let currentVolume = 0.8;

    for (let i = 1; i <= repetitions; i++) {
        setTimeout(() => {
            const soundWithEcho = [...beamSound];
            soundWithEcho[0] = soundWithEcho[0] * currentVolume;
            zzfx(...soundWithEcho);
            currentVolume *= 0.5;
        }, echoDelay * i);
    }
}

// Play sound once for `backSound` animation
function playBackSound() {
    zzfx(...backSound);
}

// Play sound once for `groundSound` animation
function playGroundSound() {
    zzfx(...groundSound);
}

// Detect each animation start and trigger the respective sounds
document.querySelector('.beamcard.active .beam').addEventListener('animationstart', playBeamSoundWithEcho);
document.querySelector('.beamcard.active .back').addEventListener('animationstart', playBackSound);
document.querySelector('.beamcard.active .ground').addEventListener('animationstart', playGroundSound);

////////////////////////////////////////
/***************************************************
 * MORPHER IDLE ENGINE (UI CARD VERSION)
 * - Image 25x25 sans background
 * - Animation idle type moteur jeu
 * - DNA COLOR NON animée
 * - Mirror animé (canvas)
 ***************************************************/

class MorpherIdleEngine {
  constructor(card) {
    this.card = card;
    this.isRunning = true;  // ✨ NOUVEAU : flag pour contrôler l'animation
    this.animationId = null;  // ✨ NOUVEAU : stocker l'ID de l'animation

    // === CANVAS PRINCIPAL ===
    this.canvas = card.querySelector('.avatar-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // === CANVAS MIRROR ===
    this.mirrorCanvas = card.querySelector('.avatar-mirror');
    this.mirrorCtx = this.mirrorCanvas.getContext('2d');

    // --- buffers réels ---
    [this.canvas, this.mirrorCanvas].forEach(c => {
      c.width = 25;
      c.height = 25;
    });

    this.ctx.imageSmoothingEnabled = false;
    this.mirrorCtx.imageSmoothingEnabled = false;

    // --- CSS vars ---
    const style = getComputedStyle(card);
    this.seed = Number(style.getPropertyValue('--glyph-seed')) || 0;
    // Phase 1 : Gray mode : lire --gray-mode sur la carte
    this.grayMode = Number(style.getPropertyValue('--gray-mode')) === 1;

    // DNA couleur (à EXCLURE de l’animation) --- Lire --dna-color et convertir hex → RGB ---
    const hexColor = style.getPropertyValue('--dna-color').trim();
    const hex = hexColor.replace('#', '');
     this.dnaRGB = [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16)
  ];

    // --- extraction URL mirror ---
    const mirrorValue = style.getPropertyValue('--Morphersrc').trim();
    const match = mirrorValue.match(/url\((['"]?)(.*?)\1\)/);
    if (!match) return;
    this.imageURL = match[2];

    // --- timing ---
    this.startTime = performance.now();

    // --- buffers ---
    this.image = new Image();
    this.image.crossOrigin = 'anonymous';
    this.originalPixels = [];
    this.imageData = null;

    this.init();
  }

  async init() {
    await this.loadImage();
    this.extractPixels();
    requestAnimationFrame(() => this.update());
  }

  loadImage() {
    return new Promise(resolve => {
      this.image.onload = resolve;
      this.image.onerror = () => {
        console.error('Erreur image:', this.imageURL);
        resolve();
      };
      this.image.src = this.imageURL;
    });
  }

  extractPixels() {
    const off = document.createElement('canvas');
    off.width = 25;
    off.height = 25;
    const octx = off.getContext('2d');

    octx.imageSmoothingEnabled = false;
    octx.clearRect(0, 0, 25, 25);
    octx.drawImage(this.image, 0, 0, 25, 25);

    this.imageData = octx.getImageData(0, 0, 25, 25);
    const d = this.imageData.data;

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];
      const a = d[i + 3];

      const gray = r * 0.299 + g * 0.487 + b * 0.114;

      this.originalPixels.push({ r, g, b, a, gray });
    }
  }

  isDNAPixel(px) {
    if (!this.dnaRGB || this.dnaRGB.length !== 3) return false;
    const [dr, dg, db] = this.dnaRGB;
    const tolerance = 6;

    return (
      Math.abs(px.r - dr) < tolerance &&
      Math.abs(px.g - dg) < tolerance &&
      Math.abs(px.b - db) < tolerance
    );
  }

  update() {
    // ✨ NOUVEAU : Vérifier si l'animation doit continuer
    if (!this.isRunning) {
      return;  // Stop l'animation si isRunning = false
    }

    const t = (performance.now() - this.startTime) * 0.002;

    // toujours repartir de l’image originale
    const out = new ImageData(
      new Uint8ClampedArray(this.imageData.data),
      25,
      25
    );

    for (let i = 0; i < this.originalPixels.length; i++) {
      const px = this.originalPixels[i];
      if (px.a === 0) continue;

      const o = i * 4;

      // ❌ DNA = PAS D’ANIMATION
      if (this.isDNAPixel(px)) {
        out.data[o]     = px.r;
        out.data[o + 1] = px.g;
        out.data[o + 2] = px.b;
        continue;
      }

      const y = Math.floor(i / 25);

      const wave = Math.sin(
        t * 0.9 +
        y * 0.18 +
        this.seed * 13.37
      );

      const anim = 0.6 + wave * 0.4;
      let g = px.gray * anim;
      g = Math.max(0, Math.min(255, g));
      
    // vague verticale qui anime les pixels du morpher en excluant les pixels DNA qui restent fixes.
   const blend = Math.max(0, wave);
    // ✨ Gray mode Phase 1 : pas de couleur
if (this.grayMode) {
  out.data[o]     = g;
  out.data[o + 1] = g;
  out.data[o + 2] = g;
} else {
   // Phase 2 : couleurs normales
  out.data[o]     = g * (1 - blend) + px.r * blend;
  out.data[o + 1] = g * (1 - blend) + px.g * blend;
  out.data[o + 2] = g * (1 - blend) + px.b * blend;
}
  }

    // === DRAW NORMAL ===
    this.ctx.putImageData(out, 0, 0);

    // === DRAW MIRROR (ANIMÉ) ===
    this.mirrorCtx.save();
    this.mirrorCtx.clearRect(0, 0, 25, 25);
    this.mirrorCtx.translate(0, 25);
    this.mirrorCtx.scale(1, -1);
    this.mirrorCtx.putImageData(out, 0, 0);
    this.mirrorCtx.restore();

    // ✨ MODIFIÉ : Stocker l'ID de l'animation
    this.animationId = requestAnimationFrame(() => this.update());
  }

  // ✨ NOUVELLE MÉTHODE : Arrêter l'animation
  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    // Nettoyer les canvas
    this.ctx.clearRect(0, 0, 25, 25);
    this.mirrorCtx.clearRect(0, 0, 25, 25);
  }

  // ✨ NOUVELLE MÉTHODE : Redémarrer l'animation
  restart() {
    this.isRunning = true;
    this.startTime = performance.now();  // Reset le timing
    this.update();  // Relancer l'animation
  }
}

/***************************************************
 * STOCKAGE DES INSTANCES
 ***************************************************/
const morpherEngines = new Map();  // ✨ NOUVEAU : Stocker les instances

/***************************************************
 * AUTO INIT — toutes les cards
 ***************************************************/
// Init Phase 2 (cards normales)
document.querySelectorAll('.card').forEach(card => {
  const engine = new MorpherIdleEngine(card);
  morpherEngines.set(card, engine);
});

/***************************************************
 * SHARE ZONE — HOLD TO SHARE
 ***************************************************/
(function() {
  var shareZone    = document.getElementById('share-zone');
  var holdBtn      = document.getElementById('share-hold-btn');
  var progressBar  = document.getElementById('share-progress-bar');
  var switchBtn    = document.getElementById('switch-btn');
  var holdDuration = 2000;
  var holdInterval = null;
  var holdProgress = 0;

  var isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  // === AFFICHER / CACHER SHARE ZONE ===
  var shareZoneTimeout     = null;
  var shareZoneHideTimeout = null;

  function showShareZone() {
    clearTimeout(shareZoneTimeout);
    clearTimeout(shareZoneHideTimeout);
    shareZoneTimeout = setTimeout(() => {
      shareZone.classList.add('visible');
      shareZoneHideTimeout = setTimeout(() => {
        hideShareZone();
      }, 3500);
    }, 800);
  }

  function hideShareZone() {
    clearTimeout(shareZoneTimeout);
    shareZone.classList.remove('visible');
  }

  switchBtn.addEventListener('mouseenter', showShareZone);
  switchBtn.addEventListener('mouseleave', function() {
    clearTimeout(shareZoneTimeout);
  });
  switchBtn.addEventListener('touchstart', showShareZone, { passive: true });

  // === FONCTION TWEET ===
  function openTweet() {
    var switchLabel = document.querySelector('.switch-label');
    var lastSpan    = switchLabel.querySelector('span:last-child');
    var morpherId   = lastSpan
      ? lastSpan.textContent.trim()
      : switchLabel.childNodes[0].textContent.trim();

        var text = encodeURIComponent(
      "▣ REVIVAL PROTOCOL: SUCCESSFUL ▣\n\n" +
      "Morpher transcended. ✔️\n" +
      "Bio-mechanical link is stable. ✔️\n" +
      "Ritual (PoW) validated. ✔️\n\n" +
      morpherId + " — AWAKENED\n\n" +
      "🎬 Attach your video/screenshot below ↓\n\n" +
      "@MorphersORDI\n" +
      "#MORPHERS #Bitcoin #Ordinals #PoW"
    );
    window.open('https://x.com/intent/tweet?text=' + text, '_blank');
  }

  // === RESET HOLD ===
  function resetHold() {
    clearInterval(holdInterval);
    holdProgress = 0;
    progressBar.style.width = '0%';
    holdBtn.classList.remove('holding');
  }

  // === HOLD LOGIC (même pour mobile et desktop) ===
  function startHold() {
    holdProgress = 0;
    progressBar.style.width = '0%';
    holdBtn.classList.add('holding');
    holdInterval = setInterval(() => {
      holdProgress += (100 / (holdDuration / 50));
      progressBar.style.width = Math.min(holdProgress, 100) + '%';
      if (holdProgress >= 100) {
        clearInterval(holdInterval);
        holdBtn.classList.remove('holding');
        progressBar.style.width = '0%';
        openTweet();
      }
    }, 50);
  }

  // === EVENTS DESKTOP ===
  holdBtn.addEventListener('mousedown', startHold);
  holdBtn.addEventListener('mouseup', resetHold);
  holdBtn.addEventListener('mouseleave', resetHold);
  document.addEventListener('mouseup', resetHold);

  // === EVENTS MOBILE ===
  holdBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    startHold();
  }, { passive: false });
  holdBtn.addEventListener('touchend', resetHold);
  document.addEventListener('touchend', resetHold);

})();



/***************************************************
 * PANEL + TOAST + TYPEWRITER + FILTER GSAP
 * (from MORPHERS_panel)
 ***************************************************/
/***************************************************
 * TOAST
 ***************************************************/
var toast = document.getElementById('toast');
var toastTimeout = null;

function showToast(msg, duration) {
  duration = duration || 3000;
  toast.innerText = msg;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), duration);
}

/***************************************************
 * TYPEWRITER
 ***************************************************/
var TW = {
  line1: 'THIS IS YOUR PROOF OF WORK.',
  line2: 'UNLEASH THE PROTOCOL.',
  speed: 60,
  pauseFull: 2000,
  pauseEmpty: 600,
  _t: null,
  _phase: 'type1',
  _idx: 0,
  el1: document.getElementById('typewriter-line1'),
  el2: document.getElementById('typewriter-line2'),

  start: function() {
    this._phase = 'type1';
    this._idx = 0;
    this._run();
  },

  _run: function() {
    var self = TW;
    clearTimeout(self._t);

    if (self._phase === 'type1') {
      if (self._idx <= self.line1.length) {
        self.el1.textContent = self.line1.slice(0, self._idx);
        self._idx++;
        self._t = setTimeout(() => self._run(), self.speed);
      } else {
        self._phase = 'type2';
        self._idx = 0;
        self._t = setTimeout(() => self._run(), 200);
      }

    } else if (self._phase === 'type2') {
      if (self._idx <= self.line2.length) {
        self.el2.innerHTML = self.line2.slice(0, self._idx) + '<span class="tw-cursor"></span>';
        self._idx++;
        self._t = setTimeout(() => self._run(), self.speed);
      } else {
        self._phase = 'erase2';
        self._idx = self.line2.length;
        self._t = setTimeout(() => self._run(), self.pauseFull);
      }

    } else if (self._phase === 'erase2') {
      if (self._idx >= 0) {
        self.el2.innerHTML = self.line2.slice(0, self._idx) + '<span class="tw-cursor"></span>';
        self._idx--;
        self._t = setTimeout(() => self._run(), self.speed * 0.6);
      } else {
        self._phase = 'erase1';
        self._idx = self.line1.length;
        self._t = setTimeout(() => self._run(), 100);
      }

    } else if (self._phase === 'erase1') {
      if (self._idx >= 0) {
        self.el1.textContent = self.line1.slice(0, self._idx);
        self._idx--;
        self._t = setTimeout(() => self._run(), self.speed * 0.6);
      } else {
        self._phase = 'type1';
        self._idx = 0;
        self._t = setTimeout(() => self._run(), self.pauseEmpty);
      }
    }
  }
};

/***************************************************
 * PANEL TOGGLE
 ***************************************************/
var shortcutPanel = document.getElementById('shortcut-panel');
var toggleLabel = document.getElementById('toggle-label');
var loreAnimated = false;
var twStarted = false;

function toggleShortcutPanel() {
  shortcutPanel.classList.toggle('open');
  toggleLabel.innerText = shortcutPanel.classList.contains('open')
    ? 'CONTROLS [X]'
    : 'CONTROLS [?]';

  if (shortcutPanel.classList.contains('open')) {
    clearTimeout(toastTimeout);
    toast.classList.remove('visible');
    // Stop blink au 1er clic CONTROLS
    if (!toastDismissed) {
      toastDismissed = true;
      toast.classList.remove('blinking');
      toast.style.opacity = '0';
    }
  }

  if (shortcutPanel.classList.contains('open') && !loreAnimated) {
    loreAnimated = true;
    var elements = document.querySelectorAll('.panel-inner p, .panel-inner h2, .pixel-divider');
    elements.forEach(function(el, i) {
      el.style.animationDelay = (0.1 + i * 0.12) + 's';
      el.style.animationName = 'none';
      void el.offsetWidth;
      el.style.animationName = '';
    });
    if (!twStarted) {
      twStarted = true;
      setTimeout(() => TW.start(), 1800);
    }
  }
}

document.getElementById('shortcut-panel-toggle')
  .addEventListener('click', toggleShortcutPanel);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && shortcutPanel.classList.contains('open')) {
    toggleShortcutPanel();
    return;
  }
  if (e.key === '?' || e.key === '/') {
    toggleShortcutPanel();
  }
});

/***************************************************
 * FILTER CYCLE — OFF / VIVID / GAMEBOY
 ***************************************************/
var filterState = 0;
var filterMorph = document.getElementById('filter-morph');

gsap.set(filterMorph.querySelector('.filter-OFF'),     { y: 0 });
gsap.set(filterMorph.querySelector('.filter-VIVID'),   { y: 30 });
gsap.set(filterMorph.querySelector('.filter-GAMEBOY'), { y: 60 });
gsap.set(filterMorph.querySelector('.circle'), { x: 0, scaleX: 1, borderRadius: '0%' });

function dotAnim() {
  var tl = gsap.timeline();
  tl.to(filterMorph.querySelector('.circle'), {
    x: -20, scaleX: 2.5, borderRadius: '0px',
    ease: 'power1.out', duration: 0.2
  }).to(filterMorph.querySelector('.circle'), {
    x: 0, scaleX: 1, borderRadius: '0%',
    ease: 'power1.in', duration: 0.2
  }, '>=0');
}

var positions = {
  0: { OFF: 0,   VIVID: 30,  GAMEBOY: 60 },
  1: { OFF: -30, VIVID: 0,   GAMEBOY: 30 },
  2: { OFF: -60, VIVID: -30, GAMEBOY: 0  }
};

filterMorph.addEventListener('click', function() {
  filterState = (filterState + 1) % 3;
  var pos = positions[filterState];

  gsap.to(filterMorph.querySelector('.filter-OFF'), {
    y: pos.OFF, ease: 'power2.inOut', duration: 0.5
  });
  gsap.to(filterMorph.querySelector('.filter-VIVID'), {
    y: pos.VIVID, ease: 'power2.inOut', duration: 0.5
  });
  gsap.to(filterMorph.querySelector('.filter-GAMEBOY'), {
    y: pos.GAMEBOY, ease: 'power2.inOut', duration: 0.5
  });

  dotAnim();

const container = document.querySelector('.canvas-container');
container.classList.remove('filter-vivid', 'filter-gameboy');
document.body.classList.remove('gameboy-scanlines');

if (filterState === 1) container.classList.add('filter-vivid');
if (filterState === 2) {
  container.classList.add('filter-gameboy');
  document.body.classList.add('gameboy-scanlines');
}
});
/***************************************************
 * TOAST AU DÉMARRAGE — blink jusqu'au 1er clic CONTROLS
 ***************************************************/
var toastDismissed = false;

setTimeout(() => {
  if (!shortcutPanel.classList.contains('open')) {
    toast.classList.add('blinking');
  }
}, 1500);

 </script>

</body>
</html>