import React from "react";
class Additems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5 "
        onSubmit={(e) => {
          e.preventDefault();
          this.props.Additem(
            this.state.productName,
            Number(this.state.productPrice)
          );
          //   this.props.Additems(
          //     this.state.productName,
          //     Number(this.state.productPrice)

          //   );
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-4"
          //   onClick={() => {
          //     this.props.Additems();
          //   }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default Additems;
