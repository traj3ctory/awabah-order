import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./views/Order";
import Pizza from "./views/Pizza";
import NotFound from "./components/NotFound";
import "./styles/main.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pizza />} />
      <Route path="/process" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
