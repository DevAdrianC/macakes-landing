// companyConfig.js
// -----------------------------------------------------------------------------
// Única fuente de verdad de la landing. Ningún componente debe tener textos,
// colores ni URLs hardcodeadas: todo se lee desde este archivo.
//
// Para reutilizar esta plantilla con otro cliente, alcanza con reemplazar
// los valores de este archivo (y el logo en src/assets/logo.svg).
// No es necesario tocar ningún componente de React.
// -----------------------------------------------------------------------------

export const company = {
  name: "Macakes",
  slogan: "Endulzamos momentos especiales.",
  logo: "/src/assets/logo.svg",

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

  services: [
    { icon: "coffee", label: "Cafecito y Pastelería" },
    { icon: "cake-slice", label: "Mesas Dulces" },
    { icon: "party-popper", label: "Eventos" },
    { icon: "flask-conical", label: "Macakes Lab" },
    { icon: "chef-hat", label: "Talleres" },
  ],
};

export default company;
