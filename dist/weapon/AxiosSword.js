"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Sword_1 = require("./Sword");
class AxiosSword extends Sword_1.default {
    hit(iteration, request) {
        if (request.method === 'GET') {
            return new Promise((resolve, reject) => {
                let start = new Date();
                axios_1.default.get(request.endpoint).then(res => {
                    let end = new Date();
                    // Somehow, the damage is sometime negative (but how is it even possible?)
                    // In case of that, swap the start and end date.
                    if (end < start) {
                        let temp = end;
                        end = start;
                        start = temp;
                    }
                    resolve({
                        request,
                        damage: end.getMilliseconds() - start.getMilliseconds(),
                        end,
                        start,
                        iteration,
                        payload: res.data.toString()
                    });
                }).catch(() => {
                    const end = new Date();
                    reject({
                        request,
                        damage: 0,
                        end,
                        start,
                        iteration,
                        payload: ''
                    });
                });
            });
        }
        throw new Error('Method not supported.');
    }
}
exports.default = AxiosSword;
