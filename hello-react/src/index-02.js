import ReactDOM from 'react-dom';
import React from 'react';


//this code will translate to
//React.createElement()
//so you need to import React




let content = <div id='hello' style={{ background: 'red' }} >
    <h1>Hello World</h1>
    <a href='reactjs.org'>Go To React</a>
</div>;


ReactDOM.render( content, document.getElementById('root') );

