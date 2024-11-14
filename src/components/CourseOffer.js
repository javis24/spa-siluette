import Image from 'next/image';

const CourseOffer = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Inscríbete a nuestros cursos</h2>
      
      <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Sección de imagen y botón */}
        <div className="flex flex-col items-center md:w-1/2">
          <Image 
            src="/img/curso_img.png" // Cambia la ruta de la imagen según tus archivos
            alt="Curso"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />
          <button className="bg-[#9b5ab7] text-white px-6 py-2 rounded-lg">
            Inscribirse
          </button>
        </div>
        
        {/* Sección de descripción */}
        <div className="md:w-1/2 mt-4 md:mt-0 text-gray-700">
          <p className="text-lg">
          Bienvenidos a nuestros cursos online, Dónde aprenderás a proporcionar tratamientos 100% personalizados, las técnicas adecuadas para aplicar cada una de las tecnologías reductivas,  y de embellecimiento, también aprenderás todas las terapias más vendidas y eficaces para que tus pacientes o clientes quedé. </p>
          <p className="text-lg mt-4">
          Total mente satisfechos, te capacitare para que puedas elaborar planes alimenticios y puedas ofrecer en tu negocio un tratamiento totalmente completo, veremos ejemplos de casos distintos de pacientes, les proporcionaré lista de proveedores de alta, media y baja gama de aparatología Profesional e insumos de spa, te enseñaré a crear tus productos para trabajar tu negocio y te aportaremos estrategias para logres llenar tu spa y logres tener ingresos increíbles, al terminar este curso te daremos 5 certificaciones avaladas por secretaria del trabajo y previsión social,  No puedes desaprovechar esta oportunidad!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseOffer;
