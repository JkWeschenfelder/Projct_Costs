// src/theme.js
export const lightTheme = {
  background: "#fff",
  color: "#000",
  cardBackground: "#f4f4f4",
};

export const darkTheme = {
  background: "#333",
  color: "#fff",
  cardBackground: "#444",
};
Themeswider;
// src/components/ThemeSwitcher.js
import React from "react";
import { useState } from "react";

const ThemeSwitcher = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Trocar Tema</button>;
};

export default ThemeSwitcher;
