import getStreakFromArray from "./getSterakFromArray";
// import getStreakFromObj from './getStreakFromObj';

/**
 *
 * @param datetimes Object or Array containing datetime.
 * @param pivotTime Start time of day. HH:mm:ss 00:00:00 - 23:59:59
 */
function getStreak(datetimes: DateTimes, pivotTime: string = "00:00:00"): StreakObj | null {
    checkTimeString(pivotTime);
    if (Array.isArray(datetimes)) {
        return getStreakFromArray(datetimes, pivotTime);
    }
    // else if (typeof datetimes === "object") {
    //     return getStreakFromObj(datetimes, pivotTime);
    // }
    return null;
}

function checkTimeString(time: string) {
    if (typeof time !== "string") {
        throw new Error("The argument must be a string.");
    }
    if (!/\d{2}:\d{2}:\d{2}/.test(time)) {
        throw new Error('The format is incorrect. It should be "00:00:00" - "23:59:59".');
    }
}

export default getStreak;
