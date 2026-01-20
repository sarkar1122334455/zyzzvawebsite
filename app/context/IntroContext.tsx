"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface IntroContextType {
    isNavbarVisible: boolean;
    setNavbarVisible: (visible: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: ReactNode }) {
    // Default to true so it shows on other pages if they don't explicitly hide it.
    const [isNavbarVisible, setNavbarVisible] = useState(true);

    // Memoize the context value to prevent unnecessary re-renders
    const value = useMemo(
        () => ({ isNavbarVisible, setNavbarVisible }),
        [isNavbarVisible]
    );

    return (
        <IntroContext.Provider value={value}>
            {children}
        </IntroContext.Provider>
    );
}

export function useIntro() {
    const context = useContext(IntroContext);
    if (context === undefined) {
        throw new Error("useIntro must be used within an IntroProvider");
    }
    return context;
}
