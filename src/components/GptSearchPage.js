import { BG_IMG } from "../utils/constanse";
import GptSearchBox from "./GptSearchBox";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          alt="bg-img"
          src={BG_IMG}
        ></img>
      </div>
      <GptSearchBox />
    </div>
  );
};

export default GptSearchPage;
