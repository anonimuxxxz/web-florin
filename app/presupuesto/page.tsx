import QuoteForm from "./QuoteForm";
export const metadata={title:"Solicitar presupuesto",description:"Cuéntanos tu proyecto y prepara una solicitud de presupuesto para Construcciones Florin."};
export default function Page(){return <><section className="page-hero"><div className="wrap"><div className="eyebrow">Empecemos</div><h1>Cuéntanos tu proyecto.</h1><p>Déjanos los detalles básicos y prepara tu consulta para enviarla por WhatsApp.</p></div></section><section className="section"><div className="wrap"><QuoteForm/></div></section></>}
