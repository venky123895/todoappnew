import React, { createContext , useState, useEffect } from 'react'
import './todo.css'
import TodoItem from './TodoItem'
export const GlobalData=createContext();
const Todo = () => {
    const[data,setData]=useState("");
    const[todo,addToDo]=useState([]);
    const[count,setCount]=useState([])



    useEffect(() => {
            var completedTasks=todo.filter((ele,i)=>{
                        return ele.toggle === true
                    })
                    setCount(completedTasks)   
    },[todo])
    
//    const noOfCompleted=(index)=>{
//     var completedTasks=todo.map((ele,i)=>{
//         return ele.toggle === true
//     })
//     setCount(completedTasks)
//    }
//    noOfCompleted()
    
    

    var newItem={
        title:data,
        toggle:false
    }

    const deleteItem=(index)=>{
       var newData=todo.filter((ele,i)=>{
            return index !== i
        })
        
        addToDo(newData)
        
    }

  

 

    const handleToggle=(index)=>{
       var newArray=todo.map((ele,i)=>{
        return index === i ? {...ele ,toggle: !ele.toggle} : ele;
       })
       addToDo(newArray)
    }

    const filterCompletedTasks=()=>{
        var completedTasks=todo.filter((ele)=>{
            return ele.toggle=== true
        })
        addToDo(completedTasks)
    }
    
  return (
    <GlobalData.Provider value={{todo,handleToggle,deleteItem}}>
    <div style={{
        textAlign:"center",
        padding:"25px"
    }}>
        <h2 className='text'>ToDo Example</h2>
        <input type='text' value={data} placeholder='Enter the text' className='inp' onChange={(e)=>{
            setData(e.target.value)
        }} />
        <button className='but' onClick={()=>{
            addToDo([...todo,newItem])
        }}> Add Item</button> 
        <button style={{
            width:"250px",
            height:"30px",
            borderRadius:"20px",
            backgroundColor:"blue",
            color:"white",
            marginLeft:"15px"
        }} onClick={()=>{
            filterCompletedTasks()
        }}>Filter Completed Tasks</button>
        <h4 style={{marginTop:"25px"}}>No of Tasks Completed : <spa>{count.length}</spa></h4>
        <TodoItem/>
    </div>
    </GlobalData.Provider>
  )
}

export default Todo