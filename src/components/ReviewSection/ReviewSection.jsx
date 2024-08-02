import { useState } from "react";
import img1 from "../../../public/testimonial-img-1.webp";
import "./ReviewSection.css";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin X",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin 360",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin code",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Alice Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of DesginLab",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Michael Brown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin UX",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Laura Davis",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin Craft",
    rating: 4,
  },
  {
    id: 7,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin X",
    rating: 8,
  },
  {
    id: 8,
    name: "Jane Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin 360",
    rating: 4.5,
  },
  {
    id: 9,
    name: "Michael Brown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin UX",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Sam Wilson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin code",
    rating: 4.3,
  },
  {
    id: 11,
    name: "Alice Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of DesginLab",
    rating: 4.7,
  },

  {
    id: 12,
    name: "Laura Davis",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi eius illo expedita corporis asperiores aspernatur, dolores officia et facere delectus repellendus quod quos ipsa in? Impedit, veritatis enim! Deserunt soluta odio dolores fugit corporis ex molestiae eaque dolor beatae?<",
    img: { img1 },
    position: "CEO of Desgin Craft",
    rating: 4,
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(reviews.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <div className="my-20 mb-40">
      <div className="relative w-full mx-auto px-10">
        <div className="flex items-center justify-between">
          <div className="w-full overflow-hidden relative">
            <div
              className={`flex gap-5 transition-transform duration-500 ${
                direction === "next" ? "slide-next" : "slide-prev"
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-1/3 flex-shrink-0 p-7 bg-green-50 text-start rounded-lg shadow-md"
                >
                  <div className="flex justify-start items-center gap-2">
                    <div className="flex items-center text-yellow-500">
                      <IoIosStar></IoIosStar>
                      <IoIosStar></IoIosStar>
                      <IoIosStar></IoIosStar>
                      <IoIosStar></IoIosStar>
                      <IoIosStar></IoIosStar>
                    </div>
                    <p>({review.rating})</p>
                  </div>
                  <p className="mt-2 text-gray-600">{review.review}</p>
                  <hr className="mt-5" />
                  <div className="flex items-center gap-5 mt-3">
                    <img src={review.img.img1} alt="" />
                    <div>
                      <p className="text-xl font-bold">{review.name}</p>
                      <p className="text-sm">{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-20 left-[630px] flex gap-6">
            <button
              className="text-green-600  p-2 text-3xl rounded-full border border-green-600 transition-all hover:bg-green-600 hover:text-white"
              onClick={prevSlide}
            >
              <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
            </button>
            <button
              className="text-green-600  p-2 text-3xl rounded-full border border-green-600 transition-all hover:bg-green-600 hover:text-white"
              onClick={nextSlide}
            >
              <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
