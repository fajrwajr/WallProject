import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import { useNavigate, useParams } from 'react-router-dom';
const Activate = ({verify, match}) => {
   const [verified, setVerified] = useState(false)
    let { uid, token } = useParams();
    const verify_account = (e) => {
        // const uid = p.uid;
        // const token = p.token;
        console.log(uid, token)
        verify(uid, token);
        setVerified(true)
    };
    
    // const navigateTo = useNavigate();


    if (verified) {
        console.log("It worked")
    } else {
        console.log('Failed')
    }

    return (
        <div className='container mt-5'>
          <h1>Verify your account</h1>
          <button onClick={() => {
              verify_account()
              }}>Verify</button>
        </div>
    );
};

export default connect(null, { verify })(Activate);
