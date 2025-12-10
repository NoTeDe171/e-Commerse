import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "../../contexts/SideBar";
import closeIcon from "../../assets/imgs/svgs/closeIcon.svg";
import Login from "../ContentsSideBar/Login/Login";
function SideBar() {
  const { container, overlay, sidebar, show, closeside, showClose } = styles;
  const { isOpen, setisOpen } = useContext(SideBarContext);

  const handleTogle = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        onClick={() => {
          handleTogle();
        }}
        className={`${isOpen ? overlay : ""}`}
      ></div>
      <div className={`${sidebar} ${isOpen ? show : ""}`}>
        <Login/>
      </div>
      {isOpen ? (
        <img
          onClick={() => {
            handleTogle();
          }}
          className={`${closeside} ${isOpen ? showClose : ""}`}
          src={closeIcon}
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
