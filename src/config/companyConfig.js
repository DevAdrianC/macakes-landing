// companyConfig.js
// -----------------------------------------------------------------------------
// Única fuente de verdad de la landing. Ningún componente debe tener textos,
// colores ni URLs hardcodeadas: todo se lee desde este archivo.
//
// Para reutilizar esta plantilla con otro cliente, alcanza con reemplazar
// los valores de este archivo (y el logo en src/assets/logo.svg).
// No es necesario tocar ningún componente de React.
// -----------------------------------------------------------------------------

import logoUrl from "../assets/logo.svg";
import logoRoundUrl from "../assets/logo-round.svg";
import developerLogoUrl from "../assets/yaguaretech-isotipo.png";

export const company = {
  name: "Macakes",
  slogan: "Endulzamos momentos especiales.",
  logo: logoUrl,
  // Versión monocromática/sin fondo, pensada para usarse en formato
  // circular (footer, favicon de redes, etc.)
  logoRound: logoRoundUrl,

  seo: {
    title: "Macakes | Pastelería artesanal en Resistencia",
    description:
      "Pastelería artesanal, desayunos, meriendas, mesas dulces y eventos en Resistencia, Chaco. Escribinos por WhatsApp o visitá nuestro local.",
  },

  colors: {
    primary: "#E5365C", // Rosa principal — CTAs y acentos
    secondary: "#F4ADBE", // Rosa
    light: "#F4C6D8", // Rosa claro — fondo dominante
    accent: "#B72F51", // Bordó — textos y contraste
  },

  hero: {
    title: "Macakes",
    subtitle: "Endulzamos momentos especiales.",
  },

  // Copy asociado al evento puntual (Bienal Chaco / Pinky Experiencia).
  // Se aísla del resto del contenido para poder desactivarlo o reemplazarlo
  // fácilmente una vez finalizado el evento, sin tocar componentes.
  event: {
    active: true,
    name: "Pinky Experiencia",
    footerMessage: "Gracias por acompañarnos en la Pinky Experiencia 💗",
  },

  // Botón "Descubrí nuestro menú" del Hero — abre el PDF en una pestaña nueva.
  menu: {
    url: "/menu/macakes-menu.pdf",
    label: "Descubrí nuestro menú",
  },

  // Firma de desarrollo en el footer. Opacidad y tamaño se controlan desde
  // el componente (Footer.jsx), acá solo va el contenido.
  developer: {
    name: "Yaguaretech",
    logo: developerLogoUrl,
    credit: "Design & Development by",
  },

  reviews: {
    title: "¿Disfrutaste la experiencia?",
    text: "Tu opinión nos ayuda a seguir creciendo y permite que más personas conozcan Macakes.",
    ctaLabel: "Dejar una reseña",
    url: "https://search.google.com/local/writereview?placeid=ChIJwTmMEfQNRZQRSns-ld8vj3Y",
  },

  contact: {
    phone: {
      display: "362 487-0892",
      raw: "3624870892",
    },
    whatsapp: {
      url: "https://api.whatsapp.com/send/?phone=5493624870892&text=Hola!%20%F0%9F%92%98%20quiero%20hacer%20una%20pinky%20consulta%20%E2%9C%A8&app_absent=0",
      label: "Escribinos",
    },
    instagram: {
      url: "https://www.instagram.com/macakesrcia",
      handle: "@macakesrcia",
      label: "Seguinos en Instagram",
    },
    maps: {
      url: "https://www.google.com/maps/dir/?api=1&destination=Cangallo+609,+Resistencia,+Chaco",
      address: "Cangallo 609, Resistencia, Chaco",
      label: "Cómo llegar",
    },
  },

  // Contenido de ejemplo (placeholder) hasta contar con los textos
  // definitivos del cliente — reemplazar "description" y "reservation"
  // sin tocar componentes.
  services: [
    {
      icon: "coffee",
      label: "Cafecito y Pastelería",
      description:
        "Disfrutá de una experiencia dulce con café de especialidad y una selección de productos artesanales.",
      reservation: "No requiere reserva.",
    },
    {
      icon: "cake-slice",
      label: "Mesas Dulces",
      description:
        "Diseñamos mesas personalizadas para cumpleaños, casamientos y eventos especiales.",
      reservation: "15 días de anticipación.",
    },
    {
      icon: "party-popper",
      label: "Eventos",
      description:
        "Servicio integral de pastelería para celebraciones sociales y corporativas.",
      reservation: "20 días de anticipación.",
    },
    {
      icon: "flask-conical",
      label: "Macakes Lab",
      description:
        "Espacio creativo donde nacen nuevas recetas, experiencias y productos exclusivos.",
      reservation: "Consultar disponibilidad.",
    },
    {
      icon: "chef-hat",
      label: "Talleres",
      description:
        "Cursos y experiencias para aprender el mundo de la pastelería artesanal.",
      reservation: "Según calendario.",
    },
  ],
};

export default company;
