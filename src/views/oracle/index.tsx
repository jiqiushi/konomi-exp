import { ReactElement } from 'react'
import CoinCard from '../../components/CoinCard'
import './index.scss'

export default (): ReactElement => {

  return (
    <div className='oracle-waper'>
      {/* title */}
      <div className="oracle-waper_icon">
        Oracle
      </div>

      {/* content  */}
      <div className="oracle-waper_content">
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
        <CoinCard/>
      </div>
     
    </div>
  )
}
