import Request from './Request';

/**
 * Hit report that will be given to the Commander.
 */
export default interface HitReport<T extends Request> {
    /**
     * The original request.
     */
    request: T;
    /**
     * On which iteration is the report for?
     */
    iteration: number;
    /**
     * Before the hit occurs.
     */
    start: Date;
    /**
     * After the hit occurs.
     */
    end: Date;
    /**
     * Contains the response from the endpoint.
     */
    payload: string;
    /**
     * Simply an end - start in milliseconds.
     */
    damage: number;
}