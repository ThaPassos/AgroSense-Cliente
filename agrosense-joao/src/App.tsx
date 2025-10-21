import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, Suspense} from 'react'
import Home from "./pages/Home";
import PainelBaia1 from "./pages/paineis/PainelBaia1";
import AnaliseBaia1 from "./pages/analises/AnaliseBaia1";
import './App.css'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";


function App() {
  return (
    <Router>
      <div className="flex">
        
        <main className="ml-52 w-full min-h-screen text-[#445816] p-6">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/paineis/baia1" element={<PainelBaia1 />} />

            <Route path="/analises/baia1" element={<AnaliseBaia1 />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
