import { motion } from "framer-motion";

/**
 * Tarjeta genérica usada por cada canal de contacto (WhatsApp, teléfono,
 * Instagram, ubicación). Mantiene look & feel consistente sin duplicar markup.
 */
export default function ContactCard({ icon: Icon, title, description, children }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 rounded-3xl bg-white px-6 py-8 text-center shadow-softer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-pale text-rose-primary">
        <Icon size={26} strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold text-bordeaux">
        {title}
      </h3>
      {description && (
        <p className="font-body text-sm text-ink/70">{description}</p>
      )}
      {children}
    </motion.div>
  );
}
