"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { applyTheme } from "../../../../theming/src/applyTheme";

export type Theme = "light" | "dark" | "summer";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
} | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
