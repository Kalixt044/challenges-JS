export function countWords(array) {
  let total_words = 0;
  for (let i = 0; i < array.length; i++) {
    let words = array[i].split(' ');
    total_words += words.length;
  }
  return total_words;
}
