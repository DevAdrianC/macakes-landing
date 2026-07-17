import { Camera, MessageCircle, MapPin } from "lucide-react";
import company from "../../config/companyConfig";

export default function Footer() {
  return (
    <footer className="bg-bordeaux px-6 py-14 text-center text-white">
      <img
        src={company.logo}
        alt={`Logo de ${company.name}`}
        className="mx-auto h-14 w-auto rounded-2xl bg-white/95 px-5 py-3 shadow-softer"
      />

      <nav
        className="mt-6 flex items-center justify-center gap-6"
        aria-label="Redes y contacto"
      >
        <a
          href={company.contact.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition-colors hover:bg-white/10"
          aria-label={company.contact.instagram.label}
        >
          <Camera size={22} />
        </a>
        <a
          href={company.contact.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition-colors hover:bg-white/10"
          aria-label={company.contact.whatsapp.label}
        >
          <MessageCircle size={22} />
        </a>
        <a
          href={company.contact.maps.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition-colors hover:bg-white/10"
          aria-label={company.contact.maps.label}
        >
          <MapPin size={22} />
        </a>
      </nav>

      {company.event.active && (
        <p className="mx-auto mt-7 max-w-xs font-body text-sm text-white/85">
          {company.event.footerMessage}
        </p>
      )}

      <p className="mt-6 font-body text-xs text-white/50">
        © {new Date().getFullYear()} {company.name}
      </p>
    </footer>
  );
}
