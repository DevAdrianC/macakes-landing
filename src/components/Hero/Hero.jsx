import { motion } from "framer-motion";
import company from "../../config/companyConfig";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Presentación de Macakes"
    >
      {/* El logo ya incluye el nombre de la marca y una bajada propia
          ("Descubrí nuestro pinky universo!"), por eso no se agrega un
          título ni subtítulo visual aparte: la imagen se muestra a pantalla
          completa (full-bleed) como banner de apertura. Se mantiene texto
          accesible oculto para SEO y lectores de pantalla. */}
      <h1 className="sr-only">{company.name}</h1>
      <p className="sr-only">{company.hero.subtitle}</p>

      <motion.img
        src={company.logo}
        alt={`${company.name} — ${company.hero.subtitle}`}
        className="mx-auto block w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </section>
  );
}
