import { useState } from 'react';

const ServiceSection = () => {
  // Inicializa el estado con el primer servicio
  const [selectedService, setSelectedService] = useState('facials');

  // Datos de cada servicio
  const services = [
    { id: 'facials', name: 'Drenaje Linfático', image: '/img/spa_menu_1.png', price: '$40 - $80', description: 'Descripción del Drenaje Linfático...' },
    { id: 'mesotherapy', name: 'Mesoterapia', image: '/img/spa_menu_2.png', price: '$50 - $90', description: 'Descripción de Mesoterapia...' },
    { id: 'lipolaser', name: 'Ultra Lipolaser', image: '/img/spa_menu_3.png', price: '$60 - $100', description: 'Descripción de Ultra Lipolaser...' },
    { id: 'ultracavitation', name: 'Ultracavitación', image: '/img/spa_menu_4.png', price: '$70 - $110', description: 'Descripción de Ultracavitación...' },
    { id: 'radiofrequency', name: 'Ultra Radiofreciencia', image: '/img/spa_menu_5.png', price: '$80 - $120', description: 'Descripción de Ultra Radiofreciencia...' },
    // Agrega más servicios según sea necesario
  ];

  // Encuentra el servicio seleccionado en el arreglo
  const currentService = services.find(service => service.id === selectedService);

  return (
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
              <p className="price text-[#ff4d8b] text-lg">{currentService.price}</p>
              <p>{currentService.description}</p>
              <button className="more-btn bg-[#ff4d8b] text-white px-4 py-2 rounded mt-2">More</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
