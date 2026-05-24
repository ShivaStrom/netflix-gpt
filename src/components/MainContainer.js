import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // early return
  if (!movies) return;

  const mainMovie = movies[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};
export default Maincontainer;
