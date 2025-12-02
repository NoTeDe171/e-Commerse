import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import Logo from "../../assets/imgs/img/Logo-retina.webp";
import loadIcon from "../../assets/imgs/svgs/reloadIcon.svg";
import heartIcon from "../../assets/imgs/svgs/heart.svg";
import shopIcon from "../../assets/imgs/svgs/shopIcon.svg";

function Header() {
  const {
    boxIcon,
    box,
    boxLeft,
    boxMenu,
    header,
    menuLogo,
    boxRight,
    menuLogo__Logo,
    boxLogo,
    boxIconRight,
    container,
  } = styles;

  return (
    <>
      <div className={container}>
        <div className={header}>
          <div className={boxLeft}>
            <div className={box}>
              {dataBoxIcon.map((item, index) => {
                return (
                  <div className={boxIcon} key={index}>
                    <BoxIcon type={item.type} href={item.href} />
                  </div>
                );
              })}
            </div>
            <div>
              <ul className={boxMenu}>
                {dataMenu.slice(0, 3).map((item, index) => {
                  return (
                    <div key={index}>
                      <Menu content={item.content} href={item.href} />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={boxLogo}>
            <a className={menuLogo} href="#">
              <img className={menuLogo__Logo} src={Logo} alt="logo" />
            </a>
          </div>
          <div className={boxRight}>
            <div>
              <ul className={boxMenu}>
                {dataMenu.slice(3, dataMenu.length).map((item, index) => {
                  return (
                    <div key={index}>
                      <Menu content={item.content} href={item.href} />
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className={boxIconRight}>
              <a href="#">
                <img width={"21px"} src={loadIcon} alt="reload" />
              </a>
              <a href="#">
                <img width={"21px"} src={heartIcon} alt="heart" />
              </a>
              <a href="#">
                <img width={"21px"} src={shopIcon} alt="shop" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
