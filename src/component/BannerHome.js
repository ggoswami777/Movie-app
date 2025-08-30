import React, { useEffect, useState, useRef } from "react"; 
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(); 

  const handleNext = () => {
    setCurrentImage((prev) => (prev < bannerData.length - 1 ? prev + 1 : 0));
    containerRef.current.scrollLeft += window.innerWidth;
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : bannerData.length - 1));
    containerRef.current.scrollLeft -= window.innerWidth; 
  };

  useEffect(() => {
    if (bannerData.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev < bannerData.length - 1 ? prev + 1 : 0));
      containerRef.current.scrollLeft += window.innerWidth;
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData.length, isHovered]);

  return (
    <section
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex min-h-full max-h-[95vh] overflow-x-scroll scroll-smooth scrollbar-none snap-x snap-mandatory"
      >
        {bannerData.map((data, item) => {
          return (
            <div
              key={data.id + "bannerHome"}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group snap-center"
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  className="h-full w-full object-cover object-center"
                  alt={data.title || data.name}
                />
              </div>

              {/* buttons */}
              <div className="hidden absolute top-0 w-full h-full items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleRight />
                </button>
              </div>

              {/* overlay */}
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              {/* text content */}
              <div className="container mx-auto">
                <div className="w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data.title ||
                      data.name ||
                      data.original_title ||
                      data.original_name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {data.popularity.toFixed(0)}M Views</p>
                  </div>
                  <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
 