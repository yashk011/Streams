import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
    <div className="ui secondary pointing menu"> 
        
        <Link to="/"  className="item">
            Streamy
        </Link>
        
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
        </Link>

        <GoogleAuth />
        
        </div>
    </div>
    );
}
export default Header;


// Client Id : 503697795568-ntqm5jmikbe2dhesrqmhrq5v60ubs50c.apps.googleusercontent.com

// git remote add origin https://github.com/yashk011/Streams.git
// git push -u origin master


