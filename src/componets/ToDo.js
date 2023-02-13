import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Todo.css'
import useForm from './formvalue'

const ToDo = () => {
var [Todo, setTodo] = useState([])
var [Input, setInput] = useForm({item:'',quantity:'',description:''})

  return (
    <div >
         <div className='box'>
                 <div className='header'>
                    <h1>ToDo List</h1>
                 </div>
            <div className='input'>
               <TextField name='item' value={Input.item} onChange={setInput} id='standard-basic' label=' 🖊️ Add item..' variant='standard' /><br></br> 
                <br></br><br></br>
                <TextField name='quantity' value={Input.quantity} onChange={setInput} id='standard-basic' label=' 🖊️ Quantity...' variant='standard' /><br></br>
                <br></br><br></br>
                <TextField name='description' value={Input.description} onChange={setInput} id='standard-basic' label=' 🖊️ Description' variant='standard' /><br></br>
                <br></br><br></br>
                
               <Button variant='outlined' size="large" 
                    >Add</Button>  
        
<Typography variant='h6'>{Input.item}</Typography>
<Typography variant='h6'>{Input.quantity}</Typography>
<Typography variant='h6'>{Input.description}</Typography>


          
            </div>
        </div>
    </div>
)}

export default ToDo
