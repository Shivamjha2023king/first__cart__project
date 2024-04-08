import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Productlist from "./Components/Productlist";
import Footer from "./Components/Footer";
import Additems from "./Components/Additems";

function App() {
  const product = [
    {
      price: 999,
      date: 1234,
      no: 12367,
      quantity: 0,
      name: "iphone 12pr0",
    },
    {
      price: 899,
      date: 11234,
      no: 15367,
      quantity: 0,
      name: "redmi 9pro",
    },
    {
      price: 989,
      quantity: 0,
      date: 125634,
      no: 1236711,
      name: "one plus",
    },
  ];

  const [productlist, setproductlist] = useState(product);
  const [totalAmount, settotalAmount] = useState(0);

  const adding = (index) => {
    console.log("index==", index);
    let newquantity = [...productlist];
    let newtotalAmount = totalAmount;
    newquantity[index].quantity++;
    newtotalAmount += newquantity[index].price;
    console.log("new", newquantity);
    setproductlist(newquantity);
    settotalAmount(newtotalAmount);
  };

  const subtracting = (index) => {
    let newquantity = [...productlist];
    if (newquantity[index].quantity == 0) {
      newquantity[index].quantity = 0;
      console.log("new", newquantity);
      setproductlist(newquantity);
    } else {
      let newtotalAmount = totalAmount;
      newquantity[index].quantity--;
      newtotalAmount -= newquantity[index].price;

      console.log("new", newquantity);
      setproductlist(newquantity);
      settotalAmount(newtotalAmount);
    }
  };
  const reset = (index) => {
    let newquantity = [...productlist];
    newquantity.map((product) => {
      product.quantity = 0;
    });
    setproductlist(newquantity);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newlist = [...productlist];
    let newtotalAmount = totalAmount;
    newtotalAmount =
      newtotalAmount - newlist[index].quantity * newlist[index].price;
    console.log("index======", index);
    newlist.splice(index, 1);
    setproductlist(newlist);
    settotalAmount(newtotalAmount);
  };

  const Additem = (name, price) => {
    let newlist = [...productlist];
    newlist.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setproductlist(newlist);
  };

  return (
    <>
      <Navbar />
      <main className="contaainer mt-5">
        <Additems Additem={Additem} />
        <Productlist
          productlis={productlist}
          adding={adding}
          subtracting={subtracting}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
