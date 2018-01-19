"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commander_1 = require("./Commander");
class AxiosLogCommander extends Commander_1.default {
    onHit(data) {
        console.log(`${data.iteration} ${data.request.method} Hit ${data.request.endpoint} - ${data.damage}ms : ${data.payload.length}`);
        this.logs.push(data);
    }
    onFail(data) {
        console.error(`${data.request.method} Attack at ${data.request.endpoint} missed`);
        // We don't log failed attack into consideration
    }
    onStart() {
        console.log('Charge!');
        // Prepare the log for receiving array
        this.logs = [];
    }
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
            return prev + cur.damage;
        }, 0) / this.logs.length;
        // Add empty line for aesthetic purpose
        console.log();
        console.log(`Highest Damage: ${highest.iteration} ${highest.request.method} Hit ${highest.request.endpoint} - ${highest.damage}ms : ${highest.payload.length}`);
        console.log(`Lowest Damage: ${lowest.iteration} ${lowest.request.method} Hit ${lowest.request.endpoint} - ${lowest.damage}ms : ${lowest.payload.length}`);
        console.log(`Average Damage: ${average}`);
    }
}
exports.default = AxiosLogCommander;
