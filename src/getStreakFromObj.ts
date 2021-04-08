// TODO: implementing
function getStreakFromObj(datetimes: DateTimesObj, pivotTime: string): StreakObj {
    let currentDailyStreak = 0;
    let currentWeeklyStreak = 0;
    let longestDailyStreak = 0;
    let longestWeeklyStreak = 0;
    const activityDates: { [key: string]: number } = {};

    return {
        currentDailyStreak,
        currentWeeklyStreak,
        longestDailyStreak,
        longestWeeklyStreak,
        activityDates,
    };
}

export default getStreakFromObj;
