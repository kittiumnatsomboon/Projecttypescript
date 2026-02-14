import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from "next-themes";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PopupWidget } from "./components/PopupWidget";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';


function Layout() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Outlet/>
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
