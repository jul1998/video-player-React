import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home, NavbaComp, DisplayChannelComp, SearchFeed, VideoDetailPage} from "./components";
import './styles/index.css';
function App() {
  return (
    <Router>
      <NavbaComp />
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route path="/channel/id/:id" element={<DisplayChannelComp/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        <Route path="/video/:id" element={<VideoDetailPage/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
