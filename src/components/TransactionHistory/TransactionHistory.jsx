import css from './transactionHistory.module.css';
import TransactionItem from './TransactionItem';

function TransactionHistory({items}) {
    const elements = items.map(item => <TransactionItem key = {item.id} {...item} />);
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    )
}

export default TransactionHistory;