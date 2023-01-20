import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx"; 
import {Survey } from './pages/Survey.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/survey" element = { <Survey/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
