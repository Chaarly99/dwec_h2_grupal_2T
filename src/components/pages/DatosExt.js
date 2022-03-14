import '../App.css';
import React, {useEffect, useState} from 'react';
//import axios from 'axios';

const DatosExt = () => {

    const [products, setProducts] = useState([]);
   
    //componentDidMount
    useEffect(()=>{
        fetch("https://61e5a6bdc14c7a0017124dc9.mockapi.io/Tecnologies")
            .then(res => res.json())
            .then(res => {
                setProducts(res);
            })
            .catch(e=>{
                console.log(e);
            })
    });

    return (
      <>
      <div id="prods" className="DatosExt">
        <ul>
        {products.map(product =>
          <li class="products" key={product.id}>
              {product.id} / {product.nombre} / {product.creacion} / {product.operativo}  {product.ranking}
          </li>
        )}
      </ul>
      </div>
      </>
    );
  }

export default DatosExt;
