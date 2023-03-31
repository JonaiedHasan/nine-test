import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <h2 className="navbar-brand fw-bold fs-1">Knowledge Cafe</h2>
                <div className="profile-pic">
                    <img className="rounded-circle w-full " src="https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg?w=996&t=st=1680191965~exp=1680192565~hmac=d409d13f814ccc8f9574a8cbb3b70c35e3aafafd07bb51b932713b8ab9559de9" alt="" />
                </div>
               
             </div>
           </nav> 
        </div>
    );
};

export default Header;