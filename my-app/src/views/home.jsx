import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { comments } from '../actions/auth';

const Home = ({comments, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    comment: ''
});
const [data, setData] = useState([])
const { comment } = formData;
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
  e.preventDefault();
  comments(comment);
};

async function getUser() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/`);

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

getUser();

async function getComment() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/comment/`);

    setData(response.data);
  } catch (err) {
    console.log(err);
  }
}

getComment();


    return (
      <div className="container">
        <h1>Make a comment</h1>
        <form onSubmit={e => onSubmit(e)}>
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
