import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Raghav Laddha",
    review:
      "I had Korean Garlic Bun, Dutch Chocolate cake, and Peri Peri Paneer Pizza. They were all delicious! The atmosphere and vibes were pretty cool too.",
    comments: "01 Comment",
    img: "https://bakelore.com/cdn/shop/files/unnamed_3.png?v=1725016943",
  },
  {
    id: 2,
    name: "Pihu Verma",
    review:
      "Good food, ambience and service. Felt like a modernized bakery. Haleem chicken 65 bun was good. Tres leches is good. Chocolate cake is good.",
    comments: "02 Comment",
    img: "https://bakelore.com/cdn/shop/files/unnamed_4.png?v=1725017105",
  },
  {
    id: 3,
    name: "Harman Preet Kaur",
    review:
      "Bakelore is a new bakery and cake shop situated in Madhapur, Hyderabad. Along with the rustic, cute and beautiful seating this bakery serves one of the best bakery items in Hyderabad.",
    comments: "03 Comment",
    img: "https://bakelore.com/cdn/shop/files/unnamed_5.png?v=1725017235",
  },
];

const Testimonials = () => {
  const settingsMain = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".thumb-slider",
  };

  const settingsThumbs = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    asNavFor: ".main-slider",
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-pink-500">Happy Customer </span>
          <span className="text-gray-800">Reviews</span>
        </h2>

        {/* Main Review Slider */}
        <Slider {...settingsMain} className="main-slider mb-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6">
              <div className="bg-gray-50 shadow-lg rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-2">{t.comments}</p>
                <p className="text-gray-700 text-lg italic">"{t.review}"</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        <Slider {...settingsThumbs} className="thumb-slider max-w-lg mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="p-2">
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-pink-400"
                />
                <h6 className="mt-2 font-semibold">{t.name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
