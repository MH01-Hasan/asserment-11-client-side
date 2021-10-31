import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PackagData.css'

const PackagData = (props) => {
    const {_id,name,img ,price,day,}=props.packeg;
   


    return (
        <div className='col-lg-4 col-sm-12 mt-5 '>
            <Card className='card' >
            <Card.Img variant="top" src={img} className='img-fluid max-width: 100% card-image'  />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h5>$ {price}</h5>
                <h6>  {day} Day</h6>
                <Link to ={`/booking/${_id}`}>
                    <Button variant="primary">Booking</Button>
                    </Link>
            </Card.Body>
            </Card>
           

        </div>
    );
};

export default PackagData;