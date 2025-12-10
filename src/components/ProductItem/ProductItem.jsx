import styles from "./styles.module.scss";
import boxIcon from '../../assets/imgs/svgs/boxIcon.svg';
import heartIcon from '../../assets/imgs/svgs/heart.svg';
import reloadIcon from '../../assets/imgs/svgs/reloadIcon.svg';
import eyeIcon from '../../assets/imgs/svgs/eyeIcon.svg'

function ProductItem({name,price, img1,img2}) {
  const { product, boxImage, boxTitle, active, boxInner } = styles;
  return (
    <div className={product}>
      <a className={boxImage}>
        <img src={img1} alt="" />
        <img className={active} src={img2} alt="" />
        <div className={boxInner}>
        <a href="#">
          <img src={boxIcon} alt="" />
        </a>
        <a href="#">
          <img src={heartIcon} alt="" />
        </a>
        <a href="#">
          <img src={reloadIcon} alt="" />
        </a>
        <a href="#">
          <img src={eyeIcon} alt="" />
        </a>
      </div>
      </a>
      <div className={boxTitle}>
        <h2>
          <a href="">{name}</a>
        </h2>
        <span>{`$${price}`}</span>
      </div>
    </div>
  );
}

export default ProductItem;
