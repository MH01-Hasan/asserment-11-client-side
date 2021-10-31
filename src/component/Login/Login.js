import React from 'react';
import './Login.css'
import icon from '../../image/download.png'
import UseAuth from '../../Hooks/UseAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {singingoogle}= UseAuth()
    const location = useLocation();
    const redairect = location.state?.from || '/home'
    const history = useHistory();


    const hamdelgoogle = ()=>{
        singingoogle()
        .then((result) => {
            history.push(redairect)
                      
          })
        
    };



    return (
        <div className='container log-fild'>
            <div className='login'>
              <div>
              <h1 className='Please-Log'>Please Log-in With Google</h1>
              </div>
              <div>
              <button onClick={hamdelgoogle} className="login-but"><img src={icon} alt="" className='g-icon img-fluid max-width: 100%; height: auto;' /> <samp className='google'>Google Log-in</samp></button>
              </div>

            </div>
            
        </div>
    );
};

export default Login;