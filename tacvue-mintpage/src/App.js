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

const handleClick1 = () => {
  window.open("https://app.gitbook.com/o/1td89P74iu3wc47FF65p/s/RvDdaP4zFfYAJOkRacUk/~/changes/B44Uu6ecW43ZPMDXqZx9/", "_blank");
}


function App() {
  return (
    <div className="App">
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
                <input type="text" name="name" placeholder="Satoshi Nakamoto" class="subscription-form" id="name" required></input>
                <input type="email" name="email" placeholder="satoshi@tacvue.io" class="subscription-form" id="email" required></input>
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
                <img src={email} alt="Email us" height="30px" class="contact" id='mail'></img>
              </td>
              <td>
                <img src={telegram} alt="Telegram us" height="30px" class="contact" id='telegram'></img>
              </td>
              <td>
                <img src={tiktok} alt="Follow us on Tik Tok" height="30px" class="contact" id='tik-tok'></img>
              </td>
              <td>
                <img src={twitter} alt="Follow us on Twitter" height="30px" class="contact" id='twitter'></img>
              </td>
              <td>
                <img src={youtube} alt="Follow us on YouTube" height="30px" class="contact" id='youtube'></img>
              </td>
            </tr>
          </table>
    
          <div class="legal">
            <a Link href='./terms-of-use.js'>Terms of Use</a>
            <br></br>
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
