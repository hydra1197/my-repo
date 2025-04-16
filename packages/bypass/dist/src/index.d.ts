declare class Bypass {
    private url;
    private key;
    constructor();
    request<T>(url: string): Promise<T>;
}
export default Bypass;
