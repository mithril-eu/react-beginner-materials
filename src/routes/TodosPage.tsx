import { FormEvent, useState } from "react";
import DeleteIcon from "../assets/delete.svg?react";
import { Todo } from "../types";
// import { FaBeer } from "react-icons/fa";

const initialTodos: Todo[] = [{ id: 1, text: "Testni TODO", completed: false }];

export function TodosPage() {
  const [todos, setTodos] = useState(initialTodos);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    const text = values.get("text") as string;
    const newTodo: Todo = { id: Date.now(), text, completed: false };

    setTodos((prevState) => [...prevState, newTodo]);

    e.currentTarget.reset();
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevState) => {
      const updatedState = prevState.map(
        (todo) =>
          todo.id !== id ? todo : { ...todo, completed: !todo.completed }
        // : { ...todo, completed: todo.completed ? false : true }
      );

      return updatedState;
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevState) => {
      const updatedState = prevState.filter((todo) => todo.id !== id);

      return updatedState;
    });
  };

  return (
    <div>
      <h1>TO-DO list</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="text" required />
        <button>Add</button>
      </form>

      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <span>{todo.text}</span>
            {/* <button onClick={() => deleteTodo(todo.id)}>X</button> */}
            {/* <img src={deleteIcon} alt="Delete icon" width={20} height={20} /> */}
            <DeleteIcon
              width={20}
              height={20}
              onClick={() => deleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}