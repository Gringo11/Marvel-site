import { Route, Routes } from "react-router-dom";

import { NavBar } from "./navigation/NavBar";
import { Heroes } from "./heroes/Heroes";
import { Comics } from "./comics/Comics";
import { TapToComic } from "./comics/TapToComic";
import { InfoAboutHero } from "./heroes/InfoAboutHero";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Heroes />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<TapToComic />} />
        <Route path="/character/:id" element={<InfoAboutHero />} />
      </Routes>
    </div>
  );
}

export default App;
