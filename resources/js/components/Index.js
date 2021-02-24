import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './features/auth/Login';
import Header from './layout/Header';
import Home from '../components/layout/home';
import Report from './features/report/report';
import Users from './features/user/user';
import EditUser from './features/user/edit';



class Example extends Component {

    constructor(props){
          super(props);
          this.state={
              login:true
          }

    }


 render(){
        return (
         
        
           
            <Router>
                {this.state.login===true?<Header/>:''}
               <Route exact path="/" component={Login}/>
               <Route exact path="/dashboard" component={Home}/>
               <Route exact path="/reports" component={Report}/>
               <Route exact path="/users" component={Users}/>
               <Route exact path="/edituser" component={EditUser}/>
            </Router>
           
        )
 }
  
}


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
