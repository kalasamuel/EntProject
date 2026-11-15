import { createContext, useContext, useEffect, useMemo, useState } from "react";

const storageKey = "edtech-language";
const LanguageContext = createContext(null);

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(storageKey);
  return savedLanguage === "Luganda" ? "Luganda" : "English";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "Luganda" ? "lg" : "en";
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((current) =>
          current === "English" ? "Luganda" : "English",
        ),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}
