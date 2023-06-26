import footerLogo from "./assets/images/footer-logo.svg";
import backToTop from "./assets/images/back-to-top.svg";
import submit from "./assets/images/submit.svg";
import Facebook from "./assets/images/Facebook.svg";
import Instagram from "./assets/images/Instagram.svg";
import Twitter from "./assets/images/Twitter.svg";
import "./index.css";

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
        <div class="services-block">
          <ul>
            <li class="li-title">Services</li>
            <li>
              <a href="#top">Email Marketing</a>
            </li>
            <li>
              <a href="#top">Campaigns</a>
            </li>
            <li>
              <a href="#top">Branding</a>
            </li>
            <li>
              <a href="#top">Offline</a>
            </li>
          </ul>
        </div>
        <div class="about-block">
          <ul>
            <li class="li-title">About</li>
            <li>
              <a href="#top">Our Story</a>
            </li>
            <li>
              <a href="#top">Benefits</a>
            </li>
            <li>
              <a href="#top">Team</a>
            </li>
            <li>
              <a href="#top">Careers</a>
            </li>
          </ul>
        </div>
        <div class="btn-socialMedia">
          <div class="back-to-top-btn">
            <a href="#top">
              <img src={backToTop} alt="back To Top" />
            </a>
          </div>
          <div class="socialMedia">
            <a href="#top">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#top">
              <img src={Twitter} alt="Twitter" />
            </a>

            <a href="#top">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
