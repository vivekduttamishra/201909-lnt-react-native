import React from 'react';

const styles = {

    cell: {
        padding: '2px',
        borderRadius: 0,
        width: 80,
        height: 80,
        border: '1px solid black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: '2em'
    }

}

export default class Cell extends React.Component{

    state={value:null};    


    handleClick=()=>{
        if(!this.state.value){            
            this.setState({value:'X'});
        }
        else{
            alert('cant change cell value');
        }
        
    }

    render(){
        return (
            <button style={styles.cell} 
                onClick={()=> this.props.cellClicked(this.props.id) }
            >
                {this.props.value}
            </button>
        );
    } 
}