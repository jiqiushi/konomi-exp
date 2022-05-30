import { ReactElement } from 'react'
import { Link } from "react-router-dom"
import './index.scss'

export default (): ReactElement => {
    return (
        <ul className='menu_ul'>
            <li>
                <Link to="/transfer" style={{ color: '#fff' }}>TransferPage</Link>
            </li>
            <li>
                <Link to="/oracle" style={{ color: '#fff' }}>OraclePage</Link>
            </li>
        </ul>
    )
}
