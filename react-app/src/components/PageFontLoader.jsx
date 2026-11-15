import { useEffect } from "react";

export default function PageFontLoader({ includeCaveat }) {
  const fontHref = includeCaveat
    ? "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Caveat:wght@700&display=swap"
    : "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";

  useEffect(() => {
    const existing = document.getElementById("edtech-google-fonts");

    if (existing && existing.getAttribute("href") !== fontHref) {
      existing.setAttribute("href", fontHref);
    }

    if (!existing) {
      const link = document.createElement("link");
      link.id = "edtech-google-fonts";
      link.rel = "stylesheet";
      link.href = fontHref;
      document.head.append(link);
    }
  }, [fontHref]);

  return null;
}
