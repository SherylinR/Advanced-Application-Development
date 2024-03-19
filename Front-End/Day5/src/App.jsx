import Sidebar from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import SignInSide from "./components/pages/LantingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from "./components/pages/Overview";
import Birthday from "./components/pages/Birthday";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide/>}/>
          <Route path="/admin-dashboard" element={<Sidebar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/birthday-parties" element={<Birthday/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
