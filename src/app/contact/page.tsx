"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
        <div className="page-banner">
            <div className="breadcrumb"><a href="/" style={{"cursor":"pointer"}}>Home</a> › <span>Contact</span>
            </div>
            <h1>Let's Talk</h1>
            <p>Get in touch for a free consultation. We typically respond within 2 business hours.</p>
        </div>
        <section className="section">
            <div className="container">
                <div className="contact-grid">
                    <div>
                        <div className="contact-info-card reveal-left">
                            <h3 className="ci-title">Citiline Technologies Pvt. Ltd.</h3>
                            <p className="ci-sub">We'd love to understand your challenge and share how we can help. Reach
                                out via any channel below.</p>
                            <div className="ci-item">
                                <div className="ci-icon flex items-center justify-center"><MapPin size={24} /></div>
                                <div>
                                    <div className="ci-label">Office Addresses</div>
                                    <div className="ci-value">
                                        <strong>HQ:</strong> 301, Dreampoint, Jhotwara Rd, Jaipur - 16<br />
                                        <strong>Reg:</strong> 715, Mastermind V, Goregaon (E), Mumbai - 65
                                    </div>
                                </div>
                            </div>
                            <div className="ci-item">
                                <div className="ci-icon flex items-center justify-center"><Mail size={24} /></div>
                                <div>
                                    <div className="ci-label">Email Us</div>
                                    <div className="ci-value">rk@citiline.info<br />support@citiline.in</div>
                                </div>
                            </div>
                            <div className="ci-item">
                                <div className="ci-icon flex items-center justify-center"><Phone size={24} /></div>
                                <div>
                                    <div className="ci-label">Call Us</div>
                                    <div className="ci-value">+91 98765 43210<br />1800 123 4567</div>
                                </div>
                            </div>
                            <div className="ci-item">
                                <div className="ci-icon flex items-center justify-center"><Clock size={24} /></div>
                                <div>
                                    <div className="ci-label">Working Hours</div>
                                    <div className="ci-value">Mon–Sat: 9:00 AM – 7:00 PM IST</div>
                                </div>
                            </div>
                            <div className="ci-socials">
                                <a href="#" className="cis-btn">in</a>
                                <a href="#" className="cis-btn">𝕏</a>
                                <a href="#" className="cis-btn">f</a>
                                <a href="#" className="cis-btn">▶</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-card reveal-right">
                        <h3 className="form-title">Send Us a Message</h3>
                        <p className="form-sub">Fill in the details below and our team will get back to you within 24 hours.
                        </p>
                        <div className="form-success flex items-center gap-2" id="form-success"><CheckCircle size={20} /> Thank you! Your message has been sent. We'll get
                            back to you within 24 hours.</div>
                        <div id="contact-form-fields">
                            <div className="form-row">
                                <div className="form-group"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Rahul" /></div>
                                <div className="form-group"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Sharma" /></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="rahul@company.com" /></div>
                                <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="+91 98765 43210" /></div>
                            </div>
                            <div className="form-group"><label className="form-label">Company Name</label><input className="form-input" type="text" placeholder="Your Company Pvt. Ltd." /></div>
                            <div className="form-group">
                                <label className="form-label">Service Required</label>
                                <select className="form-select">
                                    <option value="">Select a service...</option>
                                    <option>Cloud Infrastructure</option>
                                    <option>Software Development</option>
                                    <option>Cybersecurity</option>
                                    <option>Debt Recovery &amp; Resolution</option>
                                    <option>Detective Agency Services</option>
                                    <option>Startup Administration</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group"><label className="form-label">Your Message *</label><textarea className="form-textarea" placeholder="Tell us about your project, requirements, or challenges..."></textarea>
                            </div>
                            <button className="form-submit" >Send Message →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    
        </motion.div>
    );
}