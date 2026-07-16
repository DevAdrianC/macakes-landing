import { motion } from "framer-motion";
import { Coffee, CakeSlice, PartyPopper, FlaskConical, ChefHat } from "lucide-react";
import company from "../../config/companyConfig";

const iconMap = {
  coffee: Coffee,
  "cake-slice": CakeSlice,
  "party-popper": PartyPopper,
  "flask-conical": FlaskConical,
  "chef-hat": ChefHat,
};

export default function ServicesSection() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-24" aria-labelledby="services-title">
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
          return (
            <motion.div
              key={service.label}
              className="flex flex-col items-center gap-3 rounded-3xl bg-rose-pale/60 px-4 py-8 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-primary shadow-softer">
                {Icon && <Icon size={26} strokeWidth={2} aria-hidden="true" />}
              </div>
              <p className="font-display text-sm font-semibold text-bordeaux sm:text-base">
                {service.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
