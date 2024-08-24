import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PropPage from "@/pages/props";
import Moreclient from "./components/MoreClients/Moreclient";

function App() {
  return (
    <Routes >
      <Route element={<IndexPage />} path="/" />
      <Route element={<PropPage />} path="/prop" />
      <Route element={<Moreclient />} path="/moreclients" />
    </Routes>
  );
}

export default App;
