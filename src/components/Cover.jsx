import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cover = ({ page }) => {
  return (
    <div
      className="hero h-[140px] md:h-[400px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421131.jpg?t=st=1719153940~exp=1719157540~hmac=46f69d937ec4b3910bb6c38c0290c28812005df782e8b2d71aebadf392e707e4&w=826)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex gap-3">
          <Link to="/">
            <p className="mb-5 font-bold text-xl">Home</p>
          </Link>
          <p className="font-bold text-xl">/</p>
          <p className="mb-5 font-bold text-xl">{page}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
