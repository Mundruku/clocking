const { Component } = require("react")

import React from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {




    onSubmit(e){
        this.props.history.push('/dashboard');
    }


    render() {

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <form onSubmit={(e)=>this.onSubmit(e)}>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className='form-control form-control-lg'  placeholder="Confirm Password" name="password" onChange={(e) => this.onChange(e)} />
 
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;