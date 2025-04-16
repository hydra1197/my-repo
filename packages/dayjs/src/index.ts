import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

class Dayjs {
  load(): typeof dayjs {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);

    dayjs.updateLocale('en', {
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

    return dayjs
  }
}

export default Dayjs;