import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const params=useParams();
  const {data}=useFetchDetails(`/${params?.explore}/${params?.id}`)
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const {data :castData}=useFetchDetails(`/${params?.explore}/${params?.id}/credits`);

  console.log("castData", castData);
  console.log("data", data);
  return (
    <div>
      <div className='w-full h-[280px] relative'>
        <div className='w-full h-full'>
          <img src={imageURL +data?.backdrop_path} className='h-full w-full object-cover'/>
        </div>
        <div className='absolute  w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
      </div>
      <div></div>
    </div>
  )
}

export default DetailsPage
