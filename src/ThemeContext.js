import {useState, createContext} from 'react';
export const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');
    const handleToggle = ()=>{
        setTheme((theme==='dark' ? 'light' : 'dark'))
    }

    const value = {
        theme,
        handleToggle
    }
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;