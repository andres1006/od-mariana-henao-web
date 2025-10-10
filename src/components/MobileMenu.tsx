import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Acerca de mí', href: '#acerca' },
  { name: 'Contacto', href: '#contacto' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Botón hamburguesa */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-[var(--color-text-dark)] focus:outline-none z-50 relative"
        aria-label="Toggle menu"
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
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />

            {/* Menú */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={toggleMenu}
                  className="text-2xl text-[var(--color-text-dark)]"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="flex flex-col px-6 space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/573102608676"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all duration-300 text-center"
                >
                  Agendar Cita
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

