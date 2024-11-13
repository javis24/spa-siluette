import { useState } from 'react';

const ServiceSection = () => {
  // Inicializa el estado con el primer servicio
  const [selectedService, setSelectedService] = useState('facials');

  // Datos de cada servicio
  const services = [
    { id: 'facials', name: 'Drenaje Linfático', image: '/img/drenaje.png', description: 'Drenaje linfático es una técnica que mediante suaves y repetidas maniobras con duración de 20 a 30min, siempre superficiales sobre la piel, logra acelerar e incluso redirigir la circulación linfática superficial. Su aplicación acelera la reabsorción del edema. Es un método que tiene como finalidad drenar líquidos subcutaneos hacia los ganglios, es excelente para personas muy sedentarias y también para pacientes con cirugías estéticas recientes.' },
    { id: 'mesotherapy', name: 'Mesoterapia', image: '/img/spa_menu_1.png', description: 'Descripción de Mesoterapia...' },
    { id: 'lipolaser', name: 'Ultra Lipolaser', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Lipolaser...' },
    { id: 'ultracavitation', name: 'Ultracavitación', image: '/img/spa_menu_1.png', description: 'Descripción de Ultracavitación...' },
    { id: 'radiofrequency', name: 'Ultra Radiofrecuencia', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'vacuumPro', name: 'Vacuum Pro', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'gympasiva', name: 'Gym Pasiva', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'maderoterapia', name: 'Maderoterapia', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'desintoxicacion', name: 'Desintoxicación', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'peptonas', name: 'Peptonas', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'copasparagluteo', name: 'Copas para Glúteo', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'laseryag', name: 'Laser YAG', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'depilacionlaserdefinitiva', name: 'Depilacion Laser Definitiva', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'hollywoodpeel', name: 'Hollywood PEEL', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'hydrafacial', name: 'HydraFacial', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    { id: 'masajerelajante', name: 'Masaje Relajante', image: '/img/spa_menu_1.png', description: 'Descripción de Ultra Radiofreciencia...' },
    // Agrega más servicios según sea necesario
  ];

  // Encuentra el servicio seleccionado en el arreglo
  const currentService = services.find(service => service.id === selectedService);
   // Número de WhatsApp y mensaje de interésEllos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa. Hechos 16:31
   const whatsappNumber = "528713330566"; // Reemplaza XXXXXXXX por el número de teléfono de tu cliente
   const whatsappMessage = "Me interesa una cita";
 


  return (
    <section id="servicios" className="py-10">
    <div className="service-section grid grid-cols-1 lg:grid-cols-3 p-5 gap-5">
      {/* Menú lateral */}
      <div className="sidebar-menu grid gap-3 grid-cols-2 lg:grid-cols-2 lg:col-span-1">
        {services.map(service => (
          <button
            key={service.id}
            className={`menu-item px-4 py-2 rounded ${selectedService === service.id ? 'bg-pink-600' : 'bg-pink-400'} text-white`}
            onClick={() => setSelectedService(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Área de contenido */}
      <div className="content-display lg:col-span-2 p-5 border-t lg:border-t-0 lg:border-l border-gray-300">
        {currentService && (
          <div className="content-wrapper flex flex-col lg:flex-row lg:space-x-4">
            <img src={currentService.image} alt={currentService.name} className="content-image w-full lg:w-[300px] rounded mb-4 lg:mb-0" />
            <div className="content-text max-w-lg">
              <h2 className="text-2xl font-semibold">{currentService.name}</h2>
             
              <p>{currentService.description}</p>
              <br />
              <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-btn bg-[#ff4d8b] text-white px-4 py-2 rounded mt-2"
                >
                  Agendar Cita
                </a>
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default ServiceSection;
