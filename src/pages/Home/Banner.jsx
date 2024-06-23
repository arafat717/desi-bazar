import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import img6 from "../../../public/img6.jpg";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
