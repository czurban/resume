import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Footer } from "../components/Footer";

export const Contacts = () => {
  const { t } = useTranslation("contacts");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setStatus("idle");

    const templateParams = { name, email, message };

    try {
      await emailjs.send(
        "service_45uj7cp",
        "template_xph0mbr",
        templateParams,
        "22chEVx-_ZIUcbmfv",
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
              {t("badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-zinc-400 max-w-md leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="mailto:alexe213131@gmail.com"
              className="group border border-[#232328] rounded-2xl p-5 flex flex-col gap-3 hover:border-zinc-500 transition-colors"
            >
              <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-white font-medium">
                  {t("cards.email.label")}
                </p>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {t("cards.email.subtitle")}
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="https://t.me/czurban"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#232328] rounded-2xl p-5 flex flex-col gap-3 hover:border-zinc-500 transition-colors"
            >
              <Send className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-white font-medium">
                  {t("cards.telegram.label")}
                </p>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {t("cards.telegram.subtitle")}
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="https://www.linkedin.com/in/oleksii-khudolei-9215313ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#232328] rounded-2xl p-5 flex flex-col gap-3 hover:border-zinc-500 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-white font-medium">
                  {t("cards.linkedin.label")}
                </p>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {t("cards.linkedin.subtitle")}
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="https://github.com/czurban"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#232328] rounded-2xl p-5 flex flex-col gap-3 hover:border-zinc-500 transition-colors"
            >
              <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm text-white font-medium">
                  {t("cards.github.label")}
                </p>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {t("cards.github.subtitle")}
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="border border-[#232328] rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#232328] bg-[#111113]">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="text-xs text-zinc-600 font-mono ml-2">
              {t("form.filename")}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            <div>
              <label className="text-xs text-zinc-500 font-mono block mb-2">
                {`> ${t("form.name")}`}
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Oleksii"
                className="w-full bg-transparent border-b border-[#232328] pb-2 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500 font-mono block mb-2">
                {`> ${t("form.email")}`}
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-transparent border-b border-[#232328] pb-2 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500 font-mono block mb-2">
                {`> ${t("form.message")}`}
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("form.messagePlaceholder")}
                rows={4}
                className="w-full bg-transparent border-b border-[#232328] pb-2 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                disabled={isSending}
                type="submit"
                className="border border-[#F8F9FA] px-6 py-3 rounded-3xl cursor-pointer transition-colors hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? t("form.sending") : t("form.send")}
              </button>

              {status === "success" && (
                <span className="text-xs font-mono text-green-400">
                  ✓ {t("form.success")}
                </span>
              )}
              {status === "error" && (
                <span className="text-xs font-mono text-red-400">
                  ✗ {t("form.error")}
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};
