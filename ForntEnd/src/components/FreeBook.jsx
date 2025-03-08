import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "C:/first_project_for_MERN_STACK/ForntEnd/public/list.json";
import Cards from "./Cards";
function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-x1 pb-2">Free offered Courses</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            delectus sed ducimus tempore placeat accusamus, praesentium odit
            amet facere ex.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((product) => (
              <Cards item={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
