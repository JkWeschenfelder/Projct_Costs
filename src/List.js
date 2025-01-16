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

export default List;
