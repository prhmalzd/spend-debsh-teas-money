import './moneyAmount.css'

function MoneyAmount({moneyAmount}) {

  const newmoneyAmount = new Intl.NumberFormat('en-US', {style : "decimal" }).format(moneyAmount);

  return (
    <div className="moneyAmount">
        <span className='moneyAmount__title'>{newmoneyAmount}</span>
    </div>
  );
}

export default MoneyAmount;