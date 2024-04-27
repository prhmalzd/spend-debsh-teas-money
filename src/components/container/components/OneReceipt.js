import './receipt.css'

function OneReceipt({name, amount, value}) {

  const newvalue = new Intl.NumberFormat('en-US', {style : "decimal" }).format(value);

  return (
    <div className="oneReceipt">
        <span className='oneReceipt__amount'>{newvalue}</span>
        <span className='oneReceipt__hit'>*{amount}</span>
        <span className='oneReceipt__title'>{name}</span>
    </div>
  );
}

export default OneReceipt;