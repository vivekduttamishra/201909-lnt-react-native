import React from 'react';
import { MODE_EDIT, MODE_NEW, MODE_VIEW } from '../consts';
import { throwStatement } from '@babel/types';

class _Component extends React.Component {

    constructor(props){
        super(props);
        console.log('props',props);
        //copy value from props (passed by parent)
        //to internal state
        this.state={
            ... this.props.selectedNote
        }

        console.log('state',this.state);
    }

    onTitleChange=(e)=>{
        console.log(e.target.value);
        this.setState({title:e.target.value});
    };

    componentWillReceiveProps(props){
        console.log('got property',props);
        
        this.setState({...props.selectedNote});
        console.log('after property, state',this.state);
    }

    render() {

        if (this.props.mode == MODE_VIEW || this.props.selectedNote === null)
            return (<div />);

        //this.setState({...this.props.selectNote});
        let buttonCaption = this.props.mode === MODE_EDIT ? 'Update' : 'Add';

        return (
            <div className='container note-editor form-group'>
                <h1>
                    <input type='text'
                        placeholder='Note Title'
                        className='form-control'
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                </h1>
                <textarea placeholder='Your Notes...' className='form-control'  
                value={this.state.body}
                onChange={e=> this.setState({body: e.target.value})}
                >
                </textarea>
                <input type='text' placeholder='enter tags to file under' className='form-control' 
                    value={this.state.tags}
                    onChange={e=> this.setState({tags: e.target.value})}
                />
                <br />
                <br />
                <input 
                    className=' form-control btn  btn-primary' 
                    type='button' 
                    value={buttonCaption} 
                    onClick={()=>this.props.onSave(this.state)}
                    />


            </div>
        );
    };
}

export default _Component;


