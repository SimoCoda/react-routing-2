import React from "react";
import { Route, Routes } from "react-router";
import Container from "./components/layout/Container";
import Sidebar from "./components/layout/Sidebar";
import Form from "./components/Form"
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Search from "./pages/Search";
import Private from "./pages/Private";
import Login from "./pages/Login";
import RequireAuth from "./components/layout/RequireAuth";


export default function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Container />}> {/* Usare l'outer per renderizzare ma facendo cosi tutti gli elementi passeranno per questo componente */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
          <Route path="/search" element={<Search />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}
