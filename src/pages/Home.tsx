import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Sections } from "../components/Sections";
import { SkillGroups } from "../components/SkillGroups";

export const Home = () => {
  const { t } = useTranslation("main");

  const experienceBullets = t("experience.bullets", {
    returnObjects: true,
  }) as string[];

  const frontendSkills = t("skills.frontend", {
    returnObjects: true,
  }) as string[];
  const backendSkills = t("skills.backend", {
    returnObjects: true,
  }) as string[];
  const toolsSkills = t("skills.tools", { returnObjects: true }) as string[];

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col w-full h-[90vh] justify-center items-center animate-slide-up mt-5 mx-auto px-6"
        >
          <h2 className="font-bold text-4xl">{t("hero.greeting")}</h2>
          <p className="text-lg text-zinc-400">{t("hero.role")}</p>
          <NavLink to="/contacts">
            <button className="border border-[#F8F9FA] px-6 py-3 rounded-3xl mt-3 cursor-pointer text-lg transition-colors hover:bg-white hover:text-black">
              {t("hero.cta")}
            </button>
          </NavLink>
        </motion.div>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          <Sections number="01" title={t("sections.summary")}>
            <p className="text-zinc-300 leading-relaxed max-w-2xl">
              <span className="text-white font-medium">
                {t("summary.highlight")}
              </span>{" "}
              {t("summary.text")}
            </p>
          </Sections>

          <Sections number="02" title={t("sections.experience")}>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-white font-medium">{t("experience.role")}</h3>
              <span className="text-xs text-zinc-500 font-mono bg-[#1a1a1d] px-2 py-1 rounded-full">
                {t("experience.dates")}
              </span>
            </div>
            <p className="text-sm text-zinc-500 mb-3">
              {t("experience.location")}
            </p>
            <ul className="space-y-1.5">
              {experienceBullets.map((bullet, i) => (
                <li key={i} className="text-zinc-300 text-sm flex gap-2">
                  <span className="text-zinc-600">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </Sections>

          <Sections number="03" title={t("sections.education")}>
            <h3 className="text-white font-medium">{t("education.school")}</h3>
            <p className="text-sm text-zinc-500 mt-1">
              {t("education.location")}
            </p>
          </Sections>

          <Sections number="04" title={t("sections.skills")}>
            <SkillGroups
              label={t("skills.frontend_label")}
              skills={frontendSkills}
            />
            <SkillGroups
              label={t("skills.backend_label")}
              skills={backendSkills}
            />
            <SkillGroups label={t("skills.tools_label")} skills={toolsSkills} />
          </Sections>
        </div>
      </div>
      <Footer />
    </>
  );
};
