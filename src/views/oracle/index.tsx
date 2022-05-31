import { ReactElement, useState, useEffect } from 'react'
import { IBaseData } from '../../api/modules/oracle/IBaseData'
import { oracleApi } from '../../api'
import CoinCard from '../../components/CoinCard'
import CoinSkeleton from '../../components/CoinSkeleton'

import './index.scss'

export default (): ReactElement => {

    const [subscription, setSubscription] = useState<IBaseData[]>([])

    const [loading, setLoading] = useState(false);

    // current checked id
    const [currentId, setCurrentId] = useState<number>(0)

    useEffect(() => {
        setLoading(true)
        oracleApi.getCoinData().then(res => {
            setLoading(false)
            setSubscription(res)
        })
    }, [])

    return (
        <div className='oracle-waper'>
            <div className="oracle-waper_icon">  Oracle  </div>

            <div className="oracle-waper_content">
                {
                    loading
                        ? [1, 2, 3, 4, 5, 6, 7, 8].map((initItem, initIndex) => <CoinSkeleton key={initIndex} />)
                        : subscription.map((subItem, index) => <CoinCard key={index} subscription={subItem} currentId={currentId} setCurrentId={setCurrentId} />)
                }
            </div>
        </div>
    )
}
