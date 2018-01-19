import Axios from "axios";
import Sword from "./Sword";
import HttpRequest from "../data/HttpRequest";
import HitReport from "../data/HitReport";

/**
 * Sword that wraps the Axios library for HTTP request.
 */
export default class AxiosSword extends Sword<HttpRequest> {
    hit(iteration: number, request: HttpRequest): Promise<HitReport<HttpRequest>> {
        if (request.method === 'GET') {
            return new Promise<HitReport<HttpRequest>>((resolve, reject) => {
                let start = new Date();
                Axios.get(request.endpoint).then(res => {
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
            })
        }
        throw new Error('Method not supported.');
    }

}