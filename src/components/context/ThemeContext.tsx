import { createContext, useContext } from 'react';

interface ThemeContextProps {
  setTheme: (theme: 'light' | 'dark') => void;
  setAccentColor: (color: string) => void;
  setBotMessageColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const setTheme = (theme: 'light' | 'dark') => {
    document.documentElement.style.setProperty('--bg-color', theme === 'light' ? '#fff' : '#000');
    document.documentElement.style.setProperty('--text-color', theme === 'light' ? '#000' : '#fff');
  };

  const setAccentColor = (color: string) => {
    document.documentElement.style.setProperty('--accent-color', color);
  };

  const setBotMessageColor = (color: string) => {
    document.documentElement.style.setProperty('--bot-message-bg', color);
  };

  return (
    <ThemeContext.Provider value={{ setTheme, setAccentColor, setBotMessageColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);