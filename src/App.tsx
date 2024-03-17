import React, { useState } from "react";

interface Todo {
  text: string;
}

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target?.value);
  };
  const onButtonClick = () => {
    if (todo === "") {
      return;
    }
    setTodos((current) => [
      ...current,
      {
        text: todo,
      },
    ]);
    setTodo("");
  };
  return (
    <div>
      <input type="text" value={todo} onChange={onInputChange} />
      <button onClick={onButtonClick}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}> {item.text} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
