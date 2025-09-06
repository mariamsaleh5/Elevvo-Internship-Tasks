import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      
          <Routes>
            <Route  path="/" element={<Layout/>}>
              <Route index element={<Overview />} />
              <Route path="projects" element={<Projects />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
      
    </BrowserRouter>
  );
}

     
  

     
  
  
