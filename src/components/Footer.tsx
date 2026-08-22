import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("main");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#232328] mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">© {year} Oleksii Khudolei</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/czurban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oleksii-khudolei-9215313ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alexe213131@gmail.com"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-zinc-600 font-mono">
          {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
};
