export function parseToURL(title) {
const url = title.toLowerCase().replace(/ /g, "-");
  return url;
}
