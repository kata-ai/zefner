import HitReport from "../data/HitReport";
import Request from '../data/Request';

/**
 * Base class that will receive hit report from Zefner and tell you.
 */
export default abstract class Commander<T extends Request> {
    /**
     * Called when the sword hit the target.
     * @param {HitReport<T extends Request>} data
     */
    abstract onHit(data: HitReport<T>);

    /**
     * Called when the sword was unable to hit the target.
     * @param {HitReport<T extends Request>} data
     */
    abstract onFail(data: HitReport<T>);

    /**
     * Called before the first sword hit.
     */
    abstract onStart();

    /**
     * Called after all sword hit has been done.
     */
    abstract onEnd();
}