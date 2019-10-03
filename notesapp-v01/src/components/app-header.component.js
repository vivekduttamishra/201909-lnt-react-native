import React from 'react';

const _component = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}} >
            <i className="fa fa-book"></i>
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={props.onNew}>
                            <i className="fa fa-plus"></i>  Note 
                           
                        </a>
                    </li>
                    <li className="nav-item active">
                        
                        <a className="nav-link" href="#">
                        <i className="fa fa-sign-in"></i>
                            Sign In
                        </a>
                        
                    </li>
                    
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fa fa-user-plus"></i>
                            Sign Up
                        </a>
                        
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default _component;


