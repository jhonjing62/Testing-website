
import { createContext, useContext, useEffect, useState } from "react";

// Create Theme Context
const ThemeContext = createContext(null);

// Theme Provider
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Get saved theme from localStorage
        const savedTheme = localStorage.getItem("theme");

        // Use saved theme, otherwise default to light
        return savedTheme || "light";
    });

    // Update HTML when theme changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        // Save theme
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between light and dark
    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    const value = {
        theme,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom Hook
export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}

