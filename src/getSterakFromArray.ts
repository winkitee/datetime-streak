import { DAY_TIME } from "./lib/config";
import convertToDate from "./lib/convertToDate";
import getPivotDate from "./lib/getPivotDate";
import getLastWeeklyRange from "./lib/getLastWeeklyRange";
import isIncludeDate from "./lib/isIncludeDate";
import toDateString from "./lib/toDateString";

function getStreakFromArray(datetimes: DateTimesArray, pivotTime: string): StreakObj {
    let currentDailyStreak = 0;
    let currentWeeklyStreak = 0;
    let longestDailyStreak = 0;
    let longestWeeklyStreak = 0;
    const activityDates: { [key: string]: number } = {};

    if (datetimes.length == 0) {
        return {
            currentDailyStreak,
            currentWeeklyStreak,
            longestDailyStreak,
            longestWeeklyStreak,
            activityDates,
        };
    }

    const sortedDateTimes = datetimes
        .map((datetime) => convertToDate(datetime))
        .sort((a, b) => b.getTime() - a.getTime());

    let isLastStreak = true;
    let isLastWeeklyStreak = true;
    let streak = 0;
    let weeklyStreak = 1;
    let currentPivotDate = getPivotDate(new Date(), pivotTime);
    let nextPivotDate = new Date(currentPivotDate.getTime() - DAY_TIME);
    let currentDateString = toDateString(nextPivotDate);
    let [startWDate, endWDate] = getLastWeeklyRange(nextPivotDate);

    for (let date of sortedDateTimes) {
        if (date.getTime() < nextPivotDate.getTime()) {
            streak = 0;
            currentPivotDate = getPivotDate(date, pivotTime);
            nextPivotDate = new Date(currentPivotDate.getTime() - DAY_TIME);
            if (isLastStreak) isLastStreak = false;
        }

        if (date.getTime() < startWDate.getTime()) {
            [startWDate, endWDate] = getLastWeeklyRange(date);
            weeklyStreak = 1;
            if (isLastWeeklyStreak) isLastWeeklyStreak = false;
        }

        if (date.getTime() < currentPivotDate.getTime()) {
            currentDateString = toDateString(nextPivotDate);
            if (isIncludeDate(date, startWDate, endWDate)) {
                [startWDate, endWDate] = getLastWeeklyRange(nextPivotDate);
                weeklyStreak += 1;
                if (isLastWeeklyStreak) currentWeeklyStreak = weeklyStreak;
            }

            activityDates[currentDateString] = 0;
            streak += 1;
            currentPivotDate = nextPivotDate;
            nextPivotDate = new Date(currentPivotDate.getTime() - DAY_TIME);
            if (isLastStreak) {
                currentDailyStreak = streak;
                currentWeeklyStreak = 1;
            }
        }

        if (currentDateString in activityDates) {
            activityDates[currentDateString] += 1;
        }

        longestDailyStreak = Math.max(streak, longestDailyStreak);
        longestWeeklyStreak = Math.max(weeklyStreak, longestWeeklyStreak);
    }

    return {
        currentDailyStreak,
        currentWeeklyStreak,
        longestDailyStreak,
        longestWeeklyStreak,
        activityDates,
    };
}

export default getStreakFromArray;
