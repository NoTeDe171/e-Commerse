import style from './style.module.scss'
function MainLayOut({children}) {
    const {wraplayout, container} = style;
    return ( 
        <div className={wraplayout}>
            <div className={container}>{children}</div>
        </div>
     );
}

export default MainLayOut;