import { ThemeType } from "./providers/context";

export function setColorTheme(theme: ThemeType) {
  const palette = themePallete[theme];
  const root = document.documentElement;

  root.style.setProperty("--primary-color", palette.primary);
  root.style.setProperty("--secondary-color", palette.secondary);
}

type ColorPalette = {
  primary: string;
  secondary: string;
};

const themePallete: Record<ThemeType, ColorPalette> = {
  light: { primary: "#fff", secondary: "#000" },
  dark: { primary: "#000", secondary: "#fff" },
};
