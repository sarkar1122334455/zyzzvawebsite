"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function GlobalBackground() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    if (isHome) {
        return null;
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                pointerEvents: "none",
            }}
        >
            <Image
                src="/glimps.jpeg"
                alt="Background"
                fill
                quality={100}
                priority
                style={{ objectFit: "cover", opacity: 1, filter: "blur(7px)" }}
            />
            {/* Overlay to ensure text readability if needed */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)"
                }}
            />
        </div>
    );
}
