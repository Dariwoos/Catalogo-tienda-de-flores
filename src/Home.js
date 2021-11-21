import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Detalles from "./Detalles";

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
    <div className="row m-1">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/"  className="navbar-brand" >Navbar</Link>
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
      {Flores.filter((value) => {
        if (value.name === "") {
          return value;
        } else if (value.name.toLowerCase().includes(busqueda.toLowerCase())) {
          return (
            <div className="card col-4  ">
              <img src={value.imgUrl} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title">{value.name} </h5>
                <p className="card-text"></p>
                <Link to={<Detalles/>} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        }
      }).map((value, key) => {
        return (
          <div className="card col-4 " key={key}>
            <img src={value.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.name} </h5>
              <p className="card-text"></p>
              <Link to="/detalles" className="btn btn-primary">
                Go somewhere
              </Link>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
