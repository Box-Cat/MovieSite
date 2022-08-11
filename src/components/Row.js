import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css"


export default function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetchMovieData();
  },[])

  const fetchMovieData = async () =>{
    const request = await axios.get(props.fetchUrl);
    console.log("request",request);
    setMovies(request.data.results);
  }
  console.log("title",props.title);

  return (
    <section className='row'>
      <h2>{props.title}</h2>
      <div className='slider'>
        <div className='slider++arrow-left'>
          <span className='arrow'
           onClick={()=>{
              document.getElementById(props.id).scrollLeft -= window.innerWidth - 80;
           }}>{"<"}</span>
        </div>
      </div>
      <div id={props.id} className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
          className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
          src={`https://image.tmdb.org/t/p/original/${
            props.isLargeRow ? movie.poster_path : movie.backdrop_path
          } `}
          alt={movie.name}
        />
        ))}
        <div className='slider__arrow-right'>
            <span
               className='arrow'
              onClick={()=>{
                document.getElementById(props.id).scrollLeft += window.innerWidth - 80;
              }}  
            >
              {">"}
            </span>
        </div>
      </div>
    </section>
  )
}
