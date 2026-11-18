import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translateTree, translateText } from "../i18n/translations.js";

const storageKey = "edtech-language";
const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "English";
  }

  try {
    const savedLanguage = window.localStorage.getItem(storageKey);
    return savedLanguage === "Luganda" ? "Luganda" : "English";
  } catch {
    return "English";
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    document.documentElement.lang = language === "Luganda" ? "lg" : "en";

    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // Ignore storage failures from privacy-restricted browsers.
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      t: language === "Luganda" ? translateText : (text) => text,
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

export function LocalizedContent({ children }) {
  const { language } = useLanguage();
  return <>{translateTree(children, language)}</>;
}
