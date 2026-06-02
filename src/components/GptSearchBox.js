import { useSelector } from "react-redux";
import lang from "../utils/languageConstans";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.lang.language);

  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="w-1/2 px-4 py-2 grid grid-cols-12 bg-black rounded-lg">
        <input
          className="m-2 p-2 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button
          type="button"
          className="col-span-3 text-white bg-red-700 mx-2 my-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBox;
