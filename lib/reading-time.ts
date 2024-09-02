export default function ReadingTime(content: string, wordsPerMinute: number = 238) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
