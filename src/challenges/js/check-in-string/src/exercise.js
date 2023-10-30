export function checkInString(text, term) {
  text = text.toLowerCase();
  term = term.toLowerCase();

  if (text.includes(term)) {
    return true;
  } else {
    return false;
  }
}
