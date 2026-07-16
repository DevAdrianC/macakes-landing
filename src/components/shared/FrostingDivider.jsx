/**
 * FrostingDivider
 * Elemento de firma visual de la landing: una curva festoneada que evoca
 * el glaseado de una torta siendo aplicado con manga pastelera. Reemplaza
 * los divisores rectos genéricos entre secciones y refuerza la identidad
 * de pastelería artesanal de la marca.
 */
export default function FrostingDivider({ flip = false, color = "var(--color-cream)" }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] sm:h-[60px]"
      >
        <path
          d="M0,20 
             C 50,45 100,0 150,20 
             C 200,40 250,0 300,20 
             C 350,40 400,0 450,20 
             C 500,40 550,0 600,20 
             C 650,40 700,0 750,20 
             C 800,40 850,0 900,20 
             C 950,40 1000,0 1050,20 
             C 1100,40 1150,0 1200,20 
             L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
