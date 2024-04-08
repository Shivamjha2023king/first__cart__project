import React from "react";

export default function Producte(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h1 className="data">
          {props.product.name}
          <span class="badge bg-secondary">₹{props.product.price}</span>
        </h1>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.subtracting(props.index);
            }}
          >
            -1
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.adding(props.index);
            }}
          >
            +1
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>

      <div className="col-2">
        <button
          className="btn btn-danger "
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}
