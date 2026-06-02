import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return movies.tvSeries ? (
    <div className="my-4 px-4 bg-black">
      <div className="relative -mt-52 z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Tv Series"} movies={movies.tvSeries} />
      </div>
    </div>
  ) : null;
};

export default SecondaryContainer;
