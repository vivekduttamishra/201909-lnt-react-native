import React from 'react';
import {Home} from './home.component';
import Header from './header.component';
import Footer from './footer.component';
import '../style.css';

export  default   ()=>(
    <div>
        <Header 
            title='React School' 
            baseUrl='http://www.reactshool.com'
        />
        <Home/>
        <Footer message='Footer Message'/>
    </div>
);