import Request from './Request';

/**
 * HTTP Request.
 */
export default interface HttpRequest extends Request {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}