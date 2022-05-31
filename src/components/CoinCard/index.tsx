import { ReactElement } from 'react'
import { IBaseData } from '../../api/modules/oracle/IBaseData'
import { useCoin } from './useCoin'

import './index.scss'

interface CardProps {
    subscription: IBaseData
    currentId: number
    setCurrentId: (id: number) => void
}

export default ({ subscription, currentId, setCurrentId }: CardProps): ReactElement => {

    //useCoin Hooks
    const { coinState, cardStatus, expiryDate } = useCoin(subscription)

    const { coinLogo, coinPrice } = coinState

    /**handle card */
    const handleSetCurrentId = () => setCurrentId(currentId === subscription.id ? -1 : subscription.id)

    return (
        <div className={`card ${currentId === subscription.id ? 'hover' : ''}`} onClick={handleSetCurrentId}>
            <div className="label-name">  {subscription.symbol.toUpperCase()} </div>
            <div className={`coin-status ${cardStatus}`}>
                <div className="coin-status_circle" />
                {cardStatus}
            </div>
            <div className="card_logo">
                <img src={coinLogo} alt="" />
            </div>
            <div className="price-text"> {coinPrice} </div>
            <div className="expiry-date"> {expiryDate()} </div>
        </div>
    )
}