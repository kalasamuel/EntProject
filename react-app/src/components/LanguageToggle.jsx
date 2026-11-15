import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const targetLanguage = language === "English" ? "Luganda" : "English";
  const accessibleTarget =
    language === "English" ? "Luganda" : "Lungereza";

  return (
    <button
      className="language-toggle"
      type="button"
      data-language-toggle
      aria-label={
        language === "English"
          ? `Switch language to ${targetLanguage}`
          : `Kyusa olulimi okudda ku ${accessibleTarget}`
      }
      aria-pressed={language === "Luganda"}
      onClick={toggleLanguage}
    >
      <i className="fas fa-language" aria-hidden="true" />
      <span data-language-label>{targetLanguage}</span>
    </button>
  );
}
