import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
const Card = (props) => {
  return (
    <div className="row ">
      {props.Flores.filter((value) => {
        if (value.name === "") {
          return value;
        } else if (
          value.name.toLowerCase().includes(props.busqueda.toLowerCase())
        ) {
          return (
            <div className="card col-4  ">
              <img src={value.imgUrl} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title">{value.name} </h5>
                <p className="card-text"></p>
                <Link
                  to="/detalles/"
                  state={console.log(value)}
                  className="btn btn-primary"
                >
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
              <Link
                to="/detalles/{value.id} "
                state={{ from: value.id }}
                className="btn btn-primary"
              >
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
