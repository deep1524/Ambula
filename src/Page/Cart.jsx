import React, { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (cartLs.length > 0) {
      setdata(cartLs);
    } else {
      alert("no item in a cart list");
    }
  }, []);
  console.log(data);
  const handleDelete = (index) => {
    cartLs.splice(index, 1);
    localStorage.setItem("cart_page", JSON.stringify(cartLs));
    window.location.reload();
  };
  return (
    <div className="flex flex-wrap gap-10 justify-around mt-10  ">
      <div>
        <h1 className="text-2xl">Number of item in a cart : {data.length}</h1>
      </div>

      {data.map((item, index) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
            <div className="card-body">
              <h2 className="card-title text-4xl">{item.original_title}</h2>
              <p>{item.overview}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-primary"
                >
                  Delete from Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
