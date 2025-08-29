import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  return (
    <Link to={"/"+data.media_type+"/"+data.id} className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded-2xl relative group shadow-lg shadow-black/40">
      {/* poster */}
      <img
        src={imageURL + data?.poster_path}
        alt={data?.title || data?.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* trending badge */}
      <div className="absolute top-4 left-0">
        {trending && (
          <div className="py-1 px-4 rounded-r-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm font-semibold shadow">
            #{index} Trending
          </div>
        )}
      </div>

      {/* bottom info */}
      <div className="absolute bottom-0 h-20 w-full backdrop-blur-md bg-black/40 border-t border-white/20 p-3">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold text-white drop-shadow">
          {data?.title || data?.name}
        </h2>
        <div className="text-xs text-gray-300 flex justify-between items-center mt-1">
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-medium text-white shadow">
            ⭐ {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
