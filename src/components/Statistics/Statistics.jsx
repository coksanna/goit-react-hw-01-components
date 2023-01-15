import css from './statistics.module.css';
import StatListItem from './StatListItem';

function Statistics({title, stats}) {
    const elements = stats.map(item => <StatListItem key = {item.id} {...item} />);
    return (
        <section className = {css.statistics}>
        {title && <h2 className = {css.title}>{title}</h2>}

            <ul className={css.stateList}>
                {elements}
            </ul>
        </section>
    )
}
export default Statistics;