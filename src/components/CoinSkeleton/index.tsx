import { ReactElement, memo } from 'react'

import './index.scss'

export default memo((): ReactElement => {
    return (
        <div className='skeleton-card'>
            <div className="label-name skeleton" />
            <div className='coin-status skeleton' />
            <div className="card_logo skeleton" />
            <div className="price-text skeleton" />
            <div className="expiry-date skeleton" />
        </div>
    )
})
