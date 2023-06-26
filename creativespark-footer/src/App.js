import footerLogo from "./assets/images/footer-logo.svg";
import backToTop from "./assets/images/back-to-top.svg";
import submit from "./assets/images/submit.svg";

import "./index.css";
import ServicesBlock from "./components/FooterBlocks/ServicesBlock";
import AboutBlock from "./components/FooterBlocks/AboutBlock";
import SocialMedia from "./components/FooterBlocks/SocialMedia";

function App() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="logo-block">
          <div class="footer -logo">
            <img src={footerLogo} alt="FooterLogo" />
          </div>
          <div class="all-rights">
            Copyright © 2020. LogoIpsum. All rights reserved.
          </div>
          <div class="footer-subscribe">
            Subscribe to our <br />
            newsletter
          </div>
          <div class="email-btn">
            <div>
              <label for="email">Email address</label>
              <input type="email" class="email-btn-input" />
            </div>
            <div class="email-submit-btn">
              <a href="#top">
                <img src={submit} alt="submit" />
              </a>
            </div>
          </div>
        </div>
        <ServicesBlock />
        <AboutBlock />
        <SocialMedia>
          <div className="back-to-top-btn">
            <a href="#top">
              <img src={backToTop} alt="back To Top" />
            </a>
          </div>
        </SocialMedia>
      </div>
    </footer>
  );
}

export default App;
