import useGif from "../hooks/useGif";

const Random2 = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Radom gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random2;
