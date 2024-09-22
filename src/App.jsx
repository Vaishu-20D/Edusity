import React from 'react'
 
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Products from './Components/Programs/Products';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testmonials from './Components/Testmonials/Testmonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />

            <Hero />
            <div className="container">
               <Title subTitle='Our PROGRAM' title='What We Offer'/>
                <Products />
                <About/>

                <Title subTitle='Gallery' title='Campus Photos'/>

                <Campus/>

                <Title subTitle='TESTIMONIALS' title='What  Student Says'/>
                <Testmonials/>
                <Title subTitle='Contact Us' title='Get in Touch'/>
                <Contact/>
                <Footer/>

            </div>


        </>
    )
}

export default App;
