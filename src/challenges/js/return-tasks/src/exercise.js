import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
  try {
    const result1 = await doTask1();
    const result2 = await doTask2();
    const result3 = await doTask3();

    return [result1, result2, result3];
  } catch (error) {
    console.error(error);
  }
}
