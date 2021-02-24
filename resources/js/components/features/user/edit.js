import React, { Component } from 'react';

class EditUser extends Component {



    render() {

        return (
            <div className="user_edit">
                <h3>Edit User</h3>
                <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Full Name" />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email </label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="Admin" />
                                <label className="form-check-label" for="exampleCheck1">Admin</label>
                                <input type="checkbox" className="form-check-input" id="User" style={{ marginLeft: '5px' }} />
                                <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '20px' }}>User</label>
                            </div>
                          
                             
                                <button type="button" className="btn btn-primary">Save</button>
                          
                        </form>
            </div>
        )
    }
}

export default EditUser;