import React from "react";
import Producte from "./Producte.jsx";
import Footer from "./Footer.jsx";

export default function Productlist(props) {
  console.log(props);
  console.log(props.Productlis);
  return props.productlis.map((pr, i) => {
    console.log(pr);
    console.log(i);
    return (
      <Producte
        product={pr}
        key={i}
        adding={props.adding}
        index={i}
        subtracting={props.subtracting}
        removeItem={props.removeItem}
      />
    );
  });
  // return props.Productlis.map((pr, i) => {
  //   return <Producte key={i} product={pr} />;
  // });
}
