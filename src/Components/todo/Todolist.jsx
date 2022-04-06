import React, { useMemo } from "react";
import TodoCard from "./TodoCard";

const Todolist = ({ todos, setTodos, status,search }) => {
  const list = useMemo(() => {
    if (status === "completed") {
      return todos.filter((t) => t.completed === true);
    }
    if (status === "uncompleted") {
      return todos.filter((t) => t.completed !== true);
    }
    return todos;
  }, [todos, status]);

  return (
    <div
      className="todo-container  "
      style={{ fontWeight: "bold", borderRadius: "15px" }}
    >
      <ul className="todo-list">
        {list.map((todo) => (
          <TodoCard
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            search={search}
          
           
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
