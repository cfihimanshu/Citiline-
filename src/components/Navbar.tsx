"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us", cta: true },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
    <>
        <nav id="navbar">
            <button
                className="hamburger"
                id="hamburger"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span><span></span><span></span>
            </button>
            <Link className="nav-logo flex items-center" href="/">
                <Image
                    src="/citilinelogo.png"
                    alt="Citiline Technologies Logo"
                    width={1821}
                    height={864}
                    priority
                    className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="nav-links">
                {navItems.map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            data-page={item.href.slice(1) || "home"}
                            className={`${isActive ? "active" : ""} ${item.cta ? "nav-cta" : ""}`.trim()}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        data-page={item.href.slice(1) || "home"}
                        className={`${isActive ? "active" : ""} ${item.cta ? "nav-cta" : ""}`.trim()}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </div>
    </>
    ); 
}
