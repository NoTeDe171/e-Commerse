import styles from './styles.module.scss'
function Menu({content,href}) {
    const {menuContent, menuLi,menu} = styles
    
    return (  
        <>
        <li className={`${menuLi} `}><a className={`${menuContent} ${menu}`}  href={href}>{content}</a></li>
        </>
    );
}

export default Menu;