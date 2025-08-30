import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../component/Card';


const SearchPage = () => {
  const location = useLocation();
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const navigate=useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });

    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(()=>{
    setData([]);
    setPage(1);
    fetchData();
  },[location?.search]);
  useEffect(() => {
      fetchData();
    }, [page]);
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  }; 
  return (
    <div className='pt-16'>
      <div className="pt-6 lg:hidden flex justify-center">
  <input
    type="text"
    placeholder="Search here..."   
    onChange={(e) => navigate(`/search?q=${e.target.value}`)}
    className="
      w-[95%] px-4 py-2 
      rounded-xl
      bg-white/10 
      backdrop-blur-md 
      border border-white/20
      placeholder-gray-300 
      text-white 
      focus:outline-none 
      focus:ring-2 
      focus:ring-cyan-400/60 
      transition-all 
      shadow-md 
    "
  />
</div>

      <div className='container mx-auto'>
         <h3 className="lg:text-xl capitalize text-lg font-semibold my-3">
         Search Results
        </h3>
        <div
          className="
      grid 
      gap-4 sm:gap-6
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-[repeat(auto-fit,230px)]
      justify-center
    "
        >
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "searchSection"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
