/**
 * Base request object, it only contains endpoint.
 * In future, Zefner might be able to attack not only HTTP's endpoint.
 */
export default interface Request {
    endpoint: string;
}