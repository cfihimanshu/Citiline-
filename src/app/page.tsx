"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechTicker from "@/components/TechTicker";
import TypeWriter from "@/components/TypeWriter";
import Counter from "@/components/Counter";
import { Cloud, Monitor, Lock, BarChart, Scale, Building, Mail, BriefcaseBusiness } from 'lucide-react';

export default function HomePage() {
    const [activeWhyStep, setActiveWhyStep] = useState(0);
    const whySteps = [
        {
            title: "Expertise Meets Innovation",
            description: "Certified specialists combine proven experience with modern cloud, software, AI and security practices.",
            image: "/why-innovation-ai.webp",
            alt: "Technology consultants collaborating on digital transformation",
        },
        {
            title: "End-to-End Delivery",
            description: "From discovery and strategy to development, deployment and support, one team owns the complete journey.",
            image: "/why-delivery-ai.webp",
            alt: "Citiline specialists planning a client technology project",
        },
        {
            title: "Client-Centric Approach",
            description: "Every solution is shaped around your business goals, operational reality, budget and growth roadmap.",
            image: "/why-client-ai.webp",
            alt: "Business professionals discussing a tailored digital strategy",
        },
        {
            title: "Reach Across Bharat",
            description: "We connect businesses and communities with practical digital platforms built for meaningful impact.",
            image: "/why-bharat-ai.webp",
            alt: "Digital services supporting a rural Indian community",
        },
        {
            title: "Startup Support",
            description: "From idea validation and business planning to launch readiness, compliance and fundraising preparation, we help founders build confidently.",
            image: "/why-startup-ai.webp",
            alt: "Startup founders reviewing their launch plan with an experienced advisor",
        },
        {
            title: "Business Consultancy",
            description: "Research-backed strategy, financial planning and process improvement help leadership teams make stronger growth decisions.",
            image: "/why-business-consultancy-ai.webp",
            alt: "Business consultant presenting a growth strategy to company leaders",
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            

        {/*  Hero  */}
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
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
            </div>
        </section>

        {/*  Tech Ticker  */}
        <TechTicker />

        {/*  Services  */}
        <section className="section section-alt services-showcase">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Our Expertise</div>
                    <h2 className="section-title">Comprehensive <span className="hl">Business &amp; IT Services</span></h2>
                    <p className="section-sub">We combine business strategy and technology expertise to help organizations launch, optimize, and scale.</p>
                </div>
                <div className="services-grid">
                    <div className="card service-card service-card-featured reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Cloud size={24} /></span></div>
                        <div className="service-kicker">CloudOps</div>
                        <h3 className="svc-title">Cloud Infrastructure</h3>
                        <p className="svc-desc">Scalable cloud architecture on AWS, Azure &amp; GCP. Migration, optimization,
                            and 24/7 managed services.</p>
                        <div className="service-meta"><span>AWS</span><span>Azure</span><span>GCP</span></div><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Monitor size={24} /></span></div>
                        <div className="service-kicker">Product Engineering</div>
                        <h3 className="svc-title">Software Development</h3>
                        <p className="svc-desc">Custom web, mobile, and enterprise applications built with modern stacks —
                            from MVP to production.</p>
                        <div className="service-meta"><span>Web</span><span>Mobile</span><span>Enterprise</span></div><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Lock size={24} /></span></div>
                        <div className="service-kicker">Risk Defense</div>
                        <h3 className="svc-title">Cybersecurity</h3>
                        <p className="svc-desc">End-to-end security audits, penetration testing, compliance frameworks, and
                            real-time threat monitoring.</p>
                        <div className="service-meta"><span>Audit</span><span>VAPT</span><span>Compliance</span></div><a className="svc-link" href="/services">Learn
                            more →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><BarChart size={24} /></span></div>
                        <div className="service-kicker">Strategy</div>
                        <h3 className="svc-title">IT Consulting</h3>
                        <p className="svc-desc">Strategic technology advisory and digital transformation roadmaps aligned to
                            your business goals.</p>
                        <div className="service-meta"><span>Roadmap</span><span>Process</span><span>Scale</span></div><a className="svc-link" href="/services">Learn more →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><BriefcaseBusiness size={24} /></span></div>
                        <div className="service-kicker">Growth Advisory</div>
                        <h3 className="svc-title">Business Consultancy</h3>
                        <p className="svc-desc">Business plans, market research, growth strategy, financial planning, process improvement, fundraising readiness, and franchise advisory.</p>
                        <div className="service-meta"><span>Plans</span><span>Research</span><span>Funding</span></div><a className="svc-link" href="/services">Learn more →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Scale size={24} /></span></div>
                        <div className="service-kicker">Resolution</div>
                        <h3 className="svc-title">Debt Recovery &amp; Resolution</h3>
                        <p className="svc-desc">Authorized Recovery &amp; Detective Agency for top banks. Expertise in SARFAESI execution, asset seizure, and debt resolution.</p>
                        <div className="service-meta"><span>Banks</span><span>SARFAESI</span><span>Assets</span></div><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                    <div className="card service-card reveal">
                        <div className="svc-icon flex items-center justify-center"><span><Building size={24} /></span></div>
                        <div className="service-kicker">Business Setup</div>
                        <h3 className="svc-title">Startup Administration</h3>
                        <p className="svc-desc">End-to-end business services including virtual office space, trademark registration, and legal compliance consulting.</p>
                        <div className="service-meta"><span>Virtual Office</span><span>Trademark</span><span>Legal</span></div><a className="svc-link" href="/services">Learn more
                            →</a>
                    </div>
                </div>
            </div>
        </section>

        {/*  Why Us  */}
        <section className="section">
            <div className="container">
                <div className="interactive-why-heading reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Why Citiline</div>
                    <h2>Why Choose Us</h2>
                </div>
                <div className="interactive-why reveal">
                    <div className="interactive-why-image">
                        <motion.img
                            key={whySteps[activeWhyStep].image}
                            src={whySteps[activeWhyStep].image}
                            alt={whySteps[activeWhyStep].alt}
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                        />
                    </div>
                    <div className="interactive-why-steps">
                        {whySteps.map((step, index) => (
                            <button
                                type="button"
                                className={`interactive-why-step ${activeWhyStep === index ? "active" : ""}`}
                                onMouseEnter={() => setActiveWhyStep(index)}
                                onFocus={() => setActiveWhyStep(index)}
                                onClick={() => setActiveWhyStep(index)}
                                key={step.title}
                            >
                                <span className="interactive-step-num">{String(index + 1).padStart(2, "0")}</span>
                                <span>
                                    <strong>{step.title}</strong>
                                    <small>{step.description}</small>
                                </span>
                            </button>
                        ))}
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
                <div className="channel-partner reveal">
                    <div className="channel-partner-logo">
                        <img src="/mavics.svg" alt="Mavics Ventures" />
                    </div>
                    <div className="channel-partner-content">
                        <div className="eyebrow"><span className="eyebrow-dot"></span>Our Channel Partner</div>
                        <h2 className="section-title">Mavics <span className="hl">Ventures</span></h2>
                        <p>Mavics Ventures Private Limited is a Jaipur-based enterprise established in 2021. The company operates in the retail segment, with a focus on household appliances, articles and equipment.</p>
                        <p>As Citiline&apos;s channel partner, Mavics Ventures supports stronger market connections, business outreach and access to practical solutions for customers.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  Citiline Ventures  */}
        <section className="section bg-gray-50/50">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Building for Bharat</div>
                    <h2 className="section-title">Citiline <span className="hl">Ventures</span></h2>
                    <p className="section-sub">Our growing portfolio of digital platforms and business initiatives.</p>
                </div>
                <div className="venture-marquee reveal w-full overflow-hidden" aria-label="Citiline Ventures">
                    <div
                        className="venture-marquee-track flex w-max"
                        style={{ animation: "ventureMarqueeScroll 22s linear infinite" }}
                    >
                        {[0, 1].map((group) => (
                            <div className="venture-logo-group flex shrink-0 items-center gap-16 pr-16 md:gap-28 md:pr-28" aria-hidden={group === 1} key={group}>
                                <img src="/gpdelogo.png" alt={group === 0 ? "Gram Panchayat Digital Ecosystem" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                                <img src="/bizondeck-logo.png" alt={group === 0 ? "BizOnDeck" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                                <img src="/indiaproperty%20logo.png" alt={group === 0 ? "India Property To Let" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                                <img src="/uploymentlogo.jpeg" alt={group === 0 ? "Uployment" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                                <img src="/startupkare.png" alt={group === 0 ? "StartupKare" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                                <img src="/msmelaunchpad.png" alt={group === 0 ? "MSME Launchpad" : ""} className="h-20 w-52 shrink-0 object-contain md:h-24 md:w-64" />
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx global>{`
                    @keyframes ventureMarqueeScroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>
            </div>
        </section>

        {/*  Media Partner  */}
        <section className="section">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>In The News</div>
                    <h2 className="section-title">Our <span className="hl">Media Partner</span></h2>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[var(--shadow-sm)] p-8 md:p-12 reveal hover:shadow-[var(--shadow-lg)] transition-shadow duration-500">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        
                        {/* Logo Left */}
                        <div className="w-full md:w-2/5 flex justify-center md:justify-end pb-8 md:pb-0 md:pr-10">
                            <a href="https://channel009.news" target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform duration-300">
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
