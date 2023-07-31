import React from 'react';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
         <div>
            <FaLinkedin/>
        </div>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsInstagram/>
        </div> 
        <div>
            <BsYoutube/>
        </div> 
    </div>
  )
}

export default SocialMedia;