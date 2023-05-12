export function maxArea(alturas) {
  let maxArea = 0;
  let left = 0;
  let right = alturas.length - 1;

  while (left < right) {
    const width = right - left;
    const height = Math.min(alturas[left], alturas[right]);
    const area = width * height;

    if (area > maxArea) {
      maxArea = area;
    }

    if (alturas[left] < alturas[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
