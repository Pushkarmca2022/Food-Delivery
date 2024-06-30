import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios';

function AppState({children}) {
  const url = "https://mern-e-commerce-api-youtube.onrender.com/api";

    const [products,setProducts]=useState([])
    useEffect(() => {
        const fetchProduct = async () => {
          const api = await axios.get(`${url}/product/all`, {
            headers: {
              "Content-Type": "Application/json",
            },
            withCredentials: true,
          });
          setProducts(api.data.products);
          // setFilteredData(api.data.products);
          // userProfile();
        };
        fetchProduct();
        // userCart();
        // getAddress();
        // user_Order();
      }, []);



    return(<AppContext.Provider value={{products}} >{children}</AppContext.Provider>)


}

export default AppState