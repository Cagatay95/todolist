import React, { useState } from 'react'
import { useTodoLayerValue } from "./context/todoContext"
import TodoList from './components/TodoList'
import './App.css'
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    // content değerini tanımlıyoruz
    if(!content) return;
    const newTodo = {
      id: Math.floor(Math.random() * 12312312312),
      content: content,
      isCompleted: false
    }
dispatch({

  type:"ADD_TODO",
  payload:newTodo,
}
)

  setContent('')
  };
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" onChange={(event) => setContent(event.target.value)} value={content} />
        {/* HandleSubmit yöntemi, geri çağırma için OnSubmit işleyici olarak kaydedilir. Form kullanıcı tarafından gönderildiğinde işleyici çağrılır */}
        <button className="todo-button">
          ekle
        </button>
      </form>
      {/* TODO LİSTESİ */}
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
