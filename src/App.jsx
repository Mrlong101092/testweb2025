import reactLogo from './assets/react.svg'
import './App.css'
import TodoNew from './component/TodoNew'
import TodoData from './component/TodoData'

const App = () => {

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
