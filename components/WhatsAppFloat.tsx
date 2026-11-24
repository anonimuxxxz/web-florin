import { site } from "@/lib/site";
export default function WhatsAppFloat(){return <a className="whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, me gustaría información sobre un proyecto.")}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">WhatsApp ↗</a>}
