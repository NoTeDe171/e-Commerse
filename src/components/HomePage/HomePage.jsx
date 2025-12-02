import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Info from '../info/info';
import styles from './styles.module.scss'
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading'
import HeadingList from '../HeadingList/HeadingList'

function HomePage () {
    const {container} = styles;
    return ( 
        <div>
           <div className={container}>
             <Header/>
              <Banner/>
              <Info/>
              <AdvanceHeading/>
              <HeadingList/>
           </div>
        </div>
     );
}

export default  HomePage;