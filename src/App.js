import React from "react";
import { Route, Routes } from "react-router";
import Container from "./components/layout/Container";
import Sidebar from "./components/layout/Sidebar";
import Form from "./components/Form"
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";


export default function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Container />}> {/* Usare l'outer per renderizzare ma facendo cosi tutti gli elementi passeranno per questo componente */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}
