import Facebook from "./assets/images/Facebook.svg";
import Instagram from "./assets/images/Instagram.svg";
import Twitter from "./assets/images/Twitter.svg";

function SocialMedia() {
  return (
    <div className="socialMedia">
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
  );
}
export default SocialMedia;
