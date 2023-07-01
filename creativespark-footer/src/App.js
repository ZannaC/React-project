import "./index.css";
import ServicesBlock from "./components/FooterBlocks/ServicesBlock";
import AboutBlock from "./components/FooterBlocks/AboutBlock";
import SocialMediaBlock from "./components/FooterBlocks/SocialMediaBlock";
import LogoSubscribeBlock from "./components/FooterBlocks/LogoSubscribeBlock";

function App() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <LogoSubscribeBlock />
        <ServicesBlock />
        <AboutBlock />
        <SocialMediaBlock />
      </div>
    </footer>
  );
}

export default App;
