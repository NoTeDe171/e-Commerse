import MainLayOut from '../Layout/Layout'
import styles from './styles.module.scss'
import ProductItem from '../ProductItem/ProductItem'
function PopularProduct({data}) {
    const {container} = styles 
    return ( 
       <MainLayOut>
       <div className={container}>
        {
          data.map((item,index) => {
            return (
              <ProductItem key ={index} name={item.name} price={item.price} img1={item.images[0]} img2={item.images[1]}/>
            )
          })
        }
       </div>
       </MainLayOut>
     );
}

export default PopularProduct;