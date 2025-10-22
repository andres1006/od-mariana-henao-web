import { motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/573102608676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow duration-300 hover:shadow-3xl md:h-16 md:w-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />

      {!shouldReduceMotion && (
        <motion.span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.65, 0, 0.65],
          }}
          transition={{
            duration: 2,
            repeat: 2,
            ease: 'easeInOut',
          }}
        />
      )}

      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#128c7e] shadow-lg shadow-[#128c7e]/20 md:block">
        Respondemos en &lt;15 min
      </span>
    </motion.a>
  );
}

