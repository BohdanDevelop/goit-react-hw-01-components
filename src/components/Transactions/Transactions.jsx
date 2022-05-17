import PropTypes from "prop-types";

import style from "./Transactions.module.scss";

const Transactions = ({items = []})=>{
const tableRow = items.map(({id,type, amount,currency}) => {
    return  <tr key={id}>
    <td className={style.tableData}>{type}</td>
    <td className={style.tableData}>{amount}</td>
    <td className={style.tableData}>{currency}</td>
  </tr>
})

    return <table className={style.table} >
    <thead >
      <tr  >
        <th className={style.headRow} >Type</th>
        <th className={style.headRow}>Amount</th>
        <th className={style.headRow}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
    {tableRow}
     
    </tbody>
  </table>

}
Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
export default Transactions;