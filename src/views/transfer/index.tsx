import { ReactElement } from 'react'
import './index.scss'

export default (): ReactElement => {

    const state = {
        address: '',
        amount: ''
    }

    //submit
    const handleSubmit = () => { }

    return (
        <div className='transfer-waper'>
            <h1>Transfer</h1>
            <h4>Transfer your Token here</h4>
            <p>Address</p>
            <input type="text" placeholder='Recipient Address' value={state.address} onChange={(e) => e.target.value} />
            <p>Token Amount</p>
            <input type="number" placeholder='Amount' value={state.amount} onChange={(e) => e.target.value} />
            <p className='remark'>Make sure you have IYO token.</p>
            <button onClick={handleSubmit}>Transfer</button>
        </div>
    )
}
