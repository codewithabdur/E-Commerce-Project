import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 @CodeWithAbdur All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/codewithabdur"><AiFillInstagram  /></a>
        <a href="https://twitter.com/CodeWithAbdur"><AiOutlineTwitter  /></a>
      </p>
    </div>
  )
}

export default Footer