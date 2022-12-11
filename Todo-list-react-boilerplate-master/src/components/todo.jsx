import React, { useState,useEffect } from 'react'
import "./../styles/todo.css";

const getLocalItem=()=>{
  let list =localStorage.getItem('item')
  console.log(list)
  if(list){
    return JSON.parse(list)
  }else{
    return []
  }
}

const Todo = () => {
  const [inputData,setInputData]=useState('')
  const [inputItem,setInputitem]=useState(getLocalItem())
  const[ToggleSubmit,setToggleSubmit]=useState(true)
  const [EditItem,setEditItem]=useState(null)
  const addItem=()=>{
    if(inputData && !ToggleSubmit){
      setInputitem(
        inputItem.map((element)=>{
          if(element.id===EditItem){
            return {...element,name:inputData}
          }
          setInputData('')
          return element
        })
        )
    }else  if(inputData){
      const allInputItem={ id:new Date().getTime().toString(),name:inputData}
      setInputitem([...inputItem,allInputItem])
      setInputData('')
    }
  }
  const deleteItem=(index)=>{
    console.log(index)
    const updateItem=inputItem.filter((element)=>{
      return index !== element.id;
    })
    setInputitem(updateItem)
  }
  const editItem=(id)=>{
    let newEdititem=inputItem.find((element)=>{
      return element.id===id
    })
    console.log(newEdititem)
    setInputData(newEdititem.name)
    setToggleSubmit(false);
    setEditItem(id)
  }

  useEffect(() => {
    localStorage.setItem('item',JSON.stringify(inputItem))
  }, [inputItem])
  
  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <div className='input-container'>
        <input id="task" type="text"  value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
        <button id="btn" className='submit' onClick={addItem} value="Add">Add To-Do</button>
      </div>
      <div className='Show-todo-list'>
        {
          inputItem.map((element)=>{
            return(
              <div className='list' key={element.id}>
                <div>
              <div className='input-inside'>{element.name}</div>
                </div>
                <div>

              <input className='btn-inside' type="button" value="edit" onClick={()=>editItem(element.id)} />
              <input className='btn-inside' type="button" onClick={()=>deleteItem(element.id)} value="delete" />
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Todo
