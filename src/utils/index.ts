export default class Utils {
    /**
     *random id
     *
     * @param {number} [n=10]
     * @return {*}  {number}
     * @memberof Utils
     */
    static randomID(n: number = 10): number {
        return Math.floor(Math.random() * Math.pow(10, n)) + Date.now()
    }

    /**
     *formatDate
     *
     * @param {number} millineSeconds
     * @return {*}  {string}
     * @memberof Utils
     */
    static formatDate(millineSeconds: number): string {
        const currDate = new Date(millineSeconds)
        const monthEnglish = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"]

        const year = currDate.getFullYear()
        const month = monthEnglish[currDate.getMonth()]
        const date = currDate.getDate()
        const hours = getZero(currDate.getHours())
        const minutes = getZero(currDate.getMinutes())

        return `${date}/${month}/${year} ${hours}:${minutes}`
    }


    /**
     *sleep
     *
     * @static
     * @param {number} ms
     * @return {*} 
     * @memberof Utils
     */
    static sleep(ms: number): any {
        return new Promise<void>((rel) => {
            setTimeout(() => {
                rel();
            }, ms);
        });
    }

}

/**
 *Supplement zero
 *
 * @param {*} num
 * @return {*}  {string}
 */
function getZero(num: any): string {
    return parseInt(num) < 10 ? `0${num}` : num
}
