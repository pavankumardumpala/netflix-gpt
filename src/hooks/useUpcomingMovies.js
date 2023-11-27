import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await Data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
