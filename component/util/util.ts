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

// 日付をフォーマットする
export function formatdate(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return `${year}年${month}月${day}日`;
}

// mdからテキスト部分を取得
export function getTextFromMd(md: string) {
  const text = md
    .replace(/#+ .*\n/g, "")
    .replace(/[ |:\*-]/g, "")
    .replace(/<.+>/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/\\/g, "")
    .replace(/\[.*\]\(.*\)/g, "");
  return text;
}
