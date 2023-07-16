import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes";


const CakeConatinerHooksRedux = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch =  useDispatch();
  return (
    <div>
      <h1>Cake Container - {numOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake())}>Order Cake</button>
    </div>
  );
};

export default CakeConatinerHooksRedux;
