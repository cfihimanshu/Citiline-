"use client";

import { FormEvent, useEffect, useState } from "react";
import { CheckCircle, Sparkles, X } from "lucide-react";

const STORAGE_KEY = "citiline_lead_popup_submitted";
const FIRST_DELAY = 12000;
const REOPEN_DELAY = 15000;

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [error, setError] = useState("");

    useEffect(() => {
        if (window.localStorage.getItem(STORAGE_KEY) === "true") return;
        const timer = window.setTimeout(() => setIsOpen(true), FIRST_DELAY);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    function closePopup() {
        setIsOpen(false);
        if (window.localStorage.getItem(STORAGE_KEY) === "true") return;
        window.setTimeout(() => setIsOpen(true), REOPEN_DELAY);
    }

    async function submitLead(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setError("");
        const form = event.currentTarget;
        const fields = Object.fromEntries(new FormData(form).entries());
        const params = new URLSearchParams(window.location.search);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...fields,
                    lastName: fields.lastName || "Not provided",
                    message: fields.message || "Callback requested through website popup.",
                    leadSource: "Citiline Website Popup",
                    sourcePage: window.location.pathname,
                    referrer: document.referrer,
                    utmSource: params.get("utm_source") || "",
                    utmMedium: params.get("utm_medium") || "",
                    utmCampaign: params.get("utm_campaign") || "",
                }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Unable to submit details.");

            window.localStorage.setItem(STORAGE_KEY, "true");
            form.reset();
            setStatus("success");
            window.setTimeout(() => setIsOpen(false), 2200);
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Unable to submit details.");
            setStatus("error");
        }
    }

    if (!isOpen) return null;

    return (
        <div className="lead-popup-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closePopup()}>
            <div className="lead-popup" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
                <button type="button" className="lead-popup-close" onClick={closePopup} aria-label="Close enquiry form"><X size={20} /></button>
                <div className="lead-popup-intro">
                    <span className="lead-popup-icon"><Sparkles size={22} /></span>
                    <p>Let&apos;s build something meaningful</p>
                    <h2 id="lead-popup-title">Grow your business with the right experts.</h2>
                    <span>Share your details and our team will connect with you for a free initial consultation.</span>
                </div>
                {status === "success" ? (
                    <div className="lead-popup-success"><CheckCircle size={42} /><h3>Thank you!</h3><p>Your details have been received. Our team will contact you shortly.</p></div>
                ) : (
                    <form className="lead-popup-form" onSubmit={submitLead}>
                        <div className="lead-popup-row">
                            <label>Full Name *<input name="firstName" type="text" placeholder="Your name" required maxLength={80} /></label>
                            <label>Phone Number *<input name="phone" type="tel" placeholder="+91 98765 43210" required maxLength={30} /></label>
                        </div>
                        <label>Email Address *<input name="email" type="email" placeholder="you@company.com" required maxLength={160} /></label>
                        <label>Interested In
                            <select name="service" defaultValue="">
                                <option value="">Select a service</option>
                                <option>Software Development</option><option>Cloud Infrastructure</option>
                                <option>IT Consulting</option><option>Business Consultancy</option>
                                <option>Startup Support</option><option>Debt Recovery &amp; Resolution</option><option>Other</option>
                            </select>
                        </label>
                        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                        {status === "error" && <p className="lead-popup-error" role="alert">{error}</p>}
                        <button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Submitting…" : "Request a Free Callback →"}</button>
                        <small>We respect your privacy. No spam, ever.</small>
                    </form>
                )}
            </div>
        </div>
    );
}
