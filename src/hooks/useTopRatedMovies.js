import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      URL_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
