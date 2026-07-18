import { Camera, MessageCircle, MapPin } from "lucide-react";
import company from "../../config/companyConfig";

export default function Footer() {
  return (
    <footer className="bg-bordeaux px-6 py-14 text-center text-white">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-softer sm:h-28 sm:w-28">
        <img
          src={company.logoRound}
          alt={`Logo de ${company.name}`}
          className="h-full w-full object-contain"
        />
      </div>

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

      <div className="mt-5 flex items-center justify-center gap-2 opacity-60">
        <img
          src={company.developer.logo}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain sm:h-7 sm:w-7"
        />
        <p className="font-body text-[11px] text-white/70 sm:text-xs">
          {company.developer.credit}{" "}
          <span className="font-medium">{company.developer.name}</span>
        </p>
      </div>
    </footer>
  );
}
