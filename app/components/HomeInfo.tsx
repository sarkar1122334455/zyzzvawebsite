"use client";

import React, { useState, useEffect } from "react";
import styles from './HomeInfo.module.css';

const HomeInfo = () => {
    // Target Date: March 12, 2026
    const targetDate = "2026-03-12T00:00:00";

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Format Number to 2 digits
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <section className={styles.section}>
            <div className={styles.bgSpray1}></div>
            <div className={styles.bgSpray2}></div>

            <div className={styles.container}>
                <h2 className={styles.heading}>Ignition In</h2>
                <h3 className={styles.subHeading}>The Countdown Begins</h3>

                <div className={styles.timerWrapper}>
                    <div className={styles.timeBlock}>
                        <span className={styles.timeValue}>{timeLeft.days}</span>
                        <span className={styles.timeLabel}>Days</span>
                    </div>
                    <div className={styles.timeBlock}>
                        <span className={styles.timeValue}>{formatTime(timeLeft.hours)}</span>
                        <span className={styles.timeLabel}>Hrs</span>
                    </div>
                    <div className={styles.timeBlock}>
                        <span className={styles.timeValue}>{formatTime(timeLeft.minutes)}</span>
                        <span className={styles.timeLabel}>Mins</span>
                    </div>
                    <div className={styles.timeBlock}>
                        <span className={styles.timeValue}>{formatTime(timeLeft.seconds)}</span>
                        <span className={styles.timeLabel}>Secs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;
