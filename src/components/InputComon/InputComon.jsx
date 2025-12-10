import styles from './styles.module.scss'
import eyeIcon from '../../assets/imgs/svgs/eyeIcon.svg'
import eyecloseIcon from '../../assets/imgs/svgs/eyeCloseIcon.svg'
import { use, useState } from 'react'
function InputComon({label, type, index}) {
    const {title,boxInput,input,checkpass} = styles
    const [checkPass,setcheckPass] = useState(true)

    
    console.log(checkPass)

    const handleCheckPass = () => {
        setcheckPass(!checkPass)
    }
    const typePass = type === "password" && checkPass ? "text" : type
    console.log(typePass)
    return ( <>
        <div className={boxInput}>
            <label className={title} htmlFor="">
                {label}
                {index? <span> *</span>: ""}
            </label>
            <input className={input} type={typePass} />
            {type === 'password' ? <img onClick={() => {
                handleCheckPass()
            }} className={checkpass} src={checkPass ? eyecloseIcon : eyeIcon} /> : ''}
        </div>
    </> );
}

export default InputComon;