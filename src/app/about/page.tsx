"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Target, Lightbulb, Handshake, Zap } from 'lucide-react';

export default function AboutPage() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
        <div className="page-banner page-banner-about">
            <div className="breadcrumb"><Link href="/" style={{"cursor":"pointer"}}>Home</Link> › <span>About
                    Us</span></div>
            <h1>About Citiline Technologies</h1>
            <p>Built on trust, driven by innovation. We are your dedicated technology partner for digital
                transformation.</p>
        </div>

        <section className="section">
            <div className="container">
                <div className="about-story">
                    <div className="reveal-left">
                        <div className="about-photo-card">
                            <Image src="/about-story-v2.png" alt="Citiline leadership team reviewing a strategic roadmap" fill sizes="(max-width: 900px) 90vw, 50vw" />
                            <div className="about-img-badges">
                                <div className="aib">
                                    <div className="aib-num">8+</div>
                                    <div className="aib-label">Years Active</div>
                                </div>
                                <div className="aib">
                                    <div className="aib-num">50+</div>
                                    <div className="aib-label">Team Members</div>
                                </div>
                                <div className="aib">
                                    <div className="aib-num">200+</div>
                                    <div className="aib-label">Projects Done</div>
                                </div>
                                <div className="aib">
                                    <div className="aib-num">15+</div>
                                    <div className="aib-label">Industries Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reveal-right">
                        <div className="eyebrow"><span className="eyebrow-dot"></span>Our Story</div>
                        <h2 className="section-title">A Legacy of <span className="hl">Trust &amp; Excellence</span></h2>
                        <p style={{"color":"var(--muted)","lineHeight":"1.8","marginBottom":"1.2rem"}}>
                            <strong>Citiline Technologies Private Limited</strong> (erstwhile Bankmitra Services Pvt. Ltd.) is a highly diversified enterprise led by a team of visionary founders. Our roots trace back to 2010 with the establishment of our first <em>Associates Firm</em>, which quickly became a premier Resolution and Recovery Agency for leading financial institutions like SBI and SBBJ across Rajasthan and Central India.
                        </p>
                        <p style={{"color":"var(--muted)","lineHeight":"1.8","marginBottom":"1.2rem"}}>
                            Today, our operations span three distinct vertices. Our foundational pillar is <strong>Debt Management &amp; Financial Resolution</strong>, acting as a trusted Recovery and Detective Agency for Indian Bank, NBFCs, and HFCs. We currently handle an active portfolio of 12,600+ cases with an outstanding value exceeding ₹150 Crore, successfully driving ₹52+ Crore in cash recoveries through strategic SARFAESI and legal execution.
                        </p>
                        <p style={{"color":"var(--muted)","lineHeight":"1.8","marginBottom":"2rem"}}>
                            Building on this legacy of trust and operational excellence, we expanded into <strong>IT &amp; Digital Solutions</strong> (Cloud, Software, CyberSec) and comprehensive <strong>Startup Administration Services</strong> (virtual offices, trademarking, compliance). Whether recovering critical financial assets or architecting enterprise cloud networks, we deliver unparalleled results.
                        </p>
                        <a className="btn btn-primary" href="/contact">Partner With Us →</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-alt">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Our Values</div>
                    <h2 className="section-title">What <span className="hl">Drives Us</span></h2>
                </div>
                <div className="values-grid">
                    <div className="value-card reveal">
                        <div className="value-icon flex items-center justify-center"><Target size={32} /></div>
                        <h3 className="value-title">Client First</h3>
                        <p className="value-desc">Every decision we make is anchored in what creates the most value for our
                            clients — long-term relationships over short-term transactions.</p>
                    </div>
                    <div className="value-card reveal">
                        <div className="value-icon flex items-center justify-center"><Lightbulb size={32} /></div>
                        <h3 className="value-title">Innovation</h3>
                        <p className="value-desc">We stay ahead of the technology curve so our clients don&apos;t have to —
                            continuously learning and adopting what works best.</p>
                    </div>
                    <div className="value-card reveal">
                        <div className="value-icon flex items-center justify-center"><Handshake size={32} /></div>
                        <h3 className="value-title">Integrity</h3>
                        <p className="value-desc">Transparent pricing, honest timelines, and clear communication — we say
                            what we mean and deliver what we promise.</p>
                    </div>
                    <div className="value-card reveal">
                        <div className="value-icon flex items-center justify-center"><Zap size={32} /></div>
                        <h3 className="value-title">Excellence</h3>
                        <p className="value-desc">High standards are non-negotiable. From the first line of code to the
                            final deployment, quality defines everything we do.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Our Journey</div>
                    <h2 className="section-title">Key <span className="hl">Milestones</span></h2>
                </div>
                <div style={{"maxWidth":"640px","margin":"0 auto"}}>
                    <div className="milestones reveal">
                        <div className="milestone">
                            <div className="m-year">2016</div>
                            <div>
                                <div className="m-title">The Foundation</div>
                                <div className="m-desc">The foundation was laid with the launch of our first Associates Firm, securing a Resolution Agency Agreement with SBBJ.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2013</div>
                            <div>
                                <div className="m-title">State Bank of India Empanelment</div>
                                <div className="m-desc">Empanelled by SBI as a primary Resolution Agent, expanding our recovery footprint from the Pakistan Border (Ganganagar) to Indore (MP).</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2016</div>
                            <div>
                                <div className="m-title">Corporate Incorporation</div>
                                <div className="m-desc">Incorporated as Bankmitra Services Pvt. Ltd. (CIN: U93096MH2016PTC282402) in Mumbai to corporatize and scale our financial resolution operations nationally.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2018</div>
                            <div>
                                <div className="m-title">Cloud Division Launch</div>
                                <div className="m-desc">Expanded into cloud infrastructure services, achieving AWS and Azure
                                    Partner status.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2020</div>
                            <div>
                                <div className="m-title">50+ Clients Milestone</div>
                                <div className="m-desc">Crossed 50 active enterprise clients; expanded team to 30+
                                    professionals across 3 offices.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2022</div>
                            <div>
                                <div className="m-title">AI &amp; Data Practice</div>
                                <div className="m-desc">Launched dedicated AI/ML and data analytics division serving BFSI
                                    and retail clients.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2024</div>
                            <div>
                                <div className="m-title">200+ Projects Delivered</div>
                                <div className="m-desc">Crossed 200 successful project deliveries with a 99.9% client
                                    satisfaction score.</div>
                            </div>
                        </div>
                        <div className="milestone">
                            <div className="m-year">2025</div>
                            <div>
                                <div className="m-title">Evolution to Citiline Technologies</div>
                                <div className="m-desc">Rebranded to Citiline Technologies Pvt. Ltd., integrating modern IT Solutions, Cybersecurity, and Startup Administration alongside our core Financial Recovery services.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="section-head reveal">
                    <div className="eyebrow"><span className="eyebrow-dot"></span>Our Expertise</div>
                    <h2 className="section-title">Technology <span className="hl">Proficiency</span></h2>
                    <p className="section-sub">Our team&apos;s skill depth across the domains that matter most to our clients.
                    </p>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"3rem","maxWidth":"860px","margin":"0 auto"}} className="reveal">
                    <div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>Cloud &amp; DevOps</span><span>95%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="95%"></div>
                            </div>
                        </div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>Software Development</span><span>92%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="92%"></div>
                            </div>
                        </div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>Cybersecurity</span><span>88%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="88%"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>AI &amp; Data Analytics</span><span>85%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="85%"></div>
                            </div>
                        </div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>IT Consulting</span><span>97%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="97%"></div>
                            </div>
                        </div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-label"><span>Managed Services</span><span>90%</span></div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" data-width="90%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    
        </motion.div>
    );
}
