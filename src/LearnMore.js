import React, { useEffect, useState } from 'react'

 const LearnMore = (props) => {

    const [state, setState] = useState([])
    const Flores = props.Flores
    const url = "https://dulces-petalos.herokuapp.com/api/product";

    const apiFetch = async () => {
      const res = await fetch(url+"/"+ Flores.id);
      const data = await res.json();
      setState(data)
    };
    console.log(state)
    useEffect(() => {
      apiFetch();
    }, []);
     useEffect(()=>{

     },[])
    return (
        <div>
            
        </div>
    )
}

export default LearnMore;