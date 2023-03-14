import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home, NavbaComp, DisplayChannelComp} from "./components";
import './styles/index.css';
function App() {
  return (
    <Router>
      <NavbaComp />
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route path="/channel/id/:id" element={<DisplayChannelComp/>} />
      </Routes>
    </Router>
  );
}

export default App;
