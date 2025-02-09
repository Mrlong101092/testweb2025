import reactLogo from './assets/react.svg'
import './App.css'
import TodoNew from './component/TodoNew'
import TodoData from './component/TodoData'
import {useState} from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    {
    id: 1, name: "JSX"
    },
    {
    id: 2, name: "JS"
    }
])

const mrlong = "Mrlong M";
const age = 30;

 const data = {
  address: "Hanoi",
  country: "Vietnam"
  }
  
  const addNewTodo =(name)=>{
    alert(`call me ${name}`)
  }
 
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Mrlong List</div>
        <TodoNew
        addNewTodo={addNewTodo}
        />
        <TodoData
          name={mrlong}
          age={age} 
          data={data}
          todoList={todoList}
        />
        <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      </div>
    </>
  )
}
export default App
