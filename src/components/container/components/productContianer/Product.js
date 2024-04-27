import { useState } from 'react';
import './product.css'

function Product({value, name, decreaseTheMoney, increaseTheMoney , unique, moneyAmount, img}) {
  const newvalue = new Intl.NumberFormat('en-US', {style : "decimal" }).format(value);

  const [buyAmount , setBuyAmount] = useState(0)
  const [canClick , setCanClick] = useState(true)

  const sellFunction = () => {
    if (buyAmount == 0) {
      return
    }


    let newAmount = buyAmount-1
    setBuyAmount(newAmount)

    let productInfo = {name : name, amount : newAmount , value : value}

    increaseTheMoney(productInfo)
  }

  const buyFunction = () => {
    if ((buyAmount == 1 && unique) || moneyAmount < value) {
      return
    }
    let newAmount = buyAmount+1
    setBuyAmount(newAmount)

    let productInfo = {name : name, amount : newAmount , value : value}

    decreaseTheMoney(productInfo)
  }


  return (
    <div className="product">
        {img ? <img src={img} className='product__image'/> : <span className='product__image'></span>}
        <span className='product__title'>{name}</span>
        <span className='product__price'>{newvalue}</span>
        <div className='product__btns'>
            <button className={`btn ${buyAmount > 0 ? 'product__btns__sellBtnActive' : 'product__btns__sellBtnUnActive'}`} onClick={sellFunction}>فروش</button>
            <input className='product__btns__amount' value={buyAmount} type='text'/>
            <button className={`btn ${((buyAmount == 1  && unique) || moneyAmount < value) ? 'product__btns__buyBtnUnActive' : 'product__btns__buyBtnActive'}`} onClick={buyFunction}>خرید</button>
        </div>
    </div>
  );
}

export default Product;