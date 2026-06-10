// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "My heart is yours", time: 0.8 },
  { text: "It's you that I hold on to", time: 4 },
  { text: "Yeah, That's what I do", time: 12 },
  { text: "And I know I was wrong", time: 19 },
  { text: "But I won't let you down", time: 25 },
  { text: "Oh yeah I will", time: 30 },
  { text: "Yeah I will", time: 32 },
  { text: "Yeah I will", time: 34 },
  { text: "I said, Oh", time: 39 },
  { text: "I cry, Oh", time: 49 },
  { text: "Yeah, I saw sparks", time: 59 },
  { text: "Yeah, I saw sparks", time: 65 },
  { text: "And I saw sparks", time: 69 },
  { text: "Yeah, I saw sparks", time: 73 },
  { text: "Sing it out", time: 78 },
  { text: "La, la, la, la, oh", time: 82 },
  { text: "At the time", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
