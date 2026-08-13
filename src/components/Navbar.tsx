"use client";
import { useState } from "react";

export default function Navbar() { 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
    <>
        <nav id="navbar">
            <div className="hamburger" id="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span><span></span><span></span>
            </div>
            <a className="nav-logo flex items-center" href="/">
                <img src="/citilinelogo.png" alt="Citiline Technologies Logo" className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </a>
            <div className="nav-links">
                <a href="/" data-page="home">Home</a>
                <a href="/about" data-page="about">About</a>
                <a href="/services" data-page="services">Services</a>
                <a href="/contact" data-page="contact" className="bg-[#1A56DB] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#0F1E45] hover:shadow-lg transition-all duration-300">Contact Us</a>
            </div>
        </nav>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="/" data-page="home">Home</a>
            <a href="/about" data-page="about">About</a>
            <a href="/services" data-page="services">Services</a>
            <a href="/contact" data-page="contact" className="text-[#1A56DB] font-bold">Contact Us</a>
        </div>
    </>
    ); 
}