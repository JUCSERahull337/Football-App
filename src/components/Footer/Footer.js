import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faYoutube } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
//import { Link } from 'react-router-dom';

const Footer = (props) => {
    const {strFacebook, strTwitter} = props.detail;
    
    return (
        <div className='footer'>
            <a href={`https://${strFacebook}`} target="_blank"><FontAwesomeIcon className='Icon' icon={faFacebookF}/></a>
            <a href={`https://${strTwitter}`} target="_blank"><FontAwesomeIcon className='Icon' icon={faTwitter}/></a>
           
           {/* <Link to=''><FontAwesomeIcon className='Icon' icon={faTwitter}/></Link>
            <Link to='www.instagram.com/chelseafc'><FontAwesomeIcon icon={faInstagram}/></Link>  */}
        </div>
    );
};

export default Footer;