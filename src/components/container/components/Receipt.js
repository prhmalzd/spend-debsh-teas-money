import { useEffect, useState } from 'react';
import OneReceipt from './OneReceipt';
import './receipt.css'

const receiptInfo = []

function Receipt({productInfo}) {
    const [totalAmount , setTotalAmount] = useState('')

    useEffect(() => {
        let finded = false
        if (productInfo.name) {
            if (receiptInfo.length === 0) {
                receiptInfo.push(productInfo)
            }
            receiptInfo.forEach((elem, i) => {
                if (elem.name === productInfo.name) {
                    elem.amount = productInfo.amount
                    finded = true
                    if (productInfo.amount === 0) {
                        console.log(i , productInfo.amount)
                        receiptInfo.splice(i,1)
                    }
                    return
                }
            })
            if (!finded) {
                receiptInfo.push(productInfo)
            }
        }
        if (receiptInfo.length !== 0) {
            let total = 0
            receiptInfo.forEach((elem) => {
                total = total + (elem.amount * elem.value)
            })
            const decimalTotal = new Intl.NumberFormat('en-US', {style : "decimal" }).format(total);
            setTotalAmount(decimalTotal)

        } else {
            setTotalAmount('')
        }
    } , [productInfo])


  return (
    <div>
        {totalAmount
        ?
        <div className="receipt">
            <span className='receipt__title'>فیش شما</span>
            {
                receiptInfo.map(elem => {
                    return <OneReceipt
                    name={elem.name}
                    amount={elem.amount}
                    value={elem.value}
                    />
                })
            }
            <span className='receipte__line'></span>
            <div className='receipt__total'>
                <span className='receipt__total__amount'>{totalAmount}</span>
                <span className='receipt__total__title'>جمع کل</span>
            </div>
        </div>
        :
        <div className="receipt">

        </div>}
    </div>
  );
}

export default Receipt;