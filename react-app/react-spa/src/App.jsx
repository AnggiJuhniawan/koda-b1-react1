import { Link } from "react-router";
import { Routess } from "./Components/Routes";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contack</Link>
        <Routess>Text</Routess>
      </nav>
    </div>
  );
}

export default App;
