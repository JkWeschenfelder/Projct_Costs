import React, { useState, createContext, useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import "./styles.css";

// Contexto para o tema
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState("");
  const [newProjectValue, setNewProjectValue] = useState("");

  const createBoard = () => {
    if (!newBoardName.trim() || !newProjectValue.trim()) return;

    const newBoard = {
      id: `board-${Date.now()}`,
      name: newBoardName,
      value: parseFloat(newProjectValue),
    };

    setBoards([...boards, newBoard]);
    setNewBoardName("");
    setNewProjectValue("");
  };

  const deleteBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
  };

  return (
    <div className="app">
      <h1 className="title">Gerenciador de Projetos</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <div className="create-board">
        <input
          type="text"
          placeholder="Nome do projeto"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor do projeto"
          value={newProjectValue}
          onChange={(e) => setNewProjectValue(e.target.value)}
        />
        <button onClick={createBoard}>Criar Quadro</button>
      </div>

      <div className="boards">
        {boards.map((board) => (
          <div key={board.id} className="board">
            <div className="board-header">
              <h2>{board.name}</h2>
              <button
                className="delete-board"
                onClick={() => deleteBoard(board.id)}
              >
                <FiTrash2 />
              </button>
            </div>
            <div className="board-body">
              <p>Valor do Projeto: R$ {board.value.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
