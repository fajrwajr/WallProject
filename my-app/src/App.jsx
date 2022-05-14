import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home.jsx"
import Activate from "./views/activate.jsx"
import Login from "./views/login.jsx"
import Signup from "./views/signup.jsx"
import ResetPassword from "./views/resetpassword.jsx"
import ResetPasswordConfirm from "./views/resetpasswordconfirm.jsx"
import Layout from './hocs/Layout';
import { Provider } from 'react-redux';
import store from  './views/store.js';

const App = () => {
  return (
    <div>
     <Provider store={store}> 
       <Router>
        <Layout>
           <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/reset_password" element={<ResetPassword />} />
                <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />              
                <Route exact path="/activate/:uid/:token" element={<Activate />}/>
           </Routes>
         </Layout>  
       </Router> 
       </Provider>
    </div>
  )
}

export default App;
