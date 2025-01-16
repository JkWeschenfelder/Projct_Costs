// src/components/Board.js
import React from "react";
import List from "./List";

const Board = () => {
  return (
    <div className="board">
      <h1>Quadro de Projetos</h1>
      <div className="lists">
        <List title="To Do" />
        <List title="In Progress" />
        <List title="Done" />
      </div>
    </div>
  );
};

export default Board;
// src/components/List.js
import React from "react";
import Card from "./Card";

const List = ({ title }) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      <Card title="Tarefa 1" description="Descrição da tarefa 1" />
      <Card title="Tarefa 2" description="Descrição da tarefa 2" />
    </div>
  );
};

export { List };
