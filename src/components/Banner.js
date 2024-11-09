const Banner = () => {
    return (
      <section className="banner h-[450px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/img/banner_01.png')" }}>
        <div className="banner-content max-w-lg text-center">
          <h1 className="banner-title text-4xl font-bold mb-2">Tu Belleza Natural</h1>
          <h2 className="banner-subtitle text-2xl font-light">Bienvenida a Siluette Plus JC</h2>
        </div>
      </section>
    );
  };
  
  export default Banner;
  