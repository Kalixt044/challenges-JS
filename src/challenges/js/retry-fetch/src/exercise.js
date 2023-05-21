export async function fetchRetry(url, times, count = 1) {
  try {
    const response = await window.fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Invalid response: ${response.status}`);
    }
  } catch (error) {
    if (count < times) {
      return fetchRetry(url, times, count + 1);
    } else {
      throw new Error(`Invalid request with ${times} retries`);
    }
  }
}
