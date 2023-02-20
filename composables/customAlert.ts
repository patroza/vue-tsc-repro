export function customAlert(text: string) {
  return new Promise<void>((res) => res(alert(text)))
}
