# datetime-streak
![Generic badge](https://img.shields.io/badge/</>-typescript-blue.svg)
![Generic badge](https://img.shields.io/badge/version-0.0.1-green.svg)

A package to find streak from dates and times.

```javascript
import { getStreak } from "datetime-streak";

// today: 2021-04-08
const dates = [
    new Date(2021, 3, 6, 13, 40, 20), // 2021-04-06
    "2021-04-07T06:40:20.000Z",       // 2021-04-07
    1617888567772,                    // 2021-04-08
    new Date(2021, 3, 8, 12, 00, 20), // 2021-04-08
]; // it also accepts unsorted dates.

const streak = getStreak(dates, "03:00:00");
```

Returns:
```javascript
// streak
{
  currentDailyStreak: 3,
  currentWeeklyStreak: 1,
  longestDailyStreak: 3,
  longestWeeklyStreak: 1,
  activityDates: { '2021-04-08': 2, '2021-04-07': 1, '2021-04-06': 1 }
}
```

## Installation

```javascript
// with npm:
npm install datetime-streak

// or with yarn:
yarn add datetime-streak
```
