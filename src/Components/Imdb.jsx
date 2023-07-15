import React, { useEffect, useState } from "react";

const Imdb = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];
  const [data, setdata] = useState([]);
  // fetch the imdb movie data function
  let getData = async () => {
    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=ef45e11156b0214c78037f17b1580443"
      );
      let data = await res.json();
      setdata(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
// to check item will be in cart or not
  const addtocart = (id) => {
    for (let i = 0; i < cartLs.length; i++) {
      if (cartLs[i].id === id) {
        return false;
      }
    }
    return true;
  };
  // to added a cart function 
  const handleCart = (item) => {
    if (addtocart(item.id) == true) {
      alert("Cart added successfully");
      cartLs.push(item);
      localStorage.setItem("cart_page", JSON.stringify(cartLs));
      window.location.reload();
    } else {
      alert("Product all ready in the cart");
    }
  };

  return (
    <div className="flex flex-wrap gap-10 justify-around  ">
      {data.map((item) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
            <div className="card-body">
              <h2 className="card-title text-4xl">{item.original_title}</h2>
              <p>{item.overview}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCart(item)}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Imdb;
