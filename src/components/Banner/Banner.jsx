import styles from "./styles.module.scss";
function Banner() {
  const { container, content, title, containerBg, text,boxButton,button } = styles;
  return (
    <>
      <div className={containerBg}>
        <div className={container}>
          <div className={content}>
            <h1 className={title}>XStore Marseille04 Demo</h1>
            <div className={text}>
              Make yours celebrations even more special this years with
              beautiful
            </div>
            <div className={boxButton}>
              <a className={button} href="">
                <span>Go to shop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
