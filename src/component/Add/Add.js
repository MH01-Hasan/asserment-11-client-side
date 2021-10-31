import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Add.css'



const Add = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:5000/Packages',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Successfully your data load')
            reset()
        }
       
    })  
    };

    return (
        <div className='container add '>
            <div className='add-fild'>
              <form onSubmit={handleSubmit(onSubmit)} className='fild'>
              <h3>Add-New Package</h3>
                <input  type='text'{...register("name")} placeholder="Name" required /> 
                <input  type='text'{...register("img")} placeholder="image-url" required /> 
                <textarea  type='text'{...register("discription")} placeholder="discription" required /> 
                <input  type='text' {...register("day")} placeholder="day" required /> 
                <input type='number'{...register("price",)} placeholder="price" required />
               
                <input type="submit" />

                </form>
            </div>
     </div>
        
    );
};

export default Add;