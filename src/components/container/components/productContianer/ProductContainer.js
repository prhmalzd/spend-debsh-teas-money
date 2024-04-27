import Product from './Product';
import './productContainer.css'
import { productsInfo } from './productsinfo';


function ProductContainer({decreaseTheMoney, increaseTheMoney, moneyAmount}) {
  return (
    <div className="productContainer">
      {
        productsInfo.map(elem => {
          return <Product
          name={elem.name}
          value = {elem.value}
          decreaseTheMoney={decreaseTheMoney}
          increaseTheMoney={increaseTheMoney}
          unique= {elem.unique}
          moneyAmount={moneyAmount}
          img= {elem.img}
          />
        })
      }
    </div>
  );
}

export default ProductContainer;