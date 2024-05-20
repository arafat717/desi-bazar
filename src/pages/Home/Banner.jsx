const Banner = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/organic-food-background-vegetables-basket_135427-233.jpg?w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
