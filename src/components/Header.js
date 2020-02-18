//header of the app. it holds app name and log in and some navigation
//displayed in every page
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Xtreamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}


export default Header;