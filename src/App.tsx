import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPreparePage from "./pages/TestPreparePage";
import TestProgressPage from "./pages/TestProgressPage";
import TestResultPage from "./pages/TestResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test/prepare" element={<TestPreparePage />} />
      <Route path="/test/progress" element={<TestProgressPage />} />
      <Route path="/test/result" element={<TestResultPage />} />
    </Routes>
  );
}

export default App;
