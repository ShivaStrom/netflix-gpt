import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      URL_OPTIONS,
    );
    const json = await data.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
