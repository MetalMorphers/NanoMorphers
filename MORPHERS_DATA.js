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
    dna:    '#604e7b',
    dnaRgb: '96 78 123',
    // Séquence générée : ['t', 'w', '7']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAHlBMVEUAAAAAAAAsUNBgA3hgFF9gLKNgTntghPNgqPNgvFaLONxNAAAAAXRSTlMAQObYZgAAAJZJREFUeF6VjkEKwyAURPUGjirqtjewATxHaS/wW5J2GyhkLXgBKQV62wZF93nwgccMn2HHwI4Y5qx1w7h7xhdGb6LwCK3LPUCB4FGtINmIhFLto9MW16yaqVtewztfW3PSGkFrFVp2gTwDLWMAkyfB+xrUrI/x5S7p1w1forl042YHY/VCWKgbZnBD44sRzPhugKh3hD+KZhntnKScZQAAAABJRU5ErkJggg=='
  },

  '#005': {
    id:     '#005',
    dna:    '#002a32',
    dnaRgb: '0 42 50',
    // Séquence générée : ['u', 'x', '0']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAGFBMVEWqEDHIL0UAAAAAKjI+PT50cXOqEDG4WgFDbDf7AAAAAnRSTlMAAHaTzTgAAACZSURBVHhejdBBCsMgEIXh4AmKJxiemWQ/RbKX9AKCFxCaA4yUXL+IMU3ppj+4+hh4ONyuDV/9mkGtm5XaaX5ZvBwGcJQEUDUzjxCVcUY1q2MoRVdoM02ucNzR7tZHKa81ULVh1qCqYadmCVBwbGZAnAjoOy17XHY+OX925m3K+bQNccqnOcEd3ZDE+EiHOYZlR91A9VX7+8/ebg4jv0wzTs4AAAAASUVORK5CYII='
  },

  '#006': {
    id:     '#006',
    dna:    '#2c3e6e',
    dnaRgb: '44 62 110',
    // Séquence générée : ['y', 'd', 'k']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAIVBMVEUAAAAAAAAFk6wrxxMsPm5EJh98RXGUvpyl3xOraYrxl5MrCzsqAAAAAXRSTlMAQObYZgAAAJFJREFUeF6VzrENwjAQQFG8gT++kKQ8YeijTHASjMAAaeipmMMoTRiAgimRcBxoc5KLpy/rbrNuAPyigIaf6rCvixz1Te+QhaGqWK7CEKMOMitdJe6GMYvnK8bjO2W1uU1ZPEDZzs3hq4OHst1VF/7OPFe2HBo6w/oiepHQFbk2MS0fOSU3WmmN4KQpAv99a+YDjfUWbWvJ5QEAAAAASUVORK5CYII='
  },

  '#007': {
    id:     '#007',
    dna:    '#d8eeca',
    dnaRgb: '216 238 202',
    // Séquence générée : ['9', 'w', 'j']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAGFBMVEUAAAAAAAAxJRlKJjJWpUyURT2xyIHY7spZPPuFAAAAAXRSTlMAQObYZgAAAINJREFUeF6VjjEOwzAIRcMN/O0gZkfyCXqEnoBKVuZMmVEGX79RG8icLxieHgKmZ0E6K4gBvikz5yDkqouPknDVJrjUitar6F+ybrJi6+ly+xhjv52ZueMZMMzXRSCVV0J8Q+WNyUM4iiHIDGZBGWcFLUqf6oSm1KuvFAaxOAHp10/yBToAFGkX8jVHAAAAAElFTkSuQmCC'
  },

  '#008': {
    id:     '#008',
    dna:    '#173581',
    dnaRgb: '23 53 129',
    // Séquence générée : ['e', 'd', '4']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAHlBMVEUAAAAAAAAA08QXNYEtalVBLCVraCx5RyuihRupqRpk1/4jAAAAAXRSTlMAQObYZgAAAJBJREFUeF6VzzEOwiAUgGF7A34Ixo4deoAnJyCxB+iAO0O7E013dfHYNrTC3JcwfPnz8sLp2DRABd57iuR5S7IDXEoPQeViIMaIIUuw58WCbE2mVdGx7c3TfQlzVFlGwtpGt4kreLRsalB2UNTzdqB+gD50qqYu9RQFre1YdHnrb2m4Fx9Ru1pDY9q/QOV3ZH5wqRZrXJ2KDQAAAABJRU5ErkJggg=='
  },

  '#009': {
    id:     '#009',
    dna:    '#b50024',
    dnaRgb: '181 0 36',
    // Séquence générée : ['5', 'k', 'f']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAAAAAAAAkF2hsrhFxFzy1ACQtDXZYAAAAAXRSTlMAQObYZgAAAH9JREFUeF6VzsENwjAMhWGygV/sDlAxgSkLWMoCj7r7r4KgSeDaX/LhOz3fLlXwaaqZWUypNcUAGpnRCY9ghMtXCmQS2nVUy7rsp7A/Ml8bTy10kn50VYCoyylALAWQsWgNf3+mEVMrwXXqjqI/qZcNQ2heniFdaiimQ4B870pvG8kS/4W/5lsAAAAASUVORK5CYII='
  },

  '#010': {
    id:     '#010',
    dna:    '#143804',
    dnaRgb: '20 56 4',
    // Séquence générée : ['u', 'p', 'c']
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAAAAAAAAPK1gUOAQ9OJfpONmJCzTXAAAAAXRSTlMAQObYZgAAAIVJREFUeF6VzdENgzAMBmGyQY44A7ilA1hhgUhkAAu6/yqtgMAzv5SHTycrw6MFAC6ZV7dLZS1rF4jbBnEvo+LuvNhVMvlLTnY2ba3q0QY+U2vLR+OupFpr1fepDJWcDkGUJULs38vG0Aez2JWSGVa6mAli95mH+5DpL+1tFIKMXRD392Q/mEYSRxaXeH4AAAAASUVORK5CYII='
  }

};
