import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_iceCream } from '../redux/iceCream';

const IcecreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
  return (
    <div> 
        <h1>Number of icecream - {numOfIceCream}</h1>
        <button onClick={()=>dispatch(buy_iceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IcecreamContainer