import { useContext } from "react";
import { ThemeContext } from "../providers/context";
import { useCounterStore } from "../stores/counter.store";

export function AboutPage() {
  const { increment } = useCounterStore();
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleClick}>Promijeni temu</button>
      <p>React education 2024.</p>
      <button onClick={increment}>Add up</button>
    </div>
  );
}
