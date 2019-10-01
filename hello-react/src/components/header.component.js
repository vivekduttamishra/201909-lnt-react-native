import React from 'react';
import '../style.css';

function header(props) {
    console.log(props);
    return (<div className='header'>
            <h1>{props.title}</h1>
            <ul>
                <li><a href={props.baseUrl}>Home</a></li>
                <li><a href={props.baseUrl+'/about'}>About</a></li>
                <li><a href={props.baseUrl+'/contact'}>Contact</a></li>
            </ul>
        </div>);       
}
export default header;
