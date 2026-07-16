import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import company from "../../config/companyConfig";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-14 text-center"
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

      <motion.img
        src={company.logo}
        alt={`Logo de ${company.name}`}
        className="relative z-10 h-32 w-auto sm:h-40"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <motion.h1
        className="relative z-10 mt-6 font-display text-5xl font-bold tracking-tight text-bordeaux sm:text-6xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        {company.hero.title}
      </motion.h1>

      <motion.p
        className="relative z-10 mt-3 max-w-sm font-body text-lg text-ink/80 sm:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
      >
        {company.hero.subtitle}
      </motion.p>

      <motion.div
        className="relative z-10 mt-9 flex w-full max-w-sm flex-col gap-3.5 sm:w-auto sm:flex-row"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <Button href={company.contact.whatsapp.url} icon={MessageCircle}>
          Escribinos por WhatsApp
        </Button>
        <Button href={company.reviews.url} variant="outline" icon={Star}>
          Dejar una reseña
        </Button>
      </motion.div>
    </section>
  );
}
