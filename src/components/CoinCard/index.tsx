import { ReactElement } from 'react'
import coinLogo from './../../assets/images/coin-logo.svg'
import './index.scss'

export default (): ReactElement => {
  
    return (
        <div className={'card'} >
            {/* coin name */}
            <div className="card-name">  BLA </div>

            {/* status */}
            <div className={`card-status Active`}>
                <div className="card-status-circle" />
               Active
            </div>

            {/* coin logo */}
            <div className="card-logo"> <img src={coinLogo} alt="" /> </div>

            {/* coin price */}
            <div className="card-price">  $ 3,412,025.12 </div>

            {/* expiry date */}
            <div className="card-expiry">  End: 08/Sept/2022 16:00   </div>
        </div>
    )
}