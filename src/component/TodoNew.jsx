import {useState} from 'react';
const TodoNew = (props) =>{

  const [valueInput, setValueInput] = useState("mrlong")

  const {addNewTodo} = props;

const handleClick = ()=>{
  addNewTodo(valueInput)
  setValueInput("");
}
const handleOnChange = (name)=>{
  setValueInput(name)  
}

  console.log(">>> check props: ", props)
    return (
        <div className='todo-new'>
          <input type="text" 
            onChange={(event)=>handleOnChange(event.target.value)}
            value={valueInput}
          />
          <button style={{cursor: "pointer"}}
            onClick={handleClick}
          >Add</button>
          <div>
            My text input = {valueInput}
          </div>
        </div>
    )
}
export default TodoNew;