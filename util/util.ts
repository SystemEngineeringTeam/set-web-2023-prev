// n桁にする
export function toDigits(num: number, n: number): string {
  return `${num}`.padStart(n, "0");
}
