import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { comments } from '../actions/auth';

const Home = ({comments, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
});
const [data, setData] = useState([])
const { name, comment } = formData;
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
  e.preventDefault();
  comments(name, comment);
};

async function getUser() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/comment/`);

    setData(response.data);
  } catch (err) {
    console.log(err);
  }
}

getUser();


    return (
      <div className="container">
        <h1>Make a comment</h1>
        <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
                <input
                        className='form-control'
                        type='name'
                        placeholder='Name'
                        name='name'
                        style={{width: "80px"}}
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
          {!isAuthenticated ?
          
          <><div className='form-group'>
              <input type="text" name="comment"
                placeholder='Comment'
                value={comment}
                disabled
                onChange={e => onChange(e)} />
            </div><button className='btn btn-primary' type='submit'>Make a Comment</button></>
            : 
            <><div className='form-group'>
            <input type="text" name="comment"
              placeholder='Comment'
              value={comment}
              onChange={e => onChange(e)} />
          </div><button className='btn btn-primary' type='submit'>Make a Comment</button></>    }
         </form>

        <div>
          {
            data.map((item) => 
            <>
            <div style={{ fontSize: "20px" }}>{item.name}</div>
            <div>{item.comment}</div>
            </>
            )
          }
        </div>
      </div>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { comments })(Home);
