export default function formatTime(seconds: number|string) {
  let minutes:number|string = Math.floor(seconds as number / 60);
  minutes = String(minutes).padStart(2,'0');
  seconds = Math.floor(seconds as number % 60);
  seconds = String(seconds).padStart(2,'0');
  return minutes + ":" + seconds;
}