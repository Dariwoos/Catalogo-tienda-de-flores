import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
const Detalles = () => {

const [flor, setFlor] = useState([])
const location = useLocation()
const from = location.state.from

console.log(from)
      const url =
        `https://dulces-petalos.herokuapp.com/api/product/`;
         
    const apiFetch = async () => {
        const res = await fetch(url + from);
        const data = await res.json();
        setFlor(data)
        console.log(data)
      };
      useEffect(() => {
        apiFetch();
      }, []);

return (
  <div>
    <div className="row m-1">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            Floristería Dulces Pétalos
          </Link>
          <form className="d-flex"></form>
        </div>
      </nav>
    </div>
    <div className="d-flex justify-content-center">
      <div className="card col-4 ">
        <img src={flor.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{flor.name}</h5>
          <p className="card-text">Nombre centifico: {flor.binomialName} </p>
          <p className="card-text">Precio: {flor.price} </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Detalles;
