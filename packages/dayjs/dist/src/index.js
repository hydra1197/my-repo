"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
const updateLocale_1 = __importDefault(require("dayjs/plugin/updateLocale"));
class Dayjs {
    load() {
        dayjs_1.default.extend(relativeTime_1.default);
        dayjs_1.default.extend(updateLocale_1.default);
        dayjs_1.default.updateLocale('en', {
            relativeTime: {
                future: '%s',
                past: '%s',
                s: '%ds',
                m: '1m',
                mm: '%dm',
                h: '1h',
                hh: '%dh',
                d: '1d',
                dd: '%dd',
                M: '1M',
                MM: '%dM',
                y: '1y',
                yy: '%dy',
            },
        });
        return dayjs_1.default;
    }
}
exports.default = Dayjs;
