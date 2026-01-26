import InfoPage from "./Pages/InfoPage"
import EnvelopePage from "./Pages/EnvelopePage"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </>
  )
}

export default App
