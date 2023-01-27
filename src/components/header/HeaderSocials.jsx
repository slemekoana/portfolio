import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {SiSubstack} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a className='soc-icon' href="https://www.linkedin.com/in/selaelo-lemekoana-59b96922a/" target='_blank'>
            <BsLinkedin/>
          </a>  
          <a className='soc-icon' href="https://selaelo.substack.com/" target='_blank'>
            <SiSubstack/>
          </a>
          <a className='soc-icon' href="https://github.com/slemekoana/" target='_blank'>
            <BsGithub/>
          </a>
        </div>
    )
}

export default HeaderSocials