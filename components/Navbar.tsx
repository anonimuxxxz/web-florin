"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Inicio","/"],["Servicios","/servicios"],["Catálogo","/catalogo"],["Proyectos","/proyectos"],["Contacto","/contacto"]];
  return <header className="nav"><div className="wrap nav-inner">
    <Link href="/" className="brand">CONSTRUCCIONES <b>FLORIN</b></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? "✕" : "☰"}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="btn btn-gold nav-cta" href="/presupuesto">Pedir presupuesto</Link></nav>
  </div></header>;
}
