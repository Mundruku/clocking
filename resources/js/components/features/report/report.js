import React, { Component } from 'react';


class Report extends Component {

    render() {

        return (
            <div className="report">

                <div className="user-data">
                <h3>Users</h3>
                    <div className="card bg-default">
                     <h3>Admin</h3>
                     <p>ivanmundruku@gmail.com</p>
                    </div>
                   
                </div>
                <div className="table-data">
                    <h3>Logs for 2016</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                        
                            <th scope="col">Date</th>
                            <th scope="col">TimeIn</th>
                            <th scope="col">TimeOut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                      
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                      
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Report;