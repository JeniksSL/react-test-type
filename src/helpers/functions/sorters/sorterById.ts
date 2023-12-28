export function sorterById<T extends { id: number }[]>(arg: T): T {
  return arg.sort((a, b) => a.id - b.id) as T
}
