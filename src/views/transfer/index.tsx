import { ReactElement, useReducer } from 'react'
import { transferApi } from '../../api'

import './index.scss'

type TransferStateType = {
    address: string,
    amount: string,
}

type actionType = {
    type: string
    value: string
}

const transferReducer = (transferState: TransferStateType, action: actionType) => {
    return { ...transferState, [action.type]: action.value }
}

export default (): ReactElement => {

    const [transferState, dispatch] = useReducer(transferReducer, { address: '', amount: '' } as TransferStateType)

    const { address, amount } = transferState

    //reset data
    const resetData = () => {
        dispatch({ type: 'address', value: '' })
        dispatch({ type: 'amount', value: '' })
    }

    //submit
    const handleSubmit = () => {

        if (!address) {
            alert('Please enter the address')
            return
        }

        if (!amount) {
            alert('Please enter the amount')
            return
        }

        // multiple addresses split string
        const addresses = address.split(',')

        const promises = addresses.map(address => transferApi.setAmount(address, amount))

        Promise.all(promises).then(values => {
            alert(values.toString())
            resetData()
        })
    }

    return (
        <div className='transfer-waper'>
            <h1>Transfer</h1>
            <h4>Transfer your Token here</h4>
            <p>Address</p>
            <input type="text" placeholder='Recipient Address' value={address} onChange={(e) => dispatch({ type: 'address', value: e.target.value })} />
            <p>Token Amount</p>
            <input type="number" placeholder='Amount' value={amount} onChange={(e) => dispatch({ type: 'amount', value: e.target.value })} />
            <p className='remark'>Make sure you have IYO token.</p>
            <button onClick={handleSubmit}>Transfer</button>
        </div>
    )
}
