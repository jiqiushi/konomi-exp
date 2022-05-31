import Utils from "../../utils"

const defaultTimeout = 2000
export default (response: any, timeout = defaultTimeout): Promise<any> => new Promise(async (resolve) => {
    await Utils.sleep(timeout)
    resolve(response)
})
