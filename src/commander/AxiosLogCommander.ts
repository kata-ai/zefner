import Commander from "./Commander";
import HttpRequest from "../data/HttpRequest";
import HitReport from "../data/HitReport";

/**
 * To be paired with the AxiosSword, this is simply log the hit info to the console.
 */
export default class AxiosLogCommander extends Commander<HttpRequest> {

    /**
     * Used to calculate highest, lowest, and average report.
     */
    private logs: HitReport<HttpRequest>[];

    onHit(data: HitReport<HttpRequest>) {
        console.log(
            `${data.iteration} ${data.request.method} Hit ${data.request.endpoint} - ${data.damage}ms : ${data.payload.length}`
        )
        this.logs.push(data);
    }

    onFail(data: HitReport<HttpRequest>) {
        console.error(
            `${data.request.method} Attack at ${data.request.endpoint} missed`
        );
        // We don't log failed attack into consideration
    }

    onStart() {
        console.log('Charge!');
        // Prepare the log for receiving array
        this.logs = [];
    }

    /**
     * Here we report the highest, lowest, and average damage that Zefner dealt.
     */
    onEnd() {
        const highest = this.logs.reduce((prev, cur) => {
            if (cur.damage > prev.damage) {
                return cur;
            }
            return prev;
        });
        const lowest = this.logs.reduce((prev, cur) => {
            if (cur.damage < prev.damage) {
                return cur;
            }
            return prev;
        });
        const average = this.logs.reduce((prev, cur) => {
            return prev + cur.damage
        }, 0) / this.logs.length;
        // Add empty line for aesthetic purpose
        console.log();
        console.log(
            `Highest Damage: ${highest.iteration} ${highest.request.method} Hit ${highest.request.endpoint} - ${highest.damage}ms : ${highest.payload.length}`
        );
        console.log(
            `Lowest Damage: ${lowest.iteration} ${lowest.request.method} Hit ${lowest.request.endpoint} - ${lowest.damage}ms : ${lowest.payload.length}`
        );
        console.log(
            `Average Damage: ${average}ms`
        );
    }

}