
import './App.css';
import { useState } from 'react';



function App() {
  const [todos, setTodos] = useState([]);
  const onclick = () => {
    const input = document.querySelector('input');
    setTodos([...todos, input.value]);
    input.value = '';
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <pre>To do List to add your daily tasks
        manage your time and stay organized.
        Add, edit, and delete tasks to keep track of your to-dos and boost your productivity.
      </pre>


      <input
        type="text"
        placeholder="Add a new todo"
      />
      <button onClick={onclick}>Add Todo</button>
      <button onClick={() => setTodos([])}>Clear All</button>
      <ul>
        {todos.map((todo, index) => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
