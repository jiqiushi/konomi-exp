import ajax from '../../ajax'

/**
 *transfer
 *
 * @param {string} address
 * @param {string} amount
 */
const setAmount = (address: string, amount: string) => ajax(`【${amount} transaction ${address}】`, 0)

export default {
    setAmount
}