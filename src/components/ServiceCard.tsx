import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

export default function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <div className="text-[var(--color-primary)] text-5xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)] mb-4">
        {title}
      </h3>
      <p className="text-[var(--color-text-dark)]/80 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

