/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import React from "react";
import { applyTheme } from "../../../../theming/src/applyTheme";
import { Theme, useTheme } from "../provider/ThemeProvider";

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SelectItem = styled.div<SelectItemProps>((props) => ({
  cursor: "pointer",
  userSelect: "none",
  padding: "8px 20px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--border-color)",
  backgroundColor: props.isSelected ? "var(--primary)" : "var(--background)",
  color: "var(--text-color)",
  borderRadius: "20px",
  transition: "transform 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const ThemeSelect = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    toggleTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <Container>
      <SelectItem
        isSelected={theme === "light"}
        onClick={() => handleThemeChange("light")}
      >
        Light
      </SelectItem>
      <SelectItem
        isSelected={theme === "dark"}
        onClick={() => handleThemeChange("dark")}
      >
        Dark
      </SelectItem>
      <SelectItem
        isSelected={theme === "summer"}
        onClick={() => handleThemeChange("summer")}
      >
        Summer
      </SelectItem>
    </Container>
  );
};

export default ThemeSelect;
