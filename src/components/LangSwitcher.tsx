import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLangs, type Lang } from "../i18n";

const flagCodes: Record<Lang, string> = {
  en: "gb",
  pl: "pl",
  ua: "ua",
};

const labels: Record<Lang, string> = {
  en: "English",
  pl: "Polski",
  ua: "Українська",
};

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language as Lang;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
      >
        <span className={`fi fi-${flagCodes[currentLang]} rounded-sm`} />
        <span className="text-xs text-zinc-500">▾</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#111113] border border-[#232328] rounded-xl overflow-hidden min-w-[140px] z-50">
          {supportedLangs.map((lang) => (
            <button
              key={lang}
              onClick={() => selectLang(lang)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${
                lang === currentLang
                  ? "bg-[#1a1a1d] text-white"
                  : "text-zinc-400 hover:bg-[#1a1a1d] hover:text-white"
              }`}
            >
              <span className={`fi fi-${flagCodes[lang]} rounded-sm`} />
              {labels[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
