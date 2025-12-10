import styles from './styles.module.scss'
function Menu({content,href, setisOpen, isOpen, trigger}) {
    const {menuContent, menuLi,menu} = styles

    const handleTogle = () => {
        if(trigger){
            setisOpen(!isOpen)
        }
    }
    
    return (  
        <>
        <li className={`${menuLi} `} onClick={()=> {handleTogle()}}><a className={`${menuContent} ${menu}`}  href={href}>{content}</a></li>
        </>
    );
}

export default Menu;