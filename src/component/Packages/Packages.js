import React, { useEffect, useState } from 'react';
import PackagData from '../PackagData/PackagData';
import './Packages.css';

const Packages = () => {
    const[packegs,setPackegs]=useState([])

    useEffect(()=>{
        fetch('https://dreadful-skull-47597.herokuapp.com/Packages')
        .then(res => res.json())
        .then(data => setPackegs(data))
      


    },[])
    return (
        <div className='mx-3 '>
            <h1 className='packeg'>Our packeg </h1>

           <div className=' row'>
                   {

                    packegs.map (packeg => <PackagData packeg={packeg}
                    key= {packeg._id}></PackagData>)


                    }
           </div>
            
        </div>
    );
};

export default Packages;