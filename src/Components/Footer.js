import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './styles/footer.css'

class Footer extends Component {
    render() {
        return (
                <div className="">
                    <footer className="footer-borde">
                        <div className="footer-fondo footer-altura">

                            <div className="m-0 text-center text-white">
                                <SocialIcon url="https://www.facebook.com/gamer.vip.arg/" target="_blank" />   <SocialIcon url="https://www.instagram.com/gamer.vip.arg/" target="_blank" />   <SocialIcon url="https://www.twitch.tv/gamerviparg" target="_blank" />
                            </div>
                            <p className="m-0 text-center text-white">Copyright © 2020</p>
                        </div>
                    </footer>
                </div>

        );
    }
}

export default Footer;






/*
import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
    render() {
        return (
            <footer className="py-3 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © 2020</p>
                    <div className="m-0 text-center text-white">
                        <SocialIcon url="https://www.facebook.com/gamer.vip.arg/" target="_blank" />   <SocialIcon url="https://www.instagram.com/gamer.vip.arg/" target="_blank"/>   <SocialIcon url="https://www.twitch.tv/gamerviparg" target="_blank"/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
*/