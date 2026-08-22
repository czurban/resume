import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";
import { ProjectImage } from "../components/ProjectImage.tsx";

export const Projects = () => {
  const { t } = useTranslation("projects");

  const ecommerceBullets = t("ecommerce.bullets", {
    returnObjects: true,
  }) as string[];
  const hubBullets = t("hub.bullets", { returnObjects: true }) as string[];
  const thoughtsBullets = t("thoughts.bullets", {
    returnObjects: true,
  }) as string[];
  const vinBullets = t("vin.bullets", { returnObjects: true }) as string[];

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -120 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-3">{t("title")}</h1>
          <p className="text-sm text-zinc-400">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-20 flex flex-col items-center gap-1 text-zinc-500"
        >
          <span className="text-xs">{t("scrollDown")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20 border-b border-[#232328]"
          >
            <a
              href="https://online-shop-plum-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectImage />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {t("ecommerce.title")}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t("ecommerce.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {ecommerceBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-zinc-600">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "TypeScript", "React Router", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/online-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {t("github")}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20 border-b border-[#232328]"
          >
            <div className="md:order-2">
              <a
                href="https://todo-list-jd5o.vercel.app/notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectImage />
              </a>
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {t("hub.title")}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t("hub.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {hubBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-zinc-600">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "TypeScript", "REST API"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {t("github")}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20 border-b border-[#232328]"
          >
            <a
              href="https://true-thoughts-jwbs-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectImage />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {t("thoughts.title")}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t("thoughts.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {thoughtsBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-zinc-600">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "Node.js", "Express", "MongoDB", "Vercel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/true-thoughts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {t("github")}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="md:order-2">
              <a
                href="https://vin-decoder-sandy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectImage />
              </a>
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {t("vin.title")}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t("vin.description")}
              </p>
              <ul className="space-y-2 mb-6">
                {vinBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-zinc-600">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "REST API"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/VIN-DECODER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {t("github")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};
