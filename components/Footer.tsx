import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__links-container'>
                <div className='footer__rights'>
                    <Image src='/logo.svg' alt='CarHub logo' width={118} height={18} className='object-contain' />
                    <p className='text-base text-gray-700'>&copy; {new Date().getFullYear()} CarHub. All rights reserved.</p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((link) => (
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='footer__copyrights'>
                <p>&copy; {new Date().getFullYear()} CarHub. All Rights Reserved</p>
                <div className='footer__copyright-links'>
                    <Link href='/' className='text-gray-500'>Privacy Policy</Link>
                    <Link href='/' className='text-gray-500'>Terms of Use</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
