import { Outlet } from "react-router-dom";

import Montanhas from "./assets/montanhas.jpg";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Montanhas})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
