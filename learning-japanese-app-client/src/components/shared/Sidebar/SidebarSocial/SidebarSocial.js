import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SidebarSocial = () => {
  return (
    <ul className="d-flex justify-content-center mt-3">
      <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="mr-2"> <FacebookIcon /> </a></li>
      <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="mr-2"> <TwitterIcon /> </a></li>
      <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mr-2"> <InstagramIcon /> </a></li>
      <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a></li>
    </ul>
  )
}

export default SidebarSocial;
