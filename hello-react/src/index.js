import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello world');

// document.getElementById('root').innerHTML=`
// <h1>Hello World</h1>
// <p>Welcome to React JS!</p>
// `;


//step 1. create react components
let heading= React.createElement('h1',null,'Hello World');
let content= React.createElement('p',   //create paragraph
                        //with these attributes
                        {style:{color:'blue',fontWeight:'bold'}}, 
                        //and this content
                        'Welcome To React JS!');
let reactLink= React.createElement('a',
                                    {href:'http://reactjs.org', style:{color:'red',textDecoration:'none'}},
                                    'Go To React' )

let wrapper= React.createElement('div', //create a div
                                //with attribute
                                {id:'main-content'}, 
                                //children two children component
                                heading, content, reactLink);


//step 2. Add 'wrapper' into my html
ReactDOM.render(wrapper, document.getElementById('root'));
