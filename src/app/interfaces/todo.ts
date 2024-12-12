export interface Todo {
  // ? signifie que l'id n'est pas obligatoire
  id?: number,
  title: string,
  userId: number,
  completed: boolean,
}
