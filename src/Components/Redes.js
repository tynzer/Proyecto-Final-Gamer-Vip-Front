import React, { Component } from 'react';
import './styles/redes.css'

class Redes extends Component {
    render() {
        return (
            <div>
                <footer className="redes-borde">
                    <div className="redes-fondo redes-margin">
                        <div className="m-0 text-right text-white">
                            <div>
                                <a href="https://www.facebook.com/gamer.vip.arg/" target="_blank" rel="noreferrer">  <i className="fab fa-facebook fa-4x" /> </a>

                                <a href="https://www.instagram.com/gamer.vip.arg/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram fa-4x" /> </a>

                                <a href="https://www.twitch.tv/gamerviparg" target="_blank" rel="noreferrer"> <i className="fab fa-twitch fa-4x" /> </a>

                                <a href="mailto:info@demo.com" target="_blank" rel="noreferrer"> <i className="fas fa-envelope-open-text fa-4x" /> </a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    };
}

export default Redes;


/*
en el index html coloque

 <script src="https://kit.fontawesome.com/4b372a6cbd.js" crossorigin="anonymous"></script>

 <i className="fab fa-facebook fa-4x" url="https://www.facebook.com/gamer.vip.arg/ " target="_blank" />

*/

/*
jsx copia
                            <div className="apisado">
                                <div>
                                    <i className="fab fa-facebook fa-4x" />

                                    <a href="https://www.facebook.com/gamer.vip.arg/"> </a>
                                </div>
                                <div>
                                    <i className="fab fa-instagram fa-4x" />

                                    <a href="https://www.instagram.com/gamer.vip.arg/"> </a>
                                </div>
                                <div>
                                    <i className="fab fa-twitch fa-4x" />

                                    <a href="https://www.twitch.tv/gamerviparg"> </a>
                                </div>
                                <div>
                                    <i className="fas fa-envelope-open-text fa-4x" />

                                    <a href="mailto:info@demo.com"> </a>
                                </div>
                            </div>


*/
