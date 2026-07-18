import { motion } from "framer-motion";
import { Star } from "lucide-react";
import company from "../../config/companyConfig";
import Button from "../shared/Button";

export default function ReviewSection() {
  return (
    <section
      id="reviews"
      className="relative bg-cream px-6 pb-8 pt-0 sm:pb-10"
      aria-labelledby="reviews-title"
    >
      <motion.div
        className="relative z-10 mx-auto -mt-4 flex max-w-xl flex-col items-center gap-4 rounded-[2rem] bg-rose-pale/60 px-8 py-9 text-center shadow-softer sm:-mt-5 sm:px-14 sm:py-11"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <div
          className="flex items-center gap-1 text-rose-primary"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        <h2
          id="reviews-title"
          className="font-display text-3xl font-bold text-bordeaux sm:text-4xl"
        >
          {company.reviews.title}
        </h2>

        <p className="max-w-md font-body text-base text-ink/75 sm:text-lg">
          {company.reviews.text}
        </p>

        <Button href={company.reviews.url} icon={Star} className="mt-2">
          {company.reviews.ctaLabel}
        </Button>
      </motion.div>
    </section>
  );
}
