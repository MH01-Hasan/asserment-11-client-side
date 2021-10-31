import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExtrapartTwo from '../ExtrapartTwo/ExtrapartTwo';
import Footer from '../Footer/Footer';
import Packages from '../Packages/Packages';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ExtrapartTwo/>
           <Packages></Packages>
           <Contact/>
           <Footer></Footer>

           
          
        </div>
    );
};

export default Home;