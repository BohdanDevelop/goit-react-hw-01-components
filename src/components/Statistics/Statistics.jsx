import PropTypes from "prop-types";
import style from './Statistics.module.scss';


const Statistics = ({stats, title} )=>{
const heading = title && <h2 className={style["upload__heading"]}>{title}</h2>;

const liItems = stats.map(({id,label,percentage}) => {
 return <li className={style["upload__li"]} key={id}>
    <span className={style["upload__label"]}>{label}</span>
    <span>{percentage}</span>
</li>
})

    return (
        <div className={style["upload"]}>
           {heading}
        <ul className={style["upload__ul"]}>
            {liItems}
        </ul>
        </div>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string, 
        percentage: PropTypes.number
    }).isRequired)
}
export default Statistics;