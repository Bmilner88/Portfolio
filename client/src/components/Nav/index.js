import React from 'react';

export default function Nav() {
    return(
        <nav className='nav nav-tabs'>
            <div className='nav-item'>
                <a 
                    href='/'
                    className='nav-link active, nav-link'
                >
                    About
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='/projects'
                    className='nav-link active, nav-link'
                >
                    Portfolio
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='/resume'
                    className='nav-link active, nav-link'
                >
                    Resume
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='/contact'
                    className='nav-link active, nav-link'
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};