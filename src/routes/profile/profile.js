import React, { Component } from 'react';
import {Link, Match} from 'react-router';
import Stack from './stack/stack';
import ProfileMain from './profileMain';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <section id="profile" className="profile">
        <h1 className="title">Profile</h1>
        <hr/>
        <div className="profile_btn">
          <Link to='/profile'> <button className="btn btn-primary btn-xs"> Summary </button> </Link>
          <Link to='/profile/stack'> <button className="btn btn-primary btn-xs"> Show Stack </button> </Link>
        </div>
        <div className="profile_container">
          <Match pattern="/profile" exactly component={ProfileMain}/>
          <Match pattern="/profile/stack" component={Stack}/>
        </div>
      </section>
    );
  }
}

export default Profile;
