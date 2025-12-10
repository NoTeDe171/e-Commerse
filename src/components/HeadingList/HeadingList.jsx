import styles from "./styles.module.scss";
import MainLayOut from "../Layout/Layout";
import TimeCountDown from "./TimeCountDown/TimeCountDown";
import ProductItem from '../ProductItem/ProductItem'
function HeadingList({data}) {
  const { boxList, boxHeading, boxProduct, boxContent, title, button } = styles;

  return (
    <>
      <MainLayOut>
        <div className={boxList}>
          <div className={boxHeading}>
            <TimeCountDown />
            <div className={boxContent}>
              <h2 className={title}>The classics make a comeback</h2>
              <div className={button}>
                <a href="#">
                  <span>Buy now</span>
                </a>
              </div>
            </div>
          </div>
          <div className={boxProduct}>
            {
              data.map((item,index) => {
                return (
                  <ProductItem key ={index} name={item.name} price={item.price} img1={item.images[0]} img2={item.images[1]}/>  
              )
              })
            }
          </div>
        </div>
      </MainLayOut>
    </>
  );
}

export default HeadingList;
