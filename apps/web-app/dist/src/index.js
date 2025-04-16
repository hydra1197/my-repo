"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bypass_1 = __importDefault(require("@my-org/bypass"));
const dayjs_1 = __importDefault(require("@my-org/dayjs"));
const logger_1 = __importDefault(require("@my-org/logger"));
const bypass = new bypass_1.default();
const dayjs = new dayjs_1.default();
const logger = new logger_1.default("BSC", "ahihi");
bypass.request("https://gmgn.ai").then((res) => console.log(res));
logger.log("TEST msg", 'error');
const d = dayjs.load();
// @ts-ignore
console.log(d(1744735101229).fromNow());
