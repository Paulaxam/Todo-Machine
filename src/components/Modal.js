import React from "react";
import { TodoForm } from "./TodoForm";

export function Modal(props) {
  return (
    <div className="modal__container">
      <TodoForm />
    </div>
  );
}
