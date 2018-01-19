import HitReport from "../data/HitReport";
import Request from '../data/Request';

/**
 * Base class for Sword that is used to hit the target.
 */
export default abstract class Sword<T extends Request> {
    /**
     * Hit the target, this is where you implement something that hit the server (e.g HTTP request).
     * @param {number} iteration is the current iteration that this hit is excuted (passed by Zefner itself)
     * @param {T} request The request object
     * @returns {Promise<HitReport<T extends Request>>} A promise that resolve and reject with a report.
     */
    abstract hit(iteration: number, request: T): Promise<HitReport<T>>;
}