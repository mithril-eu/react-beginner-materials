import { useContext } from "react";
import { ThemeContext } from "../providers/context";

export function AboutPage() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleClick}>Promijeni temu</button>
      <p>React education 2024.</p>
    </div>
  );
}
