import logo from './tacvue-white-icon (2).svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>
      <body>

        <header class="main-header" role="banner">
          <img src={logo} alt="TacVue Logo" height="40px" class="main-header" id='TacVue'></img>
        </header>

        <main class="container" role="main">
          <article class="content" role="sections">
            <div class="panel">
              <div class="descriptor">EARLY<br/>ACCESS</div>
            </div>
            <div class="panel">
              <div class="descriptor">WEB3<br/>SERVICES</div>
            </div>
            <div class="panel">
              <div class="descriptor">MULTIVERSE<br/>ENTITIES</div>
            </div>
            <div class="panel">
              <div class="descriptor">BRAND<br/>BLUEPRINT</div>
            </div>
            <div class="panel">
              <div class="descriptor">LEARN<br/>MORE</div>
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

        <footer class="main-footer" role="content-info">

          <nav>
            <h3>Mail</h3>
            <h3>Telegram</h3>
            <h3>Tik Tok</h3>
            <h3>Twitter</h3>
            <h3>Blog</h3>
          </nav>
    
          <div class="legal">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
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
