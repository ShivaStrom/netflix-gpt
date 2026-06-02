import { IMAGE_URL } from "../utils/constanse";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 mx-2 cursor-pointer hover:translate-x-5">
      <img alt="movie-img" src={IMAGE_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
