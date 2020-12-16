export function relativizePath (from: string, to: string): string {
  return to.substr(from.length + 1)
}
