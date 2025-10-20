import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: string | ReactNode;
  link?: string;
  delay: number;
}

export default function ContactCard({ icon, title, content, link, delay }: ContactCardProps) {
  const CardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="text-[var(--color-primary)] text-5xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
        {title}
      </h3>
      <div className="text-[var(--color-text-dark)]/80">
        {content}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}

