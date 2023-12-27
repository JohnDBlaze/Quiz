import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./HomePage";
import { Quiz } from "./Quiz";
import { NoPage } from "./NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
