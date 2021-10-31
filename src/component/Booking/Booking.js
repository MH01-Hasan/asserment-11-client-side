import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Booking.css'
import UseAuth from '../../Hooks/UseAuth';



const Booking = () => {
    const {id}=useParams();
    const {user}= UseAuth()
    const[data ,setData]=useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const { register, handleSubmit,reset } = useForm();
    //order post api//
  const onSubmit = data => {
    axios.post('http://localhost:5000/order',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Successfully Boking')
            reset()
        }
       
    })      
    
    };

     //order post api//

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <img src={data.img}alt="" className='img-fluid max-width: 100% '/> 
                        <h2>{data.name}</h2>
                        <p>{data.discription}</p>
                        <h5>{data.day} Day</h5>
                        <h5>Price ${data.price} </h5>
                   
                </div>


                <div className='col-lg-6 col-sm-12'>
                <form onSubmit={handleSubmit(onSubmit)} className='input-fil'>
                       <div className='p-5'>
                       <p className='paragraph'> Packages Name</p>
                        <input  defaultValue={data.name}{...register("packages", { required: true })} />
                        <p className='paragraph'>Day</p>
                        <input  defaultValue={data.day}{...register("day", { required: true })} />
                        <p className='paragraph'>Price</p>
                        <input  defaultValue={data.price}{...register("price", { required: true })} />

                        <p className='paragraph'>email</p>
                        <input  defaultValue={user.email} {...register("email", { required: true })} />

                        <p className='paragraph'>Your Name</p>
                        <input  {...register("name")} placeholder='Your Name'  />
                        <p className='paragraph'>Number</p>
                        <input  {...register("phone")} placeholder='phone -Number' />
                        <p className='paragraph'>Address</p>
                        <input  {...register("address")} placeholder='address'  /> <br />
                        <input type="submit" className='submit' />
                       </div>
                </form>

                    
               
                </div>

            </div>
            
        </div>
    );
};

export default Booking;