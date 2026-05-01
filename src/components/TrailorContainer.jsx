import React, { useEffect, useState } from 'react';
import TrailorInfo from './TrailorInfo';
import TrailorVideo from './TrailorVideo';
import useMovieTrailor from '../hooks/useMovieTrailor';
import { Atom } from 'react-loading-indicators';
import { useSelector } from 'react-redux';

const TrailorContainer = () => {
  const trailorData = useSelector(store => store.movies?.movieTrailor);
  const loading = useMovieTrailor();

  const [trailorInfo, setTrailorInfo] = useState(null);
  const [infoLoading, setInfoLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const videoKey = trailorData?.[0]?.key;

  useEffect(() => {
    const fetchTralorInfo = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/999136?api_key=${API_KEY}`
        );
        const json = await res.json();
        setTrailorInfo(json);
      } catch (err) {
        console.error(err);
      } finally {
        setInfoLoading(false);
      }
    };

    fetchTralorInfo();
  }, [API_KEY]);

  console.log(trailorInfo)
  if (
    loading ||
    infoLoading ||
    !trailorData ||
    trailorData.length === 0 ||
    !videoKey ||
    !trailorInfo
  ) {
    return (
      <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
        <Atom color="#ec1010" size="medium" />
      </div>
    );
  }

  return (
    <div className='mt-0'>
      <TrailorInfo
        overview={trailorInfo.overview}
        title={trailorInfo.title}
      />
      <TrailorVideo videoKey={videoKey} />
    </div>
  );
};

export default TrailorContainer;