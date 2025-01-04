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
