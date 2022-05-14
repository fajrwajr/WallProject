import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Activate = ({verify, match}) => {
   const [verified, setVerified] = useState(false)
    const p = useParams();
    const verify_account = (e) => {
        const uid = p.uid;
        const token = p.token;
        verify(uid, token);
        setVerified(true)
    };
    const navigateTo = useNavigate();


    if (verified) {
        navigateTo('/')    
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
