"use client";

import React from "react";
import { IntroProvider } from "../context/IntroContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <IntroProvider>{children}</IntroProvider>;
}
