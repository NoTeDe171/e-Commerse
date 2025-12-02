import styles from "./styles.module.scss";
import MainLayOut from "../Layout/Layout";
import TimeCountDown from "./TimeCountDown/TimeCountDown";
function HeadingList() {
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
            <div> box 1</div>
            <div> box 2</div>
          </div>
        </div>
      </MainLayOut>
    </>
  );
}

export default HeadingList;
