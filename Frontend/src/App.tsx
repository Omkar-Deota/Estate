import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PropPage from "@/pages/props";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PropPage />} path="/prop" />
    </Routes>
  );
}

export default App;
