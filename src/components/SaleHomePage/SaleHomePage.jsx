import styles from "./styles.module.scss";
import Image1 from '../../assets/imgs/img/ImageSaleHome_1.webp'
import Image2 from '../../assets/imgs/img/ImageSaleHome_2.webp'
import { useEffect, useRef, useState } from "react";
function SaleHomePage() {
  const { container,boxImage1,boxImage2,boxContent,title,text,button } = styles;
  const [scrollDerection, setScrollDerection] = useState(null);
  const [valuePosition, setvaluePosition] = useState(0)
  const [TranSlateX, setTranSlateX] = useState(30)

  const previousScroll = useRef(0);

  const HandleScroll = () => {
    const currentScroll = window.pageYOffset;
   
    if (currentScroll > previousScroll.current) {
     setScrollDerection('Down');
    } else if (currentScroll < previousScroll.current ){
        setScrollDerection('Up')
    }
    
    previousScroll.current = currentScroll < 0 ? 0 : currentScroll;
    setvaluePosition(currentScroll)
  }
  
  
  const setTranslate = () => {
    if(scrollDerection === 'Down' && valuePosition >= 2100){
        setTranSlateX(TranSlateX < 30 ? 30 : 120)
    } else if(scrollDerection === 'Up'){
        setTranSlateX(TranSlateX > 120 ? 120 : 30)
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', HandleScroll)
    return () => {
        window.removeEventListener('scroll', HandleScroll)
    }
  }, [])

  useEffect(() => {
   setTranslate()

  },[valuePosition])

  return (
    <div className={container}>
      <div className={boxImage1}>
        <img style={{
            transform: `translateX(${TranSlateX}px)`,
             transition: `all ease-in-out 1s`,
        }} src={Image1} alt="" />
      </div>
      <div className={boxContent}>
        <h2 className={title}>Sale of the year</h2>
        <p className={text}>
            Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales</p>
        <a className={button} href="#">
            <span>Read more</span>
        </a>
      </div>
      <div className={boxImage2}>
        <img style={{
            transform: `translateX(-${TranSlateX}px)`,
             transition: `all ease-in-out 1s`,
        }}  src={Image2} alt="" />
      </div>
    </div>
  );
}

export default SaleHomePage;
