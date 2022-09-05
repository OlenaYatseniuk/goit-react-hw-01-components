import Transaction from 'components/Transaction/Transaction';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({items}) {
  return (
    <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(({id,type, amount, currency}) =>
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        )}
        </tbody>
</table>
  )
}

TransactionHistory.propTypes = PropTypes.arrayOf(PropTypes.object.isRequired).isRequired;

export default TransactionHistory

