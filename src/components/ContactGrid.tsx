import ContactCard from './ContactCard';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <ContactCard 
        icon={<FaWhatsapp />}
        title="WhatsApp"
        content={
          <div>
            <p className="font-semibold text-lg">310 260 86 76</p>
            <p className="text-sm mt-2">Haz clic para chatear</p>
          </div>
        }
        link="https://wa.me/573102608676"
        delay={0.1}
      />
      
      <ContactCard 
        icon={<FaInstagram />}
        title="Instagram"
        content={
          <div>
            <p className="font-semibold text-lg">@od.mariana.henao</p>
            <p className="text-sm mt-2">Sígueme en redes</p>
          </div>
        }
        link="https://www.instagram.com/od.mariana.henao"
        delay={0.2}
      />
      
      <ContactCard 
        icon={<FaMapMarkerAlt />}
        title="Ubicación"
        content={
          <div>
            <p className="font-semibold">Calle 64A No. 21 - 10</p>
            <p className="text-sm">Edificio Portal del Cable</p>
            <p className="text-sm">Local 14, Manizales</p>
            <p className="text-sm mt-2">Ver en Google Maps</p>
          </div>
        }
        link="https://www.google.com/maps/search/?api=1&query=Calle+64A+No.+21+-+10+Edificio+Portal+del+Cable+Manizales"
        delay={0.3}
      />
    </div>
  );
}

