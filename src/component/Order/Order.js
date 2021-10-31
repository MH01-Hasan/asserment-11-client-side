import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Order.css'



const Order = () => {
   const[bookings ,setBooking]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
   
    const handeldelet =(id)=>{
      const prosid = window.confirm('are you sure delete')
     if(prosid){
         const url =`http://localhost:5000/order/${id}`
      fetch(url,{
          method:"DELETE"
      })
      .then(res =>res.json())
      .then(data =>{
          if(data.deletedCount>0){
              alert("Successfully Delet")  
              const remainguser = bookings.filter(booking =>booking._id!==id)
              setBooking(remainguser)
          }
      }) }
  }
    

    return (
      <div className='m-3 mb-5 all-order'>
        <h1 className='Manage'>Manage all  order</h1>
      <Table striped  >
        <thead>
        <tr>
        <th>#</th>
        <th>order ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Packages-Name</th>
        <th>Day</th>
        <th>Price</th>
        <th>Delet</th>
        </tr>
        </thead>
        {bookings?.map((order, index) =>  (
           
      <tbody>
        <tr>
            <td>{index + 1}</td>
            <td>{order._id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
            <td>{order.packages}</td>
            <td>{order.day}</td>
            <td>{order.price}</td>
            <td><button onClick={()=> handeldelet(order._id)} className='btn-button'>delet</button></td>
            
        </tr>
      </tbody>
    )
    )}
        </Table>             
 </div>
 
    );
};

export default Order;