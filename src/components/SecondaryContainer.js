import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
          <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
