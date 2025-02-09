import reactLogo from './assets/react.svg'
import './App.css'
import TodoNew from './component/TodoNew'
import TodoData from './component/TodoData'
import {useState} from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // {id: 1, name: "JSX"},{id: 2, name: "JS"}
])  
  const addNewTodo =(name)=>{
    const newTodo = {
      id: randomIntFromInterval(1, 9999),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
   }

  return (
      <div className="todo-container">
        <div className="todo-title">Mrlong List</div>
        <TodoNew
        addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        }
      </div>
  )
}
export default App
