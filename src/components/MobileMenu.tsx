import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: '¿Te identificas?', href: '#dolor' },
  { name: 'La promesa', href: '#promesa' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-[60] lg:hidden">
      {/* Botón hamburguesa */}
      <button
        onClick={toggleMenu}
        className="relative z-[65] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-white/90 text-2xl text-[var(--color-text-dark)] shadow-sm shadow-[var(--color-primary)]/5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-[rgba(15,30,32,0.55)] backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Menú */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col bg-white/95 shadow-[0_25px_60px_-20px_rgba(22,43,43,0.35)] backdrop-blur"
            >
              <div className="flex items-center justify-between px-6 pb-4 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Navega
                </p>
                <button
                  onClick={toggleMenu}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xl text-[var(--color-text-dark)] transition-colors duration-300 hover:bg-[var(--color-primary)]/20"
                  aria-label="Cerrar menú"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-10" aria-label="Navegación móvil">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-[var(--color-text-dark)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="rounded-2xl border border-[var(--color-primary)]/25 bg-[var(--color-bg-light)]/80 p-5 text-sm text-[var(--color-text-muted)]">
                  <p className="font-semibold text-[var(--color-text-dark)]">Resolvemos tus dudas en menos de 15 minutos.</p>
                  <p className="mt-1">Escríbenos y te ayudamos a elegir el tratamiento ideal sin compromiso.</p>
                </div>
                <a
                  href="https://wa.me/573102608676"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_35px_-18px_rgba(0,168,157,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 7v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7" />
                    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    <path d="M9 11h6" />
                    <path d="M9 15h4" />
                  </svg>
                  Agenda tu valoración
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

