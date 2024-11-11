import Image from 'next/image';

const CourseOffer = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Inscríbete a nuestros cursos</h2>
      
      <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Sección de imagen y botón */}
        <div className="flex flex-col items-center md:w-1/2">
          <Image 
            src="/img/course_img.png" // Cambia la ruta de la imagen según tus archivos
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
            Nuestros cursos están diseñados para ayudarte a mejorar tus habilidades y conocimientos en diferentes áreas. 
            Ofrecemos una variedad de temas que se adaptan a tus intereses y necesidades. 
            Ya sea que estés buscando avanzar en tu carrera o aprender algo nuevo, nuestros cursos te ofrecen el mejor contenido y recursos.
          </p>
          <p className="text-lg mt-4">
            Cada curso incluye materiales de apoyo, acceso a instructores calificados, y certificación al finalizar. 
            ¡No pierdas la oportunidad de crecer y aprender con nosotros!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseOffer;
