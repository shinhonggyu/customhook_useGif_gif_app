import { useState } from "react";
import useGif from "../hooks/useGif";

const Tag2 = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Radom {tag} gif</h1>
      <img width="500" src={gif} alt="Tag Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag2;
