import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className='app-header'>
        <h3 className='header-main-title'>Code Malayalam</h3>
        <span className='header-items'>Home</span>
        <span className='header-items'>Usage</span>
        <span className='header-items'>Settings</span>
        <span className='header-items'>Logout</span>
      </div>
    )
}
export default Header;