import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-rose-primary text-white hover:bg-bordeaux shadow-soft",
  outline:
    "bg-white text-bordeaux border-2 border-rose-primary hover:bg-rose-pale",
  ghost:
    "bg-white/70 text-ink hover:bg-white shadow-softer",
};

/**
 * Botón base de la plantilla. Acepta `as="a"` para renderizar un link
 * (WhatsApp, Instagram, Maps, Reviews) manteniendo el mismo estilo visual.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display font-semibold text-[15px] sm:text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={19} strokeWidth={2.2} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={classes}
      {...props}
    >
      {content}
    </MotionTag>
  );
}
