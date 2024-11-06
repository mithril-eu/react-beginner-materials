import { ReactNode, useEffect, useState } from "react";
import { ThemeContext, ThemeType } from "./context";
import { setColorTheme } from "../utils";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    setColorTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
