import { createContext, useState, useContext, useEffect } from 'react';

// 1. Création du canal de communication
export const ThemeContext = createContext(null);

// 2. Création du Provider
export function ThemeProvider({ children }) {

  // Initialisation du thème depuis localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'light';
  });

  // Sauvegarder le thème à chaque modification
  useEffect(() => {
    localStorage.setItem('app_theme', theme);
  }, [theme]);

  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : 'light'
    );
  };

  // Fournir les données aux composants enfants
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Hook personnalisé pour consommer le contexte
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme doit être utilisé à l’intérieur de ThemeProvider'
    );
  }

  return context;
}
