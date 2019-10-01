import React from 'react';

/*
1. create a class that extends React.Component
2. define a render() which sould return JSX (same as function component)

*/

export default class Footer extends React.Component{
    render () {
        return (
            <div>
                <hr/>
                {this.props.message}
        </div>
        );
    }
}


const oldFooter= function () {
    return (
        <div>
            &copy; www.conceptarchitect.in
    </div>
    );
}