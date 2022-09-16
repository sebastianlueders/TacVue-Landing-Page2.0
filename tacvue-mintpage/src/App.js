import logo from './tacvue-white-icon (2).svg';
import './App.css';
import email from './mail.svg'
import telegram from './telegram.svg'
import tiktok from './tiktok.svg'
import twitter from './twitter.svg'
import youtube from './youtube.svg'
import { isMobile } from "react-device-detect";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Home from './Home'
import EarlyAccess from './early-access'
import Web3Services from './web3-services'
import MultiverseEntities from './multiverse-entities'
import BrandBlueprint from './brand-blueprint'
import TOS from './terms-of-use'
import PrivacyPolicy from './privacy-policy'
import { Route, Link } from 'react-router-dom'

const handleClick1 = () => {
  window.open("https://app.gitbook.com/o/1td89P74iu3wc47FF65p/s/RvDdaP4zFfYAJOkRacUk/~/changes/B44Uu6ecW43ZPMDXqZx9/", "_blank");
}

const handleClick2 = () => {
  window.open("mailto:general@tacvue.io", "_blank");
}

const handleClick3 = () => {
  window.open("https://t.me/+wC2AmvAcpgxjNzZh", "_blank");
}

const handleClick4 = () => {
  window.open("https://www.tiktok.com/@tacvue", "_blank");
}

const handleClick5 = () => {
  window.open("https://twitter.com/tacvue", "_blank");
}

const handleClick6 = () => {
  window.open("https://www.youtube.com/channel/UCOexK9WRg0B4RIwmim8aklA", "_blank");
}


function App() {
  return (
    <div className="App">
    <Route exact path="/" component="Home" />
    <Route exact path="/earlyaccess" component="EarlyAccess" />
    <Route exact path="/services" component="Web3Services" />
    <Route exact path="/entity" component="MultiverseEntities" />
    <Route exact path="/blueprint" component="BrandBlueprint" />
    <Route exact path="/termsofservice" component="TOS" />
    <Route exact path="/privacypolicy" component="PrivacyPolicy" />
    
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>
      <body>

        <header class="main-header" role="banner">
          <img src={logo} alt="TacVue Logo" height="40px" class="main-header" id='TacVue'></img>
        </header>

        <main class="container" role="main">
          <article class="content">
            <div class="panel" Link href="/early-access.js">
              <div class="descriptor">EARLY<br/>ACCESS</div>
            </div>
            <div class="panel" Link href="/web3-services.js">
              <div class="descriptor">WEB3<br/>SERVICES</div>
            </div>
            <div class="panel" Link href="/multiverse-entities.js">
              <div class="descriptor">MULTIVERSE<br/>ENTITIES</div>
            </div>
            <div class="panel" Link href="/brand-blueprint.js">
              <div class="descriptor">BRAND<br/>BLUEPRINT</div>
            </div>
            <div class="panel" onClick={handleClick1}>
              <div class="descriptor"> LEARN<br/>MORE</div>
            </div>
          </article>

          <div type="subscription">
            <form action="" method="get">
              <div class="subscription-form">
                <input type="text" className="name" placeholder="Satoshi Nakamoto" class="subscription-form" autocomplete="off" id="name" required></input>
                <input type="email" className="email" placeholder="satoshi@tacvue.io" class="subscription-form" id="email" autocomplete="off" required></input>
              </div>
              <div class="submit">
                <button type="button" class="glow-on-hover">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </main>

        <footer class="main-footer">

          <table class="contact">
            <tr>
              <td>
                <img src={email} alt="Email us" height="50px" class="contact" id='mail' onClick={handleClick2}></img>
              </td>
              <td>
                <img src={telegram} alt="Telegram us" height="50px" class="contact" id='telegram' onClick={handleClick3}></img>
              </td>
              <td>
                <img src={tiktok} alt="Follow us on Tik Tok" height="50px" class="contact" id='tik-tok' onClick={handleClick4}></img>
              </td>
              <td>
                <img src={twitter} alt="Follow us on Twitter" height="50px" class="contact" id='twitter' onClick={handleClick5}></img>
              </td>
              <td>
                <img src={youtube} alt="Follow us on YouTube" height="50px" class="contact" id='youtube' onClick={handleClick6}></img>
              </td>
            </tr>
          </table>
    
          <div class="legal">
            <a Link href='./terms-of-use.js'>Terms of Use</a>
            <a Link href='./privacy-policy.js'>Privacy Policy</a>
          </div>

          <div class="ownership">
            <p>Copyright C 2022 Tacvue Digital Merchandising, Inc. All Rights Reserved</p>
          </div>

        </footer>

      </body>
    </div>
  );
}

export default App;
