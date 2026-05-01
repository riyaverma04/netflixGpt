
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ArrowLeft } from 'lucide-react'

import Card from "./Card";

import InfiniteScroll from "react-infinite-scroll-component";
function nowPlaying() {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  document.title = "nowPlaying";
  const navigate = useNavigate();
  const [nowPlaying, setnowPlaying] = useState([]);
  const [category, setcategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getnowPlaying = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
    );
    const data = await res.json();
    if (data.results.length > 0) {
      setnowPlaying((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  const fetchMorePage = () => {
    if (nowPlaying.length === 0) {
      getnowPlaying();
    } else {
      setPage(page + 1);
      setnowPlaying([]);
      getnowPlaying();
    }
  };

  useEffect(() => {
    fetchMorePage();
  }, [category]);
  return (
    <div className="bg-[#1F1E24] w-full">
      <div className="flex w-full items-center justify-between px-6 py-4 ">
        <h1 className="text-2xl text-white flex justify-center items-center gap-4">
          
            
          <ArrowLeft onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer ri-arrow-left-line" />
          nowPlaying
        </h1>
        
      
      </div>
      <div className="w-screen">
        <InfiniteScroll
          dataLength={nowPlaying.length}
          next={getnowPlaying}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex items-start justify-center flex-wrap gap-10 ">
            {nowPlaying.map((item, index) => {
              return (
                <div key={index}>

                  <Card movie={item} />
                  
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default nowPlaying;