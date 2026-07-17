import { motion } from "framer-motion";
import company from "../../config/companyConfig";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-14 pt-16 text-center sm:pt-20"
      aria-label="Presentación de Macakes"
    >
      {/* Blobs decorativos ambientales, muy sutiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-rose-light/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-rose-primary/20 blur-3xl"
      />

      {/* El logo ya incluye el nombre "Macakes": se omite un título visual
          duplicado. Se mantiene un h1 accesible (oculto visualmente) para
          SEO y lectores de pantalla. */}
      <h1 className="sr-only">{company.name}</h1>

      <motion.img
        src={company.logo}
        alt={`${company.name} — ${company.hero.subtitle}`}
        className="relative z-10 h-56 w-auto max-w-[88%] sm:h-72 md:h-80"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <motion.p
        className="relative z-10 mt-2 max-w-sm font-body text-lg text-ink/80 sm:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        {company.hero.subtitle}
      </motion.p>
    </section>
  );
}
