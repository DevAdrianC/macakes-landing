import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  CakeSlice,
  PartyPopper,
  FlaskConical,
  ChefHat,
  Truck,
  RotateCcw,
} from "lucide-react";
import company from "../../config/companyConfig";

const iconMap = {
  coffee: Coffee,
  "cake-slice": CakeSlice,
  "party-popper": PartyPopper,
  "flask-conical": FlaskConical,
  "chef-hat": ChefHat,
  truck: Truck,
};

export default function ServicesSection() {
  // Desktop (con mouse): la tarjeta se da vuelta con hover/focus, vía CSS.
  // Mobile / táctil: no existe hover, se da vuelta con tap, vía estado.
  const [supportsHover, setSupportsHover] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setSupportsHover(mq.matches);
    const handler = (e) => setSupportsHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleFlip = (i) => {
    // En desktop el volteo lo maneja el CSS (:hover/:focus-visible), acá
    // solo controlamos el tap en dispositivos táctiles.
    if (supportsHover) return;
    setFlippedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      className="bg-cream px-6 py-20 sm:py-24"
      aria-labelledby="services-title"
    >
      <motion.h2
        id="services-title"
        className="mx-auto mb-12 max-w-md text-center font-display text-3xl font-bold text-bordeaux sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Nuestros servicios
      </motion.h2>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {company.services.map((service, i) => {
          const Icon = iconMap[service.icon];
          const isFlipped = supportsHover ? false : flippedIndex === i;

          return (
            <motion.div
              key={service.label}
              className="[perspective:1200px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${service.label}. ${service.description} Reserva sugerida: ${service.reservation}`}
                onClick={() => toggleFlip(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFlip(i);
                  }
                }}
                className="group relative h-60 w-full cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2 sm:h-64"
              >
                <div
                  className={`relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
                    supportsHover
                      ? "group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]"
                      : isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : ""
                  }`}
                >
                  {/* Cara frontal */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl bg-rose-pale/60 px-4 py-6 text-center [backface-visibility:hidden]">
                    {service.badge && (
                      <span className="absolute top-3 rounded-full bg-rose-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-softer">
                        {service.badge}
                      </span>
                    )}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-primary shadow-softer">
                      {Icon && (
                        <Icon size={26} strokeWidth={2} aria-hidden="true" />
                      )}
                    </div>
                    <p className="font-display text-sm font-semibold text-bordeaux sm:text-base">
                      {service.label}
                    </p>
                    <span className="flex items-center gap-1 text-[11px] text-bordeaux/50">
                      <RotateCcw size={12} aria-hidden="true" />
                      {supportsHover ? "Pasá el mouse" : "Tocá para ver más"}
                    </span>
                  </div>

                  {/* Cara posterior */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-bordeaux px-4 py-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {service.badge && (
                      <span className="absolute top-3 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-bordeaux shadow-softer">
                        {service.badge}
                      </span>
                    )}
                    <p className="font-display text-sm font-semibold text-white sm:text-base">
                      {service.label}
                    </p>
                    <p className="text-xs leading-snug text-white/85 sm:text-sm">
                      {service.description}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-rose-light">
                      Reserva sugerida
                    </p>
                    <p className="text-xs text-white/90 sm:text-sm">
                      {service.reservation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
