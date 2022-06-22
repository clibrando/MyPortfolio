import "./App.css";
import SideBar from "./SideBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import ViewPage from "./Pages/ViewPage";
import Home from './Pages/Home';

function App() {
  return (
    <div className="flex body-container">
      <BrowserRouter>
        <div className="sidebar-container" style={{ zIndex: 1 }}>
          <SideBar />
        </div>
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/ViewPage" element={<ViewPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
