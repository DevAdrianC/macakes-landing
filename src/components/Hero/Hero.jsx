import { motion } from "framer-motion";
import { UtensilsCrossed, ChevronDown } from "lucide-react";
import company from "../../config/companyConfig";
import Button from "../shared/Button";

function scrollToReviews() {
  document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Presentación de Macakes">
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

      <motion.div
        className="flex flex-col items-center gap-4 px-6 pb-3 pt-5 text-center sm:pt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      >
        <Button
          href={company.menu.url}
          icon={UtensilsCrossed}
          className="px-9 py-4 text-base sm:text-lg"
        >
          {company.menu.label}
        </Button>

        <button
          type="button"
          onClick={scrollToReviews}
          aria-label="Ver más contenido: ir a la sección de reseñas"
          className="mt-1 animate-bounce rounded-full p-2 text-rose-primary/70 transition-colors hover:text-rose-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
        >
          <ChevronDown size={26} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  );
}
