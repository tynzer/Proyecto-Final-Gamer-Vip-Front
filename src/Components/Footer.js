import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons'; 

class Footer extends Component {
    render() {
        return (
            <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright © 2020</p>
                <div className="m-0 text-center text-white">
                <SocialIcon url="https://www.facebook.com/gamer.vip.arg/" />   <SocialIcon url="https://www.instagram.com/gamer.vip.arg/" />   <SocialIcon url="https://www.twitch.tv/gamerviparg" />
                </div>
           
            </div>
         
           </footer>
        );
    }
}

export default Footer;