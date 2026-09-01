import { createContext, useEffect, useState, useContext } from "react";


const ThemeContext = createContext(null);

export function ThemeProvide ({children}){
    const [theme, setTheme]  = useState(()=>{
        const saveTheme = localStorage.getItem("theme");
        
        return saveTheme || "light";
    });

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme === "dark");
        localStorage.setItem("theme",theme);
    },[theme]);

    const toggleTheme = ()=>{
        setTheme((currentTheme)=> currentTheme === "light"? "dark":"light");
    }

    const value = {theme, setTheme, toggleTheme};

    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>

}

export function useTheme(){
    const contextTheme = useContext(ThemeContext);
    if(!contextTheme){
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return contextTheme;
}