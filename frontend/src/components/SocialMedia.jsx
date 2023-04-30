import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaLinkedin/>
        </div>
        <div>
            <BsInstagram/>
        </div> 
    </div>
  )
}

export default SocialMedia;