"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Monitor, Lock, BarChart, Scale, Building, Star } from 'lucide-react';

export default function ServicesPage() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
        <div className="page-banner">
            <div className="breadcrumb"><a href="/" style={{"cursor":"pointer"}}>Home</a> ›
                <span>Services</span></div>
            <h1>Our Comprehensive Services</h1>
            <p>From end-to-end technology solutions to authorized debt recovery and startup administration, we deliver measurable business results.
            </p>
        </div>

        <section className="section section-alt">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>What We Offer</div>
                    <h2 className="section-title">Full-Spectrum <span className="hl">Technology Services</span></h2>
                </div>
                <div className="grid-auto">
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><Cloud size={28} /></div>
                            <div className="sdc-name">Cloud Infrastructure</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Scalable, secure, cost-optimized cloud environments on AWS, Azure, and
                                Google Cloud Platform — designed for your workload.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Cloud architecture design &amp; setup
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>On-premises to cloud migration
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Multi-cloud &amp; hybrid strategy
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>24×7 cloud operations &amp; monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><Monitor size={28} /></div>
                            <div className="sdc-name">Software Development</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Custom-built software solutions — web portals, mobile apps, SaaS
                                platforms, and enterprise systems.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Web &amp; mobile application development
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>ERP &amp; CRM system development
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>API development &amp; integration
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>UI/UX design &amp; prototyping
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><Lock size={28} /></div>
                            <div className="sdc-name">Cybersecurity</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Comprehensive security solutions that protect your data, systems, and
                                reputation from modern cyber threats.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Security audits &amp; vulnerability assessment
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Penetration testing
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>ISO 27001 / GDPR compliance
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>SOC &amp; real-time threat monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><BarChart size={28} /></div>
                            <div className="sdc-name">IT Consulting</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Strategic advisory that bridges the gap between business goals and
                                technology execution.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Digital transformation roadmaps
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>IT governance &amp; ITIL frameworks
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Technology stack assessment
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Vendor evaluation &amp; selection
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><Scale size={28} /></div>
                            <div className="sdc-name">Debt Recovery &amp; Resolution</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Authorized Recovery, Resolution &amp; Detective Agency for top financial institutions (SBI, Indian Bank, NBFCs) handling 12,600+ cases.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>SARFAESI Execution &amp; Asset Seizure (Vehicles, Real Estate)
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Issuance of Notices &amp; Delivery of Tehsil Summons
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Liaison with Revenue Officers &amp; Auction Publicity
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Strategic Detective Agency &amp; Field Verification
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail-card reveal">
                        <div className="sdc-header">
                            <div className="sdc-icon flex items-center justify-center"><Building size={28} /></div>
                            <div className="sdc-name">Startup Administration</div>
                        </div>
                        <div className="sdc-body">
                            <p className="sdc-desc">Complete back-office and administrative support to help modern startups launch, scale, and remain compliant effortlessly.</p>
                            <div className="sdc-features">
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Virtual Office Space &amp; Corporate Address
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Firm Enrollment &amp; MCA Incorporation
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Trademark Registration &amp; Intellectual Property
                                </div>
                                <div className="sdc-feat">
                                    <div className="sdc-feat-dot"><svg viewBox="0 0 12 12">
                                            <polyline points="2,6 5,9 10,3"></polyline>
                                        </svg></div>Job Portal Coordination &amp; HR Compliance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  Pricing  */}
        <section className="section">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Pricing Plans</div>
                    <h2 className="section-title">Transparent <span className="hl">Pricing</span></h2>
                    <p className="section-sub">No hidden fees. Choose the plan that fits your business — or talk to us for a
                        custom quote.</p>
                </div>
                <div className="pricing-grid">
                    <div className="pricing-card reveal">
                        <div className="plan-name">Starter</div>
                        <div className="plan-price"><span className="plan-amt">₹15K</span><span className="plan-per"> / month</span>
                        </div>
                        <p className="plan-desc">Perfect for startups and small businesses taking their first step into
                            managed IT.</p>
                        <div className="plan-features">
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Up to 10 Users Supported
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Basic Cloud Setup (1 Server)
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Helpdesk Support (Business Hours)
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Monthly Security Scan
                            </div>
                            <div className="pf-item">
                                <div className="pf-check pf-x" style={{"background":"var(--bg3)"}}>✕</div><span style={{"color":"var(--muted)"}}>Dedicated Account Manager</span>
                            </div>
                            <div className="pf-item">
                                <div className="pf-check pf-x" style={{"background":"var(--bg3)"}}>✕</div><span style={{"color":"var(--muted)"}}>Custom Software Development</span>
                            </div>
                        </div>
                        <a className="plan-btn btn-outline" href="/contact" style={{"border":"1.5px solid var(--blue)","color":"var(--blue)","background":"transparent"}}>Get
                            Started</a>
                    </div>
                    <div className="pricing-card popular reveal">
                        <div className="popular-badge flex items-center gap-1"><Star size={14} fill="currentColor" /> Most Popular</div>
                        <div className="plan-name">Professional</div>
                        <div className="plan-price"><span className="plan-amt">₹45K</span><span className="plan-per"> / month</span>
                        </div>
                        <p className="plan-desc">Ideal for growing businesses that need robust IT support and cloud
                            infrastructure.</p>
                        <div className="plan-features">
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Up to 50 Users Supported
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Full Cloud Infrastructure (3 Servers)
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>24×7 Priority Helpdesk Support
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Weekly Security Monitoring
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Dedicated Account Manager
                            </div>
                            <div className="pf-item">
                                <div className="pf-check pf-x" style={{"background":"var(--bg3)"}}>✕</div><span style={{"color":"var(--muted)"}}>Custom Software Development</span>
                            </div>
                        </div>
                        <a className="plan-btn btn-primary" href="/contact" style={{"background":"var(--grad)","color":"#fff","boxShadow":"var(--shadow)"}}>Get Started</a>
                    </div>
                    <div className="pricing-card reveal">
                        <div className="plan-name">Enterprise</div>
                        <div className="plan-price"><span className="plan-amt">Custom</span></div>
                        <p className="plan-desc">Tailored for large enterprises with complex technology needs and custom
                            development requirements.</p>
                        <div className="plan-features">
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Unlimited Users
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Multi-Cloud Architecture
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>24×7 Dedicated Support Team
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Real-Time Security Operations
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Dedicated Account Manager
                            </div>
                            <div className="pf-item">
                                <div className="pf-check"><svg viewBox="0 0 12 12">
                                        <polyline points="2,6 5,9 10,3"></polyline>
                                    </svg></div>Custom Software Development
                            </div>
                        </div>
                        <a className="plan-btn btn-outline" href="/contact" style={{"border":"1.5px solid var(--blue)","color":"var(--blue)","background":"transparent"}}>Contact
                            Sales</a>
                    </div>
                </div>
            </div>
        </section>
        
    
        </motion.div>
    );
}