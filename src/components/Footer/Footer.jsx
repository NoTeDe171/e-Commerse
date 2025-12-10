import styles from './styles.module.scss'
import {dataFooter} from './constant'
import Logo from '../../assets/imgs/img/Logo-retina.webp'
import LogoCard from '../../assets/imgs/img/Icons-Footer-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.webp'
function Footer() {
    const {container,logo,boxMenu,Menu,text,cardLogo,textLink} = styles
    return ( 
        <div className={container}>
            <img className={logo} src={Logo} alt="" />
            <div className={boxMenu}>
                <ul className={Menu}>
                    {
                        dataFooter.map((item,index) => {
                            return (
                                <li key={index}>
                                    <a href="">{item.content}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={text}>Guaranteed safe ckeckout</div>
            <a className={cardLogo} href="">
                <img src={LogoCard} alt="" />
            </a>

            <a className={textLink} href="">
                <span>
                    Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.
                </span>
            </a>

        </div>
     );
}

export default Footer;