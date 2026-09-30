"use client";
import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formError, setFormError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormStatus("submitting");
        setFormError("");

        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        const query = new URLSearchParams(window.location.search);
        Object.assign(data, {
            sourcePage: window.location.pathname,
            leadSource: "Citiline Contact Page Form",
            referrer: document.referrer,
            utmSource: query.get("utm_source") || "",
            utmMedium: query.get("utm_medium") || "",
            utmCampaign: query.get("utm_campaign") || "",
        });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Message could not be sent.");

            form.reset();
            setFormStatus("success");
        } catch (error) {
            setFormError(error instanceof Error ? error.message : "Message could not be sent.");
            setFormStatus("error");
        }
    }

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
        <div className="page-banner page-banner-contact">
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
                        {formStatus === "success" && <div className="form-success flex items-center gap-2" style={{ display: "flex" }}><CheckCircle size={20} /> Thank you! Your message has been saved. We&apos;ll get back to you within 24 hours.</div>}
                        {formStatus === "error" && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{formError}</div>}
                        <form id="contact-form-fields" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group"><label className="form-label" htmlFor="firstName">First Name *</label><input id="firstName" name="firstName" className="form-input" type="text" placeholder="Rahul" required maxLength={80} /></div>
                                <div className="form-group"><label className="form-label" htmlFor="lastName">Last Name *</label><input id="lastName" name="lastName" className="form-input" type="text" placeholder="Sharma" required maxLength={80} /></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label className="form-label" htmlFor="email">Email Address *</label><input id="email" name="email" className="form-input" type="email" placeholder="rahul@company.com" required maxLength={160} /></div>
                                <div className="form-group"><label className="form-label" htmlFor="phone">Phone Number</label><input id="phone" name="phone" className="form-input" type="tel" placeholder="+91 98765 43210" maxLength={30} /></div>
                            </div>
                            <div className="form-group"><label className="form-label" htmlFor="company">Company Name</label><input id="company" name="company" className="form-input" type="text" placeholder="Your Company Pvt. Ltd." maxLength={160} /></div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="service">Service Required</label>
                                <select id="service" name="service" className="form-select">
                                    <option value="">Select a service...</option>
                                    <option>Cloud Infrastructure</option>
                                    <option>Software Development</option>
                                    <option>Cybersecurity</option>
                                    <option>IT Consulting</option>
                                    <option>Business Consultancy</option>
                                    <option>Debt Recovery &amp; Resolution</option>
                                    <option>Detective Agency Services</option>
                                    <option>Startup Administration</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group"><label className="form-label" htmlFor="message">Your Message *</label><textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project, requirements, or challenges..." required maxLength={3000}></textarea>
                            </div>
                            <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                            <button className="form-submit" type="submit" disabled={formStatus === "submitting"}>{formStatus === "submitting" ? "Sending…" : "Send Message →"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-alt office-visit-section">
            <div className="container">
                <div className="editorial-split editorial-split-reverse">
                    <div className="editorial-copy reveal-left">
                        <div className="eyebrow"><span className="eyebrow-dot"></span>Visit &amp; Collaborate</div>
                        <h2 className="section-title">A Conversation Can Start Your <span className="hl">Next Growth Chapter</span></h2>
                        <p>Meet our team in Jaipur or connect remotely. We work with startups, growing businesses and institutions across India and beyond.</p>
                        <div className="contact-highlights">
                            <span>Free initial consultation</span>
                            <span>Business &amp; technology experts</span>
                            <span>Response within 2 business hours</span>
                        </div>
                        <a className="btn btn-primary" href="mailto:rk@citiline.info">Email Our Team →</a>
                    </div>
                    <div className="editorial-image reveal-right">
                        <img src="/contact-office.png" alt="A client being welcomed at the Citiline office" />
                        <div className="image-note"><strong>Jaipur Headquarters</strong><span>Available Monday–Saturday</span></div>
                    </div>
                </div>
            </div>
        </section>
        
    
        </motion.div>
    );
}
