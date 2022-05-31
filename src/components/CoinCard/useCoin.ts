
/**
 * coin hooks 
 */
import { useEffect, useReducer } from 'react'
import { IBaseData } from '../../api/modules/oracle/IBaseData'
import { oracleApi } from '../../api'
import Utils from '../../utils'
import { coinStatus } from '../../enums/coinStatus'

type ICoinStateType = {
    coinLogo: string,
    coinPrice: string,
}

type actionType = {
    type: string
    result: string
}

//coin Reducer
const coinReducer = (coinState: ICoinStateType, action: actionType): ICoinStateType => {
    return { ...coinState, [action.type]: action.result }
}

export function useCoin(subscription: IBaseData) {

    const [coinState, dispatch] = useReducer(coinReducer, { coinLogo: '', coinPrice: '' } as ICoinStateType)

    const { coinLogo, coinPrice } = coinState

    useEffect(() => {
        // get coin logo    
        oracleApi.getCoinLogo(subscription.id).then((result) => dispatch({ type: 'coinLogo', result }))
    }, [subscription.id, coinLogo])

    useEffect(() => {
        // get coin price
        oracleApi.getCoinPrice(subscription.id).then(result => dispatch({ type: 'coinPrice', result }))

    }, [subscription.id, coinPrice])

    // set status
    const cardStatus = subscription.status === coinStatus.active
        ? 'Active'
        : subscription.status === coinStatus.suspended
            ? 'Suspended'
            : 'Terminated'

    // get expiry-date date
    const expiryDate = () => {
        //exp:  estimate expiry-date date = ${createdTimestamp} + 3s * (${leaseEnd} - ${blockNumber})
        const expiryDate = subscription.createdTimestamp + 3000 * (subscription.leaseEnd + subscription.blockNumber)
        return `End: ${Utils.formatDate(expiryDate)}`
    }

    return { coinState, cardStatus, expiryDate }
}

