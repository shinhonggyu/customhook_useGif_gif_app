import "./App.css";

import Random2 from "./components/Random_V2";
import Tag2 from "./components/Tag_V2";

const App = () => (
  <div>
    <h1>Random GIF Application</h1>
    <div className="main-container">
      <Random2 />
      <Tag2 />
    </div>
  </div>
);

export default App;
