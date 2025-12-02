import fbIcon from "../../../assets/imgs/svgs/fbIcon.svg";
import itgIcon from "../../../assets/imgs/svgs/itgIcon.svg";
import ytIcon from "../../../assets/imgs/svgs/ytIcon.svg";
import styles from "./styles.module.scss";
function BoxIcon({ type, href }) {
  const { iconImg, icon } = styles;
  const renderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "itg":
        return itgIcon;
      case "yt":
        return ytIcon;
      default:
        return "loi khong nhan duoc icon";
    }
  };
  return (
    <>
      <a className={iconImg}>
        <img className={icon} src={renderIcon(type)} alt={type} />
      </a>
    </>
  );
}

export default BoxIcon;
