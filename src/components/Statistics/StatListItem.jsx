import PropTypes from "prop-types"
import css from './statistics.module.css';

const StatListItem = ({label, percentage}) => {
    return (
    <li className = {css.item}>
        <span className = {css.label}>{label}</span>
        <span className = {css.percentage}>{percentage}%</span>
    </li>
    )
}

export default StatListItem;

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}