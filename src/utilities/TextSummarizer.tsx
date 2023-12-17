export function TextSummarizer(text: string, maxChars: number) {
  if (text.length <= maxChars) return <p>{text}</p>;
  text = text.substring(0, maxChars);
  return <p>{text}...</p>;
}
