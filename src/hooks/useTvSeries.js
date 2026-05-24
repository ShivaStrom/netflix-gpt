import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addTvSeries, addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvSeries = () => {
  const dispatch = useDispatch();

  const tvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?&page=1",
      URL_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    tvSeries();
  }, []);
};

export default useTvSeries;
