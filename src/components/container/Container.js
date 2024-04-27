import { useState } from "react";
import Header from "./components/Header";
import MoneyAmount from "./components/MoneyAmount";
import ProductContainer from "./components/productContianer/ProductContainer";
import './container.css'
import Receipt from "./components/Receipt";
import CopyRight from "./components/CopyRight";

function Container() {
  const [moneyAmount , setMoneyAmount] = useState(140000000000000)
  const [endNumber , setEndNumber] = useState(140000000000000)
  const [productInfo, setProductInfo] = useState({})

  const decreaseTheMoney = (productInfo) => {
    let newValue = endNumber - productInfo.value
    setEndNumber(newValue)

    setProductInfo(productInfo)

    changeNumberAnimation(newValue, productInfo.value , false)
  }

  const increaseTheMoney = (productInfo) => {
    let newValue = endNumber + productInfo.value
    setEndNumber(newValue)

    setProductInfo(productInfo)

    changeNumberAnimation(newValue, productInfo.value , true)
  }

  function changeNumberAnimation(newValue, distance , bool) {
    let speed = 1
    let current = moneyAmount;
    let increment = distance / 100
    const stepTime = Math.abs(Math.floor(speed / (newValue - current)));

    if (bool) {
      const animation = setInterval(() => {
        current += increment;
        setMoneyAmount(current)
        if (current >= newValue) {
          clearInterval(animation);
        }
      }, stepTime);
    }
    else {
      const animation = setInterval(() => {
        current -= increment;
        setMoneyAmount(current)
        if (current <= newValue) {
          clearInterval(animation);
        }
      }, stepTime);
    }
  }


  return (
    <div className="container">
      <Header/>
      <MoneyAmount moneyAmount={moneyAmount}/>
      <ProductContainer decreaseTheMoney={decreaseTheMoney} increaseTheMoney={increaseTheMoney} moneyAmount={moneyAmount}/>
      <Receipt productInfo={productInfo}/>
      <CopyRight/>
    </div>
  );
}

export default Container;