import { useState } from 'react'

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Habilidades', href: '#habilidades' },
]

const PERFIL = [
  {
    titulo: 'Estudios',
    texto: 'Bachiller. Cursando quinto semestre de Ingeniería Informática.',
  },
  {
    titulo: 'Lenguajes',
    texto: 'Python y SQL (MySQL), con bases en programación y bases de datos.',
  },
  {
    titulo: 'Intereses',
    texto: 'Análisis de datos, automatización con Python y soluciones tecnológicas.',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#inicio" className="text-sm font-extrabold tracking-tight">
          AC<span className="text-stone">.</span>
        </a>
        <nav className="hidden gap-10 text-sm md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-stone">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-stone md:block"
        >
          Contacto
        </a>
        <button
          className="text-sm font-medium md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 bg-ink px-6 py-6 text-paper md:hidden" aria-label="Móvil">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      )}
    </header>
  )
}

/* Sustituye este bloque por tu foto: <img src="/foto.png" ... /> (fondo transparente queda mejor) */
function Retrato() {
  return (
    <div
      className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-ash to-stone"
      role="img"
      aria-label="Espacio reservado para la foto de Andrey"
    >
      <span className="mb-6 text-8xl font-extrabold tracking-tighter text-paper/80">AC</span>
    </div>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="hero-rise max-w-xs text-sm leading-7 tracking-[0.3em] text-ink/80">
          Ingeniería Informática,
          <br />
          datos y automatización.
        </p>

        <div className="relative mt-10">
          <h1
            className="hero-rise select-none text-[clamp(5rem,21vw,19rem)] font-extrabold leading-[0.85] tracking-tighter"
            style={{ animationDelay: '0.1s' }}
          >
            ANDREY
          </h1>
          <div
            className="hero-rise absolute right-[8%] top-[-18%] hidden h-[135%] w-[24%] overflow-hidden md:block"
            style={{ animationDelay: '0.25s' }}
          >
            <Retrato />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#proyecto" className="bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-stone">
              Ver proyecto
            </a>
            <a href="#sobre-mi" className="border-b border-ink pb-1 text-sm font-medium">
              Conocer más
            </a>
          </div>
          <p className="text-sm leading-7 tracking-[0.25em] text-ink/80">
            Andrey Jhovany
            <br />
            Calle Corrales
          </p>
        </div>
      </div>
    </section>
  )
}

function Perfil() {
  return (
    <section id="sobre-mi" className="bg-ink px-6 py-16 text-paper md:px-10 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_2fr] md:gap-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Sobre mí</h2>
          <p className="mt-6 max-w-sm leading-7 text-ash">
            Tengo 22 años y vivo en Medellín, Antioquia. Estoy construyendo mi
            base como ingeniero informático y me gusta convertir datos en
            decisiones.
          </p>
        </div>
        <dl className="grid gap-10 sm:grid-cols-3">
          {PERFIL.map((p) => (
            <div key={p.titulo} className="border-t border-stone pt-5">
              <dt className="text-lg font-bold">{p.titulo}</dt>
              <dd className="mt-3 text-sm leading-6 text-ash">{p.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Proyecto() {
  return (
    <section id="proyecto" className="bg-ash px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-sm tracking-[0.3em]">Proyecto universitario</p>
          <h2 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
            Sistema de
            <br />
            Transporte
            <br />
            Inteligente
          </h2>
          <p className="mt-8 max-w-md leading-7 text-ink/80">
            Proyecto del programa de Ingeniería Informática enfocado en mejorar
            la seguridad vial. Trabajé en el análisis y la simulación del
            tráfico para entender cómo se comporta y dónde se puede intervenir.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm">
            {['Análisis de tráfico', 'Simulación', 'Seguridad vial'].map((t) => (
              <li key={t} className="border border-ink px-4 py-2">{t}</li>
            ))}
          </ul>
        </div>

        {/* Ilustración abstracta de vías y vehículos */}
        <div className="relative aspect-[4/3] overflow-hidden bg-ink" aria-hidden="true">
          <svg viewBox="0 0 400 300" className="h-full w-full">
            <g stroke="#6b6b6b" strokeWidth="1" strokeDasharray="6 6">
              <line x1="0" y1="150" x2="400" y2="150" />
              <line x1="200" y1="0" x2="200" y2="300" />
            </g>
            <g stroke="#e8e7e5" strokeWidth="38" fill="none" opacity=".12">
              <line x1="0" y1="150" x2="400" y2="150" />
              <line x1="200" y1="0" x2="200" y2="300" />
            </g>
            <g fill="#ffffff">
              <rect x="40" y="136" width="26" height="12" />
              <rect x="110" y="152" width="26" height="12" opacity=".6" />
              <rect x="268" y="136" width="26" height="12" opacity=".8" />
              <rect x="186" y="46" width="12" height="26" />
              <rect x="202" y="210" width="12" height="26" opacity=".6" />
            </g>
            <circle cx="200" cy="150" r="9" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function Habilidades() {
  const items = [
    { nombre: 'Python', detalle: 'Programación básica y automatización de tareas.' },
    { nombre: 'SQL (MySQL)', detalle: 'Bases de datos y consultas básicas.' },
  ]
  return (
    <section id="habilidades" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Habilidades</h2>
        <div className="mt-12 grid gap-px bg-ink/20 md:grid-cols-2">
          {items.map((i) => (
            <article key={i.nombre} className="bg-fog py-10 md:pr-10">
              <h3 className="text-5xl font-extrabold tracking-tighter md:text-6xl">{i.nombre}</h3>
              <p className="mt-4 max-w-sm leading-7 text-stone">{i.detalle}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-lg leading-8">
          Me interesa seguir creciendo en análisis de datos y usar Python para
          automatizar tareas, creando soluciones tecnológicas útiles.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contacto" className="bg-ink px-6 py-20 text-paper md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tighter">
          Hablemos.
        </h2>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-stone pt-6 text-sm text-ash">
          {/* Agrega aquí tu correo, LinkedIn o GitHub:
              <a href="mailto:tu@correo.com" className="text-paper underline">tu@correo.com</a> */}
          <p>Andrey Jhovany Calle Corrales · Medellín, Antioquia</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Perfil />
        <Proyecto />
        <Habilidades />
      </main>
      <Footer />
    </>
  )
}
