import './App.css'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
