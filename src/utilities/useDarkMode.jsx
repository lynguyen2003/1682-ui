import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return { theme, toggleDarkMode };
};

export default useDarkMode;
