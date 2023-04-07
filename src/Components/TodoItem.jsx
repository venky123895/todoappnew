import React, { useContext, useState } from 'react'
import { GlobalData } from './Todo'
import './todoItem.css'
const TodoItem = () => {
  const{todo,handleToggle,deleteItem}=useContext(GlobalData)
  const[editToggle,setEditToggle]=useState(false)

  const[editVal,setEditVal]=useState(todo)
  return (
   
    <div>
      
       {
        
        todo.map((ele,index)=>{
            return (
              <>
              {/* <div className={!editToggle ? "showEdit" : ""}>
              <input type='text' value={editVal}/>
              <button>Update</button>
          </div> */}
              
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"25px",
                    gap:"20px"
                }}>
                <h4>{ele.title}</h4>
                <h5 style={{color:"red"}}>{ele.toggle ? "Completed" : "Pending"}</h5>
                <button onClick={()=>{
                    handleToggle(index)
                }}>Toggle</button> 
                <button onClick={()=>{
                  setEditToggle(!editToggle)
                }}>Edit</button>
                <button  onClick={()=>{
                  deleteItem(index);
                }}>Delete</button>
                </div>
                </>
            )
          
        })
       }
    </div>
  )
}

export default TodoItem