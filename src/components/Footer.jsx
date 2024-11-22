import { FaFacebookSquare } from "react-icons/fa"; //imported this from react icon
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
    return (
      <footer className="border-t">
        <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-4">
            <p>© All Rights Reserved 2024</p>

            <div className='flex items-center gap-5 justify-center text-2xl'>
                <a href='https://www.facebook.com/aryan.karki.50115/' className='hover:text-primary-100'>
                    <FaFacebookSquare />
                </a>
                <a href='https://www.instagram.com/aryan_jungk/' className='hover:text-primary-100'>
                    <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/in/aryan-karki-5bb462318/' className='hover:text-primary-100'>
                     <FaLinkedin />
                </a>
                <a href='https://www.tiktok.com/' className='hover:text-primary-100'>
                    <AiFillTikTok />
                </a>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  