import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type || media_type;

  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="
    w-full 
    min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[230px] 
    max-w-[230px] 
    h-60 sm:h-72 md:h-80 
    overflow-hidden rounded-2xl relative group shadow-lg block shadow-black/40
  "
    >
      {/* poster */}
      {
        data?.poster_path ? (
          <img
        src={imageURL + data?.poster_path}
        alt={data?.title || data?.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
          
        ):(
          <div className="bg-neutral-800 w-full h-full flex justify-center items-center">
            No Image Found
          </div>
        )
      }
      

      {/* trending badge */}
      <div className="absolute top-2 left-0 sm:top-4">
        {trending && (
          <div className="py-0.5 px-2 sm:py-1 sm:px-4 rounded-r-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold shadow">
            #{index} Trending
          </div>
        )}
      </div>

      {/* bottom info */}
      <div className="absolute bottom-0 h-16 sm:h-20 w-full backdrop-blur-md bg-black/40 border-t border-white/20 p-2 sm:p-3">
        <h2 className="text-ellipsis line-clamp-1 text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow">
          {data?.title || data?.name}
        </h2>
        <div className="text-[10px] sm:text-xs text-gray-300 flex justify-between items-center mt-1">
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-white/20 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium text-white shadow">
            ⭐ {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
