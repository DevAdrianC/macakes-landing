import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Copy, Check, Camera, MapPin } from "lucide-react";
import company from "../../config/companyConfig";
import Button from "../shared/Button";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(company.contact.phone.raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Si el navegador bloquea el clipboard, no rompemos la UI.
      setCopied(false);
    }
  };

  return (
    <section
      className="px-6 py-20 sm:py-24"
      aria-labelledby="contact-title"
    >
      <motion.h2
        id="contact-title"
        className="mx-auto mb-12 max-w-md text-center font-display text-3xl font-bold text-bordeaux sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Hablemos
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        <ContactCard
          icon={MessageCircle}
          title="WhatsApp"
          description="Consultas, pedidos y presupuestos."
        >
          <Button href={company.contact.whatsapp.url} icon={MessageCircle} className="mt-1">
            {company.contact.whatsapp.label}
          </Button>
        </ContactCard>

        <ContactCard icon={Phone} title="Teléfono" description={company.contact.phone.display}>
          <button
            onClick={handleCopyPhone}
            className="mt-1 inline-flex items-center gap-2 rounded-full border-2 border-rose-primary bg-white px-6 py-3.5 font-display text-[15px] font-semibold text-bordeaux transition-colors hover:bg-rose-pale"
          >
            {copied ? (
              <>
                <Check size={18} /> ¡Número copiado!
              </>
            ) : (
              <>
                <Copy size={18} /> Copiar número
              </>
            )}
          </button>
        </ContactCard>

        <ContactCard
          icon={Camera}
          title="Instagram"
          description={company.contact.instagram.handle}
        >
          <Button href={company.contact.instagram.url} icon={Camera} className="mt-1">
            {company.contact.instagram.label}
          </Button>
        </ContactCard>

        <ContactCard
          icon={MapPin}
          title="Ubicación"
          description={company.contact.maps.address}
        >
          <Button href={company.contact.maps.url} icon={MapPin} className="mt-1">
            {company.contact.maps.label}
          </Button>
        </ContactCard>
      </div>
    </section>
  );
}
