import { SNSName } from "@/type";

// n桁にする
export function toDigits(num: number, n: number): string {
  return `${num}`.padStart(n, "0");
}

// snsのurlを取得
export function getSNSUrl(snsUrl: string, id: string): string {
  return snsUrl.replace("{id}", id);
}

// 新しいタブでリンクを開く
export function jumpToLink(link: string) {
  window.open(link, "_blank");
}
