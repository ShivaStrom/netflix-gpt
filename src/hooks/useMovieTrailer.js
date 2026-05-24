import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constanse";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      URL_OPTIONS,
    );
    const json = await data.json();
    const trailer = json.results.filter((videos) => {
      return videos.type === "Trailer";
    });
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
