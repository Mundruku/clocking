import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export function AddUser(prop) {

    return (


        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">AddUser</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">+ Add User</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}


class Users extends Component {

    render() {

        return (
            <div className="user_margin">
                <div className="user_deatils">
                    <h3>Users</h3>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" >Add User</button>
                </div>
                <table class="table" style={{ marginTop: '2px' }}>
                    <thead className="bg-primary" style={{ color: 'white' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">role</th>
                            <th scope="col">created</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><Link to="/edituser">Mark</Link></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>time</td>
                            <td><button className="bg-danger">Delete</button></td>
                        </tr>

                    </tbody>
                </table>

                <AddUser />
            </div>
        )
    }
}

export default Users;