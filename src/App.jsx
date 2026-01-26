import InfoPage from "./Pages/InfoPage"
import EnvelopePage from "./Pages/EnvelopePage"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <video
        src="/Videos/video6023884163138985617.mp4"
        preload="auto"
        style={{ display: 'none' }}
      />

      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </>
  )
}

export default App
