import React, { Component } from 'react';
import '../youtube.css';
import review from '../gvr.svg'
import '../youtubejq.js';



class Youtube extends Component {
    render() {
        return (
            <div>
  <main>
    <section className="column left banner">
      <a href="https://www.youtube.com/watch?v=ze_ie8Ctp60" data-youtube-id="dX3k_QDnzHE" className="video-banner js-trigger-video-modal">
        <img className="video-banner-img" src="https://i.blogs.es/56b1fa/top-gamers-academy/1366_2000.jpeg" alt="" />
        <span className="video-banner-headline">
          GAMER VIP REVIEW
        </span>
        {/* Play bttn - converted to a data URI just so i can avoid the need for external asset hosting w/ this demo */}
        <img className="video-banner-icon-play" alt="Play Video" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyAKCXZlcnNpb249IjEuMSIgCgl4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIAoJeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgl4PSIwIgoJeT0iMCIKCXZpZXdCb3g9IjAgMCA3MiA3MiIgCglzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MiA3MjsiIAoJeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgCgl3aWR0aD0iIiAKCWhlaWdodD0iIiAKPgogICAgICAgIDxwYXRoIGQ9Ik0zNiw3MiBDNTUuOSw3MiA3Miw1NS45IDcyLDM2IEM3MiwxNi4xIDU1LjksMCAzNiwwIEMxNi4xLDAgMCwxNi4xIDAsMzYgQzAsNTUuOSAxNi4xLDcyIDM2LDcyIFogTTM2LDggQzUxLjQsOCA2NCwyMC42IDY0LDM2IEM2NCw1MS40IDUxLjQsNjQgMzYsNjQgQzIwLjYsNjQgOCw1MS40IDgsMzYgQzgsMjAuNiAyMC42LDggMzYsOCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNiw1MS43IEMyNi4zLDUxLjkgMjYuNyw1MiAyNyw1MiBDMjcuMyw1MiAyNy43LDUxLjkgMjgsNTEuNyBMNTIsMzcuNyBDNTIuNiwzNy4zIDUzLDM2LjcgNTMsMzYgQzUzLDM1LjMgNTIuNiwzNC42IDUyLDM0LjMgTDI4LDIwLjMgQzI3LjQsMTkuOSAyNi42LDE5LjkgMjYsMjAuMyBDMjUuNCwyMC43IDI1LDIxLjMgMjUsMjIgTDI1LDUwIEMyNSw1MC43IDI1LjQsNTEuNCAyNiw1MS43IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+Cjwvc3ZnPg==" />
      </a>
    </section>
    <section className="column right">
      <article className="content">
      
      <div className="text-center" >
                <img src={review} alt="Logo" className="text-center"  />
               {/*  <h1 className="my-4">Gamer Vip</h1> */}
      </div>

        <div className="video-thumb-grid">
          {/* Daft Punk - Human After All */}
          <a href="https://www.youtube.com/watch?v=gsigcc4l8EQ" data-youtube-id="dX3k_QDnzHE" className="video-thumb js-trigger-video-modal">
            <img className="video-banner-img" src="https://portinos-cloudfront.portinos.com/wp-content/uploads/2017/08/gamers-555x313.jpg" alt="" />
          </a>
          {/* M83 - Midnight City */}
          <a href="https://www.youtube.com/watch?v=k38H7NfqQaU" data-youtube-id="dX3k_QDnzHE" className="video-thumb js-trigger-video-modal">
            <img className="video-banner-img" src="https://www.claro.com.co/portal/co/noticias/imagenes/1554932867301-5-og-Mundo-Gamer.jpg" alt="" />
          </a>
          {/* Death Cab for Cutie - You Are A Tourist */}
          <a href="https://www.youtube.com/watch?v=-omlRLCc6Bc" data-youtube-id="qkk5wViJo-I" className="video-thumb js-trigger-video-modal">
            <img className="video-banner-img" src="https://imagenes.20minutos.es/files/article_amp/uploads/2020/05/07/dota-2-es-el-juego-con-el-que-mas-dinero-ganan-los-gamers-profesionales.jpeg" alt="" />
          </a>
          {/* José Gonzales - Heartbeats */}
          <a href="https://www.youtube.com/watch?v=-omlRLCc6Bc" data-youtube-id="qkk5wViJo-I" className="video-thumb js-trigger-video-modal">
            <img className="video-banner-img" src="https://imagenes.20minutos.es/files/article_amp/uploads/2020/05/07/dota-2-es-el-juego-con-el-que-mas-dinero-ganan-los-gamers-profesionales.jpeg" alt="" />
          </a>

        

        {/*</div>
        <h2>
          Launch From Buttons &amp; Links
        </h2>
        <p>
          Buttons and links are fair game too, since the method uses anchor tags.
        </p>
        <div className="button-group">
          <a href="https://www.youtube.com/watch?v=Ahglrb_z7wQ" data-youtube-id="Ahglrb_z7wQ" className=" button primary js-trigger-video-modal">
            Let's Rock
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-youtube-id="dQw4w9WgXcQ" className=" button js-trigger-video-modal">
            Nah, Let's Rick
          </a>*/}
        </div>
      </article>
    </section>
  </main>
  {/* video modal */}
  <section className="video-modal">
    {/* Modal Content Wrapper */}
    <div id="video-modal-content" className="video-modal-content">
      {/* iframe */}
      <iframe title="Youtube Frame Review" id="youtube" allow="autoplay" allowFullScreen src width="100%" height="100%" frameBorder={0} />
      <a href="#" className="close-video-modal">
        {/* X close video icon */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve" width={24} height={24}>
          <g id="icon-x-close">
            <path fill="#ffffff" d="M30.3448276,31.4576271 C29.9059965,31.4572473 29.4852797,31.2855701 29.1751724,30.980339 L0.485517241,2.77694915 C-0.122171278,2.13584324 -0.104240278,1.13679247 0.52607603,0.517159487 C1.15639234,-0.102473494 2.17266813,-0.120100579 2.82482759,0.477288136 L31.5144828,28.680678 C31.9872448,29.1460053 32.1285698,29.8453523 31.8726333,30.4529866 C31.6166968,31.0606209 31.0138299,31.4570487 30.3448276,31.4576271 Z" id="Shape" />
            <path fill="#ffffff" d="M1.65517241,31.4576271 C0.986170142,31.4570487 0.383303157,31.0606209 0.127366673,30.4529866 C-0.12856981,29.8453523 0.0127551942,29.1460053 0.485517241,28.680678 L29.1751724,0.477288136 C29.8273319,-0.120100579 30.8436077,-0.102473494 31.473924,0.517159487 C32.1042403,1.13679247 32.1221713,2.13584324 31.5144828,2.77694915 L2.82482759,30.980339 C2.51472031,31.2855701 2.09400353,31.4572473 1.65517241,31.4576271 Z" id="Shape" />
          </g>
        </svg>
      </a>
    </div>{/* end modal content wrapper */}
    {/* clickable overlay element */}
    <div className="overlay" />
  </section>
  {/* end video modal */}
</div>
        );
    }
}

export default Youtube;
