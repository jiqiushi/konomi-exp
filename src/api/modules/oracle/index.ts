import ajax from '../../ajax'
import Utils from '../../../utils'
import { IBaseData } from './IBaseData'
import coinLogoSvg from '../../../assets/images/coin-logo.svg'

const base: IBaseData = {
    "id": 71,
    "blockNumber": 12297450,
    "transactionIndex": 6,
    "sources": [
        0,
        1,
        2,
        3
    ],
    "symbol": "eth",
    "slug": "ethereum",
    "leaseEnd": 12499050,
    "subscriptionId": 7,
    "networkId": 0,
    "aggregationStrategy": 1,
    "reportingStrategy": 0,
    "status": 1,
    "client": {
        "clientType": 0,
        "connectionInfo": {
            "contractAddress": "0x0F9dfd6043965B02e74D01188c13936fBE71D688",
            "networkId": 0
        }
    },
    "createdTimestamp": Date.now(),
    "updatedTimestamp": Date.now(),
    "display": true
}

/**
 * create random Integrate
 * @returns 
 */
const initBase = (): IBaseData => {
    const currentData = Object.assign({}, base, {
        id: Utils.randomID(),
        status: Math.floor(Math.random() * (3 - 1 + 1) + 1),
        createdTimestamp: Utils.randomID(),
        updatedTimestamp: Utils.randomID(),
    })
    return currentData
}

/**
 * get coin data
 */
const getCoinData = (): Promise<IBaseData[]> => {
    const result: IBaseData[] = []
    for (let i = 0; i < 8; i++) {
        result.push(initBase())
    }
    return ajax(result, 3000)
}


/**get coin logo */
const getCoinLogo = (id: number): Promise<string> => ajax(coinLogoSvg, 0)

/**get coin price */
const getCoinPrice = (id: number): Promise<string> => ajax('$ 3,412,025.12', 0)


export default { getCoinData, getCoinLogo, getCoinPrice }