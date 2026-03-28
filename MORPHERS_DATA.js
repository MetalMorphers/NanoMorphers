/**
 * ============================================================
 *  MORPHERS_DATA.js
 *  Fichier 2 sur 12 — Données + Algo de séquence
 *  À inscrire sur Bitcoin Ordinals UNE SEULE FOIS
 *  INSCRIPTION_ID_B
 * ============================================================
 *
 *  Ce fichier contient :
 *  1. Les données des 10 Morphers de test (DNA, image base64)
 *  2. L'algo generateSequence() qui génère la séquence unique
 *     de chaque Morpher à partir de son ID + DNA
 *
 *  Le fichier MORPHERS_ENGINE.html lit :
 *    - window.MORPHER_ID  → défini par le fichier Morpher à minter
 *    - window.MORPHERS_DATA → défini ici
 *    - window.generateSequence → défini ici
 * ============================================================
 */

/* ──────────────────────────────────────────────────────────
   1. ALGO DE GÉNÉRATION DE SÉQUENCE
   ──────────────────────────────────────────────────────────
   generateSequence(id, dna) → retourne un tableau de 3 chars
   ex: generateSequence('#001', '#2d2d95') → ['w', 'r', 'y']

   - Déterministe : même ID + DNA = toujours la même séquence
   - Unique : chaque Morpher a sa propre séquence
   - Basé sur les 36 chars disponibles dans le jeu (0-9, a-z)
   ────────────────────────────────────────────────────────── */
window.generateSequence = function(id, dna) {
  // Les 36 caractères disponibles dans la grille matrix
  // (doivent correspondre à this.characters dans Effect)
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

  // Seed déterministe : combinaison de l'ID numérique + valeur hex du DNA
  var idNum  = parseInt(id.replace('#', ''), 10);
  var dnaNum = parseInt(dna.replace('#', ''), 16);
  var seed   = (idNum * 31 + dnaNum) % 99999;

  // Générateur de nombres pseudo-aléatoires (LCG)
  var seq = [];
  while (seq.length < 3) {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    var c = chars[seed % chars.length];
    // On évite les doublons dans la séquence
    if (seq.indexOf(c) === -1) seq.push(c);
  }
  return seq; // ex: ['w', 'r', 'y']
};


/* ──────────────────────────────────────────────────────────
   2. DONNÉES DES 10 MORPHERS DE TEST
   ──────────────────────────────────────────────────────────
   Pour chaque Morpher :
   - id      : identifiant ex: '#001'
   - dna     : couleur DNA en HEX ex: '#2d2d95'
   - dnaRgb  : même couleur en RGB séparé par espaces (pour CSS)
   - img     : image pixel art 25x25 en base64
               ⚠️ Remplacer 'PLACEHOLDER_BASE64' par la vraie
               image base64 de chaque Morpher avant inscription
   ────────────────────────────────────────────────────────── */
window.MORPHERS_DATA = {

  '#001': {
    id:     '#001',
    dna:    '#2d2d95',
    dnaRgb: '45 45 149',
    // Séquence générée : ['w', 'r', 'y']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAJFBMVEUAAAAAAAAQEBAtLZUySs9WdtBhV9hnWNxsV+CFfzOJniWqqjlG3rQcAAAAAXRSTlMAQObYZgAAAJFJREFUeF6VziEOwjAUh/H1Bv1SoIydAElQyGZcAMEBZkiQKHTdwg2QLzXY6V4OGHtjdv+k4pcvTV4xawaAUQ9kE0fF9QsVtFHaiO21CIgIx5/IXUqSO217l9zu3+oUJi1I/W8OcdXQDJTP6THlgUIH122DHbRqPruoOMPypDJVZ/L4kTvG37Q5bwvvVGD7N2dvhk8ig6xkSrYAAAAASUVORK5CYII='
  },

  '#002': {
    id:     '#002',
    dna:    '#a5c43a',
    dnaRgb: '165 196 58',
    // Séquence générée : ['f', 'e', 'p']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAG1BMVEUAAAAAAAASUBalRzqlUDqlcDqlvjqlxDql4zpGVWkyAAAAAXRSTlMAQObYZgAAAIdJREFUeF6VzjEOgzAMhWFyAz+TxMy9QcTA3N7AaavOqUT3ZOH6VRsCrPySh0/y8LqTAXQA84GWb7YJsHp9tGfJ0KxYqrBILC/JVU4Qi4qrwjTGcp9CVR+CZg3jKgEypK8CiAvtcwxf0LUM3pywKf3aNANul1PzRBM+MD7RqsFT54cmgP53pi8+5RVt2XtkUwAAAABJRU5ErkJggg=='
  },

  '#003': {
    id:     '#003',
    dna:    '#924a00',
    dnaRgb: '146 74 0',
    // Séquence générée : ['b', '6', 'h']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAFVBMVEUAAAAAAAAAPmQAfbwgoK9KFrSSSgCjV0pHAAAAAXRSTlMAQObYZgAAAIVJREFUeF6VzsEJhDAUhGHTQf73JPcEtoBoBYINRNkCnoHtv4QFjdm9OjCH7zLM8CgOgK6KqXWpVuUGmm2mkQXLxuJPjRJ1Jo1NS9xriesl0muv7xQvBUtaJX4usYIxthWHl+T/zsjG0MEmha5cKLlrCkF+EuPgFpO5I/smFZzoLfBnn+QL9YATQ4LqM2QAAAAASUVORK5CYII='
  },

  '#004': {
    id:     '#004',
    dna:    '#d4af37',
    dnaRgb: '212 175 55',
    // Séquence générée : ['t', 'w', '7']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_004'
  },

  '#005': {
    id:     '#005',
    dna:    '#1a7abf',
    dnaRgb: '26 122 191',
    // Séquence générée : ['u', 'x', '0']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_005'
  },

  '#006': {
    id:     '#006',
    dna:    '#9b1b30',
    dnaRgb: '155 27 48',
    // Séquence générée : ['y', 'd', 'k']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_006'
  },

  '#007': {
    id:     '#007',
    dna:    '#2e8b57',
    dnaRgb: '46 139 87',
    // Séquence générée : ['9', 'w', 'j']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_007'
  },

  '#008': {
    id:     '#008',
    dna:    '#ff6600',
    dnaRgb: '255 102 0',
    // Séquence générée : ['e', 'd', '4']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_008'
  },

  '#009': {
    id:     '#009',
    dna:    '#7b2d8b',
    dnaRgb: '123 45 139',
    // Séquence générée : ['5', 'k', 'f']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_009'
  },

  '#010': {
    id:     '#010',
    dna:    '#00ced1',
    dnaRgb: '0 206 209',
    // Séquence générée : ['u', 'p', 'c']
    img: 'data:image/png;base64,PLACEHOLDER_BASE64_010'
  }

};
