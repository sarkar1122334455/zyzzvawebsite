"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./contacts.module.css";

export default function ContactsPage() {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [focusedField, setFocusedField] = useState("");
    const contactCardsRef = useRef<HTMLDivElement>(null);

    // Simulate Page Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Form Handler with Success Animation
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;

        // Add success animation
        button.classList.add(styles.success);
        button.textContent = "✓ Message Sent!";

        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            e.currentTarget.reset();
            setFormData({ name: "", email: "", phone: "", message: "" });
            button.classList.remove(styles.success);
            button.textContent = "Send Message";
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {/* LOADER */}
            {loading && (
                <div id="loader">
                    <img src="/logo.png" className="logo-img" alt="Logo" />
                    <div className="loading-text">
                        Loading<span className="dots"></span>
                    </div>
                </div>
            )}

            <div className={styles.pageWrapper}>


                <div className={styles.contactsContainer}>
                    <h1 className={styles.pageTitle}>Get In Touch</h1>
                    <p className={styles.pageSubtitle}>
                        We'd love to hear from you! Reach out and let's make magic together.
                    </p>

                    <div className={styles.contactsWrapper}>

                        {/* LEFT SIDE: CONTACT CARDS */}
                        <div className={styles.contactCards} ref={contactCardsRef}>
                            {/* Card 1: Email */}
                            <div className={`${styles.contactCard} ${styles.card1}`}>
                                <div className={styles.cardGlow}></div>
                                <div className={styles.cardIcon}>📧</div>
                                <h3>Email</h3>
                                <p>info@euphoniouszyzzva.com</p>
                                <a href="mailto:info@euphoniouszyzzva.com" className={styles.contactLink}>
                                    <span>Send Email</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Card 2: Phone */}
                            <div className={`${styles.contactCard} ${styles.card2}`}>
                                <div className={styles.cardGlow}></div>
                                <div className={styles.cardIcon}>📱</div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <a href="tel:+919876543210" className={styles.contactLink}>
                                    <span>Call Now</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Card 3: Location */}
                            <div className={`${styles.contactCard} ${styles.card3}`}>
                                <div className={styles.cardGlow}></div>
                                <div className={styles.cardIcon}>📍</div>
                                <h3>Location</h3>
                                <p>GNIT Kolkata<br />West Bengal, India</p>
                                <a href="#" className={styles.contactLink}>
                                    <span>View Map</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Card 4: Social */}
                            <div className={`${styles.contactCard} ${styles.card4}`}>
                                <div className={styles.cardGlow}></div>
                                <div className={styles.cardIcon}>💬</div>
                                <h3>Social Media</h3>
                                <p>Follow us for updates</p>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={`${styles.socialLink} ${styles.instagram}`}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        Instagram
                                    </a>
                                    <a href="#" className={`${styles.socialLink} ${styles.facebook}`}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                    </a>
                                    <a href="#" className={`${styles.socialLink} ${styles.twitter}`}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: CONTACT FORM */}
                        <div className={styles.contactFormWrapper}>
                            <div className={styles.formContainer}>
                                <h2>Send Us a Message</h2>
                                <form className={styles.contactForm} onSubmit={handleSubmit}>
                                    <div className={`${styles.formGroup} ${formData.name || focusedField === 'name' ? styles.focused : ''}`}>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField('')}
                                            required
                                        />
                                        <label htmlFor="name">Name</label>
                                        <div className={styles.inputGlow}></div>
                                    </div>

                                    <div className={`${styles.formGroup} ${formData.email || focusedField === 'email' ? styles.focused : ''}`}>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField('')}
                                            required
                                        />
                                        <label htmlFor="email">Email</label>
                                        <div className={styles.inputGlow}></div>
                                    </div>

                                    <div className={`${styles.formGroup} ${formData.phone || focusedField === 'phone' ? styles.focused : ''}`}>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField('')}
                                        />
                                        <label htmlFor="phone">Phone (Optional)</label>
                                        <div className={styles.inputGlow}></div>
                                    </div>

                                    <div className={`${styles.formGroup} ${formData.message || focusedField === 'message' ? styles.focused : ''}`}>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField('')}
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className={styles.charCount}>{formData.message.length} / 500</div>
                                        <div className={styles.inputGlow}></div>
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        <span>Send Message</span>
                                        <div className={styles.btnGlow}></div>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}