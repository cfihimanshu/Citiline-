import Link from "next/link";
import { Building, MapPin, Mail, Phone, Clock } from 'lucide-react';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo block mb-6" style={{ cursor: "pointer" }}>
              <img src="/citilinelogo.png" alt="Citiline Technologies Logo" className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </Link>
            <p>
              Driving digital transformation through innovative IT solutions and
              strategic consulting. Your growth, our mission.
            </p>
            <div className="footer-social">
              <a href="#" className="fsoc">in</a>
              <a href="#" className="fsoc">𝕏</a>
              <a href="#" className="fsoc">f</a>
              <a href="#" className="fsoc">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Cloud Infrastructure</Link></li>
              <li><Link href="/services">Software Development</Link></li>
              <li><Link href="/services">Cybersecurity</Link></li>
              <li><Link href="/services">IT Consulting</Link></li>
              <li><Link href="/services">Business Consultancy</Link></li>
              <li><Link href="/services">AI & Analytics</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="fc-contact-item" style={{alignItems: 'flex-start'}}>
              <span className="fc-icon mt-1 flex items-center justify-center"><Building size={16} /></span>
              <span><strong>Reg. Office:</strong> 715, Mastermind V, Royal Palm Estate, Goregaon (East), Mumbai, MH 400065</span>
            </div>
            <div className="fc-contact-item">
              <span className="fc-icon flex items-center justify-center"><MapPin size={16} /></span><strong>HQ:</strong> Jaipur, Rajasthan
            </div>
            <div className="fc-contact-item">
              <span className="fc-icon flex items-center justify-center"><Mail size={16} /></span>info@citiline.in
            </div>
            <div className="fc-contact-item">
              <span className="fc-icon flex items-center justify-center"><Phone size={16} /></span>+91 98765 43210
            </div>
            <div className="fc-contact-item">
              <span className="fc-icon flex items-center justify-center"><Clock size={16} /></span>Mon–Sat, 9AM–7PM IST
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 <span className="accent">Citiline Technologies Pvt. Ltd.</span> All rights reserved.
          </p>
          <p className="footer-powered">Powered by Bharat Pahchan</p>
          <p>Privacy Policy &nbsp;|&nbsp; Terms of Service &nbsp;|&nbsp; CIN: U93096MH2016PTC282402</p>
        </div>
      </div>
    </footer>
  );
}
