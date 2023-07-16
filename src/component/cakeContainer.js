import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes";

const cakeContainer = ({numOfCakes,buyCake}) => {
  return (
    <div>
      <h1>Cake Container - {numOfCakes}</h1>
      <button onClick={buyCake}>Order Cake</button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(cakeContainer);
