
import React from 'react'

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import instagran from '../images/instagran.png'
import github from '../images/github.png'

export const Footer = () => {
    return (            
        <footer id="footer">
            <div> 
                <a href=""><img className="footer-social" src={facebook} alt="facebook" /></a>
                <a href=""><img className="footer-social" src={twitter}  alt="twitter" /></a>
                <a href=""><img className="footer-social" src={youtube}  alt="youtube" /></a>
                <a href=""><img className="footer-social" src={instagran}  alt="instagran" /></a>
                <a href="https://github.com/Taira92/UCamp-Proyecto4"><img className="footer-social" src={github}  alt="github"/></a>
            </div>
        </footer>
    )
}

