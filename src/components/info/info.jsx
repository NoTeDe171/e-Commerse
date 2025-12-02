import MainLayOut from '../Layout/Layout'
import {dataInfo} from './constants'
import InfoCard from './InfoCard/InfoCard'
import styles from './styles.module.scss'

function info() {
  const {container} = styles;

    return (
        <>
          <MainLayOut>
            <div className={container}>
              {dataInfo.map((item,index) => {
                return(
                 
                  <div key = {index}>
                    <InfoCard type={item.type} src={item.src} description={item.description}/>
                  </div>
             
                )
              })}
            </div>

          </MainLayOut>
        </>
      );
}

export default info;