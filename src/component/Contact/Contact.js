import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className=' m-3 contact-fild mt-5' >
            <h1 className='contact'>Contact Info</h1>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'> 
                <h2>Nepal</h2> 
                <p className='chaild'>Amazing Nepal Trek & Expedition</p>
                <p className='chaild'>Thamel, Kathmandu</p>
                <p className='chaild'>+977-9851116042 / +977-9841966352</p>
                <p className='chaild'>info@amazingnepaltrek.com​​​​​​​</p>
                <p className='chaild'>sales@amazingnepaltrek.com</p>              
                </div>

                <div className='col-lg-4 col-sm-12'> 
                <h2> Europe</h2>             
                    <p className='chaild'>Marin Vallikivi</p>
                    <p className='chaild'>Sinilille, Kuriste küla</p>
                    <p className='chaild'>92171 Hiiumaa</p>
                    <p className='chaild'>Eesti, EU</p>
                    <p className='chaild'>Phone: +372 56 659 155</p>
                    <p className='chaild'>https://reisivolur.ee</p>
                    <p className='chaild'>E-mail: mydagosun@gmail.com </p>
                </div>
                
                <div className='col-lg-4 col-sm-12'> 

                <h2>UKRAINE</h2>
                    <p className='chaild'>Vadym Leontyve</p>
                    <p className='chaild'>Odessa, Ukraine</p>
                    <p className='chaild'>E-mail: vadym@amazingnepaltrek.com </p>

                </div>

            </div>
            
        </div>
    );
};

export default Contact;