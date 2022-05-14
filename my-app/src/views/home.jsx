import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
      
    <div className="container">
<div className="jumbotron mt-5">
  <h1 className="display-4">Welcome to Auth System! We made it!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>Click the log in button</p>
  <p className="lead">
    <Link className="btn btn-primary btn-lg" to="/login" role="button">Learn more</Link>
  </p>
</div>    
</div>
)
}

export default Home;