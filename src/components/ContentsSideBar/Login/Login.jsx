import InputComon from '../../InputComon/InputComon'
import styles from './styles.module.scss'
function Login() {
    const {title,line,check,checkText,button,textBottom} = styles
    return ( <>
    <div>
        <a className={title} href="">
            <span className={line}>SING IN</span>
        </a>
        <InputComon label={'Username or email'} type={'text'} index={true}/>
        <InputComon label={'Password'} type={'password'} index={true}/>

        <div className={check}>
            <input type="checkbox" />
            <p className={checkText}>Remember me</p>
        </div>

        <a className={button} href="">
            <span>LOGIN</span>
        </a>

        <a className={textBottom} href="">
            <p>Lost your password?</p>
        </a>

    </div>
    </> );
}

export default Login;