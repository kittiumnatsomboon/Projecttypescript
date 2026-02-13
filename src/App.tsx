import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PopupWidget } from "./components/PopupWidget";
import Home from './pages/Home';

// layout
function Layout() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <PopupWidget />
    </ThemeProvider>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
