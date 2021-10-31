import React from 'react';
import './Footer.css'
import logo  from'../../image/logo-color.png'
import { Button, Col, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=''>
           <div className='row footer-fild'>
               <div className ='col-lg-6 col-sm-12 contact mt-5'>
                   <div className='logo-fild'> <img className='logo' src={logo} alt="" /></div>
                    <ul>
                 <li><i class="fas fa-envelope-open-text icon"></i>setsail@qode.com</li>
                 <li><i class="fas fa-phone-alt icon"></i>1 562 867 5309</li>
                 <li><i class="fas fa-map-marker-alt icon"></i>  Broadway & Morris St, New York</li>
                            

                    </ul>

               </div>

               

               <div className ='col-lg-6 col-sm-12 mt-5'>
               <h3>Subscribe to our Newsletter</h3>
               <div>
               <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Row>

 


  <Button className='btn- SUBSCRIBE' variant="primary" type="submit">
    SUBSCRIBE
  </Button>
</Form>
               </div>
               
            

               </div>
               <p className='powwered'>Powered by @ Qode Interactive 2018</p>



           </div>
            
        </div>
    );
};

export default Footer;