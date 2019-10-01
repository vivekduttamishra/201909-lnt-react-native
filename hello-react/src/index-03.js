import ReactDOM from 'react-dom';
import React from 'react';


//this code will translate to
//React.createElement()
//so you need to import React

let Header=function(){
    return <h1>React App!</h1>;
}

let Footer=()=>(<div>
    <hr/>
    <a href='reactjs.org'>Go To React</a>
</div>);


let mainContent = <div id='hello' style={{ background: 'red' }} >
    <Header/>
    <p>Welcome to React Application. Here we learn how to code react</p>
    <Footer/>
</div>;


ReactDOM.render( mainContent, document.getElementById('root') );

