import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      URL_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
