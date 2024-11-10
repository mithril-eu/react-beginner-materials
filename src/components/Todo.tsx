import { Todo } from "../types";
import DeleteIcon from "../assets/delete.svg?react";

type Props = {
  todo: Todo;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ todo, toggleCompleted, deleteTodo }: Props) {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <span>{todo.text}</span>
      {/* <button onClick={() => deleteTodo(todo.id)}>X</button> */}
      {/* <img src={deleteIcon} alt="Delete icon" width={20} height={20} /> */}
      <DeleteIcon width={20} height={20} onClick={() => deleteTodo(todo.id)} />
    </li>
  );
}
