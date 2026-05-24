import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      URL_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    upComingMovies();
  }, []);
};

export default useUpComingMovies;
