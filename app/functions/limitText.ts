export function limitText(str: string, limite: number) {
  if (str.length > limite) {
    return str.slice(0, limite) + '...';
  } else {
    return str;
  }
}