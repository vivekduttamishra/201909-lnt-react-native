import React from 'react';

const _component=(props)=>{
    return (
        <div className='container note-editor'>
            <h1>
                <input type='text' placeholder='Note Title' />
            </h1>

            <textarea placeholder='Your Notes...' >
            </textarea>
            <input type='text' placeholder='enter tags to file under' />
            <br/>
            <br/>
            <input class='btn  btn-primary' type='submit' value='Submit' />


        </div>
    );
};

export default _component;


