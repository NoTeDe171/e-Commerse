import MainLayOut from '../Layout/Layout'
import styles from './styles.module.scss'
function AdvanceHeading() {
    const{boxHead, text, texth2} = styles
    return ( <>
            <MainLayOut>
                <div className={boxHead}>
                    <span className={text}>
                    don't miss super offers                </span>
                    <h2 className={texth2}>Our best products</h2>
                </div>
            </MainLayOut>
    </> );
}

export default AdvanceHeading;