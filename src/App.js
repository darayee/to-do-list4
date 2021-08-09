import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "test1",
      parent: "list1"
    },
    {
      text: "test2",
      parent: "list2"
    },
    {
      text: "test3",
      parent: "list3"
    },
  ])
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  const inputText1 = (e) => {
    setInput1(e.target.value)
  }
  
  const inputText2 = (e) => {
    setInput2(e.target.value)
  }
  
  const inputText3 = (e) => {
    setInput3(e.target.value)
  }

  const addTask = (e, parent, textValue) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: textValue,
        parent: parent,
        completed: false
      }
    ])
    setInput1('')
  }
  
  const move = (index, moveTo) => {
    let newTodos = [...todos]
    let movedTodo = newTodos[index]//要被移动的obj
    movedTodo.parent = moveTo
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  // const statusChange = (e, index) => {
  //   let newTodos = [...todos]
  //   newTodos[index].completed = !newTodos[index].completed //default is false
  //   if(newTodos[index].completed === true ){
  //     e.target.value = 'UNDO'   
  //   }else{
  //     e.target.value = 'DO'
  //   }  
  // }

  const statusChange = (index) => {
    let newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="App">
      <div className='list1'>
        <form className='list1 top'>
          <input value={input1} onChange={inputText1} type='text'></input>
          <button onClick={(e) => {
            addTask(e, 'list1', input1)
          }}>Add</button>
        </form>
        <header>List1</header>
        <div className='list1 bottom'>
          {
            todos.map((todo, index) => {
              if(todo.parent === 'list1'){
                return <div key={index}>
                  <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
                  <div className='btn-wrapper'>
                    {todo.completed ? 
                    <button onClick={() => statusChange(index)}>UNDO</button> 
                    : <button onClick={() => statusChange(index)}>DO</button>
                    }
                    <button onClick={() => deleteTodo(index)}>DEL</button>
                  </div>
                  <div className='radio-btn'>
                    <label>Move to: </label>
                    <input onClick={() => move(index, 'list2')} type='radio' value='list2'></input>
                    <label>list2</label>
                    <input onClick={() => move(index, 'list3')} type='radio' value='list3'></input>
                    <label>list3</label>
                  </div>
              </div>  
              }    
            })
          }
        </div>
      </div>  
      
      <div className='list2'>
        <form className='list2 top'>
          <input value={input2} onChange={inputText2} type='text'></input>
          <button onClick={(e) => addTask(e, 'list2', input2)} >Add</button>
        </form>
        <header>List2</header>
        <div className='list2 bottom'>
          {
            todos.map((todo, index) => {
              if(todo.parent === 'list2'){
                return <div key={index}>
                    {todo.text}
                    <div className='btn-wrapper'>
                      {todo.completed ? 
                      <button onClick={() => statusChange(index)}>UNDO</button> 
                      : <button onClick={() => statusChange(index)}>DO</button>
                      }
                      <button onClick={() => deleteTodo(index)}>DEL</button>
                  </div>
                  <div className='radio-btn'>
                  <label>Move to: </label>
                    <input onClick={() => move(index, 'list1')} type='radio' value='list1'></input>list1
                    <input onClick={() => move(index, 'list3')} type='radio' value='list3'></input>list3   
                  </div>           
              </div>  
              }
            })
          }
        </div>
      </div>  

      <div className='list3'>
        <form className='list3 top'>
          <input value={input3} onChange={inputText3} type='text'></input>
          <button onClick={(e) => addTask(e, 'list3', input3)}>Add</button>
        </form>
        <header>List3</header>
        <div className='list3 bottom'>
          {
            todos.map((todo, index) => {
              if(todo.parent === 'list3'){
                return <div key={index}>
                  {todo.text}
                  <div className='btn-wrapper'>
                    {todo.completed ? 
                    <button onClick={() => statusChange(index)}>UNDO</button> 
                    : <button onClick={() => statusChange(index)}>DO</button>
                    }
                    <button onClick={() => deleteTodo(index)}>DEL</button>
                  </div>
                  
                  <div className='radio-btn'>
                    <label>Move to: </label>
                    <input onClick={() => move(index, 'list1')} type='radio' value='list1'></input>
                    <label>list1</label>
                    <input onClick={() => move(index, 'list2')} type='radio' value='list2'></input>
                    <label>list2</label>
                  </div>
              </div>  
              }     
            })
          }
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
