import InfoPage from "./Pages/InfoPage";
import EnvelopePage from "./Pages/EnvelopePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Hidden video to preload */}
      <video
        src="/Videos/output.mp4"
        preload="auto"
        style={{ display: "none" }}
      />

      {/* Your routes */}
      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </>
  );
}

export default App;
