import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa"; //imported this from react icon
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const navigation = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'New Arrivals', href: '/shop?category=new' },
    { name: 'Sale', href: '/shop?category=sale' },
  ],
  support: [
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="text-2xl font-serif">
              Minimade
            </Link>
            <p className="text-sm leading-6 text-yellow-600">
              Minimalist clothing for the modern wardrobe.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Shop</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.shop.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-yellow-600 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-20 gap-5 justify-center text-2xl">
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
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-white">
            &copy; {new Date().getFullYear()} Minimade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}