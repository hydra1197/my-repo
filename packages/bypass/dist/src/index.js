"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Bypass {
    constructor() {
        this.url = 'http://tcsolver.duckdns.org/scraps';
        this.key = '55c17e8c-6006-49a4-893e-31618a733cee';
    }
    async request(url) {
        try {
            const res = await axios_1.default.post(this.url, {
                url,
                key: this.key,
            });
            return res.data;
        }
        catch (error) {
            console.error('⚠️ Bypass request error:', error);
            throw error;
        }
    }
}
exports.default = Bypass;
