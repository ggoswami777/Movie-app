import React, { useEffect ,useState} from "react";
import BannerHome from "../component/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../component/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";



const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);

  const {data:nowPlayingData}=useFetch("/movie/now_playing")
  const {data:topRatedData}=useFetch("/movie/top_rated")
  const {data:popularTvShows}=useFetch("/tv/popular")
  const {data:onTheAirShowsData}=useFetch("/tv/on_the_air")


  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading="Trending Shows" trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing"  />
      <HorizontalScrollCard data={topRatedData} heading="Top Rated"  />
      <HorizontalScrollCard data={popularTvShows} heading="Popular TV Shows"  />
      <HorizontalScrollCard data={onTheAirShowsData} heading="On The Air Shows"  />
    </div>
  );
};

export default Home;
