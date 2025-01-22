export const FLIPCARD_AUDIO_PATH = "audio/flipcard.mp3";
let flipAudio = null;

export function loadFlipSound() {
  if (!flipAudio) {
    flipAudio = new Audio(FLIPCARD_AUDIO_PATH);
  }
}

// Function to play the audio
export function playFlipSound(rate = 2) {
  if (flipAudio) {
    flipAudio.currentTime = 0;
    flipAudio.playbackRate = rate;
    flipAudio
      .play()
      .catch((error) =>
        console.error("Error while playing flipcard audio:", error)
      );
  }
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateRandomValues(count) {
  const values = [];
  for (let i = 0; i < count / 2; i++) {
    values.push(i, i);
  }
  return shuffle(values);
}
