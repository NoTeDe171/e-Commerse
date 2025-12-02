import styles from './styles.module.scss'
import carIcon from '../../../assets/imgs/svgs/carIcon.svg'
function InforCard({type, description, src}) {
    const {boxContent,Icon,content,title,text} = styles
    return ( <>
    <div className={boxContent}>
        <img className={Icon} src={src} alt={type} />
        <div className={content}>
            <h2 className={title}>
                <span>{type}</span>
            </h2>
            <p className={text}>{description}</p>
        </div>
    </div>
    </> );
}

export default InforCard;