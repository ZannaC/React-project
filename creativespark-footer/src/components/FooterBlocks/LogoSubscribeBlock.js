import footerLogo from "../../assets/images/footer-logo.svg";
import submit from "../../assets/images/submit.svg";

function LogoSubscribeBlock() {
  return (
    <div className="logo-block">
      <div className="footer -logo">
        <img src={footerLogo} alt="FooterLogo" />
      </div>
      <div className="all-rights">
        Copyright © 2020. LogoIpsum. All rights reserved.
      </div>
      <div className="footer-subscribe">
        Subscribe to our <br />
        newsletter
      </div>
      <div className="email-btn">
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" className="email-btn-input" />
        </div>
        <div className="email-submit-btn">
          <a href="#top">
            <img src={submit} alt="submit" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default LogoSubscribeBlock;
