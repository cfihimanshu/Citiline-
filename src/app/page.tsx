"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from "@/components/ParticleCanvas";
import TechTicker from "@/components/TechTicker";
import TypeWriter from "@/components/TypeWriter";
import Counter from "@/components/Counter";
import { Zap, Cloud, ShieldCheck, Monitor, Lock, BarChart, Scale, Building, Mail } from 'lucide-react';

export default function HomePage() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            

        {/*  Hero  */}
        <section className="hero">
            <ParticleCanvas />
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="morph-blob" style={{"width":"500px","height":"500px","right":"-100px","top":"-80px"}}></div>
            <div className="hero-inner">
                <div>
                    <div className="hero-badge stagger-child"><span className="badge-pulse"></span>Trusted IT &amp; Consulting
                        Partner</div>
                    <h1 className="hero-title stagger-child">Powering Your<br /><span className="grad-animate">Digital
                            Growth</span><br />with <TypeWriter /></h1>
                    <p className="hero-sub stagger-child">Citiline Technologies Pvt. Ltd. delivers cutting-edge software
                        development, cloud solutions, cybersecurity, and strategic IT consulting — built for the
                        businesses of tomorrow.</p>
                    <div className="hero-btns stagger-child">
                        <a className="btn btn-primary btn-magnetic ripple-host" href="/services">Explore
                            Services ↗</a>
                        <a className="btn btn-outline btn-magnetic ripple-host" href="/contact">Free
                            Consultation</a>
                    </div>
                    <div className="hero-stats stagger-child">
                        <div>
                            <Counter end={200} suffix="+" />
                            <div className="hstat-label">Projects Delivered</div>
                        </div>
                        <div>
                            <Counter end={12600} suffix="+" />
                            <div className="hstat-label">Cases Handled</div>
                        </div>
                        <div>
                            <Counter end={150} suffix=" Cr+" />
                            <div className="hstat-label">Portfolio Managed</div>
                        </div>
                        <div>
                            <Counter end={14} suffix="+" />
                            <div className="hstat-label">Years of Experience</div>
                        </div>
                        <div>
                            <Counter end={52} suffix=" Cr+" />
                            <div className="hstat-label">Cash Recovered</div>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-card-main shine-card glow-on-hover">
                        <div className="hcard-icon icon-bounce flex items-center justify-center"><Zap size={24} /></div>
                        <div className="hcard-title">Full-Stack IT Solutions</div>
                        <div className="hcard-sub">From ideation to deployment — we handle every layer of your technology
                            stack with precision and expertise.</div>
                        <div className="hcard-tags">
                            <span className="tag">Cloud</span><span className="tag">AI / ML</span><span className="tag">Security</span>
                            <span className="tag">DevOps</span><span className="tag">ERP</span><span className="tag">Mobile</span>
                        </div>
                    </div>
                    <div className="hero-float f1">
                        <div className="float-icon flex items-center justify-center"><Cloud size={20} /></div>Cloud Migration
                    </div>
                    <div className="hero-float f2">
                        <div className="float-icon flex items-center justify-center"><ShieldCheck size={20} /></div>99.9% Uptime SLA
                    </div>
                </div>
            </div>
        </section>

        {/*  Tech Ticker  */}
        <TechTicker />

        {/*  Services  */}
        <section className="section section-alt">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Our Expertise</div>
                    <h2 className="section-title">Comprehensive <span className="hl">IT Services</span></h2>
                    <p className="section-sub">We cover the full spectrum of technology services your business needs to
                        thrive in the digital era.</p>
                </div>
                <div className="grid-auto">
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Cloud size={24} /></span></div>
                        <h3 className="svc-title">Cloud Infrastructure</h3>
                        <p className="svc-desc">Scalable cloud architecture on AWS, Azure &amp; GCP. Migration, optimization,
                            and 24/7 managed services.</p><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Monitor size={24} /></span></div>
                        <h3 className="svc-title">Software Development</h3>
                        <p className="svc-desc">Custom web, mobile, and enterprise applications built with modern stacks —
                            from MVP to production.</p><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Lock size={24} /></span></div>
                        <h3 className="svc-title">Cybersecurity</h3>
                        <p className="svc-desc">End-to-end security audits, penetration testing, compliance frameworks, and
                            real-time threat monitoring.</p><a className="svc-link" href="/services">Learn
                            more →</a>
                    </div>
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><BarChart size={24} /></span></div>
                        <h3 className="svc-title">IT Consulting</h3>
                        <p className="svc-desc">Strategic technology advisory and digital transformation roadmaps aligned to
                            your business goals.</p><a className="svc-link" href="/services">Learn more →</a>
                    </div>
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Scale size={24} /></span></div>
                        <h3 className="svc-title">Debt Recovery &amp; Resolution</h3>
                        <p className="svc-desc">Authorized Recovery &amp; Detective Agency for top banks. Expertise in SARFAESI execution, asset seizure, and debt resolution.</p><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Building size={24} /></span></div>
                        <h3 className="svc-title">Startup Administration</h3>
                        <p className="svc-desc">End-to-end business services including virtual office space, trademark registration, and legal compliance consulting.</p><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                </div>
            </div>
        </section>

        {/*  Why Us  */}
        <section className="section">
            <div className="container">
                <div className="why-grid">
                    <div className="reveal-left">
                        <div className="eyebrow"><span className="eyebrow-dot"></span>Why Citiline</div>
                        <h2 className="section-title">Technology Partners <span className="hl">You Can Trust</span></h2>
                        <p className="section-sub" style={{"marginBottom":"2rem"}}>We don't just deliver projects — we build
                            long-term partnerships that drive measurable business value.</p>
                        <div className="why-item">
                            <div className="why-num">1</div>
                            <div className="why-text">
                                <h4>Certified Professionals</h4>
                                <p>Team of 50+ certified IT professionals across cloud, security, AI, and consulting
                                    domains.</p>
                            </div>
                        </div>
                        <div className="why-item">
                            <div className="why-num">2</div>
                            <div className="why-text">
                                <h4>On-Time, On-Budget Delivery</h4>
                                <p>Agile delivery methodology with transparent communication and zero-surprise billing.
                                </p>
                            </div>
                        </div>
                        <div className="why-item">
                            <div className="why-num">3</div>
                            <div className="why-text">
                                <h4>Pan-India + Global Reach</h4>
                                <p>Offices in Jaipur with remote delivery capability for clients across India, UAE, and
                                    beyond.</p>
                            </div>
                        </div>
                        <div className="why-item">
                            <div className="why-num">4</div>
                            <div className="why-text">
                                <h4>Post-Deployment Support</h4>
                                <p>Dedicated support teams ensuring your systems stay optimized and secure 24×7.</p>
                            </div>
                        </div>
                        <a className="btn btn-primary" href="/about">Learn About Us →</a>
                    </div>
                    <div className="reveal-right">
                        <div className="why-visual">
                            <div className="wv-metric">
                                <div className="wv-metric-num">200+</div>
                                <div className="wv-metric-label">Successful Projects Delivered</div>
                            </div>
                            <div className="wv-metric">
                                <div className="wv-metric-num">99.9%</div>
                                <div className="wv-metric-label">Average Client Satisfaction Score</div>
                            </div>
                            <div className="wv-metric">
                                <div className="wv-metric-num">40%</div>
                                <div className="wv-metric-label">Average Cost Reduction for Clients</div>
                            </div>
                            <div className="wv-metric">
                                <div className="wv-metric-num">8 Yrs</div>
                                <div className="wv-metric-label">Industry Experience &amp; Expertise</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Testimonials  */}
        <section className="section section-blue">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Client Voices</div>
                    <h2 className="section-title">What Our <span className="hl">Clients Say</span></h2>
                </div>
                <div className="grid-3">
                    <div className="card testi-card reveal">
                        <div className="testi-stars">★★★★★</div>
                        <p className="testi-text">"Citiline transformed our entire IT infrastructure. Their cloud migration
                            was flawless and our operational costs dropped by 40%."</p>
                        <div className="testi-author">
                            <div className="testi-avatar">RK</div>
                            <div>
                                <div className="testi-name">Rajesh Kumar</div>
                                <div className="testi-role">CTO, NexaTech Solutions</div>
                            </div>
                        </div>
                    </div>
                    <div className="card testi-card reveal">
                        <div className="testi-stars">★★★★★</div>
                        <p className="testi-text">"Their consulting team helped us define a 3-year digital roadmap. The
                            strategic clarity we gained was truly invaluable."</p>
                        <div className="testi-author">
                            <div className="testi-avatar">PM</div>
                            <div>
                                <div className="testi-name">Priya Mehta</div>
                                <div className="testi-role">Director, Orion Finserv</div>
                            </div>
                        </div>
                    </div>
                    <div className="card testi-card reveal">
                        <div className="testi-stars">★★★★★</div>
                        <p className="testi-text">"The custom ERP Citiline built handles 10x our previous volume — delivered
                            on time and within budget. Exceptional work."</p>
                        <div className="testi-author">
                            <div className="testi-avatar">AS</div>
                            <div>
                                <div className="testi-name">Arun Sharma</div>
                                <div className="testi-role">MD, GlobalMart Retail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Our Partners  */}
        <section className="section py-16 bg-white border-t border-gray-100">
            <div className="container">
                <div className="text-center mb-10 reveal">
                    <p className="text-sm font-bold text-[var(--muted)] tracking-widest uppercase">Trusted Ecosystem Partners</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 reveal">
                    <img src="/acolyte.png" alt="Acolyte Technologies" className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    <img src="/startupflora.png" alt="StartupFlora" className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    <img src="/mavics.svg" alt="Mavics Venture" className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    <img src="/projectvala.png" alt="ProjectVala" className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </section>

        {/*  Media Partner  */}
        <section className="section bg-gray-50/50">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>In The News</div>
                    <h2 className="section-title">Our <span className="hl">Media Partner</span></h2>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[var(--shadow-sm)] p-8 md:p-12 reveal hover:shadow-[var(--shadow-lg)] transition-shadow duration-500">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        
                        {/* Logo Left */}
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end pb-8 md:pb-0 md:pr-10">
                            <a href="https://channel000.news" target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform duration-300">
                                <img src="/channel009logo.png" alt="Channel 009 News" className="h-28 md:h-32 w-auto object-contain transition-transform duration-500 hover:scale-105" />
                            </a>
                        </div>
                        
                        {/* Content Right */}
                        <div className="w-full md:w-3/5 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-4 font-[family-name:var(--font-sans)]">Channel 009 News</h3>
                            <p className="text-[var(--muted)] leading-relaxed mb-6">
                                We are proud to partner with <strong className="text-gray-800">Channel 009 News</strong>, a leading media organization dedicated to bringing transparent, high-quality, and impactful news coverage. Together, we aim to amplify stories of digital transformation and innovation across the tech industry.
                            </p>
                            <a href="https://channel000.news" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--blue)] font-semibold hover:text-[var(--accent)] transition-colors">
                                Visit Channel 009 <span>→</span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        {/*  CTA  */}
        <section className="section">
            <div className="cta-home reveal">
                <div className="eyebrow" style={{"background":"rgba(255,255,255,.18)","color":"#fff","borderColor":"transparent"}}><span className="eyebrow-dot" style={{"background":"#fff"}}></span>Get Started Today</div>
                <h2>Ready to Transform Your<br />Business with Technology?</h2>
                <p>Schedule a free consultation with our experts and discover how Citiline Technologies can accelerate
                    your digital growth.</p>
                <div style={{"display":"flex","gap":"1rem","justifyContent":"center","flexWrap":"wrap"}}>
                    <a className="btn btn-white flex items-center justify-center gap-2" href="/contact"><Mail size={18} /> Contact Us</a>
                    <a className="btn" style={{"background":"rgba(255,255,255,.15)","color":"#fff","border":"1.5px solid rgba(255,255,255,.4)"}} href="/services">View Services →</a>
                </div>
            </div>
        </section>

        
    
        </motion.div>
    );
}