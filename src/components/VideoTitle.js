const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <p className="text-4xl font-bold py-4">{title}</p>
      <p className="text-md w-1/3 pt-2">{overview}</p>
      <div className="my-8">
        <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-300">
          Play
        </button>
        <button className="ml-2 bg-gray-500 text-white px-8 py-3 rounded-md hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
