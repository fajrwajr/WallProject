import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { comments } from '../actions/auth';

const Home = ({comments}) => {
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
    const response = await axios.get('https://8000-fajrwajr-wallproject-7pcxk8fzua8.ws-us45.gitpod.io/api/comment/');

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
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
          <div className='form-group'>
          <input type="text" name="comment" placeholder='Comment' value={comment}                         onChange={e => onChange(e)}
/>
          </div>
                <button className='btn btn-primary' type='submit'>Make a Comment</button>
            </form>
        <div>
          {
            data.map((item) => 
            <>
            <li>{item.name}</li>
            <li>{item.comment}</li>
            </>
            )
          }
        </div>
      </div>
    )
}

export default connect(null, { comments })(Home);
