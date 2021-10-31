import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import './MyOrder.css'

const MyOrder = () => {
    const {user}= UseAuth()

    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://dreadful-skull-47597.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);



//
const handeldelet =(id)=>{
    const prosid = window.confirm('are you sure delete')
   if(prosid){
       const url =`https://dreadful-skull-47597.herokuapp.com/myOrder/${id}`
    fetch(url,{
        method:"DELETE"
    })
    .then(res =>res.json())
    .then(data =>{
        if(data.deletedCount>0){
            alert("Successfully Delet")
            const remainguser = orders.filter(order =>order._id!==id)
            setOrders(remainguser)
        }
    })
   }

}
//

    return (
        <div className='m-3 mb-5 order'>
          <h1 className='my-order List'>My Order</h1>
          <Table striped bordered hover size="sm">
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
            {orders?.map((order, index) =>  (
               
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

export default MyOrder;