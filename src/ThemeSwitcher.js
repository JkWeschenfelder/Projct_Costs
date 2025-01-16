// src/components/ThemeSwitcher.js
import React from "react";
import { useState } from "react";

const ThemeSwitcher = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Trocar Tema</button>;
};

export default ThemeSwitcher;
