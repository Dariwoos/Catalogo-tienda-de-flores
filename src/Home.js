import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Detalles from "./Detalles";
import Card from "./Card"
const Home = () => {
  const [Flores, setFlores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const url = "https://dulces-petalos.herokuapp.com/api/product";

  const apiFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setFlores(data);
  };
  useEffect(() => {
    apiFetch();
  }, []);
  
  return (
    <div className="d-flex justify-content-between">
      <div className="row m-1">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid ">
            <Link to="/" className="navbar-brand">
              Floristería Dulces Pétalos
            </Link>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <Card Flores={Flores} busqueda={busqueda}></Card>
      </div>
    </div>
  );
};

export default Home;
