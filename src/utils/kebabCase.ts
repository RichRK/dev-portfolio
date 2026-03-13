export function kebabCase(text: string): string {
  return text.toLowerCase().replaceAll(' ', '-');
}