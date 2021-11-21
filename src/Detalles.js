import React, { useState, useEffect } from "react";

const Detalles = (props) => {
    const flores = props.flores;
      const [Flores, setFlores] = useState([]);
        console.log(flores)
      const url = "https://dulces-petalos.herokuapp.com/api/product/";

      const apiFetch = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setFlores(data);
      };
      useEffect(() => {
        apiFetch();
      }, []);

return(
    <div>

    </div>
)
};

export default Detalles;
