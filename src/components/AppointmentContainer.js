const AppointmentContainer = () => {
    return (
        <div className="appointment-container grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto my-5 border border-gray-300 rounded-lg overflow-hidden gap-5">
        {/* Formulario de Cita */}
        <div className="appointment-form bg-[#9b5ab7] text-white p-10">
          <h2 className="text-2xl mb-2">Make an <span className="italic">Appointment</span></h2>
          <form className="space-y-4">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded text-black" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded text-black" required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full p-2 rounded text-black" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" className="w-full p-2 rounded text-black" required></textarea>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>    
    {/* Imagen de Horario */}
    <div className="open-hours bg-cover bg-center text-gray-900 p-10 text-center" style={{ backgroundImage: "url('/img/cursos.jpeg')" }}>
      {/* Puedes agregar contenido dentro de esta sección si es necesario */}
    </div>
  </div>

    );
  };
  
  export default AppointmentContainer;
  