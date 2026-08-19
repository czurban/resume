import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { ProjectImage } from "../components/ProjectImage.tsx";

export const Projects = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -120 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-3">Projects</h1>
          <p className="text-sm text-zinc-400">A few things I've built</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-100 flex flex-col items-center gap-1 text-zinc-500"
        >
          <span className="text-xs">Scroll down</span>
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
                E-commerce Store
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Full-featured online shop with product catalog, categories,
                search, shopping cart, and user authentication.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Dynamic routing by category and product, with persistent cart
                  and accounts via localStorage
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Custom image carousel and horizontal promotions scroller built
                  from scratch
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Product data fetched from an external API with loading and
                  error states
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  React
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  TypeScript
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  React Router
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/online-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
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
                Productivity Hub
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                All-in-one app combining notes, an alarm system with sound and
                notifications, a task tracker, and an AI-powered tarot reader.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Real-time alarm checker triggering audio playback and browser
                  Notifications
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Integrated an LLM API (OpenRouter) for mystical, context-aware
                  interpretations
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  State persisted to localStorage across three independent
                  feature modules
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  React
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  TypeScript
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  REST API
                </span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
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
                True Thoughts
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Full-stack MERN app for anonymously publishing short thoughts,
                with a decoupled frontend and backend.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Designed a REST API (Node.js/Express) integrated with MongoDB
                  Atlas
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Deployed on Vercel using Serverless Functions
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Card-based storage view with formatted timestamps and delete
                  functionality
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  React
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  Node.js
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  Express
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  MongoDB
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  Vercel
                </span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/true-thoughts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
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
                VIN Decoder
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Utility app for decoding Vehicle Identification Numbers using
                the official NHTSA API.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Client-side VIN validation with regex before hitting the API
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Search history saved to localStorage with quick-access buttons
                </li>
                <li className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-zinc-600">—</span>
                  Separate page listing all decodable vehicle variables
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  React
                </span>
                <span className="text-xs text-zinc-400 border border-[#232328] rounded-full px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors">
                  REST API
                </span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/czurban/VIN-DECODER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
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
