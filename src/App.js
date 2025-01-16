import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme"; // Seus temas
import Board from "./components/Board"; // Quadro de Tarefas
import ThemeSwitcher from "./components/ThemeSwitcher"; // Botão para trocar tema
import { createGlobalStyle } from "styled-components";

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: Arial, sans-serif;
  }
  .board {
    padding: 20px;
  }
  .lists {
    display: flex;
  }
  .list {
    margin-right: 20px;
  }
  .card {
    background: ${(props) => props.theme.cardBackground};
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <ThemeSwitcher toggleTheme={toggleTheme} /> {/* Troca de Tema */}
        <Board /> {/* Quadro de Projetos */}
      </div>
    </ThemeProvider>
  );
};

export default App;
