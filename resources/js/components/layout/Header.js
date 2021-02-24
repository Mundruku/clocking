import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {



   
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-info bg-info" style={{color:'white'}}>
                <span className="navbar-brand" style={{ textAlign: 'center' }}><Link to="/dashboard" style={{color:'white'}}> Clocking <p >Ivanmundruku@gmail.com(admin)</p> </Link></span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <ul className="form-inline my-2 my-lg-0" style={{ marginRight: '4px', listStyle: 'none' }}>
                        <li ><Link to="/reports" style={{color:'white'}}> Report</Link></li>
                        <li > <Link to="/users" style={{color:'white'}}>Users</Link></li>
                        <li> <Link to="/" style={{color:'white'}}>Logout</Link></li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;