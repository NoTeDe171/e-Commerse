import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Info from '../info/info';
import styles from './styles.module.scss'
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading'
import HeadingList from '../HeadingList/HeadingList';
import { useEffect, useState } from 'react'
import {getProduct} from '../APIs/productsService';
import PopularProduct from '../PopularProduct/PopularProduct'
import SaleHomePage from '../SaleHomePage/SaleHomePage'
import Footer from '../Footer/Footer'


function HomePage () {
    const {container} = styles;

    const [ListProduct,SetListProduct] = useState([]);

    useEffect(() => {
      getProduct().then(respon => {
        SetListProduct(respon.data.contents)
      }).catch(error => {
        console.log('loi')
      });
     
    },[])
    return ( 
        <div>
           <div className={container}>
             <Header/>
              <Banner/>
              <Info/>
              <AdvanceHeading/>
              <HeadingList data= {ListProduct.slice(0,2)}/>
              <PopularProduct data = {ListProduct.slice(2,14)}/>
              <SaleHomePage/>
              <Footer/>
           </div>
        </div>
     );
}

export default  HomePage;