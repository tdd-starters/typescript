export function capitalize(source: string) {
  if (source.length == 0) {
    return ""
  }
  return source.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ")
}
