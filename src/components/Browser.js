import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTvSeries from "../hooks/useTvSeries";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browser = () => {
  const gptShowView = useSelector((store) => store.gpt.gptState);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTvSeries();

  return (
    <div>
      <Header />
      {gptShowView ? (
        <GptSearchPage />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
