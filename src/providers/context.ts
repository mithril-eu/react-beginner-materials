import { createContext } from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
