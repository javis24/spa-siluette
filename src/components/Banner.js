const Banner = () => {
  return (
    <section
      className="banner h-[450px] bg-cover bg-center md:bg-center sm:bg-[center_right_25%] flex items-center justify-center text-white md:h-[450px] sm:h-[350px] p-4"
      style={{ backgroundImage: "url('/img/banner_01.png')" }}
    >
      <div className="banner-content max-w-lg text-center mx-auto">
        <h1 className="banner-title text-4xl font-bold mb-2 md:text-4xl sm:text-3xl">Tu Belleza Natural</h1>
        <h2 className="banner-subtitle text-2xl font-light md:text-2xl sm:text-xl">Bienvenida a Siluette Plus JC</h2>
      </div>
    </section>
  );
};

export default Banner;
