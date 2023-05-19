import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>
                &copy; {new Date().getFullYear()} AJ App Development Group. All rights reserved.
            </p>
            <p className='footer-text'>
                Contact us by Email: <a href='mailto:aj.appdevelopmentgroup@gmail.com' className='footer-link'>aj.appdevelopmentgroup@gmail.com</a>
            </p>
        </footer>
    );
}

export default Footer;
