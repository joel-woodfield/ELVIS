import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Cnn from "./visualizers/cnn/Cnn.jsx";
import Optimization from "./visualizers/optimization/Optimization.jsx";
import VisualizerSelector from "./VisualizerSelector.jsx";

function App() {
  return (
    <BrowsersRouter basename="/ELVIS">
      <Routes>
        <Route path="/" element={<VisualizerSelector />} />
        <Route path="/cnn" element={<Cnn />} />
        <Route path="/optimization" element={<Optimization />} />
      </Routes>
    </BrowsersRouter>
  );
}

export default App
