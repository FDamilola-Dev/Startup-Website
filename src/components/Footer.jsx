
import FacebookIcon from '../assets/footerIcons/FacebookIcon.svg';
import InstagramIcon  from '../assets/footerIcons/InstagramIcon.svg';
import TwitterIcon from '../assets/footerIcons/TwitterIcon.svg';
import PinterestIcon from '../assets/footerIcons/PinterestIcon.svg';
import  TiktokIcon  from '../assets/footerIcons/TiktokIcon.svg';
import  WhatsappIcon from '../assets/footerIcons/WhatsappIcon.svg';
import YoutubeIcon  from '../assets/footerIcons/YoutubeIcon.svg';



 const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <img src={FacebookIcon} alt="Facebook" />
    <img src={InstagramIcon} alt="Instagram" />
    <img src={TwitterIcon}  alt="Twitter" />
    <img src={PinterestIcon} alt="Facebook" />
    <img src={TiktokIcon} alt="Instagram" />
    <img src={WhatsappIcon}  alt="Twitter" />
    <img src={YoutubeIcon}  alt="Twitter" />
      </div>
      <p className="footer-copy">© Start, 2022. All rights reserved.</p>
    </footer>
  );
}


export default Footer;