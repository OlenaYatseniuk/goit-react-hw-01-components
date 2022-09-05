import PropTypes from 'prop-types';

function Transaction({id, type, amount, currency}) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

Transaction.propTypes = PropTypes.arrayOf(PropTypes.string.isRequired).isRequired;

export default Transaction

