import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../components/features/auth/loginSlice';
import timeReducer from './features/report/timeSlice';



export default configureStore({
    reducer:{

       
        auth:LoginReducer,
        time:timeReducer
       
    }
})