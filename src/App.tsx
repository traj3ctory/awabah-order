import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import NotFound from "./components/NotFound";
import "./styles/main.scss"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
