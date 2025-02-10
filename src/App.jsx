import reactLogo from './assets/react.svg'
import './App.css'
import TodoNew from './component/TodoNew'
import TodoData from './component/TodoData'
import {useState} from 'react';
import Header from './layout/header';
import Footer from './layout/footer';

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

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item)=>item.id !== id)
    setTodoList(newTodo)   
  }

  return (
    <>
      <Header />  
      <div className="todo-container">
        <div className="todo-title">Mrlong List</div>
        <TodoNew
        addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        }
      </div>
      <Footer />
    </>
  )
}
export default App
