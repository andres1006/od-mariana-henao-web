import ServiceCard from './ServiceCard';
import { FaShieldAlt, FaTooth, FaSmile, FaStethoscope } from 'react-icons/fa';

const services = [
  {
    icon: <FaShieldAlt />,
    title: 'Odontología Preventiva',
    description: 'Nos enfocamos en mantener tu sonrisa sana, previniendo enfermedades antes de que aparezcan.',
  },
  {
    icon: <FaTooth />,
    title: 'Rehabilitación Oral',
    description: 'Restauramos la función y estética de tu boca con soluciones integrales y personalizadas.',
  },
  {
    icon: <FaSmile />,
    title: 'Estética Dental',
    description: 'Diseñamos tu sonrisa soñada a través de blanqueamientos, carillas y más.',
  },
  {
    icon: <FaStethoscope />,
    title: 'Cirugía Oral',
    description: 'Procedimientos seguros y confiables realizados por manos expertas para garantizar tu bienestar.',
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

