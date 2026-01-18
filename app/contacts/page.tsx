"use client";

import React, { useState, useEffect } from "react";
import styles from "./contacts.module.css";
// import Navbar from "@/components/Navbar"; 

export default function ContactsPage() {
    const [loading, setLoading] = useState(true);

    // Simulate Page Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Form Handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        // You can add your API call here later
        e.currentTarget.reset();
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

            {/* NAVBAR */}
            {/* <Navbar /> */}

            <div className={styles.pageWrapper}>
                <div className={styles.contactsContainer}>
                    <h1 className={styles.pageTitle}>Get In Touch</h1>
                    <p className={styles.pageSubtitle}>
                        We'd love to hear from you! Reach out and let's make magic together.
                    </p>

                    <div className={styles.contactsWrapper}>

                        {/* LEFT SIDE: CONTACT CARDS */}
                        <div className={styles.contactCards}>
                            {/* Card 1: Email */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>📧</div>
                                <h3>Email</h3>
                                <p>info@euphoniouszyzzva.com</p>
                                <a href="mailto:info@euphoniouszyzzva.com" className={styles.contactLink}>
                                    Send Email
                                </a>
                            </div>

                            {/* Card 2: Phone */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>📱</div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <a href="tel:+919876543210" className={styles.contactLink}>
                                    Call Now
                                </a>
                            </div>

                            {/* Card 3: Location */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>📍</div>
                                <h3>Location</h3>
                                <p>GNIT Kolkata<br />West Bengal, India</p>
                                <a href="#" className={styles.contactLink}>
                                    View Map
                                </a>
                            </div>

                            {/* Card 4: Social */}
                            <div className={styles.contactCard}>
                                <div className={styles.cardIcon}>💬</div>
                                <h3>Social Media</h3>
                                <p>Follow us for updates</p>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={styles.socialLink}>Instagram</a>
                                    <a href="#" className={styles.socialLink}>Facebook</a>
                                    <a href="#" className={styles.socialLink}>Twitter</a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: CONTACT FORM */}
                        <div className={styles.contactFormWrapper}>
                            <div className={styles.formContainer}>
                                <h2>Send Us a Message</h2>
                                <form className={styles.contactForm} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className={styles.submitBtn}>
                                        Send Message
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